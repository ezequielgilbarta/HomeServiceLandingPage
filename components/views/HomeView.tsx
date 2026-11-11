"use client"

import { Clock, MapPin, ShoppingCart, BadgeCheck, ChevronRight, Star, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { LgVerifyLink } from "@/components/site/LgVerifyLink"
import { SectionLabel } from "@/components/site/SectionLabel"
import { WhatsAppButton } from "@/components/site/WhatsAppButton"
import { ResenasGoogle } from "@/components/custom-ui/ResenasGoogle"
import {
  GOOGLE_PROFILE_URL,
  GOOGLE_RATING_LABEL,
  GOOGLE_REVIEW_COUNT,
} from "@/lib/business"
import { trackEvent } from "@/lib/tracking"
import { WHATSAPP_SERVICIOS } from "@/lib/contact"
import { SERVICIOS, ZONAS, DIFERENCIADORES } from "@/components/site/content"

export function HomeView() {
  return (
    <main id="main-content">

      {/* Hero principal */}
      <section
        aria-labelledby="hero-heading"
        className="bg-gradient-to-b from-gray-50 to-white py-10 sm:py-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge de confianza */}
          <LgVerifyLink
            section="hero_badge"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1 text-xs text-gray-600 mb-6 shadow-sm hover:border-[#A50034] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A50034] md:mb-14"
          >
            <BadgeCheck className="h-4 w-4 text-[#A50034]" aria-hidden="true" />
            <span>Servicio Técnico Oficial Autorizado</span>
            <Image
              src="/images/lg.png"
              alt="LG"
              width={28}
              height={14}
              className="ml-1"
            />
            <ExternalLink className="h-3 w-3 text-gray-400" aria-hidden="true" />
          </LgVerifyLink>

          {/* Headline principal */}
          <h1
            id="hero-heading"
            className="text-4xl font-red-hat-display font-bold text-gray-900 leading-tight mb-8 md:text-6xl md:mb-14"
          >
            Tu electrodoméstico LG{" "}
            <span className="text-[#A50034]">reparado por técnicos oficiales</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-md text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed md:mb-10">
            Más de 20 años reparando heladeras, lavarropas y lavavajillas LG en Zona Norte.
            Diagnóstico en tu domicilio, repuestos originales y garantía incluida.
          </p>

          {/* Zonas de cobertura */}
          <p className="text-sm text-gray-400 mb-8">
            <MapPin className="inline h-3.5 w-3.5 mr-1 text-[#A50034]" aria-hidden="true" />
            {ZONAS.join(" · ")}
          </p>

          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <WhatsAppButton
              numero={WHATSAPP_SERVICIOS}
              mensaje="Hola, necesito un servicio técnico para mi electrodoméstico LG"
              className="px-8 py-3 text-base"
              variant="primary"
              section="hero_principal"
            >
              Pedir visita técnica
            </WhatsAppButton>
            <Link href="/accesorios"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-[#A50034] hover:text-[#A50034] transition-all duration-200 shadow-sm"
            >
              Ver accesorios
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Social proof mínimo */}
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("google_reviews_click", { reviews_section: "hero" })}
            className="inline-flex items-center justify-center gap-1 rounded-md hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A50034]"
            aria-label={`Puntaje ${GOOGLE_RATING_LABEL} de 5 en Google, ${GOOGLE_REVIEW_COUNT} reseñas. Ver perfil en Google (se abre en una pestaña nueva)`}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
            <span className="ml-2 text-sm text-gray-500">
              <strong className="font-semibold text-gray-700">{GOOGLE_RATING_LABEL}</strong> ·{" "}
              {GOOGLE_REVIEW_COUNT} Reseñas en Google
            </span>
          </a>
          {/* <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <dl className="grid grid-cols-1 divide-x divide-gray-100">
              {STATS.map((stat) => (
                <div key={stat.valor} className="text-center px-4 sm:px-8">
                  <dt className="sr-only">{stat.descripcion}</dt>
                  <dd>
                    <span className="block text-3xl sm:text-4xl font-red-hat-display font-bold text-[#A50034]">
                      {stat.valor}
                    </span>
                    <span className="block text-xs sm:text-sm text-gray-400 mt-1">
                      {stat.unidad} · {stat.descripcion}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div> */}
        </div>
      </section>

      {/* Stats rápidas */}
      {/* <section aria-label="Números de la empresa" className="border-y border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <dl className="grid grid-cols-1 divide-x divide-gray-100">
            {STATS.map((stat) => (
              <div key={stat.valor} className="text-center px-4 sm:px-8">
                <dt className="sr-only">{stat.descripcion}</dt>
                <dd>
                  <span className="block text-3xl sm:text-4xl font-red-hat-display font-bold text-[#A50034]">
                    {stat.valor}
                  </span>
                  <span className="block text-xs sm:text-sm text-gray-400 mt-1">
                    {stat.unidad} · {stat.descripcion}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section> */}

      {/* Servicios (cards de entrada) */}
      <section
        aria-labelledby="servicios-heading"
        className="py-16 sm:py-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel>¿Qué reparamos?</SectionLabel>
            <h2
              id="servicios-heading"
              className="text-3xl sm:text-4xl font-red-hat-display font-bold text-gray-900"
            >
              Especialistas en electrodomésticos LG
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {SERVICIOS.map((s) => (
              <article
                key={s.nombre}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#A50034]/30 hover:shadow-md transition-all duration-200 text-left"
              >
                <h3 className="font-red-hat-display font-bold text-lg text-gray-900 mb-2">
                  {s.nombre}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.descripcion}</p>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link href="/servicios"
              className="inline-flex items-center gap-2 text-[#A50034] font-semibold text-sm hover:underline underline-offset-4"
            >
              Ver todos los servicios
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section
        aria-labelledby="diferenciadores-heading"
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel>¿Por qué elegirnos?</SectionLabel>
            <h2
              id="diferenciadores-heading"
              className="text-3xl sm:text-4xl font-red-hat-display font-bold text-gray-900"
            >
              Técnicos oficiales, no cualquier service
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFERENCIADORES.map((d) => {
              const Icon = d.icon
              return (
                <div key={d.titulo} className="text-center px-2">
                  <div
                    className="w-12 h-12 bg-[#A50034]/8 rounded-xl flex items-center justify-center mx-auto mb-4"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6 text-[#A50034]" />
                  </div>
                  <h3 className="font-red-hat-display font-semibold text-gray-900 mb-2 text-base">
                    {d.titulo}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{d.descripcion}</p>
                  {d.enlaceLG && (
                    <LgVerifyLink
                      section="diferenciador_inicio"
                      ariaLabel={`${d.enlaceLG} (se abre en una pestaña nueva)`}
                      className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#A50034] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A50034] rounded"
                    >
                      {d.enlaceLG}
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </LgVerifyLink>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reseñas de Google */}
      <ResenasGoogle />

      {/* CTA intermedio – Repuestos */}
      <section
        aria-labelledby="repuestos-cta-heading"
        className="py-12 bg-gray-50 border-y border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="text-center sm:text-left">
              <SectionLabel>Tienda de accesorios</SectionLabel>
              <h2
                id="repuestos-cta-heading"
                className="text-2xl font-red-hat-display font-bold text-gray-900 mt-1"
              >
                Accesorios y repuestos originales LG
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Filtros, racks, canastos, bombas, placas y más. Consultá disponibilidad.
              </p>
            </div>
            <Link href="/accesorios"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#A50034] hover:bg-[#8A0029] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm text-sm"
            >
              <ShoppingCart className="h-4 w-4" aria-hidden="true" />
              Ver accesorios
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final – Contacto */}
      <section
        aria-labelledby="contacto-cta-heading"
        className="py-20 bg-[#A50034]"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="contacto-cta-heading"
            className="text-3xl sm:text-4xl font-red-hat-display font-bold text-white mb-4"
          >
            ¿Tu equipo LG tiene un problema?
          </h2>
          <p className="text-[#ffb3c7] text-lg mb-8">
            Escribinos por WhatsApp y coordinamos una visita técnica a domicilio.
            Te confirmamos el costo de la visita antes de coordinar el turno.
          </p>
          <WhatsAppButton
            numero={WHATSAPP_SERVICIOS}
            mensaje="Hola, necesito un servicio técnico para mi electrodoméstico LG"
            className="px-8 py-4 text-base"
            variant="outline"
            section="cta_final_hero"
          >
            Escribir por WhatsApp
          </WhatsAppButton>
          <p className="mt-4 text-[#ffb3c7]/70 text-sm">
            <Clock className="inline h-3.5 w-3.5 mr-1" aria-hidden="true" />
            Atención lunes a viernes de 9 a 17 hs
          </p>
        </div>
      </section>
    </main>
  )
}
