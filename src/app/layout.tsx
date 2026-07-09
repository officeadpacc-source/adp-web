import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Frank_Ruhl_Libre, Manrope, Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteFab from "@/components/QuoteFab";

const GTM_ID = "GTM-PCPWTWB8";

const frank = Frank_Ruhl_Libre({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-frank",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adpacc.sk"),
  title: "A.D.P. Accounting - Účtovníctvo Bratislava | Mzdy | Poradenstvo",
  description:
    "Účtovníctvo Bratislava — s viac ako 20-ročnými skúsenosťami poskytujeme komplexné účtovné služby pre živnostníkov, malé a stredné podniky.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "A.D.P. Accounting - Účtovníctvo Bratislava | Mzdy | Poradenstvo",
    description:
      "Účtovníctvo Bratislava — s viac ako 20-ročnými skúsenosťami poskytujeme komplexné účtovné služby pre živnostníkov, malé a stredné podniky.",
    url: "https://adpacc.sk",
    siteName: "A.D.P. Accounting",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A.D.P. Accounting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A.D.P. Accounting - Účtovníctvo Bratislava | Mzdy | Poradenstvo",
    description:
      "Účtovníctvo Bratislava — s viac ako 20-ročnými skúsenosťami poskytujeme komplexné účtovné služby pre živnostníkov, malé a stredné podniky.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "https://adpacc.sk",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "@id": "https://adpacc.sk/#place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hraničná 53",
        "addressLocality": "Bratislava",
        "addressRegion": "Ružinov",
        "postalCode": "82105",
        "addressCountry": "SK"
      }
    },
    {
      "@type": ["AccountingService", "Organization"],
      "@id": "https://adpacc.sk/#organization",
      "name": "A.D.P. Accounting, s.r.o.",
      "url": "https://adpacc.sk",
      "sameAs": ["https://www.facebook.com/p/ADP-Accounting-61576238373596/"],
      "email": "office@adpacc.sk",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hraničná 53",
        "addressLocality": "Bratislava",
        "addressRegion": "Ružinov",
        "postalCode": "82105",
        "addressCountry": "SK"
      },
      "logo": {
        "@type": "ImageObject",
        "@id": "https://adpacc.sk/#logo",
        "url": "https://adpacc.sk/images/adpacc_logo_web.webp",
        "contentUrl": "https://adpacc.sk/images/adpacc_logo_web.webp",
        "caption": "A.D.P. Accounting, s.r.o. - účtovníctvo Bratislava",
        "inLanguage": "sk-SK",
        "width": "2058",
        "height": "360"
      },
      "openingHours": ["Monday,Tuesday,Wednesday,Thursday,Friday 08:00-16:30"],
      "legalName": "A.D.P. Accounting, s.r.o.",
      "foundingDate": "2005",
      "location": { "@id": "https://adpacc.sk/#place" },
      "telephone": "+421253637544"
    }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="sk-SK"
      className={`${frank.variable} ${manrope.variable} ${roboto.variable}`}
    >
      <body className="bg-white font-sans text-base text-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        {children}
        <Footer />
        <QuoteFab />
      </body>
    </html>
  );
}
