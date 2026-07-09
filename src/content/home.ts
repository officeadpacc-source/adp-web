/**
 * Homepage content — extracted 1:1 from the original adpacc.sk (SK).
 * Section order, backgrounds and copy mirror the origin exactly:
 * hero(sand) → clients(navy) → služby(white) → prečo(sand) → digital(navy)
 * → referencie(paper) → o nás(white) → tím(white) → spolupráca(white)
 * → hodnoty(sand) → kontakt(navy) → clients(navy) → footer(slate)
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

export const referencie = {
  h2: "Referencie",
  intro:
    "Spokojnosť našich klientov je pre nás prioritou. Pomáhame firmám s účtovníctvom, daniami a finančným riadením.",
  quotes: [
    "„So spoločnosťou A.D.P. Accounting ako externým dodávateľov účtovných služieb spolupracujeme už viac ako desaťročie a jej služby doporučujem. Oceňujem komplexitu ponúkaných služieb, promptnosť pri riešeniach rôznych situácií ktoré neraz vedia firmám skomplikovať pracovný život, ale i pocit že naše účtovníctvo je v 100% poriadku a môžeme sa sústrediť na našu prácu.“",
    "„Skutočne profesionálny prístup, rýchle riešenie vzniknutých otázok. Profesionálne vypracované daňové podklady. Viem, že sa naozaj môžem spoľahnúť že po tejto stránke moja spoločnosť má všetky potrebne úkony spracovane na 100%“",
    "„So službami A.D.P.Accounting som spokojný o čom svedčí aj fakt, že ich klientom som už od roku 2005 až dodnes. Oceňujem hlavne ústretovosť a poradenstvo.“",
    "„Ako architektonická kancelária sme hľadali účtovníctvo, ktoré dokáže držať krok s naším dynamickým projektovým životom. V spoločnosti A.D.P. Accounting sme našli partnera, ktorý spája odbornosť s moderným prístupom. Prechod na digitalizované účtovníctvo nám prinieslo výrazné zjednodušenie administratívy – namiesto množstva papierov stačí pár klikov a všetky doklady máme prehľadne uložené online. Oceňujeme tiež jasnú komunikáciu a rýchle reakcie tímu, vďaka čomu máme istotu, že naše účtovníctvo je v dobrých rukách.“",
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
  cta: {
    text: "Máte záujem pridať sa do nášho tímu?",
    label: "Pozrieť ponuky",
    href: "https://www.profesia.sk/praca/a-d-p-accounting/C28995",
  },
  members: [
    {
      name: "Peter Raus",
      role: "Founder",
      photo: "/images/team-1.webp",
      bio: "Peter Raus sa účtovníctvu venuje viac ako 25 rokov. Počas svojej kariéry sa stal spoľahlivou oporou pre klientov aj celý tím. Väčšinu pracovného času trávi na stretnutiach s klientmi, kde sa venuje individuálnym riešeniam a odbornému poradenstvu. Vďaka silnému analytickému mysleniu, skúsenostiam a manažérskym schopnostiam dokáže efektívne riešiť aj náročnejšie situácie. Spokojnosť klientov a stabilné fungovanie tímu sú pre neho vždy prioritou.",
    },
    {
      name: "Ingrid Pokopcová",
      role: "Účtovníčka",
      photo: "/images/team-3.webp",
      bio: "Ingrid Pokopcová je dôležitou súčasťou každodenného fungovania kancelárie. Vďaka svojej organizovanosti, komunikačným schopnostiam a pozitívnemu prístupu zabezpečuje plynulý chod interných procesov aj komunikáciu s klientmi. Má výborný prehľad v dokumentácii, administratíve a zmluvnej agende. Dokáže efektívne vniesť systém aj do náročnejších úloh a prispieva k tomu, aby práca v kancelárii prebiehala spoľahlivo a profesionálne.",
    },
    {
      name: "Anna Privrelová",
      role: "Účtovníčka",
      photo: "/images/team-2.webp",
      bio: "Anna Privrelová je zodpovedná, pracovitá a cieľavedomá účtovníčka, ktorá sa najlepšie cíti vtedy, keď má jasne stanovené úlohy a priestor naplno sa venovať svojej práci. V tíme je vnímaná ako energická a spoľahlivá kolegyňa. Okrem práce sa venuje športu a rada prijíma nové výzvy. Jej vytrvalosť a disciplína sa premietajú aj do pracovného prístupu, vďaka čomu je dôležitou súčasťou nášho tímu.",
    },
    {
      name: "Martina Šebová",
      role: "Účtovníčka",
      photo: "/images/team-4.webp",
      bio: "Martina Šebová si zakladá na poriadku, presnosti a jasne nastavenej agende. Pri svojej práci postupuje dôsledne a systematicky, čo jej umožňuje zabezpečiť hladké spracovanie účtovných úloh. Je spoľahlivou členkou tímu, ktorá si vie poradiť aj v nečakaných situáciách. Svojou precíznosťou a praktickým prístupom prispieva k efektívnemu fungovaniu účtovného oddelenia.",
    },
    {
      name: "Tomáš Chlpek",
      role: "Účtovník",
      photo: "/images/team-5.webp",
      bio: "Tomáš Chlpek je precízny, rýchly a odborne zdatný účtovník. Pri práci sa sústreďuje na efektívne riešenia, presnosť a spoľahlivé spracovanie agendy. Vďaka profesionálnemu prístupu a schopnosti rýchlo sa zorientovať v účtovných úlohách je stabilnou súčasťou nášho tímu. Klienti aj kolegovia sa na neho môžu spoľahnúť pri každodennej práci aj pri riešení náročnejších situácií.",
    },
    {
      name: "Simona Pajserová",
      role: "Účtovníčka",
      photo: "/images/team-6.webp",
      bio: "Simona Pajserová je spoľahlivá a pozitívne naladená účtovníčka, ktorá k práci pristupuje zodpovedne a s chuťou ďalej sa rozvíjať. Svoje účtovné znalosti postupne budovala priamo v našom tíme. Začínala ako junior účtovníčka a dnes je plnohodnotnou súčasťou účtovného oddelenia. Vďaka svojej usilovnosti, presnosti a ochote učiť sa nové veci je pre náš tím cennou posilou.",
    },
    {
      name: "Katarína Hatvaniová",
      role: "Mzdová účtovníčka",
      photo: "/images/team-7.webp",
      bio: "Katarína Hatvaniová sa venuje mzdovej agende, personalistike a komunikácii so zamestnancami našich klientov. Svoju prácu vykonáva zodpovedne, dôsledne a s dôrazom na profesionálny prístup. Začínala ako účtovníčka, no postupne sa naplno našla v oblasti personalistiky a miezd. Vďaka organizačným schopnostiam, komunikačnej zručnosti a pokojnej povahe je dôležitou oporou pre klientov aj kolegov.",
    },
    {
      name: "Erika Forgáčová",
      role: "Účtovníčka",
      photo: "/images/team-8.webp",
      bio: "Erika Forgáčová patrí medzi najskúsenejšie členky nášho tímu a je s nami už viac ako 15 rokov. Počas tohto obdobia spracovala množstvo účtovných výstupov, daňových priznaní a pomohla mnohým klientom pri riešení ich účtovnej agendy. Jej dlhoročné skúsenosti, spoľahlivosť a dôsledný prístup z nej robia stabilnú a hodnotnú súčasť našej spoločnosti. Klienti aj kolegovia oceňujú jej odbornosť a ochotu pomôcť.",
    },
    {
      name: "Miroslava Kostecká",
      role: "Účtovníčka",
      photo: "/images/team-9.webp",
      bio: "Miroslava Kostecká je zodpovedná účtovníčka, ktorá sa venuje účtovnej agende, komunikácii s klientmi a organizácii práce. Počas pôsobenia v našom tíme si osvojila široké spektrum odborných aj praktických zručností. Svoj záujem o účtovníctvo neustále rozvíja a k práci pristupuje dôsledne, efektívne a s ochotou hľadať riešenia. Je spoľahlivou súčasťou tímu a prispieva k profesionálnemu servisu pre našich klientov.",
    },
  ],
};

export const spolupraca = {
  h2: "Ako prebieha spolupráca s našou spoločnosťou?",
  intro:
    "Naša činnosť je založená na odbornosti, spoľahlivosti a individuálnom prístupe ku každému klientovi. Zabezpečujeme plynulý chod Vášho účtovníctva bez zbytočnej administratívnej záťaže.",
  steps: [
    {
      title: "Odovzdávanie dokladov prostredníctvom aplikácie Doklado",
      text: "Účtovné doklady jednoducho elektronicky odovzdávate prostredníctvom aplikácie Doklado, kde sú bezpečne uložené a okamžite dostupné na spracovanie Vašim účtovníkom.",
    },
    {
      title: "Zabezpečíme kontrolu a odborné spracovanie dokladov",
      text: "Vaše doklady k účtovníctvu prejdú dôkladnou kontrolou a odborným spracovaním v súlade s aktuálnou legislatívou. Všetko prebieha efektívne a digitálne.",
    },
    {
      title: "Plynulý priebeh a sústredenie sa na Vaše podnikanie",
      text: "Účtovníctvo je spracovávané priebežne, pričom máte neustály prehľad o stave účtovnej agendy. Vďaka tomu sa môžete plne venovať riadeniu a rozvoju vášho podnikania.",
    },
  ],
};

export const hodnoty = {
  h2: "Naše hodnoty",
  cards: [
    {
      title: "Slušnosť",
      icon: "/images/icon-slusnost.svg",
      text: "K zákazníkom, obchodným partnerom aj k sebe navzájom pristupujeme slušne, s rešpektom a porozumením. Hrubosť, arogancia ani povýšenosť u nás nemajú miesto. Vážime si rozdielnosť názorov a podporujeme otvorenú, tolerantnú komunikáciu.",
    },
    {
      title: "Férovosť a spravodlivosť",
      icon: "/images/icon-ferovost.svg",
      text: "Zákazníkom odporúčame riešenia, ktoré im prinášajú skutočnú hodnotu. Naše ceny sú férové, transparentné a bez skrytých poplatkov. Rovnako férovo pristupujeme aj k zamestnancom — odmeňujeme ich spravodlivo podľa výkonu, prínosu a zodpovednosti, nie podľa firemnej hierarchie.",
    },
    {
      title: "Rozvoj",
      icon: "/images/icon-rozvoj.svg",
      text: "Máme ambíciu neustále sa zlepšovať a patriť medzi najlepších. Sledujeme technologické trendy, prinášame nové riešenia a vytvárame trvalú hodnotu pre zákazníkov. Svoju prácu robíme s nadšením, zodpovednosťou a chuťou posúvať veci vpred.",
    },
  ],
};

export const kontakt = {
  h2: "Kontakt",
  visit: { title: "Navštívte nás", text: "Hraničná 53, 821 05 Bratislava" },
  call: {
    title: "Zavolajte nám",
    hours: "Pon-Pia od 8:00 do 16:30",
    phones: [
      { label: "+421 2 53 63 75 44", href: "tel:+421253637544" },
      { label: "+421 903 22 77 26", href: "tel:+421903227726" },
    ],
  },
  write: { title: "Napíšte nám", email: "office@adpacc.sk" },
  quote: { label: "Vyhotoviť cenovú ponuku", href: "/cenova-ponuka/" },
};
