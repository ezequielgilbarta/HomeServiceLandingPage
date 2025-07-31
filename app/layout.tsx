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

export const metadata = {
  title: "Home Service - Servicio Técnico Oficial y Venta de Repuestos | Partes Originales",
  description: "Reparación y venta de repuestos originales LG en Zona Norte, Buenos Aires. Servicio técnico especializado en lavarropas, heladeras, lavavajillas y más.",
  keywords: [
  "reparación de electrodomésticos LG",
  "servicio técnico LG zona norte",
  "reparación de lavarropas LG",
  "reparación de heladeras LG",
  "reparación de lavavajillas LG",
  "reparación de lavasecarropas LG",
  "venta de repuestos LG",
  "repuestos originales LG",
  "partes originales LG",
  "servicio técnico especializado LG"
],
  authors: [{ name: "Home Service", url: "https://homeservicezn.com.ar" }],
  creator: "Ezequiel Gil Barta",
  metadataBase: new URL("https://homeservicezn.com.ar"),
  openGraph: {
    title: "Home Service - Reparación de Electrodomésticos",
    description: "Especialistas en LG, con más de 20 años de experiencia.",
    url: "https://homeservicezn.com.ar",
    siteName: "Home Service",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Service - Reparación de Electrodomésticos",
    description: "Especialistas en LG, con más de 20 años de experiencia.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${redHatDisplay.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
