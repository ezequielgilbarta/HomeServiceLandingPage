"use client"

import { Phone, Clock, MapPin, Star, ExternalLink } from "lucide-react"
import Image from "next/image"
import { LgVerifyLink } from "@/components/site/LgVerifyLink"
import {
  GOOGLE_PROFILE_URL,
  GOOGLE_RATING_LABEL,
  GOOGLE_REVIEW_COUNT,
} from "@/lib/business"
import { trackEvent } from "@/lib/tracking"

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

          {/* Marca */}
          <div>
            <p className="font-red-hat-display text-xl font-bold text-[#A50034] mb-3">
              Home Service
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Técnicos oficiales autorizados LG con más de 20 años en Zona Norte, Buenos Aires.
              Reparamos tu hogar con garantía y repuestos originales.
            </p>
            <LgVerifyLink
              section="footer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
            >
              <Image
                src="/images/lg.png"
                alt="LG Autorizado"
                width={40}
                height={20}
                className="opacity-60"
              />
              <span className="text-xs">Servicio Técnico Autorizado · Verificar en LG</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </LgVerifyLink>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-red-hat-display font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Contacto
            </h3>
            <address className="not-italic space-y-3 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#A50034] flex-shrink-0" aria-hidden="true" />
                <span>Servicios: <a href="tel:+5491128528465" className="hover:underline">+54 9 11 2852‑8465</a></span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#A50034] flex-shrink-0" aria-hidden="true" />
                <span>Repuestos: <a href="tel:+5491138652822" className="hover:underline">+54 9 11 3865‑2822</a></span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#A50034] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Zona Norte, Buenos Aires<br />(Tigre, Nordelta, San Fernando, San Isidro, Vicente López, CABA)</span>
              </p>
              <p className="flex items-center gap-2">
                <Star className="h-4 w-4 text-[#A50034] flex-shrink-0" aria-hidden="true" />
                <a
                  href={GOOGLE_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("google_reviews_click", { reviews_section: "footer" })}
                  className="hover:underline"
                >
                  {GOOGLE_RATING_LABEL} en Google · {GOOGLE_REVIEW_COUNT} reseñas
                </a>
              </p>
            </address>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="font-red-hat-display font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Horarios
            </h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#A50034]" aria-hidden="true" />
                Lunes a viernes de 9 a 17 hs
              </p>
              <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                Para urgencias fuera de horario, podés escribirnos por WhatsApp y te
                respondemos a la brevedad.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Home Service. Todos los derechos reservados.</p>
          <p>Servicio Técnico Oficial Autorizado LG Argentina</p>
        </div>
      </div>
    </footer>
  )
}
