import type { Metadata } from "next"
import { BRAND_NAME } from "@/lib/business"

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Home Service – Técnico Oficial LG Zona Norte",
}

// Metadata por página: canonical propio + Open Graph/Twitter completos
// (en Next.js, definir openGraph en una página reemplaza el del layout).
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: path,
      siteName: BRAND_NAME,
      title: `${title} | Home Service LG`,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Home Service LG`,
      description,
      images: [OG_IMAGE.url],
    },
  }
}
