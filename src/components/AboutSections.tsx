"use client";

import Image from "next/image";
import CountUp from "@/components/CountUp";
import TeamSection from "@/components/TeamSection";
import ReferencieSection from "@/components/ReferencieSection";
import { homeFor, uiFor, type Lang } from "@/lib/i18n";

const CONTENT = {
  sk: {
    heroH1: "A.D.P. Accounting – Precíznosť, ktorá nás baví.",
    heroLead:
      "Účtovníctvo Bratislava – S viac ako 20-ročnými skúsenosťami poskytujeme komplexné účtovné služby pre živnostníkov, malé a stredné podniky. Zverte svoje účtovníctvo do rúk profesionálov a sústreďte sa na rast vášho podnikania.",
    heroBtn: "Kontaktujte nás",
    aboutH2: "O nás",
    aboutP1:
      "Sme účtovná kancelária, ktorá sa špecializuje na komplexné vedenie účtovníctva, spracovanie miezd, poskytovanie ekonomického a právneho poradenstva a zabezpečovanie administratívnej podpory – tak, aby ste sa vy mohli naplno venovať svojmu podnikaniu.",
    aboutP2:
      "V našom tíme nájdete odborníkov, ktorých práca baví. Neustále sa vzdelávame, sledujeme legislatívne zmeny, ktoré konzultujeme s daňovým poradcom, aby sme vám vedeli ponúknuť spoľahlivé a kvalitné služby.",
    meetH2: "Zoznámte sa s nami",
    meetP1:
      "Už viac ako 20 rokov prinášame našim klientom pokoj v účtovníctve a istotu v číslach. Dlhoročné partnerstvá sú dôkazom toho, že dôvera, odbornosť a individuálny prístup sú základom našej práce.",
    meetP2:
      "Máme stabilný tím účtovníkov, ktorí sa nemenia, vďaka čomu poznáme potreby našich klientov do hĺbky a vieme im prinášať reálnu pridanú hodnotu. Naše vzťahy sú postavené na otvorenej komunikácii, spoľahlivosti a dôvere.",
    meetP3:
      "Prečítajte si skutočné referencie a presvedčte sa, že účtovníctvo môže fungovať inak – profesionálne, stabilne a s dôrazom na Vás.",
  },
  en: {
    heroH1: "A.D.P. Accounting – Precision is our passion.",
    heroLead:
      "With over 20 years of experience, we provide comprehensive accounting services for sole traders, small and medium-sized businesses. Entrust your accounting to professionals and focus on growing your business.",
    heroBtn: "Contact us",
    aboutH2: "About us",
    aboutP1:
      "We are an accounting firm specializing in comprehensive bookkeeping, payroll processing, economic and legal consulting, and providing administrative support — so that you can focus on what you do best: running your business.",
    aboutP2:
      "Our team consists of professionals who are passionate about their work. We continuously educate ourselves, monitor legislative changes, and consult with a tax advisor to offer you reliable and high-quality services. We approach each client individually because we understand that accounting is not just about numbers — it’s also about trust and understanding.",
    meetH2: "Get to Know Us",
    meetP1:
      "For over 20 years, we’ve been bringing our clients peace of mind in accounting and confidence in numbers. Long-term partnerships are proof that trust, expertise, and an individual approach are the foundation of our work.",
    meetP2:
      "We have a stable team of accountants who don’t change, which allows us to deeply understand our clients’ needs and deliver real added value. Our relationships are built on open communication, reliability, and a human approach.",
    meetP3:
      "Read real client references and see for yourself that accounting can work differently – professionally, reliably, and with a focus on you.",
  },
};

export default function AboutSections({ lang = "sk" }: { lang?: Lang }) {
  const { about } = homeFor(lang);
  const t = uiFor(lang);
  const c = CONTENT[lang];

  return (
    <main>
      {/* Hero */}
      <section className="bg-sand">
        <div className="wrap grid gap-8 py-14 md:grid-cols-[1.15fr_1fr] md:gap-16 md:py-16">
          <h1 className="text-h3 md:text-h1">{c.heroH1}</h1>
          <div className="self-center">
            <p className="text-lead text-body">{c.heroLead}</p>
            <div className="mt-8 flex flex-col sm:flex-row">
              <a href="#kontakt" className="btn-primary w-full sm:w-auto">
                <span className="btn-roll">
                  <span className="btn-roll-text" data-hover={c.heroBtn}>
                    {c.heroBtn}
                  </span>
                </span>
              </a>
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

      {/* About Us */}
      <section className="section bg-white">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h4 md:text-h2">{c.aboutH2}</h2>
            <span className="rule" />
            <p className="mt-8 text-base text-body">{c.aboutP1}</p>
            <p className="mt-4 text-base text-body">{c.aboutP2}</p>
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

      {/* Get to Know Us */}
      <section className="bg-sand py-16 md:py-[120px]">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h4 md:text-h2">{c.meetH2}</h2>
            <span className="rule" />
          </div>
          <div className="space-y-4 text-base text-body">
            <p>{c.meetP1}</p>
            <p>{c.meetP2}</p>
            <p>{c.meetP3}</p>
          </div>
        </div>
      </section>

      <TeamSection lang={lang} layout="grid" />
      <div className="pb-4 md:pb-8" />
      <ReferencieSection lang={lang} />
    </main>
  );
}
