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
  title: "Home Service - Reparación de Electrodomésticos y Repuestos",
  description: "Más de 20 años de experiencia en reparación de electrodomésticos. Zona Norte, Buenos Aires.",
    generator: 'v0.dev'
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
