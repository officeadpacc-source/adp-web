import type { Metadata } from "next";
import ThanksClient from "@/app/dakujeme/thanks-client";
import { uiFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Thank you | ADP Accounting - Accounting Bratislava",
  description: "Your message has been successfully sent. We will get back to you as soon as possible.",
  robots: "noindex, follow",
  alternates: { canonical: "https://adpacc.sk/en/dakujeme/" },
};

export default function DakujemeEn() {
  const t = uiFor("en");
  return (
    <main className="bg-white px-5 py-32 text-center md:py-40">
      <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-green-bg text-[34px] font-bold text-green">
        ✓
      </div>
      <h1 className="mt-7 text-h3 md:text-h1">{t.thanks.title}</h1>
      <p className="mx-auto mt-4 max-w-[620px] text-lead text-body">
        {t.thanks.lead}
      </p>
      <ThanksClient redirectUrl="/en/" />
    </main>
  );
}
