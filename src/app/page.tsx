import Image from "next/image";
import Link from "next/link";
import {
  hero,
  clientsStrip,
  services,
  whyUs,
  digital,
  about,
  team,
  referencie,
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
      {/* Hero */}
      <section className="bg-sand">
        <div className="wrap grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
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
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Clients strip */}
      <section className="border-b border-line bg-white py-10">
        <div className="wrap">
          <p className="text-center text-small uppercase tracking-wide text-faint">
            {clientsStrip.label}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {clientsStrip.logos.map((src) => (
              <Image key={src} src={src} alt="Logo klienta" width={140} height={48} className="h-10 w-auto" />
            ))}
          </div>
        </div>
      </section>

      {/* Služby */}
      <section id="sluzby" className="scroll-mt-20 py-16 md:py-24">
        <div className="wrap">
          <h2 className="text-h3 md:text-h2">{services.h2}</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <h4 className="text-h5 md:text-h4">{services.h4}</h4>
            </div>
            <div className="space-y-4 text-base text-body">
              <p>{services.p1}</p>
              <p>{services.p2}</p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.cards.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group rounded-xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0px_10px_30px_0px_rgba(0,0,0,0.07)]"
              >
                <h3 className="font-sans text-lead font-bold text-navy">{c.title}</h3>
                <p className="mt-3 text-small text-muted">{c.text}</p>
                <span className="mt-4 inline-block text-navsm font-semibold uppercase text-red group-hover:underline">
                  Zistiť viac →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Prečo si vybrať nás */}
      <section className="bg-navy py-16 text-white md:py-24">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-2">
            <h2 className="text-h3 text-white md:text-h2">{whyUs.h2}</h2>
            <p className="text-lead text-white/80">{whyUs.p}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/15 p-7">
                <p className="font-heading text-h2 text-white">
                  {s.value}
                  <span className="text-sand-dark">{s.suffix}</span>
                </p>
                <p className="mt-2 text-small text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digitálne účtovníctvo */}
      <section className="py-16 md:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-h3 md:text-h2">{digital.h2}</h2>
            <div className="mt-6 space-y-4 text-base text-body">
              {digital.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <ul className="space-y-4 rounded-2xl bg-paper p-8">
            {digital.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-ink">
                <Check />
                {item}
              </li>
            ))}
            <li className="pt-2">
              <Image
                src="/images/digital-1.png"
                alt="Aplikácia Doklado"
                width={900}
                height={600}
                className="w-full rounded-xl"
              />
            </li>
          </ul>
        </div>
      </section>

      {/* O nás */}
      <section className="bg-sand py-16 md:py-24">
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
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Náš tím */}
      <section className="py-16 md:py-24">
        <div className="wrap">
          <h2 className="text-h3 md:text-h2">{team.h2}</h2>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4">
            {team.members.map((m) => (
              <article
                key={m.name}
                className="w-[300px] shrink-0 snap-start rounded-xl border border-line bg-white"
              >
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={600}
                  height={700}
                  className="aspect-[6/7] w-full rounded-t-xl object-cover"
                />
                <div className="p-6">
                  <h3 className="font-sans text-base font-bold text-navy">{m.name}</h3>
                  <p className="text-small text-sand-dark">{m.role}</p>
                  <p className="mt-3 text-small text-muted">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Referencie */}
      <section id="referencie" className="scroll-mt-20 border-t border-line bg-paper py-16 md:py-24">
        <div className="wrap">
          <h2 className="text-h3 md:text-h2">{referencie.h2}</h2>
          <p className="mt-4 max-w-2xl text-lead text-body">{referencie.intro}</p>
          {/* TODO: testimonial cards (extract exact quotes from origin) */}
        </div>
      </section>
    </main>
  );
}
