import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/content/services.en";

export const metadata: Metadata = {
  title: "Single-Entry Accounting | ADP Accounting - Accounting Bratislava",
  description:
    "Complete overview of your income and expenses. Entrust your accounting to us so you can focus on running your business.",
  alternates: {
    canonical: "https://adpacc.sk/en/single-entry-accounting/",
    languages: {
      "sk-SK": "https://adpacc.sk/jednoduche-uctovnictvo/",
      "en-GB": "https://adpacc.sk/en/single-entry-accounting/",
      "x-default": "https://adpacc.sk/jednoduche-uctovnictvo/",
    },
  },
};

export default function Page() {
  return <ServicePage s={services["single-entry-accounting"]} lang="en" />;
}
