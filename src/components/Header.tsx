"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ContactDrawer from "@/components/ContactDrawer";
import { uiFor, type Lang } from "@/lib/i18n";

export default function Header() {
  const pathname = usePathname();
  const lang: Lang = pathname.startsWith("/en") ? "en" : "sk";
  const t = uiFor(lang);
  const SERVICES = t.serviceLinks;
  const NAV = [
    { label: t.nav.about, href: lang === "en" ? "/en/about-us/" : "/o-adp/" },
    { label: t.nav.references, href: `${t.home}#referencie` },
    { label: t.nav.blog, href: lang === "en" ? "/en/blog-en/" : "/blog/" },
    ...(lang === "en" ? [] : [{ label: t.nav.careers, href: "/zamestnanie/" }]),
  ];

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand">
      <div className="wrap flex items-center justify-between gap-4 py-4">
        <Link href={t.home} aria-label="A.D.P. Accounting" className="shrink-0">
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
        <nav className="hidden items-center gap-8 lg:flex" aria-label={t.menu}>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href={`${t.home}#sluzby`}
              className="text-nav font-semibold uppercase text-navy hover:text-muted"
            >
              {t.nav.services} ▾
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
              <span className="btn-roll-text" data-hover={t.contact}>
                {t.contact}
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
              <span className="btn-roll-text" data-hover={t.clientZone}>
                {t.clientZone}
              </span>
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/doklado.svg" alt="" className="h-5 w-5 shrink-0 rounded-[2px]" />
          </a>
          <Link
            href={t.langSwitchHref}
            className="flex items-center gap-2 text-nav font-semibold uppercase text-navy hover:text-muted"
            aria-label={lang === "sk" ? "Switch to English" : "Prepnúť do slovenčiny"}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lang === "sk" ? "/images/flag-en.svg" : "/images/flag-sk.svg"}
              alt=""
              width={21}
              height={15}
              className="rounded-[2px]"
            />
            {t.langSwitchLabel}
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? t.closeMenu : t.openMenu}
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
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile slide-in sidebar */}
      <nav
        className={`fixed inset-y-0 right-0 z-50 flex w-[300px] max-w-[85vw] flex-col justify-between bg-navy p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label={t.menu}
      >
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-heading text-h5 text-white">{t.menu}</span>
            <button
              className="flex h-8 w-8 items-center justify-center text-white"
              onClick={() => setOpen(false)}
              aria-label={t.closeMenu}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-6 py-6">
            <div>
              <p className="text-navsm font-bold uppercase tracking-wider text-sand-dark">
                {t.nav.services}
              </p>
              <div className="mt-2 space-y-1 border-l border-white/10 pl-3">
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

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
          <button
            onClick={() => {
              setOpen(false);
              setContactOpen(true);
            }}
            className="btn-sand w-full"
          >
            {t.contact}
          </button>
          <a
            href="https://app.doklado.sk/signin_email"
            target="_blank"
            rel="noopener"
            className="btn-invert flex w-full items-center justify-center gap-2"
          >
            {t.clientZone}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/doklado.svg" alt="" className="h-5 w-5 shrink-0 rounded-[2px]" />
          </a>
          <Link
            href={t.langSwitchHref}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-2 text-nav font-semibold uppercase text-white hover:text-sand-dark"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lang === "sk" ? "/images/flag-en.svg" : "/images/flag-sk.svg"}
              alt=""
              width={21}
              height={15}
              className="rounded-[2px]"
            />
            {t.langSwitchLabel}
          </Link>
        </div>
      </nav>
      <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)} lang={lang} />
    </header>
  );
}
