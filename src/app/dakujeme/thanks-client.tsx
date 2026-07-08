"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Fires the GTM conversion event ONLY for real form submissions — the form
 * sets a one-shot sessionStorage flag before redirecting here, so bots,
 * direct visits and refreshes never push the event. Then sends the visitor
 * home after 8s (well after GTM fires).
 */
export default function ThanksClient() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("adp_lead") === "1") {
        sessionStorage.removeItem("adp_lead");
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "lead_form_submitted" });
      }
    } catch {
      /* private mode */
    }
    const t = setTimeout(() => window.location.replace("/"), 8000);
    return () => clearTimeout(t);
  }, []);
  return null;
}
