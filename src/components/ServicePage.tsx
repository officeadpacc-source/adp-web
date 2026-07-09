import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import CountUp from "@/components/CountUp";
import SpolupracaSection from "@/components/SpolupracaSection";
import type { ServiceContent } from "@/content/services";
import { uiFor, localizeHref, type Lang } from "@/lib/i18n";

/** Shared template for the four service subpages (mirrors the origin layout).
 * The Kontakt section + client band come from the global Footer. */
export default function ServicePage({
  s,
  extra,
  lang = "sk",
}: {
  s: ServiceContent;
  extra?: ReactNode;
  lang?: Lang;
}) {
  const t = uiFor(lang);
  return (
    <main>
      {/* Hero — sand, like the homepage */}
      <section className="bg-sand">
        <div className="wrap grid gap-8 py-14 md:grid-cols-[1.1fr_1fr] md:gap-16 md:py-16">
          <div>
            <h1 className="text-h3 md:text-h1">{s.title}</h1>
            {s.tagline && <h4 className="mt-4 text-h5 text-navy md:text-h4">{s.tagline}</h4>}
          </div>
          <div className="self-center">
            {s.intro.map((p) => (
              <p key={p.slice(0, 24)} className="mt-3 text-base text-body first:mt-0">
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={localizeHref("/#kontakt", lang)} className="btn-primary w-full sm:w-auto">
                <span className="btn-roll">
                  <span className="btn-roll-text" data-hover={t.servicePage.contactUs}>
                    {t.servicePage.contactUs}
                  </span>
                </span>
              </Link>
              <a href="#sluzby" className="btn-outline w-full sm:w-auto">
                <span className="btn-roll">
                  <span className="btn-roll-text" data-hover={t.learnMore}>
                    {t.learnMore}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <Image
          src={s.heroImg}
          alt={s.title}
          width={2400}
          height={1200}
          priority
          className="max-h-[520px] w-full object-cover"
        />
      </section>

      {/* Features */}
      <section id="sluzby" className="section scroll-mt-24 bg-white">
        <div className="wrap">
          <h2 className="text-h4 md:text-h2">{s.featuresH2}</h2>
          <span className="rule" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {s.features.map((f) => (
              <div key={f.lead} className="rounded bg-paper p-8">
                <h3 className="font-heading text-h5 text-navy">{f.lead}</h3>
                <p className="mt-2 text-base text-body">{f.rest}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {s.pricing.kind !== "none" && (
        <section className="section bg-sand">
          <div className="wrap">
            <h2 className="text-h4 md:text-h2">{t.servicePage.estPrice}</h2>
            <span className="rule" />
            <p className="mt-8 max-w-3xl text-base text-body">{s.pricing.note}</p>
            <p className="mt-3 max-w-3xl text-base text-body">{s.pricing.alsoIntro}</p>

            {s.pricing.kind === "tiers" ? (
              <div className="mt-14 grid gap-6 lg:grid-cols-3">
                {s.pricing.tiers.map((tier) => (
                  <div key={tier.name} className="flex flex-col rounded bg-white p-8">
                    <h3 className="font-heading text-h4 text-navy">{tier.name}</h3>
                    <p className="mt-1 text-small text-sand-dark">{tier.subtitle}</p>
                    <p className="mt-6 text-small font-semibold text-navy">{t.servicePage.suitableFor}</p>
                    <ul className="mt-2 space-y-1 text-small text-muted">
                      {tier.fit.map((f) => (
                        <li key={f}>· {f}</li>
                      ))}
                    </ul>
                    <div className="mt-8 border-t border-line pt-6">
                      <p className="text-small text-muted">{t.servicePage.bookkeeping}</p>
                      <p className="mt-1 font-heading text-h3 text-navy">
                        {t.servicePage.from} {tier.base} € <span className="text-small text-muted">{t.servicePage.monthly}</span>
                      </p>
                      <p className="mt-4 text-small text-muted">
                        {t.servicePage.bookkeepingAndPayroll}
                      </p>
                      <p className="mt-1 font-heading text-h3 text-navy">
                        {t.servicePage.from} {tier.withPayroll} €{" "}
                        <span className="text-small text-muted">{t.servicePage.monthly}</span>
                      </p>
                    </div>
                    <Link href={localizeHref("/#kontakt", lang)} className="btn-primary mt-8 w-full sm:w-auto">
                      <span className="btn-roll">
                        <span className="btn-roll-text" data-hover={t.interested}>
                          {t.interested}
                        </span>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-14 max-w-xl rounded bg-white p-10 text-center">
                <p className="text-base text-body">{s.pricing.lead}</p>
                <p className="mt-4 font-heading text-[64px] leading-none text-navy">
                  {t.servicePage.from} <CountUp to={s.pricing.value} /> €
                </p>
                <p className="mt-2 text-small text-muted">{s.pricing.unit}</p>
                <Link href={localizeHref("/#kontakt", lang)} className="btn-primary mt-8 w-full sm:w-auto">
                  <span className="btn-roll">
                    <span className="btn-roll-text" data-hover={t.interested}>
                      {t.interested}
                    </span>
                  </span>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {extra}
      <SpolupracaSection lang={lang} />
    </main>
  );
}
