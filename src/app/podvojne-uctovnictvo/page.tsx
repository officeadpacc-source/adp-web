import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: 'ADP Accounting - Účtovníctvo Bratislava | Podvojné účtovníctvo',
  description: 'Spoľahlivé podvojné účtovníctvo je základom každého úspešného podnikania. Komplexné vedenie účtovnej agendy pre právnické osoby.',
  alternates: {
    canonical: "https://adpacc.sk/podvojne-uctovnictvo/",
    languages: {
      "sk-SK": "https://adpacc.sk/podvojne-uctovnictvo/",
      "en-GB": "https://adpacc.sk/en/double-entry-accounting/",
      "x-default": "https://adpacc.sk/podvojne-uctovnictvo/",
    },
  },
};

export default function Page() {
  return <ServicePage s={services["podvojne-uctovnictvo"]} lang="sk" />;
}
