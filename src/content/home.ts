/**
 * Homepage content — extracted 1:1 from the original adpacc.sk (SK).
 * Keep wording byte-identical to the WordPress site; edit only deliberately.
 */

export const hero = {
  h1: "Váš spoľahlivý partner v účtovníctve a ekonomickom poradenstve.",
  lead: "S viac ako 20-ročnými skúsenosťami poskytujeme komplexné účtovné služby pre živnostníkov, malé a stredné podniky. Zverte svoje účtovníctvo do rúk profesionálov a sústreďte sa na rast vášho podnikania.",
  primary: { label: "Kontaktujte nás", href: "/#kontakt" },
  secondary: { label: "Naše služby", href: "/#sluzby" },
};

export const clientsStrip = {
  label: "Naši spokojní klienti",
  logos: [1, 2, 3, 4, 5].map((i) => `/images/client-${i}.webp`),
};

export const services = {
  h2: "Služby",
  h4: "Odbornosť na prvom mieste, individuálny prístup ako štandard",
  p1: "Či už ide o podvojné účtovníctvo, jednoduché účtovníctvo, mzdy alebo personálnu agendu – ku každej oblasti pristupujeme s rovnakou mierou precíznosti a zodpovednosti.",
  p2: "U nás je individuálny prístup samozrejmosťou, nie výnimkou. Napíšte nám a dohodnime si osobné stretnutie – radi sa postaráme aj o vaše účtovníctvo.",
  cards: [
    {
      title: "Podvojné účtovníctvo",
      text: "Komplexné vedenie účtovnej agendy pre právnické osoby vrátane mesačných a ročných výkazov, evidencie DPH a účtovnej závierky.",
      href: "/podvojne-uctovnictvo/",
    },
    {
      title: "Mzdy a personalistika",
      text: "Kompletné spracovanie mzdovej agendy, výkazov pre poisťovne a daňový úrad, registrácie a odhlášky zamestnancov.",
      href: "/mzdy/",
    },
    {
      title: "Jednoduché účtovníctvo",
      text: "Prehľadné spracovanie príjmov a výdavkov pre živnostníkov, vrátane evidencie DPH a daňových priznaní.",
      href: "/jednoduche-uctovnictvo/",
    },
    {
      title: "Ostatné služby",
      text: "Okrem kompletného účtovného a mzdového servisu vám v rámci spolupráce zabezpečíme aj podporu pri zakladaní spoločnosti, daňové poradenstvo a ďalšie doplnkové služby podľa vašich potrieb.",
      href: "/ostatne-sluzby/",
    },
  ],
};

export const whyUs = {
  h2: "Prečo si vybrať nás",
  p: "Účtovníctvo má byť prehľadné, presné a bez stresu. S nami máte istotu, že vaše financie sú v dobrých rukách – profesionálne spracované, načas a s ohľadom na to, čo skutočne potrebujete.",
  stats: [
    { value: "AI", suffix: "", label: "Zapojenie umelej inteligencie pri spracovaní účtovníctva" },
    { value: 20, suffix: "+", label: "rokov skúseností" },
    { value: 24, suffix: "/7", label: "dostupné účtovníctvo online" },
    { value: 150, suffix: "+", label: "klientov v našej správe" },
  ],
};

export const digital = {
  h2: "Digitálne účtovníctvo budúcnosti",
  paragraphs: [
    "Moderné účtovníctvo je neoddeliteľnou súčasťou efektívne fungujúceho podnikania. Vďaka digitálnym riešeniam, ako je aplikácia DOKLADO, máte istotu, že vaše financie sú spracovávané presne, včas a v súlade s platnou legislatívou.",
    "Naša spoločnosť spolupracuje s aplikáciou Doklado, ktorá umožňuje pohodlné a bezpečné elektronické odovzdávanie účtovných dokladov. Doklado zároveň využíva umelú inteligenciu (AI) na automatické spracovanie časti údajov vo Vašich dokladoch, čím zvyšuje rýchlosť a efektivitu celého účtovného procesu.",
    "Vďaka tejto technológii dokážeme minimalizovať chybovosť, urýchliť spracovanie a zabezpečiť vyššiu presnosť účtovania.",
    "Zaručujeme Vám spoľahlivé vedenie účtovníctva, odborné poradenstvo a individuálny prístup ku každému klientovi.",
  ],
  checklist: [
    "Správne a transparentne vedené účtovníctvo",
    "Automatizované spracovanie dokladov pomocou umelej inteligencie",
    "Úspora času",
    "Osobný prístup a podpora podľa vašich potrieb",
  ],
};

export const about = {
  label: "O nás",
  text: "A.D.P. Accounting je etablovaná účtovná spoločnosť so sídlom v Bratislave. Od roku 2005 pomáhame našim klientom dosiahnuť finančnú stabilitu a rast prostredníctvom presných a transparentných účtovných služieb. Náš tím sa neustále vzdeláva, aby sme Vám mohli poskytovať aktuálne informácie a poradenstvo v súlade s najnovšími legislatívnymi zmenami.",
  stats: [
    { value: 20, suffix: "+", label: "rokov skúseností" },
    { value: 200, suffix: "+", label: "spokojných klientov" },
  ],
};

export const team = {
  h2: "Náš tím",
  members: [
    {
      name: "Peter Raus",
      role: "Founder",
      photo: "/images/team-1.webp",
      bio: "Peter Raus sa účtovníctvu venuje viac ako 25 rokov. Počas svojej kariéry sa stal spoľahlivou oporou pre klientov aj celý tím. Väčšinu pracovného času trávi na stretnutiach s klientmi, kde sa venuje individuálnym riešeniam a odbornému poradenstvu.",
    },
    {
      name: "Anna Privrelová",
      role: "Účtovníčka",
      photo: "/images/team-2.webp",
      bio: "Anna Privrelová je zodpovedná, pracovitá a cieľavedomá účtovníčka, ktorá sa najlepšie cíti vtedy, keď má jasne stanovené úlohy a priestor naplno sa venovať svojej práci. V tíme je vnímaná ako energická a spoľahlivá kolegyňa.",
    },
    {
      name: "Ingrid Pokopcová",
      role: "Účtovníčka",
      photo: "/images/team-3.webp",
      bio: "Ingrid Pokopcová je dôležitou súčasťou každodenného fungovania kancelárie. Vďaka svojej organizovanosti, komunikačným schopnostiam a pozitívnemu prístupu zabezpečuje plynulý chod interných procesov aj komunikáciu s klientmi.",
    },
    {
      name: "Martina Šebová",
      role: "Účtovníčka",
      photo: "/images/team-4.webp",
      bio: "Martina Šebová si zakladá na poriadku, presnosti a jasne nastavenej agende. Pri svojej práci postupuje dôsledne a systematicky, čo jej umožňuje zabezpečiť hladké spracovanie účtovných úloh.",
    },
    {
      name: "Tomáš Chlpek",
      role: "Účtovník",
      photo: "/images/team-5.webp",
      bio: "Tomáš Chlpek je precízny, rýchly a odborne zdatný účtovník. Pri práci sa sústreďuje na efektívne riešenia, presnosť a spoľahlivé spracovanie agendy.",
    },
    {
      name: "Simona Pajserová",
      role: "Účtovníčka",
      photo: "/images/team-6.webp",
      bio: "Simona Pajserová je spoľahlivá a pozitívne naladená účtovníčka, ktorá k práci pristupuje zodpovedne a s chuťou ďalej sa rozvíjať. Začínala ako junior účtovníčka a dnes je plnohodnotnou súčasťou účtovného oddelenia.",
    },
  ],
};

export const referencie = {
  h2: "Referencie",
  intro:
    "Spokojnosť našich klientov je pre nás prioritou. Pomáhame firmám s účtovníctvom, daniami a finančným riadením.",
};
