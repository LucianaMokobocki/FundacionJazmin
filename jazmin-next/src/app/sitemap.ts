import type { MetadataRoute } from "next";
import { siteConfig, sitemapRoutes } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => ({
    url: `${siteConfig.url}/${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7,
  }));
}
