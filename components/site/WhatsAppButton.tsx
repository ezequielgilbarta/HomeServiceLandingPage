"use client"

import Image from "next/image"
import { waUrl } from "@/lib/contact"

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export function WhatsAppButton({
  numero,
  mensaje,
  children,
  className = "",
  variant = "primary",
  section,
}: {
  numero: string
  mensaje: string
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "outline"
  section: string
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2"
  const variants = {
    primary: "bg-[#A50034] hover:bg-[#8A0029] text-white focus-visible:ring-[#A50034] shadow-sm hover:shadow-md",
    secondary: "bg-white text-[#A50034] hover:bg-gray-50 focus-visible:ring-[#A50034] border border-[#A50034]",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white",
  }

  const handleClick = () => {
    if (typeof window === "undefined") return
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "whatsapp_click",
      whatsapp_section: section,
      whatsapp_numero: numero,
    })
  }

  return (
    <a
      href={waUrl(numero, mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={`Contactar por WhatsApp: ${mensaje}`}
      onClick={handleClick}
    >
      <Image src="/images/whatsapp.png" alt="" width={18} height={18} aria-hidden="true" />
      {children}
    </a>
  )
}
