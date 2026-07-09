"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Floating "Cenová ponuka" CTA, bottom-right on every page
 * (hidden on the quote page itself, thank-you pages, and English pages). */
export default function QuoteFab() {
  const pathname = usePathname();
  const show =
    !pathname.includes("cenova-ponuka") &&
    !pathname.includes("dakujeme") &&
    !pathname.startsWith("/en");

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
