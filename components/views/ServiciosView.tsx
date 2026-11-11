import { Phone, Clock, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"
import { LgVerifyLink } from "@/components/site/LgVerifyLink"
import { SectionLabel } from "@/components/site/SectionLabel"
import { WhatsAppButton } from "@/components/site/WhatsAppButton"
import { WHATSAPP_SERVICIOS } from "@/lib/contact"
import { SERVICIOS, ZONAS, DIFERENCIADORES } from "@/components/site/content"

export function ServiciosView() {
  return (
    <main id="main-content">
      <section aria-labelledby="servicios-page-heading" className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb + back */}
          <nav aria-label="Ruta de navegación" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/"
                  className="hover:text-[#A50034] transition-colors"
                >
                  Inicio
                </Link>
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
                  {d.enlaceLG && (
                    <LgVerifyLink
                      section="diferenciador_servicios"
                      ariaLabel={`${d.enlaceLG} (se abre en una pestaña nueva)`}
                      className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-[#A50034] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A50034] rounded"
                    >
                      {d.enlaceLG}
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </LgVerifyLink>
                  )}
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
                section="cta_servicios"
              >
                Agendar visita técnica
              </WhatsAppButton>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[#ffb3c7] text-sm">
              <a href="tel:+5491128528465" className="flex items-center gap-2 hover:underline">
                <Phone className="h-4 w-4" aria-hidden="true" />
                +54 9 11 2852‑8465
              </a>
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
  )
}
