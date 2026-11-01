"use client"

import { Star, ExternalLink } from "lucide-react"
import { RESENAS } from "@/public/data/resenas"
import {
  GOOGLE_PROFILE_URL,
  GOOGLE_RATING,
  GOOGLE_RATING_LABEL,
  GOOGLE_REVIEW_COUNT,
} from "@/lib/business"
import { trackEvent } from "@/lib/tracking"

function Estrellas({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`${className} fill-amber-400 text-amber-400`} />
      ))}
    </span>
  )
}

export function ResenasGoogle() {
  const handleGoogleClick = (section: string) => () =>
    trackEvent("google_reviews_click", { reviews_section: section })

  return (
    <section
      id="resenas"
      aria-labelledby="resenas-heading"
      className="py-16 sm:py-20 bg-gray-50 border-y border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado + puntaje */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#A50034] mb-3 bg-[#A50034]/8 px-3 py-1 rounded-full">
            Opiniones de clientes
          </span>
          <h2
            id="resenas-heading"
            className="text-3xl sm:text-4xl font-red-hat-display font-bold text-gray-900"
          >
            Lo que dicen nuestros clientes
          </h2>

          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleGoogleClick("resenas_encabezado")}
            className="inline-flex items-center gap-3 mt-6 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm hover:border-[#A50034] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A50034]"
            aria-label={`Puntaje ${GOOGLE_RATING_LABEL} de 5 en Google, ${GOOGLE_REVIEW_COUNT} reseñas. Ver perfil en Google (se abre en una pestaña nueva)`}
          >
            <span className="font-red-hat-display text-3xl font-bold text-gray-900" aria-hidden="true">
              {GOOGLE_RATING_LABEL}
            </span>
            <span className="flex flex-col items-start gap-0.5" aria-hidden="true">
              <Estrellas />
              <span className="text-xs text-gray-500">{GOOGLE_REVIEW_COUNT} Reseñas en Google</span>
            </span>
          </a>
        </div>

        {/* Reseñas */}
        <ul className="columns-1 md:columns-2 lg:columns-3 gap-5">
          {RESENAS.map((r) => (
            <li key={r.autor} className="break-inside-avoid mb-5">
              <figure className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <Estrellas />
                  <span className="sr-only">5 de 5 estrellas</span>
                  {r.etiqueta && (
                    <span className="text-[11px] font-medium text-gray-500 bg-gray-100 rounded-full px-2.5 py-0.5">
                      {r.etiqueta}
                    </span>
                  )}
                </div>
                <blockquote>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                    “{r.texto}”
                  </p>
                </blockquote>
                <figcaption className="flex items-center gap-3 mt-4">
                  <span
                    className="w-8 h-8 rounded-full bg-[#A50034]/10 text-[#A50034] text-sm font-semibold flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    {r.autor.charAt(0)}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">{r.autor}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="text-center mt-4">
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleGoogleClick("resenas_cta")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#A50034] bg-white border border-[#A50034] rounded-lg hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A50034] focus-visible:ring-offset-2"
          >
            Ver las {GOOGLE_REVIEW_COUNT} reseñas en Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
