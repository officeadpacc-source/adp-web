import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/content/services.en";
import OstatneExtra from "@/components/OstatneExtra";

export const metadata: Metadata = {
  title: "Other Services | ADP Accounting - Accounting Bratislava",
  description:
    "We provide company formation, virtual office address, tax consulting, and support for electronic invoices via Doklado.",
  alternates: {
    canonical: "https://adpacc.sk/en/other-services/",
    languages: {
      "sk-SK": "https://adpacc.sk/ostatne-sluzby/",
      "en-GB": "https://adpacc.sk/en/other-services/",
      "x-default": "https://adpacc.sk/ostatne-sluzby/",
    },
  },
};

export default function Page() {
  return (
    <ServicePage
      s={services["other-services"]}
      lang="en"
      extra={<OstatneExtra lang="en" />}
    />
  );
}
