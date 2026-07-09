import type { Metadata } from "next";
import QuoteWizard from "@/components/QuoteWizard";

export const metadata: Metadata = {
  title: "Cenová ponuka | ADP Accounting - Účtovníctvo Bratislava",
  description:
    "Získajte nezáväznú cenovú ponuku na vedenie účtovníctva, mzdy a daňové poradenstvo v Bratislave. Transparentné ceny šité na mieru vašej firme.",
  alternates: { canonical: "/cenova-ponuka/" },
};

export default function CenovaPonuka() {
  return (
    <main className="bg-navy py-16 md:py-24">
      <div className="wrap">
        <div className="mx-auto max-w-[860px] pb-10 text-center">
          <h1 className="text-h3 text-white md:text-h2">Nezáväzná cenová ponuka</h1>
          <p className="mt-4 text-base text-white/70">
            Vyplňte krátky formulár a my vám pripravíme cenovú ponuku na mieru do 24 hodín.
          </p>
        </div>
        <QuoteWizard />
      </div>
    </main>
  );
}
