import type { Metadata } from "next";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import TeamSection from "@/components/TeamSection";
import ReferencieSection from "@/components/ReferencieSection";
import { about } from "@/content/home";

export const metadata: Metadata = {
  title: "O nás | ADP Accounting - Účtovníctvo Bratislava",
  description:
    "Účtovníctvo Bratislava - S viac ako 20-ročnými skúsenosťami poskytujeme komplexné účtovné služby pre živnostníkov, malé a stredné podniky.",
  alternates: { canonical: "/o-adp/" },
};

export default function OAdp() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-sand">
        <div className="wrap grid gap-8 py-14 md:grid-cols-[1.15fr_1fr] md:gap-16 md:py-16">
          <h1 className="text-h3 md:text-h1">A.D.P. Accounting – Precíznosť, ktorá nás baví.</h1>
          <div className="self-center">
            <p className="text-lead text-body">
              Účtovníctvo Bratislava – S viac ako 20-ročnými skúsenosťami poskytujeme komplexné
              účtovné služby pre živnostníkov, malé a stredné podniky. Zverte svoje účtovníctvo
              do rúk profesionálov a sústreďte sa na rast vášho podnikania.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row">
              <a href="#kontakt" className="btn-primary w-full sm:w-auto">
                <span className="btn-roll">
                  <span className="btn-roll-text" data-hover="Kontaktujte nás">
                    Kontaktujte nás
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <Image
          src="/images/hero.jpg"
          alt="Tím A.D.P. Accounting"
          width={2400}
          height={1350}
          priority
          className="w-full h-auto"
        />
      </section>

      {/* O nás */}
      <section className="section bg-white">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h4 md:text-h2">O nás</h2>
            <span className="rule" />
            <p className="mt-8 text-base text-body">
              Sme účtovná kancelária, ktorá sa špecializuje na komplexné vedenie účtovníctva,
              spracovanie miezd, poskytovanie ekonomického a právneho poradenstva a
              zabezpečovanie administratívnej podpory – tak, aby ste sa vy mohli naplno venovať
              svojmu podnikaniu.
            </p>
            <p className="mt-4 text-base text-body">
              V našom tíme nájdete odborníkov, ktorých práca baví. Neustále sa vzdelávame,
              sledujeme legislatívne zmeny, ktoré konzultujeme s daňovým poradcom, aby sme vám
              vedeli ponúknuť spoľahlivé a kvalitné služby.
            </p>
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

      {/* Zoznámte sa s nami */}
      <section className="bg-sand py-16 md:py-[120px]">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h4 md:text-h2">Zoznámte sa s nami</h2>
            <span className="rule" />
          </div>
          <div className="space-y-4 text-base text-body">
            <p>
              Už viac ako 20 rokov prinášame našim klientom pokoj v účtovníctve a istotu v
              číslach. Dlhoročné partnerstvá sú dôkazom toho, že dôvera, odbornosť a individuálny
              prístup sú základom našej práce.
            </p>
            <p>
              Máme stabilný tím účtovníkov, ktorí sa nemenia, vďaka čomu poznáme potreby našich
              klientov do hĺbky a vieme im prinášať reálnu pridanú hodnotu. Naše vzťahy sú
              postavené na otvorenej komunikácii, spoľahlivosti a dôvere.
            </p>
            <p>
              Prečítajte si skutočné referencie a presvedčte sa, že účtovníctvo môže fungovať
              inak – profesionálne, stabilne a s dôrazom na Vás.
            </p>
          </div>
        </div>
      </section>

      <TeamSection />
      <div className="pb-4 md:pb-8" />
      <ReferencieSection />
    </main>
  );
}
