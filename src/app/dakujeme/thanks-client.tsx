"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

// Google Ads conversion action created via the Ads API (Lead form submit – /dakujeme).
const ADS_ID = "AW-17158281759";
const ADS_SEND_TO = "AW-17158281759/QaX3CMje480cEJ-02vU_";

/**
 * Fires the Google Ads conversion ONLY for real form submissions — the form
 * sets a one-shot sessionStorage flag before redirecting here, so bots,
 * direct visits and refreshes never count. Also pushes a `lead_form_submitted`
 * dataLayer event (available for GTM/GA4). Then sends the visitor to
 * `redirectUrl` after 8s (well after the conversion has fired).
 */
export default function ThanksClient({ redirectUrl = "/" }: { redirectUrl?: string }) {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("adp_lead") === "1") {
        sessionStorage.removeItem("adp_lead");

        // dataLayer signal (for GTM / GA4 if desired)
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "lead_form_submitted" });

        // Google Ads gtag loader
        if (!document.querySelector(`script[src*="gtag/js?id=${ADS_ID}"]`)) {
          const loader = document.createElement("script");
          loader.async = true;
          loader.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
          document.head.appendChild(loader);
        }
        // Canonical gtag conversion snippet (raw, so gtag.js processes the
        // `arguments` object exactly as Google intends).
        const snippet = document.createElement("script");
        snippet.textContent =
          "window.dataLayer=window.dataLayer||[];" +
          "function gtag(){dataLayer.push(arguments);}" +
          "gtag('js',new Date());" +
          `gtag('config','${ADS_ID}');` +
          `gtag('event','conversion',{'send_to':'${ADS_SEND_TO}'});`;
        document.head.appendChild(snippet);
      }
    } catch {
      /* private mode / no storage */
    }
    const t = setTimeout(() => window.location.replace(redirectUrl), 8000);
    return () => clearTimeout(t);
  }, [redirectUrl]);
  return null;
}
