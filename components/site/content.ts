import { BadgeCheck, Shield, Zap, MapPin } from "lucide-react"

// ─── Datos de contenido compartidos ───────────────────────────────────────────
export const SERVICIOS = [
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

export const ZONAS = ["Tigre", "Nordelta", "San Fernando", "San Isidro", "Vicente López", "CABA"]

export const DIFERENCIADORES = [
  {
    icon: BadgeCheck,
    titulo: "Servicio Oficial Autorizado",
    descripcion: "Técnicos certificados por LG Argentina con acceso a repuestos originales de fábrica.",
    enlaceLG: "Verificá nuestra habilitación en LG",
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
