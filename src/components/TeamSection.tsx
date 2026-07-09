import Image from "next/image";
import Carousel from "@/components/Carousel";
import { team } from "@/content/home";

/** Náš tím — 4-per-view carousel + join CTA (homepage and O nás page). */
export default function TeamSection() {
  return (
    <section className="bg-white pt-16 md:pt-[120px]">
      <div className="wrap">
        <h2 className="text-h4 md:text-h2">{team.h2}</h2>
        <span className="rule" />
        <div className="mt-12">
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
                <p className="mt-3 text-small text-muted">{m.bio}</p>
              </article>
            ))}
          </Carousel>
        </div>
        <div className="mt-14 text-center">
          <p className="text-base text-body">{team.cta.text}</p>
          <a href={team.cta.href} target="_blank" rel="noopener" className="btn-outline mt-5">
            {team.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
