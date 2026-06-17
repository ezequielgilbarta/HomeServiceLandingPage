"use client"

import { useState, useRef, useCallback } from "react"
import {
  Phone,
  Clock,
  MapPin,
  ShoppingCart,
  BadgeCheck,
  ChevronRight,
  Shield,
  Zap,
  Star,
  Menu,
  X,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import { useArticulos } from "@/hooks/use-articulos"
import { FiltrosArticulos } from "@/components/custom-ui/FiltrosArticulos"
import { Paginacion } from "@/components/custom-ui/Paginacion"

// ─── Constantes de contacto centralizadas ────────────────────────────────────
const WHATSAPP_SERVICIOS = "5491128528465"
const WHATSAPP_REPUESTOS = "5491138652822"

const waUrl = (numero: string, texto: string) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`

// ─── Datos de contenido ───────────────────────────────────────────────────────
const SERVICIOS = [
  {
    nombre: "Heladeras",
    descripcion: "Compresores, placas, filtros, resistencias y mantenimiento general.",
  },
  {
    nombre: "Lavarropas y Secarropas",
    descripcion: "Bombas, placas, motores, resistencias y mantenimiento general.",
  },
  {
    nombre: "Lavavajillas",
    descripcion: "Resistencias, placas, bombas, limpieza de filtros y mantenimiento general.",
  },
]

const ZONAS = ["Tigre", "Nordelta", "San Fernando", "San Isidro", "Vicente López", "CABA"]

const DIFERENCIADORES = [
  {
    icon: BadgeCheck,
    titulo: "Servicio Oficial Autorizado",
    descripcion: "Técnicos certificados por LG Argentina con acceso a repuestos originales de fábrica.",
  },
  {
    icon: Shield,
    titulo: "Garantía en cada reparación",
    descripcion: "Todos nuestros trabajos tienen garantía. Si hay un problema, volvemos sin costo adicional.",
  },
  {
    icon: Zap,
    titulo: "Diagnóstico rápido",
    descripcion: "Evaluamos el equipo en el domicilio y te informamos el costo antes de comenzar.",
  },
  {
    icon: MapPin,
    titulo: "Cobertura Zona Norte",
    descripcion: "Atendemos Tigre, Nordelta, San Fernando, San Isidro, Vicente López y CABA.",
  },
]

const STATS = [
  { valor: "+20", unidad: "años", descripcion: "de experiencia" },
]

// ─── Subcomponentes ───────────────────────────────────────────────────────────

function WhatsAppButton({
  numero,
  mensaje,
  children,
  className = "",
  variant = "primary",
}: {
  numero: string
  mensaje: string
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "outline"
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2"
  const variants = {
    primary: "bg-[#A50034] hover:bg-[#8A0029] text-white focus-visible:ring-[#A50034] shadow-sm hover:shadow-md",
    secondary: "bg-white text-[#A50034] hover:bg-gray-50 focus-visible:ring-[#A50034] border border-[#A50034]",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white",
  }
  return (
    <a
      href={waUrl(numero, mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={`Contactar por WhatsApp: ${mensaje}`}
    >
      <Image src="/images/whatsapp.png" alt="" width={18} height={18} aria-hidden="true" />
      {children}
    </a>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#A50034] mb-3 bg-[#A50034]/8 px-3 py-1 rounded-full">
      {children}
    </span>
  )
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function HomePage() {
  const [currentView, setCurrentView] = useState<"hero" | "servicios" | "repuestos">("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const articulosRef = useRef<HTMLDivElement>(null)

  const {
    articulos,
    loading,
    error,
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
  } = useArticulos()

  const navigateTo = useCallback(
    (section: "hero" | "servicios" | "repuestos") => {
      setCurrentView(section)
      setMobileMenuOpen(false)
      // Scroll to top when changing views
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50)
    },
    []
  )

  const scrollToArticulos = useCallback(() => {
    articulosRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <div className="min-h-screen bg-white">

      {/* ── Header ─────────────────────────────────────────────────── */}
      <header
        role="banner"
        className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Marca */}
            <button
              onClick={() => navigateTo("hero")}
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A50034] rounded-md"
              aria-label="Ir al inicio – Home Service"
            >
              <span className="text-xl font-red-hat-display font-bold text-[#A50034]">
                Home Service
              </span>
              <span className="hidden sm:inline-block text-xs text-gray-400 font-medium border border-gray-200 rounded px-1.5 py-0.5">
                LG Oficial
              </span>
            </button>

            {/* Nav desktop */}
            <nav role="navigation" aria-label="Navegación principal" className="hidden md:flex items-center gap-1">
              <button
                onClick={() => navigateTo("servicios")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentView === "servicios"
                    ? "bg-[#A50034]/8 text-[#A50034]"
                    : "text-gray-600 hover:text-[#A50034] hover:bg-gray-50"
                }`}
                aria-current={currentView === "servicios" ? "page" : undefined}
              >
                Servicios
              </button>
              <button
                onClick={() => navigateTo("repuestos")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentView === "repuestos"
                    ? "bg-[#A50034]/8 text-[#A50034]"
                    : "text-gray-600 hover:text-[#A50034] hover:bg-gray-50"
                }`}
                aria-current={currentView === "repuestos" ? "page" : undefined}
              >
                Repuestos
              </button>
              <WhatsAppButton
                numero={WHATSAPP_SERVICIOS}
                mensaje="Hola, quiero consultar sobre un servicio técnico"
                className="ml-3 px-4 py-2 text-sm"
                variant="primary"
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
              <button
                onClick={() => navigateTo("servicios")}
                className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#A50034] rounded-md"
              >
                Servicios
              </button>
              <button
                onClick={() => navigateTo("repuestos")}
                className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#A50034] rounded-md"
              >
                Repuestos
              </button>
              <div className="px-4 pt-2 pb-1">
                <WhatsAppButton
                  numero={WHATSAPP_SERVICIOS}
                  mensaje="Hola, quiero consultar sobre un servicio técnico"
                  className="w-full py-3 text-sm"
                  variant="primary"
                >
                  Consultar por WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ── VISTA: HERO ─────────────────────────────────────────────── */}
      {currentView === "hero" && (
        <main id="main-content">

          {/* Hero principal */}
          <section
            aria-labelledby="hero-heading"
            className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {/* Badge de confianza */}
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600 mb-6 shadow-sm">
                <BadgeCheck className="h-4 w-4 text-[#A50034]" aria-hidden="true" />
                <span>Servicio Técnico Oficial Autorizado</span>
                <Image
                  src="/images/lg.png"
                  alt="LG"
                  width={28}
                  height={14}
                  className="ml-1"
                />
              </div>

              {/* Headline principal */}
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl font-red-hat-display font-bold text-gray-900 leading-tight mb-5"
              >
                Tu electrodoméstico LG{" "}
                <span className="text-[#A50034]">reparado por técnicos oficiales</span>
              </h1>

              {/* Subtítulo */}
              <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-3 leading-relaxed">
                Más de 20 años reparando heladeras, lavarropas y lavavajillas LG en Zona Norte.
                Diagnóstico en tu domicilio, repuestos originales y garantía incluida.
              </p>

              {/* Zonas de cobertura */}
              <p className="text-sm text-gray-400 mb-10">
                <MapPin className="inline h-3.5 w-3.5 mr-1 text-[#A50034]" aria-hidden="true" />
                {ZONAS.join(" · ")}
              </p>

              {/* CTAs principales */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <WhatsAppButton
                  numero={WHATSAPP_SERVICIOS}
                  mensaje="Hola, necesito un servicio técnico para mi electrodoméstico LG"
                  className="px-8 py-4 text-base"
                  variant="primary"
                >
                  Pedir visita técnica
                </WhatsAppButton>
                <button
                  onClick={() => navigateTo("repuestos")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-[#A50034] hover:text-[#A50034] transition-all duration-200 shadow-sm"
                >
                  Ver repuestos
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {/* Social proof mínimo */}
              <div className="mt-8 flex items-center justify-center gap-1" aria-label="Calificación">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
                <span className="ml-2 text-sm text-gray-500">Técnicos certificados LG Argentina</span>
              </div>
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
                <button
                  onClick={() => navigateTo("servicios")}
                  className="inline-flex items-center gap-2 text-[#A50034] font-semibold text-sm hover:underline underline-offset-4"
                >
                  Ver todos los servicios
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
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
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* CTA intermedio – Repuestos */}
          <section
            aria-labelledby="repuestos-cta-heading"
            className="py-12 bg-gray-50 border-y border-gray-100"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="text-center sm:text-left">
                  <SectionLabel>Tienda de repuestos</SectionLabel>
                  <h2
                    id="repuestos-cta-heading"
                    className="text-2xl font-red-hat-display font-bold text-gray-900 mt-1"
                  >
                    Repuestos y partes originales LG
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Filtros, bombas, resistencias, placas y más. Consultá disponibilidad.
                  </p>
                </div>
                <button
                  onClick={() => navigateTo("repuestos")}
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-[#A50034] hover:bg-[#8A0029] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm text-sm"
                >
                  <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                  Ver catálogo
                </button>
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
                Escribinos por WhatsApp y coordinamos una visita técnica en tu domicilio.
                Sin compromiso, sin costo de diagnóstico.
              </p>
              <WhatsAppButton
                numero={WHATSAPP_SERVICIOS}
                mensaje="Hola, necesito un servicio técnico para mi electrodoméstico LG"
                className="px-8 py-4 text-base"
                variant="outline"
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
      )}

      {/* ── VISTA: SERVICIOS ────────────────────────────────────────── */}
      {currentView === "servicios" && (
        <main id="main-content">
          <section aria-labelledby="servicios-page-heading" className="py-10 sm:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Breadcrumb + back */}
              <nav aria-label="Ruta de navegación" className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-gray-400">
                  <li>
                    <button
                      onClick={() => navigateTo("hero")}
                      className="hover:text-[#A50034] transition-colors"
                    >
                      Inicio
                    </button>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li className="text-gray-700 font-medium" aria-current="page">Servicios</li>
                </ol>
              </nav>

              {/* Hero de sección */}
              <div className="mb-14">
                <SectionLabel>Quiénes somos</SectionLabel>
                <h1
                  id="servicios-page-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-red-hat-display font-bold text-gray-900 mt-2 mb-4"
                >
                  Servicio técnico oficial LG
                  <br />
                  <span className="text-[#A50034]">en tu domicilio</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                  Somos un equipo con más de{" "}
                  <strong className="text-gray-700">20 años de experiencia</strong> como técnicos
                  autorizados LG en Zona Norte. Usamos repuestos originales, garantizamos cada
                  trabajo y atendemos sin franquicia en tu hogar.
                </p>
              </div>

              {/* Diferenciadores */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {DIFERENCIADORES.map((d) => {
                  const Icon = d.icon
                  return (
                    <div
                      key={d.titulo}
                      className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                    >
                      <div
                        className="w-10 h-10 bg-[#A50034]/8 rounded-lg flex items-center justify-center mb-3"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5 text-[#A50034]" />
                      </div>
                      <h3 className="font-red-hat-display font-semibold text-gray-900 text-sm mb-1">
                        {d.titulo}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{d.descripcion}</p>
                    </div>
                  )
                })}
              </div>

              {/* Qué reparamos */}
              <div className="mb-16">
                <SectionLabel>Equipos</SectionLabel>
                <h2 className="text-2xl sm:text-3xl font-red-hat-display font-bold text-gray-900 mb-8 mt-2">
                  ¿Qué equipos reparamos?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {SERVICIOS.map((s) => (
                    <article
                      key={s.nombre}
                      className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#A50034]/30 hover:shadow-sm transition-all"
                    >
                      <h3 className="font-red-hat-display font-bold text-[#A50034] text-lg mb-3">
                        {s.nombre}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.descripcion}</p>
                    </article>
                  ))}
                </div>
              </div>

              {/* Cómo funciona */}
              <div className="mb-16 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <SectionLabel>Proceso</SectionLabel>
                <h2 className="text-2xl font-red-hat-display font-bold text-gray-900 mb-8 mt-2">
                  ¿Cómo funciona una visita técnica?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    {
                      paso: "1",
                      titulo: "Contactanos",
                      desc: "Escribinos por WhatsApp con el modelo de tu equipo y el problema que tiene.",
                    },
                    {
                      paso: "2",
                      titulo: "Coordinamos la visita",
                      desc: "Acordamos día y horario en tu domicilio.",
                    },
                    {
                      paso: "3",
                      titulo: "Diagnóstico y reparación",
                      desc: "Evaluamos el equipo, te informamos el costo y, con tu aprobación, reparamos.",
                    },
                  ].map((p) => (
                    <div key={p.paso} className="flex gap-4">
                      <div
                        className="w-8 h-8 bg-[#A50034] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        {p.paso}
                      </div>
                      <div>
                        <h3 className="font-red-hat-display font-semibold text-gray-900 mb-1">
                          {p.titulo}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zona de cobertura */}
              <div className="mb-16">
                <SectionLabel>Cobertura</SectionLabel>
                <h2 className="text-2xl font-red-hat-display font-bold text-gray-900 mb-6 mt-2">
                  ¿Dónde atendemos?
                </h2>
                <div className="flex flex-wrap gap-3" role="list" aria-label="Zonas de cobertura">
                  {ZONAS.map((zona) => (
                    <div
                      key={zona}
                      role="listitem"
                      className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2"
                    >
                      <MapPin className="h-4 w-4 text-[#A50034]" aria-hidden="true" />
                      <span className="text-sm font-medium text-gray-700">{zona}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA de contacto */}
              <div
                className="bg-[#A50034] rounded-2xl p-8 sm:p-10 text-center"
                role="complementary"
                aria-label="Contacto"
              >
                <h2 className="text-2xl sm:text-3xl font-red-hat-display font-bold text-white mb-2">
                  ¿Querés agendar una visita?
                </h2>
                <p className="text-[#ffb3c7] mb-6 text-base">
                  Contactanos y coordinamos en minutos.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <WhatsAppButton
                    numero={WHATSAPP_SERVICIOS}
                    mensaje="Hola, quiero agendar una visita técnica"
                    className="px-8 py-3 text-sm"
                    variant="outline"
                  >
                    Agendar visita técnica
                  </WhatsAppButton>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[#ffb3c7] text-sm">
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    +54 9 11 2852‑8465
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    Lun–Vie 9 a 17 hs
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    Zona Norte, GBA
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ── VISTA: REPUESTOS ────────────────────────────────────────── */}
      {currentView === "repuestos" && (
        <main id="main-content">
          <section aria-labelledby="repuestos-page-heading" className="py-10 sm:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Breadcrumb */}
              <nav aria-label="Ruta de navegación" className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-gray-400">
                  <li>
                    <button
                      onClick={() => navigateTo("hero")}
                      className="hover:text-[#A50034] transition-colors"
                    >
                      Inicio
                    </button>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li className="text-gray-700 font-medium" aria-current="page">Repuestos</li>
                </ol>
              </nav>

              {/* Encabezado */}
              <div className="mb-10">
                <SectionLabel>Catálogo</SectionLabel>
                <h1
                  id="repuestos-page-heading"
                  className="text-3xl sm:text-4xl font-red-hat-display font-bold text-gray-900 mt-2 mb-3"
                >
                  Repuestos y partes originales LG
                </h1>
                <p className="text-gray-500 max-w-xl text-base">
                  Stock de repuestos originales para heladeras, lavarropas y lavavajillas.
                  Consultá disponibilidad y precio por WhatsApp.
                </p>
              </div>

              {/* Filtros */}
              <div ref={articulosRef}>
                <FiltrosArticulos
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

              {/* Loading */}
              {loading && (
                <div className="text-center py-16" role="status" aria-live="polite">
                  <div
                    className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-gray-200 border-t-[#A50034] mb-3"
                    aria-hidden="true"
                  />
                  <p className="text-gray-500 text-sm">Cargando artículos…</p>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="text-center py-16" role="alert">
                  <p className="text-red-600 font-medium">Error: {error}</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Por favor recargá la página o contactanos directamente.
                  </p>
                </div>
              )}

              {/* Grid de artículos */}
              {!loading && !error && (
                <>
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
                      aria-label="Catálogo de repuestos"
                    >
                      {articulos.map((articulo) => (
                        <article
                          key={articulo.id}
                          role="listitem"
                          className="bg-white rounded-xl border border-gray-200 hover:border-[#A50034]/30 hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden"
                        >
                          <div className="p-5 flex flex-col flex-grow">
                            {/* Badge de tipo */}
                            <div className="mb-3">
                              {/* <span
                                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                                  articulo.tipo === "repuesto"
                                    ? "bg-blue-50 text-blue-700"
                                    : "bg-green-50 text-green-700"
                                }`}
                              >
                                {articulo.tipo === "repuesto" ? "Repuesto" : "Parte"}
                              </span> */}
                            </div>

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
                              mensaje={`Hola, quiero consultar por este repuesto: ${articulo.nombre} (${articulo.descripcion})`}
                              className="w-full py-2.5 text-sm"
                              variant="primary"
                            >
                              Consultar precio
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
                </>
              )}

              {/* CTA inferior – repuesto no encontrado */}
              <div className="mt-10 bg-[#A50034] rounded-2xl p-7 sm:p-8 text-center">
                <h2 className="font-red-hat-display text-xl sm:text-2xl font-bold text-white mb-2">
                  ¿No encontrás el repuesto que necesitás?
                </h2>
                <p className="text-[#ffb3c7] text-sm mb-5">
                  Escribinos con el modelo de tu equipo y te ayudamos a conseguirlo.
                </p>
                <WhatsAppButton
                  numero={WHATSAPP_REPUESTOS}
                  mensaje="Hola, estoy buscando un repuesto para mi equipo LG modelo... ¿lo tienen?"
                  className="px-6 py-3 text-sm"
                  variant="secondary"
                >
                  Consultar disponibilidad
                </WhatsAppButton>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ── Footer ─────────────────────────────────────────────────── */}
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
              <div className="flex items-center gap-2">
                <Image
                  src="/images/lg.png"
                  alt="LG Autorizado"
                  width={40}
                  height={20}
                  className="opacity-60"
                />
                <span className="text-xs text-gray-500">Servicio Técnico Autorizado</span>
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="font-red-hat-display font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                Contacto
              </h3>
              <address className="not-italic space-y-3 text-gray-400 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#A50034] flex-shrink-0" aria-hidden="true" />
                  <span>Servicios: +54 9 11 2852‑8465</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#A50034] flex-shrink-0" aria-hidden="true" />
                  <span>Repuestos: +54 9 11 3865‑2822</span>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-[#A50034] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Zona Norte, Buenos Aires<br />(Tigre, Nordelta, San Fernando, San Isidro, Vicente López, CABA)</span>
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
    </div>
  )
}
