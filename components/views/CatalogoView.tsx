"use client"

import { useRef, useCallback } from "react"
import Link from "next/link"
import { SectionLabel } from "@/components/site/SectionLabel"
import { WhatsAppButton } from "@/components/site/WhatsAppButton"
import { FiltrosArticulos } from "@/components/custom-ui/FiltrosArticulos"
import { Paginacion } from "@/components/custom-ui/Paginacion"
import { useArticulos } from "@/hooks/use-articulos"
import type { Articulo, Seccion } from "@/lib/articulos"
import { WHATSAPP_REPUESTOS } from "@/lib/contact"

// Textos propios de cada sección (el diseño es el mismo)
const COPY = {
  accesorios: {
    breadcrumb: "Accesorios",
    titulo: "Accesorios originales LG",
    intro:
      "Filtros de agua, racks, canastos y más para tu heladera y tu lavavajillas LG. Consultá disponibilidad y precio por WhatsApp.",
    cruzado: { pregunta: "¿Buscás una pieza técnica?", texto: "Ver repuestos", href: "/repuestos" },
    ariaLista: "Catálogo de accesorios",
    item: "accesorio",
    trackItem: "catalogo_accesorio",
    ctaTitulo: "¿No encontrás el accesorio que necesitás?",
    ctaMensaje: "Hola, estoy buscando un accesorio para mi equipo LG modelo... ¿lo tienen?",
    ctaSection: "cta_accesorios",
  },
  repuestos: {
    breadcrumb: "Repuestos",
    titulo: "Repuestos y partes originales LG",
    intro:
      "Stock de repuestos originales para heladeras, lavarropas y lavavajillas. Consultá disponibilidad y precio por WhatsApp.",
    cruzado: { pregunta: "¿Buscás un filtro, rack o canasto?", texto: "Ver accesorios", href: "/accesorios" },
    ariaLista: "Catálogo de repuestos",
    item: "repuesto",
    trackItem: "catalogo_repuesto",
    ctaTitulo: "¿No encontrás el repuesto que necesitás?",
    ctaMensaje: "Hola, estoy buscando un repuesto para mi equipo LG modelo... ¿lo tienen?",
    ctaSection: "cta_repuestos",
  },
} as const

export function CatalogoView({ seccion, articulos: articulosIniciales }: { seccion: Seccion; articulos: Articulo[] }) {
  const copy = COPY[seccion]
  const articulosRef = useRef<HTMLDivElement>(null)

  const {
    articulos,
    filtroTipo,
    setFiltroTipo,
    filtroSubtipos,
    toggleSubtipo,
    limpiarSubtipos,
    subtiposDisponibles,
    filtroModelos,
    toggleModelo,
    limpiarModelos,
    modelosDisponibles,
    ordenPor,
    setOrdenPor,
    paginaActual,
    setPaginaActual,
    totalPaginas,
    totalArticulos,
  } = useArticulos(articulosIniciales)

  const scrollToArticulos = useCallback(() => {
    articulosRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <main id="main-content">
      <section aria-labelledby={`${seccion}-page-heading`} className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Ruta de navegación" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#A50034] transition-colors">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-gray-700 font-medium" aria-current="page">{copy.breadcrumb}</li>
            </ol>
          </nav>

          {/* Encabezado */}
          <div className="mb-10">
            <SectionLabel>Catálogo</SectionLabel>
            <h1
              id={`${seccion}-page-heading`}
              className="text-3xl sm:text-4xl font-red-hat-display font-bold text-gray-900 mt-2 mb-3"
            >
              {copy.titulo}
            </h1>
            <p className="text-gray-500 max-w-xl text-base">{copy.intro}</p>
            <p className="text-sm text-gray-400 mt-3">
              {copy.cruzado.pregunta}{" "}
              <Link href={copy.cruzado.href} className="text-[#A50034] font-medium hover:underline underline-offset-4">
                {copy.cruzado.texto}
              </Link>
            </p>
          </div>

          {/* Filtros */}
          <div ref={articulosRef}>
            <FiltrosArticulos
              mostrarTipo={false}
              filtroTipo={filtroTipo}
              onFiltroTipoChange={setFiltroTipo}
              filtroSubtipos={filtroSubtipos}
              onToggleSubtipo={toggleSubtipo}
              onLimpiarSubtipos={limpiarSubtipos}
              subtiposDisponibles={subtiposDisponibles}
              filtroModelos={filtroModelos}
              onToggleModelo={toggleModelo}
              onLimpiarModelos={limpiarModelos}
              modelosDisponibles={modelosDisponibles}
              ordenPor={ordenPor}
              onOrdenChange={setOrdenPor}
              totalArticulos={totalArticulos}
            />
          </div>

          {/* Grid de artículos */}
          {articulos.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 font-medium">
                No encontramos artículos con esos filtros.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Probá cambiando los filtros o consultanos directamente.
              </p>
            </div>
          ) : (
            <div
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10"
              role="list"
              aria-label={copy.ariaLista}
            >
              {articulos.map((articulo) => (
                <article
                  key={articulo.id}
                  role="listitem"
                  className="bg-white rounded-xl border border-gray-200 hover:border-[#A50034]/30 hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden"
                >
                  <div className="p-5 flex flex-col flex-grow">
                    {/* Nombre y descripción */}
                    <h3 className="font-red-hat-display font-bold text-gray-900 text-base sm:text-lg mb-1 line-clamp-2">
                      {articulo.nombre}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                      {articulo.descripcion}
                    </p>

                    {/* Modelos */}
                    <div className="mt-auto">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide block mb-1.5">
                        Modelos compatibles
                      </span>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {articulo.modelos?.join(", ")}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="px-5 pb-5">
                    <WhatsAppButton
                      numero={WHATSAPP_REPUESTOS}
                      mensaje={`Hola, quiero consultar por este ${copy.item}: ${articulo.nombre} (${articulo.descripcion})`}
                      className="w-full py-2.5 text-sm"
                      variant="primary"
                      section={copy.trackItem}
                    >
                      Consultar
                    </WhatsAppButton>
                  </div>
                </article>
              ))}
            </div>
          )}

          <Paginacion
            paginaActual={paginaActual}
            totalPaginas={totalPaginas}
            onPaginaChange={setPaginaActual}
            onPageChangeScroll={scrollToArticulos}
          />

          {/* CTA inferior – artículo no encontrado */}
          <div className="mt-10 bg-[#A50034] rounded-2xl p-7 sm:p-8 text-center">
            <h2 className="font-red-hat-display text-xl sm:text-2xl font-bold text-white mb-2">
              {copy.ctaTitulo}
            </h2>
            <p className="text-[#ffb3c7] text-sm mb-5">
              Escribinos con el modelo de tu equipo y te ayudamos a conseguirlo.
            </p>
            <WhatsAppButton
              numero={WHATSAPP_REPUESTOS}
              mensaje={copy.ctaMensaje}
              className="px-6 py-3 text-sm"
              variant="secondary"
              section={copy.ctaSection}
            >
              Consultar disponibilidad
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  )
}
