import Image from "next/image";
import Carousel from "@/components/Carousel";
import { homeFor, type Lang } from "@/lib/i18n";

const REF_LOGOS = Array.from({ length: 12 }, (_, i) => `/images/reflogo-${i + 1}.png`);

/** References — logo grid + quote carousel (homepage and About page). */
export default function ReferencieSection({ lang = "sk" }: { lang?: Lang }) {
  const { referencie } = homeFor(lang);
  return (
    <section id="referencie" className="section scroll-mt-24 bg-paper">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h4 md:text-h2">{referencie.h2}</h2>
            <span className="rule" />
            <p className="mt-8 text-base text-body">{referencie.intro}</p>
          </div>
          <div className="grid grid-cols-3 items-center gap-x-10 gap-y-8 sm:grid-cols-6">
            {REF_LOGOS.map((src) => (
              <Image
                key={src}
                src={src}
                alt="Client logo"
                width={130}
                height={80}
                className="mx-auto h-14 w-auto opacity-60 grayscale md:h-20"
              />
            ))}
          </div>
        </div>
        <div className="mt-16">
          <Carousel slideClass="basis-[85%] md:basis-[calc(33.333%-16px)]">
            {referencie.quotes.map((q, i) => (
              <figure key={q.slice(2, 26)} className="card flex h-full flex-col gap-6 p-6">
                {i === 2 && (
                  <Image
                    src="/images/cardlogo-1.png"
                    alt="Galgan Music"
                    width={200}
                    height={95}
                    className="mx-auto h-20 w-auto"
                  />
                )}
                {i === 3 && (
                  <Image
                    src="/images/cardlogo-2.png"
                    alt="Krajči Gano Architects"
                    width={200}
                    height={95}
                    className="mx-auto h-20 w-auto"
                  />
                )}
                <blockquote className="text-base text-slate">{q}</blockquote>
              </figure>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
