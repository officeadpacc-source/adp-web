import type { Metadata } from "next";
import OstatneExtra from "@/components/OstatneExtra";
import ServicePage from "@/components/ServicePage";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: 'Ostatné služby | ADP Accounting - Účtovníctvo Bratislava',
  description: 'V rámci spolupráce pre Vás poskytneme okrem kompletného servisu aj založenie firmy, daňové poradenstvo a ďalšie doplnkové služby.',
  alternates: { canonical: "/ostatne-sluzby/" },
};

export default function Page() {
  return <ServicePage s={services["ostatne-sluzby"]} extra={<OstatneExtra />} />;
}
