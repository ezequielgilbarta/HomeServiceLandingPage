"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, MapPin, Wrench, ShoppingCart, Star, Shield, Users, BadgeCheck } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const [currentView, setCurrentView] = useState<"hero" | "servicios" | "repuestos">("hero")

  const navigateToSection = (section: "servicios" | "repuestos") => {
    setCurrentView(section)
  }

  const [activeSection, setActiveSection] = useState<"hero" | "servicios" | "repuestos">("hero")

  const scrollToSection = (section: "servicios" | "repuestos") => {
    setActiveSection(section)
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const electrodomesticos = [
    {
      nombre: "Heladeras",
      reparaciones: [
        "Compresores, placas, filtros, resistencias, mantenimiento general, etc.",
      ],
    },
    {
      nombre: "Lavarropas y Secarropas",
      reparaciones: [
        "Bombas, placas, motores, resistencias, revisión de ruidos o fallas, limpieza profunda, etc."],
    },
    {
      nombre: "Lavavajillas",
      reparaciones: [
        "Resistencias, placas, bombas, limpieza de filtros y ductos, etc.",
      ],
    },
  ]

  const repuestos = [
    {
      nombre: "Termostato Universal",
      descripcion: "Termostato regulable para heladeras y freezers",
      precio: "$8.500",
      modelos: "Compatible con Gafa, Electrolux, Whirlpool",
    },
    {
      nombre: "Bomba de Agua Lavarropas",
      descripcion: "Bomba de desagote para lavarropas automáticos",
      precio: "$12.000",
      modelos: "Drean, Samsung, LG modelos 2018-2024",
    },
    {
      nombre: "Correa Lavarropas",
      descripcion: "Correa de transmisión reforzada",
      precio: "$3.200",
      modelos: "Whirlpool, Gafa, Patrick modelos estándar",
    },
    {
      nombre: "Filtro Heladera",
      descripcion: "Filtro de agua para dispensers",
      precio: "$15.800",
      modelos: "Samsung, LG side by side 2019-2024",
    },
    {
      nombre: "Resistencia Lavavajillas",
      descripcion: "Resistencia calefactora 2000W",
      precio: "$9.500",
      modelos: "Bosch, Siemens, Ariston modelos compactos",
    },
    {
      nombre: "Capacitor Aire Acondicionado",
      descripcion: "Capacitor de arranque 35µF",
      precio: "$4.800",
      modelos: "Split 2200-3500 frigorías todas las marcas",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-red-hat-display font-bold text-[#A50034]">Home Service</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => navigateToSection("servicios")}
                className="text-gray-700 hover:text-[#A50034] font-medium transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => navigateToSection("repuestos")}
                className="text-gray-700 hover:text-[#A50034] font-medium transition-colors"
              >
                Repuestos
              </button>
            </nav>
          </div>
        </div>
      </header>

      {currentView === "hero" && (
        <section className="bg-gradient-to-br from-gray-50 to-white py-7 sm:py-12 min-h-[calc(100vh-4rem)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-red-hat-display font-bold text-gray-900 mb-1 sm:mb-2 px-2">
                Servicio Técnico Oficial y Venta de{" "}
                <span className="text-[#A50034]">Repuestos y Partes Originales</span>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <Image src="/images/lg.png" alt="LG" width={120} height={60} className="inline-block" />
                  <span className="text-sm sm:text-base text-gray-600 font-medium">Servicio Técnico Autorizado</span>
                </div>
              </h1>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
              <Card
                className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-[#A50034] group"
                onClick={() => navigateToSection("servicios")}
              >
                <CardHeader className="text-center pb-4 px-4 sm:px-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#A50034] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-red-hat-display text-gray-900">Servicios</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6 pb-6">
                  <CardDescription className="text-base sm:text-lg">
                    Reparación especializada con más de 20 años de experiencia
                  </CardDescription>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-[#A50034] group"
                onClick={() => navigateToSection("repuestos")}
              >
                <CardHeader className="text-center pb-4 px-4 sm:px-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#A50034] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-red-hat-display text-gray-900">
                    Venta de Repuestos y Partes
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6 pb-6">
                  <CardDescription className="text-base sm:text-lg">
                    Repuestos y partes originales
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {currentView === "servicios" && (
        <section id="servicios" className="py-6 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button variant="outline" onClick={() => setCurrentView("hero")} className="mb-8">
              ← Volver al inicio
            </Button>
            {/* ¿Quiénes somos? */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-red-hat-display font-bold text-gray-900 mb-6 sm:mb-8 px-2">
                ¿Quiénes somos?
              </h2>
              <div className="max-w-4xl mx-auto px-2">
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                  Somos una empresa familiar con{" "}
                  <strong className="text-[#A50034]">más de 20 años de experiencia</strong> en el rubro de reparación de
                  electrodomésticos. Nos especializamos en brindar soluciones rápidas y confiables para mantener tu hogar funcionando perfectamente.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
                  <div className="text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#A50034] rounded-full flex items-center justify-center mx-auto mb-4">
                      <BadgeCheck className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="font-red-hat-display font-semibold text-lg sm:text-xl mb-2">Servicio Oficial</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Autorizado por LG Argentina con repuestos originales</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#A50034] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="font-red-hat-display font-semibold text-lg sm:text-xl mb-2">Calidad Asegurada</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Más de 20 años de experiencia brindando servicios en la zona</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#A50034] rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="font-red-hat-display font-semibold text-lg sm:text-xl mb-2">Zona Norte</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Cobertura en áreas residenciales y comerciales de Zona Norte, Buenos Aires</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ¿Qué electrodomésticos reparamos? */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-red-hat-display font-bold text-gray-900 text-center mb-8 sm:mb-12 px-2">
                ¿Qué equipos reparamos?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {electrodomesticos.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="font-red-hat-display text-lg sm:text-xl text-[#A50034]">
                        {item.nombre}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.reparaciones.map((reparacion, idx) => (
                          <li key={idx} className="flex items-start">
                            
                            <span className="text-gray-600 text-sm sm:text-base">{reparacion}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contacto y horarios */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center mx-2 sm:mx-0">
              <h2 className="text-xl sm:text-2xl font-red-hat-display font-bold text-gray-900 mb-4 sm:mb-6">
                Contactanos para agendar una visita técnina
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center justify-center text-sm sm:text-base">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-[#A50034]" />
                  <span className="font-semibold">+54 9 11 2852 8465</span>
                </div>
                <div className="flex items-center justify-center text-sm sm:text-base">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-[#A50034]" />
                  <span>Zona Norte, Buenos Aires</span>
                </div>
                <div className="flex items-center justify-center text-sm sm:text-base">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-[#A50034]" />
                  <span>Lunes a viernes de 9 a 17hs</span>
                </div>
              </div>
              <Button
                className="bg-[#A50034] hover:bg-[#8A0029] text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg"
                onClick={() => window.open("https://wa.me/5491128528465", "_blank")}
              >
                <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="mr-2" />
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </section>
      )}

      {currentView === "repuestos" && (
        <section id="repuestos" className="py-6 sm:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button variant="outline" onClick={() => setCurrentView("hero")} className="mb-8">
              ← Volver al inicio
            </Button>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-red-hat-display font-bold text-gray-900 mb-6 sm:mb-8 px-2">
                Venta de Repuestos y Partes
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
                Contamos con repuestos y partes originales.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              {repuestos.map((repuesto, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-white h-80 flex flex-col">
                  <CardHeader className="pb-3 flex-shrink-0">
                    <CardTitle className="font-red-hat-display text-lg sm:text-xl text-[#A50034] line-clamp-2 h-14 flex items-start">
                      {repuesto.nombre}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm sm:text-base line-clamp-3 h-16 flex items-start">
                      {repuesto.descripcion}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <div className="space-y-3 flex-grow">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700 text-sm sm:text-base">Precio:</span>
                        <span className="text-[#A50034] font-bold text-lg sm:text-xl">{repuesto.precio}</span>
                      </div>
                      <div className="flex-grow">
                        <span className="font-semibold text-gray-700 block mb-1 text-sm sm:text-base">
                          Modelos compatibles:
                        </span>
                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{repuesto.modelos}</p>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-[#A50034] hover:bg-[#8A0029] text-white mt-4 text-sm sm:text-base flex-shrink-0"
                      onClick={() => window.open("https://wa.me/5491138652822", "_blank")}
                    >
                      <Image src="/images/whatsapp.png" alt="WhatsApp" width={16} height={16} className="mr-2" />
                      Pedir por WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mensaje para repuestos no encontrados */}
            <Card className="bg-[#A50034] text-white mx-2 sm:mx-0">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="font-red-hat-display text-xl sm:text-2xl font-bold mb-4">
                  ¿No encontrás el repuesto o parte que necesitás?
                </h3>
                <p className="text-base sm:text-lg mb-6">
                  Escribinos por WhatsApp indicando qué estás buscando junto al modelo de tu equipo y te ayudamos a conseguirlo.
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-[#A50034] hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold"
                  onClick={() => window.open("https://wa.me/5491138652822", "_blank")}
                >
                  <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="mr-2" />
                  Consultar Repuesto
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <h3 className="font-red-hat-display text-xl sm:text-2xl font-bold text-[#A50034] mb-4">Home Service</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Más de 20 años de experiencia en reparación de electrodomésticos. Tu hogar en las mejores manos.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-red-hat-display text-base sm:text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                <div className="flex items-center justify-center sm:justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Servicios: +54 9 11 2852 8465</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Repuestos: +54 9 11 3865 2822</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Zona Norte, Buenos Aires</span>
                </div>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-red-hat-display text-base sm:text-lg font-semibold mb-4">Horarios</h4>
              <div className="text-gray-300 text-sm sm:text-base">
                <div className="flex items-center justify-center sm:justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Lunes a viernes de 9 a 17hs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; {new Date().getFullYear()} Home Service. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
