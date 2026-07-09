import Image from "next/image";
import SpolupracaSteps from "@/components/SpolupracaSteps";
import { spolupraca } from "@/content/home";

/** "Ako prebieha spolupráca" — used on the homepage and every service page. */
export default function SpolupracaSection() {
  return (
    <section className="section bg-white">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h4 md:text-h2">{spolupraca.h2}</h2>
            <span className="rule" />
          </div>
          <p className="self-end text-base text-body">{spolupraca.intro}</p>
        </div>
        <div className="mt-14 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <SpolupracaSteps />
          <Image
            src="/images/spolupraca.webp"
            alt="Ako to u nás funguje"
            width={1200}
            height={900}
            className="w-full rounded object-cover"
          />
        </div>
      </div>
    </section>
  );
}
