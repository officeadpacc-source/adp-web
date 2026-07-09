import Image from "next/image";
import { clientsStrip } from "@/content/home";

/** Navy client-logo marquee — after the hero photo and again above the footer. */
export default function ClientsBand() {
  const logos = [...clientsStrip.logos, ...clientsStrip.logos];
  return (
    <section className="overflow-hidden bg-navy py-6">
      <p className="mb-4 text-center text-navsm font-semibold uppercase text-white/60">
        {clientsStrip.label}
      </p>
      <div className="marquee flex w-max items-center gap-16">
        {logos.map((src, i) => (
          <Image
            key={`${src}-${i}`}
            src={src}
            alt="Logo klienta"
            width={140}
            height={48}
            className="h-8 w-auto opacity-50 brightness-0 invert md:h-9"
          />
        ))}
      </div>
    </section>
  );
}
