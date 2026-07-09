import type { Metadata } from "next";
import HomeSections from "@/components/HomeSections";
import { hreflangFor } from "@/lib/routes";

export const metadata: Metadata = {
  title: "A.D.P. Accounting - Účtovníctvo Bratislava | Mzdy | Poradenstvo",
  description:
    "Účtovníctvo Bratislava — s viac ako 20-ročnými skúsenosťami poskytujeme komplexné účtovné služby pre živnostníkov, malé a stredné podniky.",
  alternates: { canonical: "/", languages: hreflangFor("/") },
};

export default function Home() {
  return <HomeSections lang="sk" />;
}
