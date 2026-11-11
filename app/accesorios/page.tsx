import { CatalogoView } from "@/components/views/CatalogoView"
import { getArticulosPorSeccion } from "@/lib/articulos"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Accesorios originales LG",
  description:
    "Accesorios originales LG: filtros de agua para heladeras, racks y canastos para lavavajillas y más. Consultá disponibilidad y precio por WhatsApp.",
  path: "/accesorios",
})

export default function AccesoriosPage() {
  return <CatalogoView seccion="accesorios" articulos={getArticulosPorSeccion("accesorios")} />
}
