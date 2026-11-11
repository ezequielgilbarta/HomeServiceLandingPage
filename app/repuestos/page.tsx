import { CatalogoView } from "@/components/views/CatalogoView"
import { getArticulosPorSeccion } from "@/lib/articulos"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Repuestos y partes originales LG",
  description:
    "Repuestos originales LG: placas, bombas, motores, resistencias y más. Consultá disponibilidad y precio por WhatsApp.",
  path: "/repuestos",
})

export default function RepuestosPage() {
  return <CatalogoView seccion="repuestos" articulos={getArticulosPorSeccion("repuestos")} />
}
