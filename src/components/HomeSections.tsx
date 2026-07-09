import Image from "next/image";
import Link from "next/link";
import ClientsBand from "@/components/ClientsBand";
import ReferencieSection from "@/components/ReferencieSection";
import TeamSection from "@/components/TeamSection";
import CountUp from "@/components/CountUp";
import SpolupracaSection from "@/components/SpolupracaSection";
import { STAT_ICONS } from "@/components/StatIcons";
import { homeFor, uiFor, type Lang } from "@/lib/i18n";

const SERVICE_ICONS = [
  "/images/icon-podvojne.svg",
  "/images/icon-mzdy.svg",
  "/images/icon-jednoduche.svg",
  "/images/icon-ostatne.svg",
];

/** The full homepage, rendered by both the SK (/) and EN (/en) routes. */
export default function HomeSections({ lang = "sk" }: { lang?: Lang }) {
  const { hero, services, whyUs, digital, about, hodnoty } = homeFor(lang);
  const t = uiFor(lang);

  return (
    <main>
      {/* 1 · Hero */}
      <section className="bg-sand">
        <div className="wrap grid gap-8 py-14 md:grid-cols-[1.15fr_1fr] md:gap-16 md:py-16">
          <h1 className="text-h3 md:text-h1">{hero.h1}</h1>
          <div className="self-center">
            <p className="text-lead text-body">{hero.lead}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={hero.primary.href} className="btn-primary w-full sm:w-auto">
                <span className="btn-roll">
                  <span className="btn-roll-text" data-hover={hero.primary.label}>
                    {hero.primary.label}
                  </span>
                </span>
              </Link>
              <Link href={hero.secondary.href} className="btn-outline w-full sm:w-auto">
                <span className="btn-roll">
                  <span className="btn-roll-text" data-hover={hero.secondary.label}>
                    {hero.secondary.label}
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/images/hero.jpg"
          alt="A.D.P. Accounting"
          width={2400}
          height={1350}
          priority
          className="h-auto w-full"
        />
      </section>

      {/* 2 · Clients marquee */}
      <ClientsBand lang={lang} />

      {/* 3 · Services */}
      <section id="sluzby" className="section scroll-mt-24 bg-white">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-h4 md:text-h2">{services.h2}</h2>
              <span className="rule" />
              <h4 className="mt-8 text-h5 md:text-h4">{services.h4}</h4>
            </div>
            <div className="space-y-4 self-end text-base text-body">
              <p>{services.p1}</p>
              <p>{services.p2}</p>
            </div>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {services.cards.map((c, i) => (
              <div
                key={c.href}
                className="flex flex-col gap-5 rounded bg-paper p-8 md:flex-row md:gap-6 md:p-10"
              >
                <div className="flex items-center gap-4 md:block md:shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SERVICE_ICONS[i]} alt="" className="h-12 w-12 md:h-14 md:w-14" />
                  <h3 className="font-heading text-h5 text-navy md:hidden">{c.title}</h3>
                </div>
                <div>
                  <h3 className="hidden font-heading text-h5 text-navy md:block md:text-[30px] md:leading-[1.2]">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base text-body">{c.text}</p>
                  <Link
                    href={c.href}
                    className="mt-5 inline-block text-navsm font-semibold uppercase text-navy hover:underline"
                  >
                    {t.showMore} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Why choose us */}
      <section className="section bg-sand">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-h4 md:text-h2">{whyUs.h2}</h2>
            <span className="rule" />
            <p className="mt-8 text-base text-body">{whyUs.p}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {whyUs.stats.map((s, i) => {
              const Icon = STAT_ICONS[i];
              return (
                <div
                  key={s.label}
                  className="flex flex-col items-center rounded bg-white p-8 text-center text-navy"
                >
                  <Icon />
                  <p className="mt-4 font-heading text-h2 text-navy">
                    {typeof s.value === "number" ? (
                      <CountUp to={s.value} suffix={s.suffix} />
                    ) : (
                      s.value
                    )}
                  </p>
                  <p className="mt-2 text-small text-muted">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5 · Digital accounting */}
      <section className="section bg-navy text-white">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h4 text-white md:text-h2">{digital.h2}</h2>
            <span className="rule" />
            <div className="mt-8 space-y-4 text-base text-white/85">
              {digital.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 space-y-4">
              {digital.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/icon-check.svg" alt="" className="mt-0.5 h-5 w-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <Image
              src="/images/doklado-app.png"
              alt="Doklado app"
              width={1080}
              height={800}
              className="w-full"
            />
            <Image
              src="/images/doklado-logo.png"
              alt="Doklado"
              width={300}
              height={80}
              className="mx-auto mt-10 h-12 w-auto"
            />
          </div>
        </div>
      </section>

      {/* 6 · References */}
      <ReferencieSection lang={lang} />

      {/* 7 · About */}
      <section className="bg-white pt-16 md:pt-[120px]">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h4 md:text-h2">{about.label}</h2>
            <span className="rule" />
            <p className="mt-8 text-base text-body">{about.text}</p>
            <div className="mt-10 flex gap-16">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-h2 text-navy">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-small text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/images/about.jpg"
            alt="A.D.P. Accounting"
            width={1200}
            height={900}
            className="w-full rounded object-cover"
          />
        </div>
      </section>

      {/* 8 · Team */}
      <TeamSection lang={lang} />

      {/* 9 · Cooperation */}
      <SpolupracaSection lang={lang} />

      {/* 10 · Values */}
      <section className="section bg-sand">
        <div className="wrap">
          <h2 className="text-h4 md:text-h2">{hodnoty.h2}</h2>
          <span className="rule" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hodnoty.cards.map((c) => (
              <div key={c.title} className="flex flex-col items-start rounded bg-white p-8">
                {c.icon && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={c.icon} alt="" className="mb-6 h-12 w-12" />
                )}
                <h3 className="font-heading text-h5 text-navy">{c.title}</h3>
                {c.text && <p className="mt-3 text-base text-body">{c.text}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
