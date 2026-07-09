"use client";

import { useRef, useState } from "react";

/**
 * Contact form — same Netlify function + SMTP2GO backend and spam defences
 * as the mirror build (honeypot, ms-since-load time gate, per-IP rate limit).
 * Layout mirrors the origin form exactly: labels above inputs with SK
 * placeholders; Meno full-width, Email + Telefónne číslo side by side,
 * Správa textarea, GDPR checkbox, full-width navy submit.
 * On success sets the one-shot conversion flag and redirects to /dakujeme.
 */

const ENDPOINT = "/.netlify/functions/contact";
const loadedAt = Date.now();

const ERROR_TEXT =
  "Správu sa nepodarilo odoslať. Skúste to prosím znova, alebo nám zavolajte na +421 903 22 77 26.";

const label = "block text-small font-semibold text-navy";
const input =
  "mt-2 w-full rounded border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-faint focus:border-navy focus:outline-none";

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
    <form ref={formRef} onSubmit={onSubmit} className="grid content-start gap-5">
      <div>
        <label htmlFor="cf-name" className={label}>
          Meno (Povinné)
        </label>
        <input
          id="cf-name"
          name="name"
          required
          placeholder="Vaše meno a priezvisko"
          className={input}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-email" className={label}>
            Email (Povinné)
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="Váš e-mail"
            className={input}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>
            Telefónne číslo (Povinné)
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            placeholder="Vaše telefónne číslo"
            className={input}
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className={label}>
          Správa
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={6}
          placeholder="Vaša správa"
          className={input}
        />
      </div>
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
          </a>
        </span>
      </label>
      <button type="submit" disabled={busy} className="btn-primary w-full disabled:opacity-60">
        {busy ? "Odosielam…" : "Odoslať správu"}
      </button>
      {error && <p className="rounded bg-red-bg px-4 py-3 text-small text-red">{error}</p>}
    </form>
  );
}
