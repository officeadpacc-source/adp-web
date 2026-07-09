import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: 'ADP Accounting - Účtovníctvo Bratislava | Podvojné účtovníctvo',
  description: 'Spoľahlivé podvojné účtovníctvo je základom každého úspešného podnikania. Komplexné vedenie účtovnej agendy pre právnické osoby.',
  alternates: { canonical: "/podvojne-uctovnictvo/" },
};

export default function Page() {
  return <ServicePage s={services["podvojne-uctovnictvo"]} />;
}
