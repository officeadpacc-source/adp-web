import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: 'Jednoduché účtovníctvo | ADP Accounting - Účtovníctvo Bratislava',
  description: 'Okrem služby jednoduché účtovníctvo poskytujeme služby aj v oblasti podvojného účtovníctva a miezd. Prehľadné spracovanie príjmov a výdavkov pre živnostníkov.',
  alternates: {
    canonical: "https://adpacc.sk/jednoduche-uctovnictvo/",
    languages: {
      "sk-SK": "https://adpacc.sk/jednoduche-uctovnictvo/",
      "en-GB": "https://adpacc.sk/en/single-entry-accounting/",
      "x-default": "https://adpacc.sk/jednoduche-uctovnictvo/",
    },
  },
};

export default function Page() {
  return <ServicePage s={services["jednoduche-uctovnictvo"]} lang="sk" />;
}
