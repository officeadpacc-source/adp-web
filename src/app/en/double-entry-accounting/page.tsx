import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/content/services.en";

export const metadata: Metadata = {
  title: "Double-Entry Accounting | ADP Accounting - Accounting Bratislava",
  description:
    "Reliable double-entry accounting is the foundation of every successful business. We ensure precise bookkeeping in compliance with Slovak legislation.",
  alternates: {
    canonical: "https://adpacc.sk/en/double-entry-accounting/",
    languages: {
      "sk-SK": "https://adpacc.sk/podvojne-uctovnictvo/",
      "en-GB": "https://adpacc.sk/en/double-entry-accounting/",
      "x-default": "https://adpacc.sk/podvojne-uctovnictvo/",
    },
  },
};

export default function Page() {
  return <ServicePage s={services["double-entry-accounting"]} lang="en" />;
}
