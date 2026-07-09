"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/** Floating "Cenová ponuka" CTA, bottom-right on every page
 * (hidden on the quote page itself and on the thank-you page). */
export default function QuoteFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (!path.startsWith("/cenova-ponuka") && !path.startsWith("/dakujeme")) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <Link
      href="/cenova-ponuka/"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded bg-navy px-5 py-3 font-sans text-navsm font-semibold uppercase text-white shadow-[0_6px_24px_rgba(0,0,0,0.18)] transition hover:bg-sand-dark hover:text-navy md:bottom-8 md:right-8 group"
    >
      <span className="btn-roll">
        <span className="btn-roll-text" data-hover="Cenová ponuka">
          Cenová ponuka
        </span>
      </span>
    </Link>
  );
}
