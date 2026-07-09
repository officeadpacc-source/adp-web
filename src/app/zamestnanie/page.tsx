import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Zamestnanie | ADP Accounting - Účtovníctvo Bratislava",
  description:
    "Hľadáte prácu v účtovníctve alebo mzdách v Bratislave? Pozrite si voľné pozície v A.D.P. Accounting a pošlite nám životopis.",
  alternates: { canonical: "/zamestnanie/" },
};

const PERKS = [
  {
    title: "Stabilita a skúsenosti",
    text: "Viac ako 20 rokov na trhu a stabilné portfólio klientov od malých firiem po väčšie spoločnosti.",
  },
  {
    title: "Odborný rast",
    text: "Práca na rôznorodej agende — podvojné aj jednoduché účtovníctvo, mzdy, dane. Podporujeme vzdelávanie a sledovanie legislatívy.",
  },
  {
    title: "Osobný prístup",
    text: "Malý kolektív, priama komunikácia a férové podmienky. U nás nie ste len číslo.",
  },
];

const ROLES = [
  "Účtovník / účtovníčka — podvojné účtovníctvo (Bratislava)",
  "Mzdový účtovník / účtovníčka",
  "Absolventi ekonomických škôl — zaškolíme",
];

export default function Zamestnanie() {
  return (
    <main>
      <section className="bg-sand">
        <div className="wrap py-14 md:py-20">
          <h1 className="text-h3 md:text-h1">Zamestnanie v A.D.P. Accounting</h1>
          <span className="rule" />
          <p className="mt-8 max-w-2xl text-lead text-body">
            Sme účtovná kancelária v Bratislave s viac ako 20-ročnými skúsenosťami. Hľadáte prácu
            v účtovníctve, mzdách alebo administratíve? Radi spoznáme šikovných ľudí, ktorých
            práca s číslami baví.
          </p>
        </div>
        <Image
          src="/sluzby/zamestnanie.jpg"
          alt="Zamestnanie v A.D.P. Accounting"
          width={2400}
          height={1200}
          priority
          className="max-h-[520px] w-full object-cover"
        />
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <h2 className="text-h4 md:text-h2">Prečo pracovať u nás</h2>
          <span className="rule" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PERKS.map((p) => (
              <div key={p.title} className="rounded bg-paper p-8">
                <h3 className="font-heading text-h5 text-navy">{p.title}</h3>
                <p className="mt-3 text-base text-body">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper pt-0 md:pt-0">
        <div className="wrap">
          <h2 className="pt-16 text-h4 md:pt-[120px] md:text-h2">Koho hľadáme</h2>
          <span className="rule" />
          <ul className="mt-10 space-y-4">
            {ROLES.map((r) => (
              <li key={r} className="flex items-start gap-3 text-base text-ink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/icon-check.svg" alt="" className="mt-0.5 h-5 w-5" />
                {r}
              </li>
            ))}
          </ul>
          <div className="mt-14 rounded bg-navy p-10 text-white md:p-12">
            <h2 className="font-heading text-h4 text-white">Zaujala vás práca u nás?</h2>
            <p className="mt-3 max-w-xl text-base text-white/80">
              Aktuálne ponuky voľných pracovných miest a inzeráty našej spoločnosti nájdete na portáli Profesia.sk.
            </p>
            <a
              href="https://www.profesia.sk/praca/a-d-p-accounting/C28995"
              target="_blank"
              rel="noopener"
              className="btn-sand mt-8 w-full sm:w-auto text-center"
            >
              <span className="btn-roll">
                <span className="btn-roll-text" data-hover="Pozrieť ponuky na Profesia.sk">
                  Pozrieť ponuky na Profesia.sk
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
