"use client";

import { useEffect, useRef, useState } from "react";
import { uiFor, type Lang } from "@/lib/i18n";

/**
 * Contact form — same Netlify function + SMTP2GO backend and spam defences
 * (honeypot, ms-since-load time gate, per-IP rate limit) + optional reCAPTCHA
 * v3. Labels/placeholders come from the language dictionary; on success sets
 * the one-shot conversion flag and redirects to the localized /dakujeme.
 */

const ENDPOINT = "/.netlify/functions/contact";
const loadedAt = Date.now();

const label = "block text-small font-semibold text-navy";
const input =
  "mt-2 w-full rounded border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-faint focus:border-navy focus:outline-none";

export default function ContactForm({ lang = "sk" }: { lang?: Lang }) {
  const f = uiFor(lang).form;
  const thankYou = lang === "en" ? "/en/dakujeme/" : "/dakujeme/";
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (siteKey && !document.querySelector('script[src*="recaptcha/api.js"]')) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current!;
    const data: Record<string, unknown> = {};
    new FormData(form).forEach((v, k) => (data[k] = String(v)));
    data.adp_ms = Date.now() - loadedAt;

    setBusy(true);
    setError(null);

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const w = window as unknown as { grecaptcha?: any };
    if (siteKey && w.grecaptcha) {
      try {
        await new Promise<void>((resolve, reject) => {
          w.grecaptcha.ready(() => {
            w.grecaptcha
              .execute(siteKey, { action: "submit" })
              .then((token: string) => {
                data.recaptcha_token = token;
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
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const out = await res.json().catch(() => ({}));
        throw new Error(out.error || f.error);
      }
      try {
        sessionStorage.setItem("adp_lead", "1");
      } catch {
        /* private mode */
      }
      window.location.assign(thankYou);
    } catch (err) {
      setBusy(false);
      setError(err instanceof Error ? err.message : f.error);
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="grid content-start gap-5">
      <div>
        <label htmlFor="cf-name" className={label}>
          {f.name}
        </label>
        <input id="cf-name" name="name" required placeholder={f.namePh} className={input} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-email" className={label}>
            {f.email}
          </label>
          <input id="cf-email" name="email" type="email" required placeholder={f.emailPh} className={input} />
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>
            {f.phone}
          </label>
          <input id="cf-phone" name="phone" type="tel" required placeholder={f.phonePh} className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className={label}>
          {f.message}
        </label>
        <textarea id="cf-message" name="message" required rows={6} placeholder={f.messagePh} className={input} />
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
          {f.gdprPre}
          <a href={f.gdprHref} className="underline hover:text-navy">
            {f.gdprLink}
          </a>
        </span>
      </label>
      <button type="submit" disabled={busy} className="btn-primary w-full disabled:opacity-60">
        <span className="btn-roll">
          <span className="btn-roll-text" data-hover={busy ? f.sending : f.submit}>
            {busy ? f.sending : f.submit}
          </span>
        </span>
      </button>
      {error && <p className="rounded bg-red-bg px-4 py-3 text-small text-red">{error}</p>}
    </form>
  );
}
