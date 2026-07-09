import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ClientsBand from "@/components/ClientsBand";
import { kontakt } from "@/content/home";

const FOOTER_NAV = [
  { label: "Služby", href: "/#sluzby" },
  { label: "O nás", href: "/o-adp/" },
  { label: "Referencie", href: "/#referencie" },
  { label: "Blog", href: "/blog/" },
];

const SOCIALS = [
  { label: "Facebook", icon: "social-facebook-f", href: "https://www.facebook.com/profile.php?id=61576238373596" },
  { label: "Instagram", icon: "social-instagram", href: "https://www.instagram.com/adp_accounting" },
  { label: "LinkedIn", icon: "social-linkedin-in", href: "https://www.linkedin.com/company/adpaccounting/" },
  { label: "Threads", icon: "social-threads", href: "https://www.threads.com/@sk_adpacc" },
  { label: "WhatsApp", icon: "social-whatsapp", href: "https://wa.me/421903772272" },
];

export default function Footer() {
  return (
    <>
      {/* Kontakt — navy section, 120px; info left, white form card right */}
      <section id="kontakt" className="section scroll-mt-24 bg-navy text-white">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-h4 text-white md:text-h2">{kontakt.h2}</h2>
            <span className="rule" />
            <div className="mt-10 space-y-9">
              <div>
                <h5 className="text-h5 text-white">{kontakt.visit.title}</h5>
                <p className="mt-4 flex items-center gap-3 text-base">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/icon-pin.svg" alt="" className="h-5 w-5" />
                  <a
                    href="https://maps.app.goo.gl/N37XRM7JbkktLojs7"
                    target="_blank"
                    rel="noopener nofollow"
                    className="text-white underline underline-offset-4 hover:no-underline"
                  >
                    {kontakt.visit.text}
                  </a>
                </p>
              </div>
              <div>
                <h5 className="text-h5 text-white">{kontakt.call.title}</h5>
                <p className="mt-3 text-base text-white/80">{kontakt.call.hours}</p>
                <div className="mt-4 flex items-start gap-3">
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
                <h5 className="text-h5 text-white">{kontakt.write.title}</h5>
                <p className="mt-4 flex items-center gap-3 text-base">
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
              <Link href={kontakt.quote.href} className="btn-sand">
                {kontakt.quote.label}
              </Link>
            </div>
          </div>
          <div className="rounded bg-white p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <ClientsBand />

      {/* Footer — slate #39404D */}
      <footer className="bg-slate text-white">
        <div className="wrap py-16 md:py-[72px]">
          <div className="flex flex-col items-start justify-between gap-10 border-b border-white/15 pb-10 md:flex-row md:items-center">
            <Link href="/" aria-label="A.D.P. Accounting — domov">
              <Image
                src="/images/adpacc_logo_white.png"
                alt="A.D.P. Accounting"
                width={2058}
                height={360}
                className="h-[42px] w-auto"
              />
            </Link>
            <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Pätička">
              {FOOTER_NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="text-small text-white/85 hover:text-white"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-sand-dark"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/${s.icon}.svg`}
                    alt=""
                    className="h-4 w-4 brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 border-b border-white/15 py-8 md:flex-row">
            <p className="text-small text-white/70">
              A.D.P. Accounting, s.r.o. · Hraničná 53, 821 05 Bratislava
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <Link
                href="/ochrana-osobnych-udajov/"
                className="text-small text-white/70 hover:text-white"
              >
                Ochrana osobných údajov
              </Link>
              <Link href="/cookies/" className="text-small text-white/70 hover:text-white">
                Zásady používania súborov cookies
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 pt-8 md:flex-row md:items-center">
            <p className="text-[12px] leading-relaxed text-faint">
              © {new Date().getFullYear()} A.D.P. Accounting, s.r.o. Táto stránka je chránená
              reCAPTCHA a platia pre ňu{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Zásady ochrany osobných údajov
              </a>{" "}
              a{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Zmluvné podmienky
              </a>{" "}
              spoločnosti Google.
            </p>
            <a
              href="https://webgate.digital"
              target="_blank"
              rel="noopener"
              className="text-[12px] text-faint hover:text-white"
            >
              Created by webgate.digital
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
