import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const FOOTER_NAV = [
  { label: "Služby", href: "/#sluzby" },
  { label: "O nás", href: "/o-adp/" },
  { label: "Referencie", href: "/#referencie" },
  { label: "Blog", href: "/blog/" },
];

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61576238373596" },
  { label: "Instagram", href: "https://www.instagram.com/adp_accounting" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/adpaccounting/" },
  { label: "Threads", href: "https://www.threads.com/@sk_adpacc" },
  { label: "WhatsApp", href: "https://wa.me/421903772272" },
];

export default function Footer() {
  return (
    <>
      {/* Kontakt section — the site-wide contact block above the footer */}
      <section id="kontakt" className="bg-sand py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-h3 md:text-h2">Kontakt</h2>
            <div className="mt-8 space-y-8">
              <div>
                <h5 className="text-h5">Zavolajte nám</h5>
                <p className="mt-2 text-small text-muted">Pon–Pia od 8:00 do 16:30</p>
                <p className="mt-3 flex flex-col gap-1 text-lead">
                  <a href="tel:+421253637544" className="hover:underline">
                    +421 2 53 63 75 44
                  </a>
                  <a href="tel:+421903227726" className="hover:underline">
                    +421 903 22 77 26
                  </a>
                </p>
              </div>
              <div>
                <h5 className="text-h5">Napíšte nám</h5>
                <p className="mt-3 text-lead">
                  <a href="mailto:office@adpacc.sk" className="hover:underline">
                    office@adpacc.sk
                  </a>
                </p>
              </div>
              <div>
                <p className="text-base text-body">Hraničná 53, 821 05 Bratislava</p>
              </div>
              <Link href="/cenova-ponuka/" className="btn-outline">
                Vyhotoviť cenovú ponuku
              </Link>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer proper */}
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-[13px] text-white/85 transition hover:border-white hover:text-white"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 border-b border-white/15 py-8 md:flex-row">
            <p className="text-small text-white/70">
              A.D.P. Accounting, s.r.o. · Hraničná 53, 821 05 Bratislava
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <Link href="/ochrana-osobnych-udajov/" className="text-small text-white/70 hover:text-white">
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
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="underline">
                Zásady ochrany osobných údajov
              </a>{" "}
              a{" "}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener" className="underline">
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
