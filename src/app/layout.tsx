import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Frank_Ruhl_Libre, Manrope, Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="sk-SK"
      className={`${frank.variable} ${manrope.variable} ${roboto.variable}`}
    >
      <body className="bg-white font-sans text-base text-body antialiased">
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
      </body>
    </html>
  );
}
