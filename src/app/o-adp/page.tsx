import type { Metadata } from "next";
import AboutSections from "@/components/AboutSections";

export const metadata: Metadata = {
  title: "O nás | ADP Accounting - Účtovníctvo Bratislava",
  description:
    "Účtovníctvo Bratislava - S viac ako 20-ročnými skúsenosťami poskytujeme komplexné účtovné služby pre živnostníkov, malé a stredné podniky.",
  alternates: {
    canonical: "https://adpacc.sk/o-adp/",
    languages: {
      "sk-SK": "https://adpacc.sk/o-adp/",
      "en-GB": "https://adpacc.sk/en/about-us/",
      "x-default": "https://adpacc.sk/o-adp/",
    },
  },
};

export default function OAdp() {
  return <AboutSections lang="sk" />;
}
