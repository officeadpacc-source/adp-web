import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Zamestnanie | ADP Accounting - Účtovníctvo Bratislava",
  description:
    "Hľadáte prácu v účtovníctve v Bratislave? Pozrite si voľnú pozíciu Samostatnej účtovníčky a pridajte sa k tímu A.D.P. Accounting.",
  alternates: { canonical: "/zamestnanie/" },
};

const BENEFITS = [
  {
    title: "Flexibilita",
    text: "Možnosť vykonávať prácu čiastočne na diaľku (home office po zaškolení) a prispôsobiť si pracovný čas podľa potrieb.",
  },
  {
    title: "Vzdelávanie",
    text: "Pravidelné odborné školenia a semináre, ktoré vám pomôžu rozvíjať vaše profesijné zručnosti a vedomosti.",
  },
  {
    title: "Podpora pri práci",
    text: "Konzultácie s daňovým poradcom a predplatené daňové a účtovné portály pre uľahčenie práce a zabezpečenie kvality.",
  },
  {
    title: "Rast a sebarealizácia",
    text: "Možnosť sebarealizácie, odborného rastu v rámci svojej pracovnej pozície a aktívny prínos k rozvoju spoločnosti.",
  },
  {
    title: "Tímové akcie",
    text: "Pravidelné firemné akcie pre zamestnancov, kde si môžete oddýchnuť, spoznať kolegov a upevniť vzťahy v tíme.",
  },
  {
    title: "Príjemné prostredie",
    text: "Moderné pracovné prostredie, profesionálny prístup a príjemná, rodinná pracovná atmosféra.",
  },
];

const JOB_TASKS = [
  "organizácia, kontrola a vedenie tímu junior účtovníkov (3 juniori)",
  "spracovanie podvojného účtovníctva pre viacero klientov bez spracovania miezd v účtovnom programe POHODA prostredníctvom využitia najnovších informačných technológií /aplikácia doklado",
  "príprava podkladov, spracovanie, kontrola a vyhotovenie DPH, KV, DPPO a ÚZ",
  "komunikácia s klientmi, audítormi a finančnou správou",
];

const TYPICAL_DAY = [
  "plánovanie a kontrola práce juniorov",
  "nahodenie alebo prenos načítaných účtovných dokladov z aplikácie Doklado",
  "spracovanie podvojného účtovníctva",
  "komunikácia s klientmi",
  "na tejto pracovnej pozícii sa zvyčajne pracuje v kancelárii s pracovným časom od 8:00 do 16:30.",
];

const REQUIREMENTS = [
  "znalosť účtovného programu POHODA (pokročilý)",
  "vzdelanie v oblasti ekonomiky/účtovníctva (minimálne stredoškolské s maturitou)",
  "prax v zostavovaní účtovných závierok právnických osôb",
  "skúsenosť s vedením účtovníctva viacerých spoločností",
  "zodpovednosť, samostatnosť, proaktivita",
  "precíznosť a presnosť pri plnení úloh",
  "ovládanie MS Office (Word, Excel, Outlook) na pokročilej úrovni",
  "prax na pozícii účtovníka minimálne 4 roky",
];

export default function Zamestnanie() {
  return (
    <main>
      {/* Hero Grid Section */}
      <section className="bg-sand">
        <div className="wrap grid gap-8 py-14 md:grid-cols-[1.1fr_1fr] md:gap-16 md:py-16">
          <div>
            <h1 className="text-h3 md:text-h1">Zamestnanie v A.D.P. Accounting</h1>
          </div>
          <div className="self-center">
            <p className="text-lead text-body">
              Sme účtovná kancelária v Bratislave s viac ako 20-ročnými skúsenosťami. Hľadáte prácu
              v účtovníctve, mzdách alebo administratíve? Radi spoznáme šikovných ľudí, ktorých
              práca s číslami baví. Pozrite si našu aktuálne otvorenú pracovnú pozíciu.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row">
              <a href="#pozicia" className="btn-primary w-full sm:w-auto text-center">
                <span className="btn-roll">
                  <span className="btn-roll-text" data-hover="Pozrieť ponuku">
                    Pozrieť ponuku
                  </span>
                </span>
              </a>
            </div>
          </div>
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

      {/* Job Detail Section */}
      <section id="pozicia" className="section bg-white scroll-mt-24">
        <div className="wrap">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="inline-block rounded bg-sand-dark/25 px-3 py-1 text-navsm font-bold uppercase text-navy">
                Aktuálne otvorená pozícia
              </span>
              <h2 className="mt-3 text-h3 text-navy md:text-h2">Samostatná účtovníčka</h2>
            </div>
            <a
              href="#prihlaska"
              className="btn-primary w-full sm:w-auto text-center"
            >
              <span className="btn-roll">
                <span className="btn-roll-text" data-hover="Mám záujem">
                  Mám záujem
                </span>
              </span>
            </a>
          </div>
          <span className="rule" />

          {/* Job Info Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded border border-line p-6">
              <p className="text-small text-muted">Miesto práce</p>
              <p className="mt-2 font-semibold text-navy">Hraničná 53, 821 05 Bratislava</p>
            </div>
            <div className="rounded border border-line p-6">
              <p className="text-small text-muted">Druh pracovného pomeru</p>
              <p className="mt-2 font-semibold text-navy">plný úväzok</p>
            </div>
            <div className="rounded border border-line p-6">
              <p className="text-small text-muted">Termín nástupu</p>
              <p className="mt-2 font-semibold text-navy">dohodou</p>
            </div>
            <div className="rounded border border-line p-6 bg-sand-dark/5">
              <p className="text-small text-muted">Mzdové podmienky (brutto)</p>
              <p className="mt-2 font-heading text-h4 text-navy">2 500 EUR / mesiac</p>
              <p className="mt-1 text-[12px] text-faint">v závislosti od skúseností, 13. plat</p>
            </div>
          </div>

          {/* Job Tasks and Requirements */}
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="font-heading text-h4 text-navy">Náplň práce, právomoci a zodpovednosti</h3>
              <ul className="mt-6 space-y-3">
                {JOB_TASKS.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-base text-body">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/icon-check.svg" alt="" className="mt-1 h-4 w-4 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-10 font-heading text-h5 text-navy">Typický deň u nás:</h4>
              <ul className="mt-4 space-y-2">
                {TYPICAL_DAY.map((d) => (
                  <li key={d} className="list-disc list-inside text-base text-body pl-2">
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded bg-paper p-8 lg:p-10">
              <h3 className="font-heading text-h4 text-navy">Požiadavky na zamestnanca</h3>
              <ul className="mt-6 space-y-3">
                {REQUIREMENTS.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-base text-body">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/icon-check.svg" alt="" className="mt-1 h-4 w-4 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="section bg-sand">
        <div className="wrap">
          <h2 className="text-h4 md:text-h2">Zamestnanecké výhody a benefity</h2>
          <span className="rule" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <h3 className="font-heading text-h5 text-navy">{b.title}</h3>
                <p className="mt-3 text-base text-body">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company & Application Section */}
      <section className="section bg-white">
        <div className="wrap max-w-4xl">
          <h2 className="text-h4 md:text-h2">Inzerujúca spoločnosť</h2>
          <span className="rule" />
          <p className="mt-8 text-base text-body leading-relaxed">
            Sme dynamická a stabilná spoločnosť s otvorenou a priateľskou firemnou kultúrou. Už viac ako 20 rokov poskytujeme našim klientom profesionálne služby v oblasti účtovníctva, miezd a personalistiky. Našou prioritou je ľudský prístup a individuálne riešenia, vďaka ktorým dokážeme naplniť očakávania a potreby každého klienta. Naším cieľom je ponúkať kvalitné a spoľahlivé služby, pričom si zakladáme na dlhodobých a korektných vzťahoch.
          </p>

          <div id="prihlaska" className="mt-14 rounded bg-navy p-10 text-white md:p-12 scroll-mt-24 text-center">
            <h2 className="font-heading text-h3 text-white">Máte záujem o túto pozíciu?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base text-white/80">
              Svoje životopisy zasielajte v slovenskom jazyku na email <a href="mailto:raus@adpacc.sk" className="underline font-semibold hover:text-sand-dark">raus@adpacc.sk</a> alebo prejdite na našu ponuku na Profesia.sk.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.profesia.sk/praca/a-d-p-accounting/C28995"
                target="_blank"
                rel="noopener"
                className="btn-sand w-full sm:w-auto text-center"
              >
                <span className="btn-roll">
                  <span className="btn-roll-text" data-hover="Reagovať na Profesia.sk">
                    Reagovať na Profesia.sk
                  </span>
                </span>
              </a>
              <a
                href="mailto:raus@adpacc.sk?subject=Reakcia%20na%20ponuku%20-%20Samostatna%20uctovnicka"
                className="btn-outline border-white/30 text-white hover:bg-white hover:text-navy w-full sm:w-auto text-center"
              >
                <span className="btn-roll">
                  <span className="btn-roll-text" data-hover="Poslať email na raus@adpacc.sk">
                    Poslať email na raus@adpacc.sk
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
