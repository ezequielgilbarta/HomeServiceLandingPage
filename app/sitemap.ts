import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/business"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/servicios`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/accesorios`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/repuestos`, lastModified, changeFrequency: "weekly", priority: 0.7 },
  ]
}
