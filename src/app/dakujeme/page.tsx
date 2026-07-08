import type { Metadata } from "next";
import ThanksClient from "./thanks-client";

export const metadata: Metadata = {
  title: "Ďakujeme | ADP Accounting - Účtovníctvo Bratislava",
  description: "Vaša správa bola úspešne odoslaná. Ozveme sa vám do 24 hodín.",
  robots: "noindex, follow",
  alternates: { canonical: "/dakujeme/" },
};

export default function Dakujeme() {
  return (
    <main className="bg-white px-5 py-32 text-center md:py-40">
      <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-green-bg text-[34px] font-bold text-green">
        ✓
      </div>
      <h1 className="mt-7 text-h3 md:text-h1">Ďakujeme! Vaša správa bola odoslaná.</h1>
      <p className="mx-auto mt-4 max-w-[620px] text-lead text-body">
        Ozveme sa vám čo najskôr, spravidla do 24 hodín v pracovných dňoch. Ak je to súrne,
        zavolajte nám priamo.
      </p>
      <ThanksClient />
    </main>
  );
}
