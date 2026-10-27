import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Zamestnanie | ADP Accounting - Účtovníctvo Bratislava",
  description:
    "Hľadáte prácu v účtovníctve v Bratislave? Hľadáme účtovníka/účtovníčku a senior účtovníka/účtovníčku. Pridajte sa k tímu A.D.P. Accounting.",
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

interface Position {
  id: string;
  title: string;
  intro: string;
  salary: string;
  salaryNote: string;
  education: string;
  tasks: string[];
  typicalDay: string[];
  requirements: string[];
  extras: string[];
  note?: string;
  profesia: string;
}

const POSITIONS: Position[] = [
  {
    id: "senior-uctovnik",
    title: "Senior účtovník/účtovníčka",
    intro:
      "Do nášho tímu hľadáme nového kolegu či kolegyňu so záujmom o moderné účtovníctvo a digitálne nástroje. Pracujeme s aplikáciou Doklado, ktorá nám zjednodušuje spracovanie dokladov a odbúrava rutinu – vďaka tomu sa môžete viac venovať tomu, na čom skutočne záleží.",
    salary: "od 2 500 EUR / mesiac",
    salaryNote: "v závislosti od skúseností a praxe, 13. plat",
    education: "VŠ II. stupňa, ekonomické · prax 4 roky",
    tasks: [
      "organizovať, kontrolovať a viesť tím junior účtovníkov (2-3 juniori)",
      "spracovávať podvojné účtovníctvo pre viacero klientov (bez spracovania miezd) v programe POHODA",
      "pripravovať podklady, spracovávať, kontrolovať a vyhotovovať priznania DPH, KV, DPPO a ÚZ",
      "komunikovať s klientmi, finančnou správou a s úradmi štátnej správy",
      "aktívne sa podieľať na zlepšovaní interných procesov a digitalizácii účtovných agend",
    ],
    typicalDay: [
      "rozdeliť úlohy juniorom a skontrolovať rozpracované zadania",
      "spracovávať účtovné doklady načítané cez Doklado priamo do systému",
      "telefonovať a mailovať s klientmi, prípadne komunikovať s úradmi",
      "venovať sa odbornému rozvoju",
      "práca v modernej kancelárii, pracovný čas 8:00 – 16:30 s možnosťou flexibility podľa dohody",
    ],
    requirements: [
      "znalosť účtovného programu POHODA (pokročilý)",
      "vzdelanie v oblasti ekonomiky/účtovníctva (vysokoškolské II. stupňa)",
      "prax v zostavovaní účtovných závierok právnických osôb",
      "skúsenosť s vedením účtovníctva viacerých spoločností",
      "zodpovednosť, samostatnosť, proaktivita",
      "precíznosť a presnosť pri plnení úloh",
      "ovládanie MS Office (Word, Excel, Outlook) na pokročilej úrovni",
      "prax na pozícii účtovníka minimálne 4 roky",
    ],
    extras: ["Služobné auto na súkromné účely"],
    profesia: "https://www.profesia.sk/praca/a-d-p-accounting/O5316700",
  },
  {
    id: "uctovnik",
    title: "Účtovník/účtovníčka",
    intro:
      "Do nášho tímu hľadáme nového kolegu/kolegyňu so záujmom o moderné spracovanie účtovníctva. Pracujeme s najnovšími technológiami vrátane aplikácie Doklado na spracovanie účtovných dokladov, ktorá zjednodušuje každodennú prácu a eliminuje rutinné úkony. Novému členovi alebo novej členke tímu poskytneme podporu skúseného tímlídra, dôkladné zaškolenie a priestor na odborný rast.",
    salary: "2 000 – 2 500 EUR / mesiac",
    salaryNote: "v závislosti od skúseností a praxe, 13. plat, benefity",
    education: "SŠ s maturitou, ekonomické · prax 3 roky",
    tasks: [
      "účtovanie prijatých a vydaných faktúr",
      "účtovanie pokladničných dokladov",
      "párovanie platieb a kontrola saldokonta",
      "príprava a podávanie daňových priznaní k DPH a kontrolných výkazov",
      "spracovanie daňových priznaní k dani z príjmov právnických osôb (DPPO)",
      "príprava a zostavenie účtovných závierok",
      "komunikácia s klientmi a orgánmi finančnej správy, poskytovanie súvisiacich informácií",
      "spolupráca s ostatnými členmi účtovného tímu",
    ],
    typicalDay: [
      "kontrola, vyťaženie a prenos účtovných dokladov z aplikácie Doklado",
      "zaúčtovanie dokladov a párovanie bankových transakcií",
      "príprava podkladov pre DPH a kontrolný výkaz",
      "komunikácia s klientmi pri riešení účtovných otázok",
      "administratívne a organizačné úlohy súvisiace s vedením účtovníctva",
    ],
    requirements: [
      "vzdelanie v oblasti ekonómie alebo účtovníctva (minimálne stredoškolské s maturitou)",
      "prax na pozícii účtovníka minimálne 3 roky",
      "znalosť účtovného programu POHODA (výhodou, nie je podmienkou)",
      "zodpovedný a precízny prístup k práci",
      "schopnosť samostatnej aj tímovej práce",
      "ochota učiť sa nové postupy a ďalej sa vzdelávať v oblasti účtovníctva a daní",
      "pozitívny prístup k práci s modernými digitálnymi technológiami",
      "dôslednosť pri dodržiavaní termínov a pracovných postupov",
    ],
    extras: ["Podpora skúseného tímlídra a dôkladné zaškolenie", "Príspevok na stravovanie a dopravu"],
    note: "Spracovanie miezd zabezpečuje samostatný mzdový účtovník/účtovníčka.",
    profesia: "https://www.profesia.sk/praca/a-d-p-accounting/O5354183",
  },
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
              práca s číslami baví. Pozrite si naše aktuálne otvorené pracovné pozície.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row">
              <a href="#pozicie" className="btn-primary w-full sm:w-auto text-center">
                <span className="btn-roll">
                  <span className="btn-roll-text" data-hover="Pozrieť ponuky">
                    Pozrieť ponuky
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

      {/* Overview of open positions */}
      <section id="pozicie" className="section bg-white scroll-mt-24">
        <div className="wrap">
          <h2 className="text-h4 md:text-h2">Aktuálne otvorené pozície</h2>
          <span className="rule" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {POSITIONS.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="group rounded border border-line p-8 transition-colors hover:border-sand-dark"
              >
                <h3 className="font-heading text-h4 text-navy">{p.title}</h3>
                <p className="mt-3 text-small text-muted">{p.education}</p>
                <p className="mt-4 font-semibold text-navy">{p.salary}</p>
                <p className="mt-6 text-navsm font-bold uppercase text-navy group-hover:text-sand-dark">
                  Detail ponuky →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {POSITIONS.map((p, i) => (
        <PositionDetail key={p.id} position={p} alt={i % 2 === 0} />
      ))}

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
            <h2 className="font-heading text-h3 text-white">Máte záujem pridať sa k nám?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base text-white/80">
              Svoje životopisy zasielajte na email <a href="mailto:raus@adpacc.sk" className="underline font-semibold hover:text-sand-dark">raus@adpacc.sk</a> alebo reagujte na niektorú z našich ponúk na Profesia.sk.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.profesia.sk/praca/a-d-p-accounting/C28995"
                target="_blank"
                rel="noopener"
                className="btn-sand w-full sm:w-auto text-center"
              >
                <span className="btn-roll">
                  <span className="btn-roll-text" data-hover="Všetky ponuky na Profesia.sk">
                    Všetky ponuky na Profesia.sk
                  </span>
                </span>
              </a>
              <a
                href="mailto:raus@adpacc.sk?subject=Reakcia%20na%20ponuku"
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

function PositionDetail({ position: p, alt }: { position: Position; alt: boolean }) {
  return (
    <section id={p.id} className={`section scroll-mt-24 ${alt ? "bg-paper" : "bg-white"}`}>
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-block rounded bg-sand-dark/25 px-3 py-1 text-navsm font-bold uppercase text-navy">
              Aktuálne otvorená pozícia
            </span>
            <h2 className="mt-3 text-h3 text-navy md:text-h2">{p.title}</h2>
          </div>
          <a href={p.profesia} target="_blank" rel="noopener" className="btn-primary w-full sm:w-auto text-center">
            <span className="btn-roll">
              <span className="btn-roll-text" data-hover="Mám záujem">
                Mám záujem
              </span>
            </span>
          </a>
        </div>
        <span className="rule" />

        <p className="mt-8 max-w-4xl text-base text-body leading-relaxed">{p.intro}</p>

        {/* Job Info Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded border border-line bg-white p-6">
            <p className="text-small text-muted">Miesto práce</p>
            <p className="mt-2 font-semibold text-navy">Hraničná 53, 821 05 Bratislava</p>
          </div>
          <div className="rounded border border-line bg-white p-6">
            <p className="text-small text-muted">Druh pracovného pomeru</p>
            <p className="mt-2 font-semibold text-navy">plný úväzok</p>
          </div>
          <div className="rounded border border-line bg-white p-6">
            <p className="text-small text-muted">Termín nástupu</p>
            <p className="mt-2 font-semibold text-navy">dohodou</p>
          </div>
          <div className="rounded border border-line bg-white p-6">
            <p className="text-small text-muted">Mzdové podmienky (brutto)</p>
            <p className="mt-2 font-heading text-h5 text-navy">{p.salary}</p>
            <p className="mt-1 text-[12px] text-faint">{p.salaryNote}</p>
          </div>
        </div>

        {/* Job Tasks and Requirements */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-heading text-h4 text-navy">Náplň práce, právomoci a zodpovednosti</h3>
            <CheckList items={p.tasks} />
            {p.note && <p className="mt-4 text-small text-muted">{p.note}</p>}

            <h4 className="mt-10 font-heading text-h5 text-navy">Typický deň u nás:</h4>
            <ul className="mt-4 space-y-2">
              {p.typicalDay.map((d) => (
                <li key={d} className="list-disc list-inside text-base text-body pl-2">
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded p-8 lg:p-10 ${alt ? "bg-white" : "bg-paper"}`}>
            <h3 className="font-heading text-h4 text-navy">Požiadavky na zamestnanca</h3>
            <CheckList items={p.requirements} />

            <h4 className="mt-10 font-heading text-h5 text-navy">Navyše pri tejto pozícii:</h4>
            <CheckList items={p.extras} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 text-base text-body">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/icon-check.svg" alt="" className="mt-1 h-4 w-4 shrink-0" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
