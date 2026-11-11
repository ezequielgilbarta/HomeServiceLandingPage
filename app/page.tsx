import type { Metadata } from "next"
import { HomeView } from "@/components/views/HomeView"

// El resto de la metadata (título, descripción, Open Graph) viene del layout.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return <HomeView />
}
