import Image from "next/image";
import Link from "next/link";
import ClientsBand from "@/components/ClientsBand";
import {
  hero,
  services,
  whyUs,
  digital,
  referencie,
  about,
  team,
  spolupraca,
  hodnoty,
} from "@/content/home";

function Check() {
  return (
    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-bg text-[11px] font-bold text-green">
      ✓
    </span>
  );
}

export default function Home() {
  return (
    <main>
      {/* 1 · Hero — sand, 64px */}
      <section className="bg-sand">
        <div className="wrap grid items-center gap-8 py-16 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-h3 md:text-h1">{hero.h1}</h1>
            <p className="mt-6 max-w-xl text-lead text-body">{hero.lead}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={hero.primary.href} className="btn-primary">
                {hero.primary.label}
              </Link>
              <Link href={hero.secondary.href} className="btn-outline">
                {hero.secondary.label}
              </Link>
            </div>
          </div>
          <Image
            src="/images/hero.jpg"
            alt="A.D.P. Accounting — účtovníctvo Bratislava"
            width={1200}
            height={900}
            priority
            className="w-full rounded object-cover"
          />
        </div>
      </section>

      {/* 2 · Clients band — navy, 24px */}
      <ClientsBand />

      {/* 3 · Služby — white, 120px */}
      <section id="sluzby" className="section scroll-mt-20 bg-white">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-h4 md:text-h2">{services.h2}</h2>
              <h4 className="mt-6 text-h5 md:text-h4">{services.h4}</h4>
            </div>
            <div className="space-y-4 self-end text-base text-body">
              <p>{services.p1}</p>
              <p>{services.p2}</p>
            </div>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.cards.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="card group transition hover:shadow-[0px_10px_30px_0px_rgba(0,0,0,0.07)]"
              >
                <h3 className="font-sans text-lead font-bold text-navy">{c.title}</h3>
                <p className="mt-3 text-small text-muted">{c.text}</p>
                <span className="mt-4 inline-block text-navsm font-semibold uppercase text-navy group-hover:underline">
                  Zistiť viac →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Prečo si vybrať nás — sand, 120px */}
      <section className="section bg-sand">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <h2 className="text-h4 md:text-h2">{whyUs.h2}</h2>
            <p className="self-end text-lead text-body">{whyUs.p}</p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.stats.map((s) => (
              <div key={s.label} className="card">
                <p className="font-heading text-h2 text-navy">
                  {s.value}
                  <span className="text-sand-dark">{s.suffix}</span>
                </p>
                <p className="mt-2 text-small text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · Digitálne účtovníctvo — navy, 120px */}
      <section className="section bg-navy text-white">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-h4 text-white md:text-h2">{digital.h2}</h2>
            <div className="mt-6 space-y-4 text-base text-white/80">
              {digital.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <ul className="space-y-4">
              {digital.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-white">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <Image
              src="/images/digital-1.png"
              alt="Aplikácia Doklado"
              width={900}
              height={600}
              className="mt-8 w-full rounded"
            />
          </div>
        </div>
      </section>

      {/* 6 · Referencie — paper #F9F9F9, 120px */}
      <section id="referencie" className="section scroll-mt-20 bg-paper">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <h2 className="text-h4 md:text-h2">{referencie.h2}</h2>
            <p className="self-end text-lead text-body">{referencie.intro}</p>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {referencie.quotes.map((q) => (
              <figure key={q.slice(2, 30)} className="card flex flex-col gap-5">
                <blockquote className="text-base text-slate">{q}</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · O nás — white, pt 120 pb 0 */}
      <section className="bg-white pt-16 md:pt-[120px]">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-navsm font-semibold uppercase text-sand-dark">{about.label}</p>
            <p className="mt-4 text-lead text-ink">{about.text}</p>
            <div className="mt-8 flex gap-12">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-h2 text-navy">
                    {s.value}
                    <span className="text-sand-dark">{s.suffix}</span>
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

      {/* 8 · Náš tím — white, pt 120 pb 0, 9 members */}
      <section className="bg-white pt-16 md:pt-[120px]">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-h4 md:text-h2">{team.h2}</h2>
            <div className="flex items-center gap-5">
              <p className="text-base text-muted">{team.cta.text}</p>
              <a href={team.cta.href} target="_blank" rel="noopener" className="btn-outline">
                {team.cta.label}
              </a>
            </div>
          </div>
          <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 md:-mx-12 md:px-12">
            {team.members.map((m) => (
              <article key={m.name} className="card w-[300px] shrink-0 snap-start p-0">
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={600}
                  height={700}
                  className="aspect-[6/7] w-full rounded-t object-cover"
                />
                <div className="p-6">
                  <p className="text-small text-sand-dark">{m.role}</p>
                  <h3 className="mt-1 font-sans text-base font-bold text-navy">{m.name}</h3>
                  <p className="mt-3 text-small text-muted">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9 · Ako prebieha spolupráca — white, 120px */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <h2 className="text-h4 md:text-h2">{spolupraca.h2}</h2>
            <p className="self-end text-lead text-body">{spolupraca.intro}</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {spolupraca.steps.map((s, i) => (
              <div key={s.title} className="card">
                <p className="font-heading text-h3 text-sand-dark">0{i + 1}</p>
                <h3 className="mt-4 font-sans text-lead font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-small text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 · Naše hodnoty — sand, 120px */}
      <section className="section bg-sand">
        <div className="wrap">
          <h2 className="text-h4 md:text-h2">{hodnoty.h2}</h2>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hodnoty.cards.map((c) => (
              <div key={c.title} className="card">
                <h3 className="font-sans text-lead font-bold text-navy">{c.title}</h3>
                {c.text && <p className="mt-3 text-small text-muted">{c.text}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 · Kontakt (navy) + 12 · clients band live in <Footer /> */}
    </main>
  );
}
