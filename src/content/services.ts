/** Service subpages — content extracted 1:1 from the origin (SK). */

export interface ServiceContent {
  slug: string;
  title: string;
  tagline?: string;
  intro: string[];
  heroImg: string;
  featuresH2: string;
  features: { lead: string; rest: string }[];
  pricing:
    | { kind: "tiers"; note: string; alsoIntro: string; tiers: PriceTier[] }
    | { kind: "single"; note: string; alsoIntro: string; lead: string; value: number; unit: string }
    | { kind: "none" };
}

export interface PriceTier {
  name: string;
  subtitle: string;
  fit: string[];
  base: number;
  withPayroll: number;
}

export const services: Record<string, ServiceContent> = {
  "podvojne-uctovnictvo": {
    slug: "podvojne-uctovnictvo",
    title: "Podvojné účtovníctvo",
    intro: [
      "Spoľahlivé podvojné účtovníctvo je základom každého úspešného podnikania. Postaráme sa o to, aby vaše účtovníctvo bolo vedené precízne, v súlade s legislatívou a pripravené zvládnuť aj tie najnáročnejšie kontroly.",
      "Zabezpečujeme kompletné spracovanie účtovných dokladov, pravidelné výstupy pre manažérske rozhodovanie aj kontrolu súladu s daňovými predpismi.",
      "S nami máte istotu, že vaše financie stoja na pevných základoch.",
    ],
    heroImg: "/sluzby/podvojne.jpg",
    featuresH2: "Služby podvojného účtovníctva",
    features: [
      { lead: "Vyhotovenie", rest: "výkazov, reportov podľa konkrétnych požiadaviek klienta" },
      { lead: "Príprava", rest: "platobných príkazov pre účely splnenia všetkých daňových a odvodových povinností" },
      { lead: "Kontrola", rest: "nad správnosťou a úplnosťou predložených účtovných dokladov" },
      { lead: "Vedenie", rest: "účtovného denníka a hlavnej knihy" },
      { lead: "Evidencia", rest: "pohľadávok a záväzkov, sledovanie platobnej disciplíny odberateľov" },
      { lead: "Daňové priznania k DPH", rest: "z príjmov, z motorových vozidiel, spotrebné dane" },
    ],
    pricing: {
      kind: "tiers",
      note: "Odmena za spracovanie účtovnej evidencie je stanovená na základe časovej náročnosti – reálne odpracovaný čas. Uvedené cenové varianty sú orientačné. Klientom nie sú okrem mesačného paušálu účtované žiadne iné skryté poplatky.",
      alsoIntro: "Okrem služby podvojné účtovníctvo poskytujeme služby aj v jednoduché účtovníctvo a mzdy.",
      tiers: [
        {
          name: "Malý klient",
          subtitle: "Obrat do 100 tisíc eur",
          fit: ["Do 50 dokladov mesačne", "Do 5 zamestnancov"],
          base: 150,
          withPayroll: 225,
        },
        {
          name: "Stredný klient",
          subtitle: "Obrat do 1 milión eur",
          fit: ["Do 500 dokladov mesačne", "Do 10 zamestnancov"],
          base: 450,
          withPayroll: 600,
        },
        {
          name: "Veľký klient",
          subtitle: "Obrat nad 1 milión eur",
          fit: ["Nad 500 dokladov mesačne", "Nad 10 zamestnancov"],
          base: 1050,
          withPayroll: 1500,
        },
      ],
    },
  },
  "jednoduche-uctovnictvo": {
    slug: "jednoduche-uctovnictvo",
    title: "Jednoduché účtovníctvo",
    tagline: "Odteraz to bude jednoduché.",
    intro: [
      "Zabezpečíme pre Vás dokonalý prehľad o Vašich príjmoch a výdavkoch. Zverte svoje účtovné povinnosti nám a vy sa môžete venovať svojmu podnikaniu.",
    ],
    heroImg: "/sluzby/jednoducheuct.jpg",
    featuresH2: "Služby jednoduché účtovníctva",
    features: [
      { lead: "Vyhotovenie", rest: "výkazov, reportov podľa konkrétnych požiadaviek klienta" },
      { lead: "Príprava", rest: "platobných príkazov pre účely splnenia všetkých daňových a odvodových povinností" },
      { lead: "Kontrola", rest: "nad správnosťou a úplnosťou predložených účtovných dokladov" },
      { lead: "Vedenie", rest: "peňažného denníka" },
      { lead: "Evidencia", rest: "pohľadávok a záväzkov, sledovanie platobnej disciplíny odberateľov" },
      { lead: "Daňové priznania k DPH", rest: "z príjmov, z motorových vozidiel, spotrebné dane" },
    ],
    pricing: {
      kind: "single",
      note: "Odmena za spracovanie účtovnej evidencie je stanovená na základe časovej náročnosti – reálne odpracovaný čas. K vypracovaniu presnej cenovej ponuky je potrebné osobné stretnutie za účelom zistenia bližších informácií o spoločnosti z dôrazom na individuálne požiadavky. Uvedené cenové varianty sú orientačné. Klientom nie sú okrem mesačného paušálu účtované žiadne iné skryté poplatky.",
      alsoIntro: "Okrem služby jednoduché účtovníctvo poskytujeme služby aj v podvojné účtovníctvo a mzdy.",
      lead: "Orientačná cena za spracovanie jednoduchého účtovníctva je od:",
      value: 50,
      unit: "€ / mesačne",
    },
  },
  mzdy: {
    slug: "mzdy",
    title: "Mzdy a personalistika",
    tagline: "S nami to budete mať pod palcom.",
    intro: [
      "Prenechajte nám zodpovednosť za Vaše kompletné mzdové účtovníctvo. Budeme za Vás sledovať zmeny v legislatíve, spracovávať mzdy, odosielať výplatné pásky, poskytneme podporu Vašim zamestnancom pri riešení otázok týkajúcich sa výplatných pások a to so splnením najvyšších štandardov pre ochranu osobných údajov.",
    ],
    heroImg: "/sluzby/mzdove.webp",
    featuresH2: "Služby - mzdy a personalistika",
    features: [
      { lead: "Vyhotovenie", rest: "nových pracovných zmlúv a dodatkov" },
      { lead: "Evidencia", rest: "dochádzky" },
      { lead: "Výpočet", rest: "miezd a odvodov poistného" },
      { lead: "Vypracovanie", rest: "evidenčných a zápočtových listov, potvrdení o príjme a iných dokumentov na požiadanie" },
      { lead: "Spracovanie", rest: "a odoslanie mesačných výkazov" },
      { lead: "Príprava", rest: "platobných príkazov pre účely splnenia všetkých daňových a odvodových povinností" },
      { lead: "Komunikácia a zastupovanie", rest: "pred zdravotnými poisťovňami a úradmi štátnej správy" },
    ],
    pricing: {
      kind: "single",
      note: "V cene sú zahrnuté všetky činnosti týkajúce sa spracovania miezd a personalistiky, klientom nie sú účtované žiadne iné skryté poplatky.",
      alsoIntro: "Okrem služby mzdy poskytujeme služby aj v jednoduché účtovníctvo a podvojné účtovníctvo.",
      lead: "Cena za spracovanie mzdy a personalistiky jedného zamestnanca v pracovnom pomere na základe pracovnej zmluvy alebo dohody je:",
      value: 15,
      unit: "€ / mesačne",
    },
  },
  "ostatne-sluzby": {
    slug: "ostatne-sluzby",
    title: "Ostatné služby",
    tagline: "Extra je u nás štandardom.",
    intro: [
      "V rámci spolupráce pre Vás poskytneme okrem kompletného servisu od založenia firmy, spracovania účtovníctva a miezd, daňového poradenstva aj ostatné služby.",
    ],
    heroImg: "/sluzby/ostatne.webp",
    featuresH2: "Ďalšie poskytované služby",
    features: [
      { lead: "Účtovníctvo online", rest: "Prístup do vášho účtovníctva 24/7. Bez nákladov na obstaranie a servis účtovného softwaru. Vystavovanie účtovných dokladov, vedenie skladového hospodárstva, tvorba vlastných reportov, kontrola pohľadávok a záväzkov." },
      { lead: "Zakladáme spoločnosti", rest: "Zabezpečíme zápis zmien do Obchodného a Živnostenského registra. Sprostredkujeme právne služby. Pripravíme pre vás obchodné zmluvy akéhokoľvek druhu." },
      { lead: "Virtuálne sídlo", rest: "Poskytujeme prenájom virtuálneho sídla s elektronickým preposielaním korešpondencie. Postaráme sa o skenovanie a zasielanie dokumentov." },
      { lead: "S úsmevom na perách", rest: "Doklady jednoducho odovzdáte v digitálnej podobe do aplikácie Doklado. Poskytneme extra služby z oblasti administratívy." },
      { lead: "Rekonštrukcia účtovníctva", rest: "Vykonáme rekonštrukciu účtovníctva, miezd a personalistiky aj starých rokov. Zabezpečíme audit účtovnej agendy a overenie účtovnej závierky audítorom." },
      { lead: "Analýzy a výstupy", rest: "Pripravíme priebežné výstupy z účtovníctva. Vykonáme analýzu firemných procesov a obehu účtovných dokladov." },
    ],
    pricing: { kind: "none" },
  },
};

/** Ostatné služby extra section */
export const ostatneExtra = {
  h2: "Naše hodnoty ako prostriedky, ktoré prinášajú kľud od papierov",
  text: "Naším klientom prinášame bezstarostnosť v účtovníctve. Za vyše 13 rokov sme vybudovali obrovskú dôveru s našimi klientmi. Účtovníci sú stabilní, nestriedajú sa a preto vieme pridať hodnotu individuálneho prístupu. Sme proklienstky orientovaní a preto máme nadštandardné vzťahy s našimi klientmi.",
  counters: [
    { value: 20, suffix: "+", label: "rokov skúseností" },
    { value: 200, suffix: "+", label: "spokojných klientov" },
    { value: 5000, suffix: "+", label: "účtovných dokladov za nami" },
  ],
};
