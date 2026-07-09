import type { MetadataRoute } from "next";
import { BASE } from "@/lib/routes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/dakujeme", "/en/dakujeme"] }],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
