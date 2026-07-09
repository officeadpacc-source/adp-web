"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Floating "Cenová ponuka" CTA, bottom-right on every page
 * (hidden on the quote page itself and on the thank-you page). */
export default function QuoteFab() {
  const path = usePathname();
  if (path.startsWith("/cenova-ponuka") || path.startsWith("/dakujeme")) return null;

  return (
    <Link
      href="/cenova-ponuka/"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded bg-sand-dark px-5 py-3 font-sans text-navsm font-semibold uppercase text-navy shadow-[0_6px_24px_rgba(0,0,0,0.18)] transition hover:bg-navy hover:text-white md:bottom-8 md:right-8"
    >
      Cenová ponuka
    </Link>
  );
}
