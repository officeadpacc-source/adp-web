import type { Metadata } from "next";
import AboutSections from "@/components/AboutSections";

export const metadata: Metadata = {
  title: "About us | ADP Accounting - Accounting Bratislava",
  description:
    "A.D.P. Accounting is an established accounting company based in Bratislava. Since 2005, we have been helping our clients achieve financial stability and growth.",
  alternates: {
    canonical: "https://adpacc.sk/en/about-us/",
    languages: {
      "sk-SK": "https://adpacc.sk/o-adp/",
      "en-GB": "https://adpacc.sk/en/about-us/",
      "x-default": "https://adpacc.sk/o-adp/",
    },
  },
};

export default function AboutEn() {
  return <AboutSections lang="en" />;
}
