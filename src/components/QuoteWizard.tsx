"use client";

import { useEffect, useState } from "react";

/**
 * 3-step quote wizard — faithful rebuild of the origin's /cenova-ponuka form
 * (dark navy card, gold accents, 860px). Posts to the quote Netlify function;
 * success sets the conversion flag and redirects to /dakujeme.
 */

const ENDPOINT = "/.netlify/functions/quote";
const loadedAt = Date.now();

const REVENUES = ["do 50 000 €", "50 000 – 150 000 €", "150 000 – 500 000 €", "nad 500 000 €"];
const PAYROLL = ["Nie", "Áno", "Zatiaľ neviem"];
const START = ["Čo najskôr", "Do 1 mesiaca", "Do 3 mesiacov", "Len zisťujem cenu"];

const COUNT_GROUPS: { title: string; fields: [string, string][] }[] = [
  {
    title: "Pokladňa a banka",
    fields: [
      ["pokladna", "Pokladňa"],
      ["banka", "Banka"],
      ["interne", "Interné doklady"],
    ],
  },
  {
    title: "Pohľadávky",
    fields: [
      ["vydane", "Vydané faktúry"],
      ["vydaneZalohove", "Vydané zálohové faktúry"],
      ["ostatnePohladavky", "Ostatné pohľadávky"],
    ],
  },
  {
    title: "Záväzky",
    fields: [
      ["prijate", "Prijaté faktúry"],
      ["prijateZalohove", "Prijaté zálohové faktúry"],
      ["ostatneZavazky", "Ostatné záväzky"],
    ],
  },
  {
    title: "Zamestnanci a ostatné",
    fields: [
      ["zamestnanci", "Počet zamestnancov (mesačný priemer)"],
      ["majetok", "Dlhodobý hmotný majetok (nad 1 700 €) — počet položiek"],
      ["uvery", "Úverové / leasingové zmluvy — počet aktívnych"],
    ],
  },
];

const label = "block text-small font-semibold text-white/85";
const input =
  "mt-1.5 w-full rounded-lg border border-white/10 bg-[#1e2a3d] px-3.5 py-3 text-small text-white placeholder:text-[#8E9BAA] focus:border-sand-dark focus:outline-none";
const checkableItemClass = (checked: boolean) =>
  `flex cursor-pointer items-center justify-center rounded-full border px-5 py-2.5 text-[12px] font-bold uppercase transition ${
    checked
      ? "border-[#C0A88C] bg-[#C0A88C]/15 text-white"
      : "border-white/15 bg-transparent text-white/60 hover:border-white/30"
  }`;

export default function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Record<string, string>>({});
  const [counts, setCounts] = useState<Record<string, string>>({});

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (siteKey) {
      if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));
  const setCount = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setCounts((c) => ({ ...c, [k]: e.target.value }));

  const total = Object.entries(counts)
    .filter(([k]) => !["zamestnanci", "majetok", "uvery"].includes(k))
    .reduce((s, [, v]) => s + (parseInt(v) || 0), 0);

  const step1Valid = (data.company || "").trim() && /\S+@\S+\.\S+/.test(data.email || "");

  async function submit() {
    setBusy(true);
    setError(null);

    const payload: Record<string, any> = { ...data, counts, adp_ms: Date.now() - loadedAt };
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const w = window as any;
    if (siteKey && w.grecaptcha) {
      try {
        await new Promise<void>((resolve, reject) => {
          w.grecaptcha.ready(() => {
            w.grecaptcha
              .execute(siteKey, { action: "submit" })
              .then((token: string) => {
                payload.recaptcha_token = token;
                resolve();
              })
              .catch(reject);
          });
        });
      } catch (captchaErr) {
        console.warn("reCAPTCHA execution failed, proceeding without token:", captchaErr);
      }
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const out = await res.json().catch(() => ({}));
        throw new Error(out.error || "Žiadosť sa nepodarilo odoslať. Skúste to prosím znova.");
      }
      try {
        sessionStorage.setItem("adp_lead", "1");
      } catch {
        /* private mode */
      }
      window.location.assign("/dakujeme/");
    } catch (err) {
      setBusy(false);
      setError(err instanceof Error ? err.message : "Žiadosť sa nepodarilo odoslať.");
    }
  }

  return (
    <div className="mx-auto max-w-[860px] rounded-xl bg-[#16202e] p-6 md:p-10">
      {/* progress */}
      <div className="mb-8 flex items-center gap-2">
        {["O spoločnosti", "Účtovné agendy", "Doplňujúce info"].map((t, i) => (
          <div key={t} className="flex flex-1 flex-col gap-2">
            <span className={`h-1 rounded ${i <= step ? "bg-sand-dark" : "bg-white/10"}`} />
            <span className={`text-[11px] uppercase tracking-wide ${i === step ? "text-sand-dark" : "text-[#8E9BAA]"}`}>
              {t}
            </span>
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="space-y-5">
          <div>
            <h2 className="font-heading text-h4 text-white">O vašej spoločnosti</h2>
            <p className="mt-1 text-small text-[#8E9BAA]">
              Povedzte nám základné informácie o vašom podnikaní.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={label}>Názov spoločnosti / meno SZČO *</label>
              <input
                className={input}
                placeholder="napr. ABC Trade, s.r.o."
                value={data.company || ""}
                onChange={set("company")}
              />
            </div>
            <div>
              <label className={label}>Kontaktná osoba</label>
              <input
                className={input}
                placeholder="Meno a priezvisko"
                value={data.person || ""}
                onChange={set("person")}
              />
            </div>
            <div>
              <label className={label}>Telefón</label>
              <input
                className={input}
                type="tel"
                placeholder="+421 9xx xxx xxx"
                value={data.phone || ""}
                onChange={set("phone")}
              />
            </div>
            <div>
              <label className={label}>E-mail *</label>
              <input
                className={input}
                type="email"
                placeholder="email@spolocnost.sk"
                value={data.email || ""}
                onChange={set("email")}
              />
            </div>
          </div>
          <div>
            <label className={label}>Čím sa vaša spoločnosť zaoberá?</label>
            <textarea
              className={input}
              rows={3}
              maxLength={300}
              placeholder="Krátky popis (2-3 vety) — napr. Prevádzkujeme e-shop s elektronikou, predaj B2B aj B2C. Ročne spracujeme cca 500 objednávok..."
              value={data.business || ""}
              onChange={set("business")}
            />
            <p className="mt-1 text-right text-[11px] text-[#8E9BAA]">
              {(data.business || "").length} / 300 znakov
            </p>
          </div>
          <div>
            <label className={label}>Ročný obrat</label>
            <div className="mt-2 flex flex-wrap gap-3">
              {REVENUES.map((r) => (
                <label key={r} className={checkableItemClass(data.revenue === r)}>
                  <input
                    type="radio"
                    name="revenue"
                    value={r}
                    checked={data.revenue === r}
                    onChange={set("revenue")}
                    className="sr-only"
                  />
                  {r}
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button
              disabled={!step1Valid}
              onClick={() => setStep(1)}
              className="btn bg-sand-dark text-navy hover:bg-[#ab9378] disabled:opacity-40"
            >
              Ďalej →
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="font-heading text-h4 text-white">Účtovné agendy</h2>
            <p className="mt-1 text-small text-[#8E9BAA]">
              Uveďte počty dokladov za predchádzajúci rok (2025). Iba ak ste vznikli v roku 2026,
              uveďte počty za dostupné ucelenejšie obdobie (napr. celý kvartál alebo polrok).
            </p>
          </div>
          <div>
            <label className={label}>Referenčné obdobie (ak nie je celý rok 2025)</label>
            <input className={input} value={data.period || ""} onChange={set("period")} />
          </div>
          {COUNT_GROUPS.map((g) => (
            <div key={g.title}>
              <p className="text-[11px] font-bold uppercase tracking-wider text-sand-dark">
                {g.title}
              </p>
              <div className="mt-2 grid gap-4 sm:grid-cols-3">
                {g.fields.map(([k, l]) => (
                  <div key={k}>
                    <label className={label}>{l}</label>
                    <input
                      className={input}
                      type="number"
                      min={0}
                      placeholder="0"
                      value={counts[k] || ""}
                      onChange={setCount(k)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="rounded-lg bg-sand-dark/10 px-4 py-3 text-small text-white">
            Spolu dokladov: <b className="text-sand-dark">{total}</b>
          </p>
          <div className="flex justify-between pt-2">
            <button onClick={() => setStep(0)} className="btn border border-white/25 text-white hover:border-white">
              ← Späť
            </button>
            <button onClick={() => setStep(2)} className="btn bg-sand-dark text-navy hover:bg-[#ab9378]">
              Ďalej →
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <div>
            <h2 className="font-heading text-h4 text-white">Doplňujúce informácie</h2>
            <p className="mt-1 text-small text-[#8E9BAA]">
              Posledný krok — pomôže nám to pripraviť čo najpresnejšiu ponuku.
            </p>
          </div>
          <div>
            <label className={label}>Využívate momentálne nejakú účtovnú aplikáciu alebo softvér?</label>
            <input
              className={input}
              placeholder="napr. Pohoda, Money S3, OMEGA, žiadny…"
              value={data.software || ""}
              onChange={set("software")}
            />
          </div>
          <div>
            <label className={label}>Máte záujem aj o mzdové a personálne služby?</label>
            <div className="mt-2 flex flex-wrap gap-3">
              {PAYROLL.map((p) => (
                <label key={p} className={checkableItemClass(data.payroll === p)}>
                  <input
                    type="radio"
                    name="payroll"
                    value={p}
                    checked={data.payroll === p}
                    onChange={set("payroll")}
                    className="sr-only"
                  />
                  {p}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className={label}>Kedy by ste chceli začať spoluprácu?</label>
            <div className="mt-2 flex flex-wrap gap-3">
              {START.map((s) => (
                <label key={s} className={checkableItemClass(data.start === s)}>
                  <input
                    type="radio"
                    name="start"
                    value={s}
                    checked={data.start === s}
                    onChange={set("start")}
                    className="sr-only"
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className={label}>Poznámka / otázka (nepovinné)</label>
            <textarea
              className={input}
              rows={3}
              placeholder="Napíšte nám čokoľvek, čo by nám pomohlo pripraviť lepšiu ponuku..."
              value={data.note || ""}
              onChange={set("note")}
            />
          </div>
          {/* honeypot */}
          <input
            type="text"
            name="adp_website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px opacity-0"
            onChange={set("adp_website")}
          />
          <p className="text-[12px] leading-relaxed text-[#8E9BAA]">
            Odoslaním formulára súhlasíte so{" "}
            <a href="/ochrana-osobnych-udajov/" className="underline hover:text-white">
              spracovaním osobných údajov
            </a>{" "}
            spoločnosťou A.D.P. Accounting, s.r.o.
          </p>
          {error && <p className="rounded-lg bg-red-bg px-4 py-3 text-small text-red">{error}</p>}
          <div className="flex justify-between pt-2">
            <button onClick={() => setStep(1)} className="btn border border-white/25 text-white hover:border-white">
              ← Späť
            </button>
            <button
              onClick={submit}
              disabled={busy}
              className="btn bg-sand-dark text-navy hover:bg-[#ab9378] disabled:opacity-60"
            >
              {busy ? "Odosielam…" : "Odoslať žiadosť ✓"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
