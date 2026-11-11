import { ServiciosView } from "@/components/views/ServiciosView"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Servicio técnico oficial LG en tu domicilio",
  description:
    "Reparación de heladeras, lavarropas y lavavajillas LG a domicilio en Zona Norte, GBA. Técnicos oficiales autorizados, repuestos originales y garantía en cada trabajo.",
  path: "/servicios",
})

export default function ServiciosPage() {
  return <ServiciosView />
}
