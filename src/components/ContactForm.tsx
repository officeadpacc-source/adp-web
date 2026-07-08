"use client";

import { useRef, useState } from "react";

/**
 * Contact form — posts to the same Netlify function + SMTP2GO backend as the
 * mirror site (netlify/functions/contact.js), with the same spam defences:
 * hidden honeypot, ms-since-load time gate, per-IP rate limit server-side.
 * On success sets the one-shot conversion flag and redirects to /dakujeme.
 */

const ENDPOINT = "/.netlify/functions/contact";
const loadedAt = Date.now();

const ERROR_TEXT =
  "Správu sa nepodarilo odoslať. Skúste to prosím znova, alebo nám zavolajte na +421 903 22 77 26.";

const inputCls =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-faint focus:border-navy focus:outline-none";

export default function ContactForm() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current!;
    const data: Record<string, unknown> = {};
    new FormData(form).forEach((v, k) => (data[k] = String(v)));
    data.adp_ms = Date.now() - loadedAt;

    setBusy(true);
    setError(null);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const out = await res.json().catch(() => ({}));
        throw new Error(out.error || ERROR_TEXT);
      }
      try {
        sessionStorage.setItem("adp_lead", "1");
      } catch {
        /* private mode */
      }
      window.location.assign("/dakujeme/");
    } catch (err) {
      setBusy(false);
      setError(err instanceof Error ? err.message : ERROR_TEXT);
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Meno a priezvisko *" className={inputCls} />
        <input name="email" type="email" required placeholder="E-mail *" className={inputCls} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="phone" type="tel" placeholder="Telefón" className={inputCls} />
        <input name="mesto" placeholder="Mesto" className={inputCls} />
      </div>
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Vaša správa *"
        className={inputCls}
      />
      {/* Honeypot — humans never see or fill this. */}
      <input
        type="text"
        name="adp_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px opacity-0"
      />
      <label className="flex items-start gap-3 text-small text-muted">
        <input type="checkbox" name="gdpr" required className="mt-1" />
        <span>
          Súhlasím so{" "}
          <a href="/ochrana-osobnych-udajov/" className="underline hover:text-navy">
            spracovaním osobných údajov
          </a>{" "}
          *
        </span>
      </label>
      <button type="submit" disabled={busy} className="btn-primary disabled:opacity-60">
        {busy ? "Odosielam…" : "Odoslať správu"}
      </button>
      {error && (
        <p className="rounded-lg bg-red-bg px-4 py-3 text-small text-red">{error}</p>
      )}
      <p className="text-[12px] leading-relaxed text-faint">
        Táto stránka je chránená reCAPTCHA a platia pre ňu{" "}
        <a href="https://policies.google.com/privacy" rel="noopener" target="_blank" className="underline">
          Zásady ochrany osobných údajov
        </a>{" "}
        a{" "}
        <a href="https://policies.google.com/terms" rel="noopener" target="_blank" className="underline">
          Zmluvné podmienky
        </a>{" "}
        spoločnosti Google.
      </p>
    </form>
  );
}
