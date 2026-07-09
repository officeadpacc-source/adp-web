import Image from "next/image";
import Link from "next/link";
import ClientsBand from "@/components/ClientsBand";
import Carousel from "@/components/Carousel";
import CountUp from "@/components/CountUp";
import SpolupracaSection from "@/components/SpolupracaSection";
import { STAT_ICONS } from "@/components/StatIcons";
import {
  hero,
  services,
  whyUs,
  digital,
  referencie,
  about,
  team,
  hodnoty,
} from "@/content/home";

const SERVICE_ICONS = [
  "/images/icon-podvojne.svg",
  "/images/icon-mzdy.svg",
  "/images/icon-jednoduche.svg",
  "/images/icon-ostatne.svg",
];

const REF_LOGOS = Array.from({ length: 12 }, (_, i) => `/images/reflogo-${i + 1}.png`);

export default function Home() {
  return (
    <main>
      {/* 1 · Hero — sand; h1 left, lead + buttons right; full-bleed photo below */}
      <section className="bg-sand">
        <div className="wrap grid gap-8 py-14 md:grid-cols-[1.15fr_1fr] md:gap-16 md:py-16">
          <h1 className="text-h3 md:text-h1">{hero.h1}</h1>
          <div className="self-center">
            <p className="text-lead text-body">{hero.lead}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={hero.primary.href} className="btn-primary">
                {hero.primary.label}
              </Link>
              <Link href={hero.secondary.href} className="btn-outline">
                {hero.secondary.label}
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/images/hero.jpg"
          alt="Tím A.D.P. Accounting"
          width={2400}
          height={1350}
          priority
          className="max-h-[640px] w-full object-cover object-top"
        />
      </section>

      {/* 2 · Clients marquee — navy */}
      <ClientsBand />

      {/* 3 · Služby — white, 120px; 2×2 paper cards with gold icons */}
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
              <div key={c.href} className="flex gap-6 rounded bg-paper p-8 md:p-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={SERVICE_ICONS[i]} alt="" className="h-12 w-12 shrink-0 md:h-14 md:w-14" />
                <div>
                  <h3 className="font-heading text-h5 text-navy md:text-[30px] md:leading-[1.2]">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base text-body">{c.text}</p>
                  <Link
                    href={c.href}
                    className="mt-5 inline-block text-navsm font-semibold uppercase text-navy hover:underline"
                  >
                    Zobraziť viac →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Prečo si vybrať nás — sand; white stat cards with navy icons */}
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

      {/* 5 · Digitálne účtovníctvo — navy; text+checklist left, app+logo right */}
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
              alt="Aplikácia Doklado"
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

      {/* 6 · Referencie — paper; heading + logo grid, 3-per-view carousel */}
      <section id="referencie" className="section scroll-mt-24 bg-paper">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-h4 md:text-h2">{referencie.h2}</h2>
              <span className="rule" />
              <p className="mt-8 text-base text-body">{referencie.intro}</p>
            </div>
            <div className="grid grid-cols-3 items-center gap-x-10 gap-y-8 sm:grid-cols-6">
              {REF_LOGOS.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt="Logo klienta"
                  width={130}
                  height={80}
                  className="mx-auto h-14 w-auto opacity-60 grayscale md:h-20"
                />
              ))}
            </div>
          </div>
          <div className="mt-16">
            <Carousel slideClass="basis-[85%] md:basis-[calc(33.333%-16px)]">
              {referencie.quotes.map((q, i) => (
                <figure key={q.slice(2, 26)} className="card flex h-full flex-col gap-6 p-6">
                  {i < 2 && (
                    <Image
                      src={`/images/cardlogo-${i + 1}.png`}
                      alt=""
                      width={200}
                      height={95}
                      className="mx-auto h-20 w-auto"
                    />
                  )}
                  <blockquote className="text-base text-slate">{q}</blockquote>
                </figure>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* 7 · O nás — white, pt 120 pb 0 */}
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
            alt="Tím A.D.P. Accounting"
            width={1200}
            height={900}
            className="w-full rounded object-cover"
          />
        </div>
      </section>

      {/* 8 · Náš tím — white, pt 120; 4-per-view carousel, borderless cards */}
      <section className="bg-white pt-16 md:pt-[120px]">
        <div className="wrap">
          <h2 className="text-h4 md:text-h2">{team.h2}</h2>
          <span className="rule" />
          <div className="mt-12">
            <Carousel slideClass="basis-[75%] sm:basis-[calc(50%-12px)] lg:basis-[calc(25%-18px)]">
              {team.members.map((m) => (
                <article key={m.name}>
                  <Image
                    src={m.photo}
                    alt={m.name}
                    width={600}
                    height={700}
                    className="aspect-[6/7] w-full object-cover"
                  />
                  <p className="mt-5 text-small text-sand-dark">{m.role}</p>
                  <h3 className="mt-1 font-heading text-h5 text-navy">{m.name}</h3>
                  <p className="mt-3 text-small text-muted">{m.bio}</p>
                </article>
              ))}
            </Carousel>
          </div>
          <div className="mt-14 text-center">
            <p className="text-base text-body">{team.cta.text}</p>
            <a
              href={team.cta.href}
              target="_blank"
              rel="noopener"
              className="btn-outline mt-5"
            >
              {team.cta.label}
            </a>
          </div>
        </div>
      </section>

      {/* 9 · Ako prebieha spolupráca — shared section */}
      <SpolupracaSection />

      {/* 10 · Naše hodnoty — sand */}
      <section className="section bg-sand">
        <div className="wrap">
          <h2 className="text-h4 md:text-h2">{hodnoty.h2}</h2>
          <span className="rule" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hodnoty.cards.map((c) => (
              <div key={c.title} className="rounded bg-white p-8">
                <h3 className="font-heading text-h5 text-navy">{c.title}</h3>
                {c.text && <p className="mt-3 text-base text-body">{c.text}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 · Kontakt (navy, in Footer) + 12 · marquee handled below */}
    </main>
  );
}
