import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/content/services.en";

export const metadata: Metadata = {
  title: "Payroll and HR | ADP Accounting - Accounting Bratislava",
  description:
    "Complete payroll processing and HR services in Slovakia. We monitor legislative updates, prepare contracts, and report to health insurance and tax authorities.",
  alternates: {
    canonical: "https://adpacc.sk/en/payroll/",
    languages: {
      "sk-SK": "https://adpacc.sk/mzdy/",
      "en-GB": "https://adpacc.sk/en/payroll/",
      "x-default": "https://adpacc.sk/mzdy/",
    },
  },
};

export default function Page() {
  return <ServicePage s={services["payroll"]} lang="en" />;
}
