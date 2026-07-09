"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import { homeFor, type Lang } from "@/lib/i18n";

/**
 * Right-hand contact drawer — replica of the origin's Kontakt popup:
 * photo on top, contact details, sand quote CTA, white form card.
 */
export default function ContactDrawer({
  open,
  onClose,
  lang = "sk",
}: {
  open: boolean;
  onClose: () => void;
  lang?: Lang;
}) {
  const { kontakt } = homeFor(lang);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      {/* backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* panel */}
      <aside
        role="dialog"
        aria-label="Kontakt"
        className={`fixed right-0 top-0 z-[61] h-full w-full max-w-[520px] overflow-y-auto bg-navy transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Zavrieť"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center text-2xl text-white hover:text-sand-dark"
        >
          ×
        </button>
        <Image
          src="/images/kontakt-drawer.webp"
          alt="A.D.P. Accounting"
          width={1040}
          height={640}
          className="h-56 w-full object-cover md:h-72"
        />
        <div className="p-6 md:p-8">
          <h2 className="font-heading text-h3 text-white">{kontakt.h2}</h2>
          <span className="rule" />

          <div className="mt-8 space-y-7">
            <div>
              <h5 className="font-heading text-h5 text-white">{kontakt.call.title}</h5>
              <p className="mt-2 text-base text-white/80">{kontakt.call.hours}</p>
              <div className="mt-3 flex items-start gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/icon-phone.svg" alt="" className="mt-1 h-5 w-5" />
                <p className="flex flex-col gap-2 text-base">
                  {kontakt.call.phones.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="text-white underline underline-offset-4 hover:no-underline"
                    >
                      {p.label}
                    </a>
                  ))}
                </p>
              </div>
            </div>
            <div>
              <h5 className="font-heading text-h5 text-white">{kontakt.write.title}</h5>
              <p className="mt-3 flex items-center gap-3 text-base">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/icon-mail.svg" alt="" className="h-5 w-5" />
                <a
                  href={`mailto:${kontakt.write.email}`}
                  className="text-white underline underline-offset-4 hover:no-underline"
                >
                  {kontakt.write.email}
                </a>
              </p>
            </div>
            <Link href={kontakt.quote.href} onClick={onClose} className="btn-sand">
              <span className="btn-roll">
                <span className="btn-roll-text" data-hover={kontakt.quote.label}>
                  {kontakt.quote.label}
                </span>
              </span>
            </Link>
          </div>

          <div className="mt-8 rounded bg-white p-6">
            <ContactForm lang={lang} />
          </div>
        </div>
      </aside>
    </>
  );
}
