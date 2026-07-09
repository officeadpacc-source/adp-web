/**
 * Quote-request (cenová ponuka) wizard handler — same SMTP2GO backend and
 * spam defences as contact.js, but formats the multi-step payload into a
 * structured email.
 *
 * Env vars: SMTP2GO_API_KEY, SMTP2GO_SENDER, CONTACT_FORM_RECIPIENT.
 */

const SMTP2GO_ENDPOINT = "https://api.smtp2go.com/v3/email/send";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const HP_NAME = "adp_website";
const MIN_FILL_MS = 5000; // a 3-step wizard takes longer than 5s for a human
const RATE_MAX = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_MAX;
}

const FAKE_OK = { statusCode: 200, body: JSON.stringify({ success: true }) };

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function row(label, value) {
  if (value === undefined || value === null || String(value).trim() === "") return "";
  return `<tr><td style="padding:6px 12px 6px 0;color:#666;white-space:nowrap">${esc(
    label
  )}</td><td style="padding:6px 0"><b>${esc(value)}</b></td></tr>`;
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let d;
  try {
    d = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const ip =
    event.headers["x-nf-client-connection-ip"] ||
    (event.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    "unknown";
  if (rateLimited(ip)) {
    return {
      statusCode: 429,
      body: JSON.stringify({ error: "Príliš veľa požiadaviek. Skúste to neskôr." }),
    };
  }
  if ((d[HP_NAME] || "").trim() !== "") return FAKE_OK;
  const fillMs = Number(d.adp_ms);
  if (!Number.isFinite(fillMs) || fillMs < MIN_FILL_MS) return FAKE_OK;

  // reCAPTCHA verification (if secret key configured):
  const { RECAPTCHA_SECRET_KEY } = process.env;
  if (RECAPTCHA_SECRET_KEY) {
    const token = d.recaptcha_token;
    if (!token) {
      console.warn("reCAPTCHA token missing:", ip);
      return { statusCode: 400, body: JSON.stringify({ error: "Chýba overenie reCAPTCHA." }) };
    }
    try {
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${encodeURIComponent(RECAPTCHA_SECRET_KEY)}&response=${encodeURIComponent(token)}`,
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success || verifyData.score < 0.5) {
        console.warn("reCAPTCHA failed:", ip, verifyData);
        return FAKE_OK; // Silent failure to prevent bots from learning
      }
    } catch (err) {
      console.error("reCAPTCHA verify error:", err);
      // Proceed on API error to avoid blocking legitimate users
    }
  }

  if (!(d.company || "").trim() || !EMAIL_RE.test((d.email || "").trim())) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Vyplňte prosím názov spoločnosti a platný e-mail." }),
    };
  }

  const { SMTP2GO_API_KEY, SMTP2GO_SENDER, CONTACT_FORM_RECIPIENT } = process.env;
  if (!SMTP2GO_API_KEY || !SMTP2GO_SENDER || !CONTACT_FORM_RECIPIENT) {
    console.error("Missing SMTP2GO env vars");
    return { statusCode: 500, body: JSON.stringify({ error: "Server misconfigured" }) };
  }

  const counts = d.counts || {};
  const html =
    `<h2>Žiadosť o cenovú ponuku — adpacc.sk</h2>` +
    `<h3>O spoločnosti</h3><table>` +
    row("Spoločnosť / SZČO", d.company) +
    row("Kontaktná osoba", d.person) +
    row("Telefón", d.phone) +
    row("E-mail", d.email) +
    row("Činnosť", d.business) +
    row("Ročný obrat", d.revenue) +
    `</table><h3>Účtovné agendy (počty dokladov)</h3><table>` +
    row("Referenčné obdobie", d.period) +
    row("Pokladňa", counts.pokladna) +
    row("Banka", counts.banka) +
    row("Interné doklady", counts.interne) +
    row("Vydané faktúry", counts.vydane) +
    row("Vydané zálohové faktúry", counts.vydaneZalohove) +
    row("Ostatné pohľadávky", counts.ostatnePohladavky) +
    row("Prijaté faktúry", counts.prijate) +
    row("Prijaté zálohové faktúry", counts.prijateZalohove) +
    row("Ostatné záväzky", counts.ostatneZavazky) +
    row("Zamestnanci (mes. priemer)", counts.zamestnanci) +
    row("Dlhodobý majetok (položky)", counts.majetok) +
    row("Úverové/leasingové zmluvy", counts.uvery) +
    `</table><h3>Doplňujúce informácie</h3><table>` +
    row("Účtovný softvér", d.software) +
    row("Záujem o mzdy/personalistiku", d.payroll) +
    row("Začiatok spolupráce", d.start) +
    row("Poznámka", d.note) +
    `</table>`;

  const payload = {
    sender: SMTP2GO_SENDER,
    to: [CONTACT_FORM_RECIPIENT],
    subject: `Žiadosť o cenovú ponuku — ${d.company}`,
    html_body: html,
    text_body: `Žiadosť o cenovú ponuku od ${d.company} (${d.email}, ${d.phone || "-"})`,
    custom_headers: [{ header: "Reply-To", value: `${d.person || d.company} <${d.email}>` }],
  };

  try {
    const res = await fetch(SMTP2GO_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Smtp2go-Api-Key": SMTP2GO_API_KEY },
      body: JSON.stringify(payload),
    });
    const out = await res.json();
    if (!res.ok || out?.data?.failed > 0) {
      console.error("SMTP2GO error:", JSON.stringify(out));
      return { statusCode: 502, body: JSON.stringify({ error: "Žiadosť sa nepodarilo odoslať." }) };
    }
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("SMTP2GO request failed:", err);
    return { statusCode: 502, body: JSON.stringify({ error: "Žiadosť sa nepodarilo odoslať." }) };
  }
};
