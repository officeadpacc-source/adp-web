import type { MetadataRoute } from "next";
import { BASE, skRoutes, SK_EN } from "@/lib/routes";
import postsEn from "@/content/blog.en.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const sk = skRoutes().map((r) => ({
    url: `${BASE}${r}`,
    changeFrequency: "monthly" as const,
    priority: r === "/" ? 1 : 0.7,
  }));

  const enPages = Object.values(SK_EN)
    .filter((r): r is string => !!r)
    .map((r) => ({
      url: `${BASE}${r}`,
      changeFrequency: "monthly" as const,
      priority: r === "/en/" ? 0.9 : 0.6,
    }));

  const enPosts = postsEn.map((p) => ({
    url: `${BASE}/en/${p.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...sk, ...enPages, ...enPosts];
}
