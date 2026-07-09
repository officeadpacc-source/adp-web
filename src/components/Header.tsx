"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactDrawer from "@/components/ContactDrawer";

const SERVICES = [
  { label: "Podvojné účtovníctvo", href: "/podvojne-uctovnictvo/" },
  { label: "Jednoduché účtovníctvo", href: "/jednoduche-uctovnictvo/" },
  { label: "Mzdy", href: "/mzdy/" },
  { label: "Ostatné služby", href: "/ostatne-sluzby/" },
];

const NAV = [
  { label: "O nás", href: "/o-adp/" },
  { label: "Referencie", href: "/#referencie" },
  { label: "Blog", href: "/blog/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand">
      <div className="wrap flex items-center justify-between gap-4 py-4">
        <Link href="/" aria-label="A.D.P. Accounting — domov" className="shrink-0">
          <Image
            src="/images/adpacc_logo_web.webp"
            alt="A.D.P. Accounting"
            width={2058}
            height={360}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hlavné menu">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/#sluzby"
              className="text-nav font-semibold uppercase text-navy hover:text-muted"
            >
              Služby ▾
            </Link>
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 pt-3">
                <div className="min-w-64 rounded-b-md bg-white py-2 shadow-[0px_10px_30px_0px_rgba(0,0,0,0.05)]">
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-5 py-2.5 text-navsm font-semibold uppercase text-navy hover:bg-sand"
                  >
                    {s.label}
                  </Link>
                ))}
                </div>
              </div>
            )}
          </div>
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-nav font-semibold uppercase text-navy hover:text-muted"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button onClick={() => setContactOpen(true)} className="btn-primary">
            Kontakt
          </button>
          <a
            href="https://app.doklado.sk/signin_email"
            target="_blank"
            rel="noopener"
            className="btn-light"
          >
            Klientská zóna
            <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-[#2E6BF6] text-[9px] font-bold lowercase text-white">
              do
            </span>
          </a>
          <Link
            href="/en/"
            className="flex items-center gap-2 text-nav font-semibold uppercase text-navy hover:text-muted"
            aria-label="Switch to English"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/flag-en.svg" alt="" width={21} height={15} className="rounded-[2px]" />
            EN
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`h-0.5 w-6 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-white px-5 pb-6 pt-2 lg:hidden" aria-label="Mobilné menu">
          <p className="pt-3 text-navsm font-semibold uppercase text-faint">Služby</p>
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 pl-3 text-nav font-semibold uppercase text-navy"
            >
              {s.label}
            </Link>
          ))}
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-nav font-semibold uppercase text-navy"
            >
              {n.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setOpen(false);
                setContactOpen(true);
              }}
              className="btn-primary"
            >
              Kontakt
            </button>
            <a
              href="https://app.doklado.sk/signin_email"
              target="_blank"
              rel="noopener"
              className="btn-light"
            >
              Klientská zóna
            </a>
            <Link href="/en/" className="py-2 text-nav font-semibold uppercase text-navy">
              EN
            </Link>
          </div>
        </nav>
      )}
      <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  );
}
