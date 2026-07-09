import posts from "@/content/blog.json";

export const BASE = "https://adpacc.sk";

/** SK routes ↔ their EN counterparts (fills in as the EN site is built). */
export const SK_EN: Record<string, string | null> = {
  "/": "/en/",
  "/podvojne-uctovnictvo/": "/en/double-entry-accounting/",
  "/jednoduche-uctovnictvo/": "/en/single-entry-accounting/",
  "/mzdy/": "/en/payroll/",
  "/ostatne-sluzby/": "/en/other-services/",
  "/o-adp/": "/en/about-us/",
  "/blog/": "/en/blog-en/",
  "/cenova-ponuka/": null,
  "/zamestnanie/": null,
  "/ochrana-osobnych-udajov/": "/en/privacy-policy/",
  "/cookies/": "/en/cookie-policy/",
};

/** All indexable SK routes (dakujeme deliberately excluded). */
export function skRoutes(): string[] {
  return [...Object.keys(SK_EN), ...posts.map((p) => `/${p.slug}/`)];
}

/** hreflang map for a SK route — self + EN + x-default. */
export function hreflangFor(skRoute: string): Record<string, string> | undefined {
  const en = SK_EN[skRoute];
  if (!en) return undefined;
  return {
    "sk-SK": `${BASE}${skRoute}`,
    "en-GB": `${BASE}${en}`,
    "x-default": `${BASE}${skRoute}`,
  };
}
