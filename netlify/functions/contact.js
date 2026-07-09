/**
 * Contact form handler — receives JSON from the client interceptor
 * (src/components/AdpForms.tsx), validates it, and sends the email
 * through the SMTP2GO API.
 *
 * Required environment variables (Netlify dashboard → Site settings →
 * Environment variables; see ../../SMTP_SETUP.md):
 *   SMTP2GO_API_KEY          – SMTP2GO API key
 *   SMTP2GO_SENDER           – verified sender, e.g. "web@adpacc.sk"
 *   CONTACT_FORM_RECIPIENT   – where submissions go, e.g. "office@adpacc.sk"
 */

const SMTP2GO_ENDPOINT = "https://api.smtp2go.com/v3/email/send";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// --- Spam defences -----------------------------------------------------
// Honeypot: hidden field planted client-side; humans never fill it.
const HP_NAME = "adp_website";
// Time gate: a human needs at least a few seconds from page load to submit.
const MIN_FILL_MS = 3000;
// Rate limit: per-IP sliding window (in-memory — survives warm invocations,
// resets on cold start; fine as a basic brake for a small site).
const RATE_MAX = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // never grow unbounded
  return recent.length > RATE_MAX;
}

// Bots get a fake success so they don't learn what tripped them.
const FAKE_OK = { statusCode: 200, body: JSON.stringify({ success: true }) };

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  // Spam defences (silent):
  const ip =
    event.headers["x-nf-client-connection-ip"] ||
    (event.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    "unknown";
  if (rateLimited(ip)) {
    console.warn("rate-limited:", ip);
    return { statusCode: 429, body: JSON.stringify({ error: "Príliš veľa požiadaviek. Skúste to neskôr." }) };
  }
  if ((data[HP_NAME] || "").trim() !== "") {
    console.warn("honeypot tripped:", ip);
    return FAKE_OK;
  }
  const fillMs = Number(data.adp_ms);
  if (!Number.isFinite(fillMs) || fillMs < MIN_FILL_MS) {
    console.warn("time-gate tripped:", ip, data.adp_ms);
    return FAKE_OK;
  }

  // reCAPTCHA verification (if secret key configured):
  const { RECAPTCHA_SECRET_KEY } = process.env;
  if (RECAPTCHA_SECRET_KEY) {
    const token = data.recaptcha_token;
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

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const phone = (data.phone || "").trim();
  const mesto = (data.mesto || "").trim();
  const message = (data.message || "").trim();

  if (!name || !EMAIL_RE.test(email) || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Vyplňte prosím meno, platný e-mail a správu." }),
    };
  }

  const { SMTP2GO_API_KEY, SMTP2GO_SENDER, CONTACT_FORM_RECIPIENT } = process.env;
  if (!SMTP2GO_API_KEY || !SMTP2GO_SENDER || !CONTACT_FORM_RECIPIENT) {
    console.error("Missing SMTP2GO env vars");
    return { statusCode: 500, body: JSON.stringify({ error: "Server misconfigured" }) };
  }

  const lines = [
    `Meno:    ${name}`,
    `E-mail:  ${email}`,
    phone && `Telefón: ${phone}`,
    mesto && `Mesto:   ${mesto}`,
    "",
    "Správa:",
    message,
  ].filter(Boolean);

  const payload = {
    sender: SMTP2GO_SENDER,
    to: [CONTACT_FORM_RECIPIENT],
    subject: `Nový dopyt z adpacc.sk — ${name}`,
    text_body: lines.join("\n"),
    html_body:
      `<h2>Nový dopyt z adpacc.sk</h2>` +
      `<p><b>Meno:</b> ${esc(name)}<br/>` +
      `<b>E-mail:</b> ${esc(email)}<br/>` +
      (phone ? `<b>Telefón:</b> ${esc(phone)}<br/>` : "") +
      (mesto ? `<b>Mesto:</b> ${esc(mesto)}<br/>` : "") +
      `</p><p style="white-space:pre-wrap">${esc(message)}</p>`,
    // Reply straight to the person who submitted the form.
    custom_headers: [{ header: "Reply-To", value: `${name} <${email}>` }],
  };

  try {
    const res = await fetch(SMTP2GO_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Smtp2go-Api-Key": SMTP2GO_API_KEY,
      },
      body: JSON.stringify(payload),
    });
    const out = await res.json();

    if (!res.ok || out?.data?.failed > 0) {
      console.error("SMTP2GO error:", JSON.stringify(out));
      return { statusCode: 502, body: JSON.stringify({ error: "E-mail sa nepodarilo odoslať." }) };
    }
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("SMTP2GO request failed:", err);
    return { statusCode: 502, body: JSON.stringify({ error: "E-mail sa nepodarilo odoslať." }) };
  }
};
