import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import { homeFor, type Lang, localizeHref } from "@/lib/i18n";

/** Team — 4-per-view carousel (homepage) or 3x3 grid (About page) + join CTA. */
export default function TeamSection({
  lang = "sk",
  layout = "carousel",
}: {
  lang?: Lang;
  layout?: "carousel" | "grid";
}) {
  const { team } = homeFor(lang);
  return (
    <section className="bg-white pt-16 md:pt-[120px]">
      <div className="wrap">
        <h2 className="text-h4 md:text-h2">{team.h2}</h2>
        <span className="rule" />
        <div className="mt-12">
          {layout === "grid" ? (
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {team.members.map((m) => (
                <article key={m.name} className="flex flex-col">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    width={600}
                    height={700}
                    className="aspect-[6/7] w-full object-cover rounded"
                  />
                  <p className="mt-5 text-small text-sand-dark font-semibold">{m.role}</p>
                  <h3 className="mt-1 font-heading text-h5 text-navy">{m.name}</h3>
                  <p className="mt-3 text-base text-muted leading-relaxed">{m.bio}</p>
                </article>
              ))}
            </div>
          ) : (
            <Carousel slideClass="basis-[75%] sm:basis-[calc(50%-12px)] lg:basis-[calc(25%-18px)]">
              {team.members.map((m) => (
                <article key={m.name}>
                  <Image
                    src={m.photo}
                    alt={m.name}
                    width={600}
                    height={700}
                    className="aspect-[6/7] w-full object-cover"
                  />
                  <p className="mt-5 text-small text-sand-dark">{m.role}</p>
                  <h3 className="mt-1 font-heading text-h5 text-navy">{m.name}</h3>
                  <p className="mt-3 text-base text-muted leading-relaxed">{m.bio}</p>
                </article>
              ))}
            </Carousel>
          )}
        </div>
        <div className="mt-16 rounded bg-navy p-8 md:p-12 text-center text-white max-w-4xl mx-auto">
          <p className="text-h4 font-heading text-white">{team.cta.text}</p>
          <div className="mt-6 flex justify-center">
            <Link
              href={localizeHref("/zamestnanie/", lang)}
              className="btn-sand w-full sm:w-auto text-center"
            >
              <span className="btn-roll">
                <span className="btn-roll-text" data-hover={team.cta.label}>
                  {team.cta.label}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
