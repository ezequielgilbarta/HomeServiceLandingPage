import data from "@/data/articulos.json"

export type Seccion = "accesorios" | "repuestos"
export type Equipo = "heladeras" | "lavavajillas" | "lavarropas"

export interface Articulo {
  id: number
  slug: string
  nombre: string
  descripcion: string
  precio?: number
  modelos: string[]
  tipo: "repuesto" | "parte"
  subtipo: string
  imagen?: string
  equipo: Equipo
  seccion: Seccion
}

const ARTICULOS = data.articulos as unknown as Articulo[]

export function getArticulos(): Articulo[] {
  return ARTICULOS
}

export function getArticulosPorSeccion(seccion: Seccion): Articulo[] {
  return ARTICULOS.filter((a) => a.seccion === seccion)
}
