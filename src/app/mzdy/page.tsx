import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: 'Mzdy | ADP Accounting - Účtovníctvo Bratislava',
  description: 'Prenechajte nám zodpovednosť za Vaše kompletné mzdové účtovníctvo. Budeme za Vás sledovať zmeny v legislatíve, spracovávať mzdy, odosielať výplatné pásky.',
  alternates: {
    canonical: "https://adpacc.sk/mzdy/",
    languages: {
      "sk-SK": "https://adpacc.sk/mzdy/",
      "en-GB": "https://adpacc.sk/en/payroll/",
      "x-default": "https://adpacc.sk/mzdy/",
    },
  },
};

export default function Page() {
  return <ServicePage s={services["mzdy"]} lang="sk" />;
}
