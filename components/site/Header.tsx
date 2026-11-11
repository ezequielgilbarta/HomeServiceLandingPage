"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { WhatsAppButton } from "@/components/site/WhatsAppButton"
import { WHATSAPP_SERVICIOS } from "@/lib/contact"

const NAV_ITEMS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/accesorios", label: "Accesorios" },
  { href: "/repuestos", label: "Repuestos" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      role="banner"
      className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Marca */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A50034] rounded-md"
            aria-label="Ir al inicio – Home Service"
          >
            <span className="text-xl font-red-hat-display font-bold text-[#A50034]">
              Home Service
            </span>
            <span className="hidden sm:inline-block text-xs text-gray-400 font-medium border border-gray-200 rounded px-1.5 py-0.5">
              LG Oficial
            </span>
          </Link>

          {/* Nav desktop */}
          <nav role="navigation" aria-label="Navegación principal" className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? "bg-[#A50034]/8 text-[#A50034]"
                    : "text-gray-600 hover:text-[#A50034] hover:bg-gray-50"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <WhatsAppButton
              numero={WHATSAPP_SERVICIOS}
              mensaje="Hola, quiero consultar sobre un servicio técnico"
              className="ml-3 px-4 py-2 text-sm"
              variant="primary"
              section="header_desktop"
            >
              Consultar ahora
            </WhatsAppButton>
          </nav>

          {/* Botón menú mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#A50034] hover:bg-gray-50 transition-colors"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Menú mobile desplegable */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-t border-gray-100 py-3 space-y-1"
            role="navigation"
            aria-label="Menú mobile"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#A50034] rounded-md"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2 pb-1">
              <WhatsAppButton
                numero={WHATSAPP_SERVICIOS}
                mensaje="Hola, quiero consultar sobre un servicio técnico"
                className="w-full py-3 text-sm"
                variant="primary"
                section="header_mobile"
              >
                Consultar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
