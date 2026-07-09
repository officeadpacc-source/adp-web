"use client";

import { useRef, useState } from "react";

/**
 * Contact form — same Netlify function + SMTP2GO backend and spam defences
 * as the mirror build (honeypot, ms-since-load time gate, per-IP rate limit).
 * Fields and labels mirror the origin homepage form exactly:
 * Meno (Povinné) · Email (Povinné) · Telefónne číslo (Povinné) · Správa · GDPR.
 * On success sets the one-shot conversion flag and redirects to /dakujeme.
 */

const ENDPOINT = "/.netlify/functions/contact";
const loadedAt = Date.now();

const ERROR_TEXT =
  "Správu sa nepodarilo odoslať. Skúste to prosím znova, alebo nám zavolajte na +421 903 22 77 26.";

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const label = `block text-small font-semibold ${dark ? "text-white/85" : "text-navy"}`;
  const input = `mt-1.5 w-full rounded border px-4 py-3 text-base focus:outline-none ${
    dark
      ? "border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-white"
      : "border-line bg-white text-ink placeholder:text-faint focus:border-navy"
  }`;

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
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>
            Meno (Povinné)
          </label>
          <input id="cf-name" name="name" required className={input} />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>
            Email (Povinné)
          </label>
          <input id="cf-email" name="email" type="email" required className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-phone" className={label}>
          Telefónne číslo (Povinné)
        </label>
        <input id="cf-phone" name="phone" type="tel" required className={input} />
      </div>
      <div>
        <label htmlFor="cf-message" className={label}>
          Správa
        </label>
        <textarea id="cf-message" name="message" required rows={5} className={input} />
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
      <label
        className={`flex items-start gap-3 text-small ${dark ? "text-white/70" : "text-muted"}`}
      >
        <input type="checkbox" name="gdpr" required className="mt-1" />
        <span>
          Súhlasím so{" "}
          <a
            href="/ochrana-osobnych-udajov/"
            className={`underline ${dark ? "hover:text-white" : "hover:text-navy"}`}
          >
            spracovaním osobných údajov
          </a>{" "}
          *
        </span>
      </label>
      <button
        type="submit"
        disabled={busy}
        className={`${dark ? "btn-invert" : "btn-primary"} disabled:opacity-60`}
      >
        {busy ? "Odosielam…" : "Odoslať správu"}
      </button>
      {error && <p className="rounded bg-red-bg px-4 py-3 text-small text-red">{error}</p>}
    </form>
  );
}
