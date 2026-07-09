import CountUp from "@/components/CountUp";
import { ostatneExtra } from "@/content/services";

/** "Naše hodnoty…" band with counters — unique to the Ostatné služby page. */
export default function OstatneExtra() {
  return (
    <section className="section bg-navy text-white">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h4 text-white md:text-h2">{ostatneExtra.h2}</h2>
            <span className="rule" />
          </div>
          <p className="self-end text-base text-white/85">{ostatneExtra.text}</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {ostatneExtra.counters.map((c) => (
            <div key={c.label} className="rounded border border-white/15 p-8 text-center">
              <p className="font-heading text-h2 text-white">
                <CountUp to={c.value} suffix={c.suffix} />
              </p>
              <p className="mt-2 text-small text-white/70">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
