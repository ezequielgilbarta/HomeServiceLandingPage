import type React from "react"
import { Inter, Red_Hat_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
  display: "swap",
})

const SITE_URL = "https://homeservicezn.com.ar"
const BRAND_NAME = "Home Service"

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Home Service | Servicio Técnico Oficial LG · Zona Norte GBA",
    template: "%s | Home Service LG",
  },
  description:
    "Servicio técnico oficial LG en Zona Norte, Buenos Aires. Reparación de heladeras, lavarropas y lavavajillas con más de 20 años de experiencia. Repuestos originales. Atendemos Tigre, San Fernando, San Isidro, Vicente López y Nordelta.",
  keywords: [
    "servicio técnico LG zona norte",
    "reparación heladeras LG",
    "reparación lavarropas LG",
    "reparación lavavajillas LG",
    "service oficial LG Buenos Aires",
    "repuestos originales LG",
    "técnico LG Tigre",
    "técnico LG San Isidro",
    "técnico LG Nordelta",
    "técnico LG San Fernando",
    "técnico LG Vicente López",
    "home service LG",
    "servicio autorizado LG Argentina",
  ],
  authors: [{ name: BRAND_NAME, url: SITE_URL }],
  creator: "Ezequiel Gil Barta",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: "Home Service | Servicio Técnico Oficial LG · Zona Norte GBA",
    description:
      "Técnicos autorizados LG con más de 20 años en Zona Norte. Reparamos heladeras, lavarropas y lavavajillas con garantía y repuestos originales.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Home Service – Técnico Oficial LG Zona Norte" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Service | Servicio Técnico Oficial LG · Zona Norte GBA",
    description: "Técnicos autorizados LG con más de 20 años en Zona Norte GBA.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Agregar cuando se tenga Google Search Console
    // google: "XXXXXX",
  },
}

// Schema.org: LocalBusiness estructurado para SEO local
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: BRAND_NAME,
  description:
    "Servicio técnico oficial autorizado LG para reparación de electrodomésticos en Zona Norte, Buenos Aires.",
  url: SITE_URL,
  telephone: "+54-9-11-2852-8465",
  email: "",
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/images/lg.png`,
  priceRange: "$$",
  currenciesAccepted: "ARS",
  paymentAccepted: "Cash, Credit Card, Debit Card, Transferencia",
  areaServed: [
    { "@type": "City", name: "Tigre" },
    { "@type": "City", name: "Nordelta" },
    { "@type": "City", name: "San Fernando" },
    { "@type": "City", name: "San Isidro" },
    { "@type": "City", name: "Vicente López" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zona Norte",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.47,
    longitude: -58.52,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de reparación y venta de repuestos",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reparación de heladeras LG",
          description: "Reparación especializada de heladeras LG con repuestos originales y garantía.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reparación de lavarropas LG",
          description: "Service de lavarropas y secarropas LG por técnicos autorizados.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reparación de lavavajillas LG",
          description: "Reparación de lavavajillas LG con diagnóstico en el domicilio.",
        },
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${redHatDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
