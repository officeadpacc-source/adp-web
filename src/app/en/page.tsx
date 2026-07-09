import type { Metadata } from "next";
import HomeSections from "@/components/HomeSections";

export const metadata: Metadata = {
  title: "A.D.P. Accounting - Accounting Bratislava | Payroll | Consulting",
  description:
    "With over 20 years of experience, we provide comprehensive accounting services for sole proprietors, small and medium-sized enterprises in Bratislava.",
  alternates: {
    canonical: "https://adpacc.sk/en/",
    languages: {
      "sk-SK": "https://adpacc.sk/",
      "en-GB": "https://adpacc.sk/en/",
      "x-default": "https://adpacc.sk/",
    },
  },
};

export default function HomeEn() {
  return <HomeSections lang="en" />;
}
