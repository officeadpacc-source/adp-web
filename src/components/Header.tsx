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
  { label: "Zamestnanie", href: "/zamestnanie/" },
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
            <span className="btn-roll">
              <span className="btn-roll-text" data-hover="Kontakt">
                Kontakt
              </span>
            </span>
          </button>
          <a
            href="https://app.doklado.sk/signin_email"
            target="_blank"
            rel="noopener"
            className="btn-light"
          >
            <span className="btn-roll">
              <span className="btn-roll-text" data-hover="Klientská zóna">
                Klientská zóna
              </span>
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/doklado.svg" alt="" className="h-5 w-5 shrink-0 rounded-[2px]" />
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

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile slide-in sidebar */}
      <nav
        className={`fixed inset-y-0 right-0 z-50 w-[300px] max-w-[85vw] bg-navy p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobilné menu"
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="font-heading text-h5 text-white">Menu</span>
            <button
              className="flex h-8 w-8 items-center justify-center text-white"
              onClick={() => setOpen(false)}
              aria-label="Zavrieť menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="py-6 space-y-6">
            <div>
              <p className="text-navsm font-bold uppercase tracking-wider text-sand-dark">Služby</p>
              <div className="mt-2 space-y-1 pl-3 border-l border-white/10">
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-nav font-medium text-white/80 hover:text-white"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-nav font-semibold uppercase text-white hover:text-sand-dark"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col gap-3">
          <button
            onClick={() => {
              setOpen(false);
              setContactOpen(true);
            }}
            className="btn-sand w-full"
          >
            <span className="btn-roll">
              <span className="btn-roll-text" data-hover="Kontakt">
                Kontakt
              </span>
            </span>
          </button>
          <a
            href="https://app.doklado.sk/signin_email"
            target="_blank"
            rel="noopener"
            className="btn-invert w-full flex items-center justify-center gap-2"
          >
            <span className="btn-roll">
              <span className="btn-roll-text" data-hover="Klientská zóna">
                Klientská zóna
              </span>
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/doklado.svg" alt="" className="h-5 w-5 shrink-0 rounded-[2px]" />
          </a>
          <Link
            href="/en/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-2 text-nav font-semibold uppercase text-white hover:text-sand-dark"
            aria-label="Switch to English"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/flag-en.svg" alt="" width={21} height={15} className="rounded-[2px]" />
            EN
          </Link>
        </div>
      </nav>
      <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  );
}
