import Image from "next/image";
import { clientsStrip } from "@/content/home";

/** Navy client-logo band — appears after the hero and again above the footer. */
export default function ClientsBand() {
  return (
    <section className="bg-navy py-6">
      <div className="wrap">
        <p className="text-center text-navsm font-semibold uppercase text-white/60">
          {clientsStrip.label}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-50">
          {clientsStrip.logos.map((src) => (
            <Image
              key={src}
              src={src}
              alt="Logo klienta"
              width={140}
              height={48}
              className="h-8 w-auto brightness-0 invert md:h-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
