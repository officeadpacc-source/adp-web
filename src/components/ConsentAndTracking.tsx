"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Google Ads conversion action created via the Ads API (Klik na telefón – web).
const PHONE_SEND_TO = "AW-17158281759/T-cHCI2wkowdEJ-02vU_";
const STORAGE_KEY = "adp_consent";
export const OPEN_CONSENT_EVENT = "adp-open-consent";

const GRANTED = {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "granted",
};
const DENIED = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
};

const TEXT = {
  sk: {
    title: "Súbory cookies",
    body: "Nevyhnutné cookies potrebujeme na fungovanie webu. Analytické a reklamné cookies (Google) použijeme len s vaším súhlasom.",
    policy: "Zásady používania súborov cookies",
    policyHref: "/cookies/",
    accept: "Prijať všetko",
    reject: "Len nevyhnutné",
  },
  en: {
    title: "Cookies",
    body: "We need essential cookies for the site to work. We use analytics and advertising cookies (Google) only with your consent.",
    policy: "Cookie Policy",
    policyHref: "/en/cookie-policy/",
    accept: "Accept all",
    reject: "Essential only",
  },
};

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === "function") window.gtag(...args);
  // eslint-disable-next-line prefer-rest-params
  else window.dataLayer.push(args);
}

/**
 * Consent Mode v2 banner + phone-click conversion.
 *
 * The consent *default* (everything denied, or the stored choice) is set in
 * layout.tsx before GTM loads, so Google tags start in the right state. This
 * component only shows the banner, stores the choice and sends the update.
 * Phone taps (`tel:` links anywhere on the site) fire the Google Ads
 * conversion "Klik na telefón – web"; without consent Google receives a
 * cookieless ping and models the conversion.
 */
export default function ConsentAndTracking() {
  const pathname = usePathname() || "/";
  const t = pathname.startsWith("/en") ? TEXT.en : TEXT.sk;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* storage blocked: ask again */
    }
    if (stored !== "granted" && stored !== "denied") setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (!link) return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "phone_click", phone: link.getAttribute("href") });
      gtag("event", "conversion", { send_to: PHONE_SEND_TO });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  const choose = (granted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    } catch {
      /* storage blocked: choice applies to this page view only */
    }
    gtag("consent", "update", granted ? GRANTED : DENIED);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.title}
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-[960px] flex-col gap-4 rounded border border-navy/10 bg-white p-5 shadow-[0_8px_30px_rgba(22,31,46,0.18)] md:flex-row md:items-center md:gap-8">
        <div className="text-small text-navy">
          <p className="mb-1 font-semibold">{t.title}</p>
          <p className="text-body">
            {t.body}{" "}
            <Link href={t.policyHref} className="underline hover:text-navy">
              {t.policy}
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button type="button" onClick={() => choose(false)} className="btn-outline">
            {t.reject}
          </button>
          <button type="button" onClick={() => choose(true)} className="btn-primary">
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
