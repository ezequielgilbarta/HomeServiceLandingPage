"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginacionProps {
  paginaActual: number
  totalPaginas: number
  onPaginaChange: (pagina: number) => void
  onPageChangeScroll?: () => void
}

export function Paginacion({ paginaActual, totalPaginas, onPaginaChange, onPageChangeScroll }: PaginacionProps) {
  if (totalPaginas <= 1) return null

  const handlePaginaChange = (nuevaPagina: number) => {
    onPaginaChange(nuevaPagina)
    // Ejecutar scroll después de cambiar la página
    setTimeout(() => {
      onPageChangeScroll?.()
    }, 100)
  }  

  const generarPaginas = () => {
    const paginas = []
    const maxPaginasVisibles = 5

    let inicio = Math.max(1, paginaActual - Math.floor(maxPaginasVisibles / 2))
    const fin = Math.min(totalPaginas, inicio + maxPaginasVisibles - 1)

    if (fin - inicio + 1 < maxPaginasVisibles) {
      inicio = Math.max(1, fin - maxPaginasVisibles + 1)
    }

    for (let i = inicio; i <= fin; i++) {
      paginas.push(i)
    }

    return paginas
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePaginaChange(paginaActual - 1)}
        disabled={paginaActual === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {generarPaginas().map((pagina) => (
        <Button
          key={pagina}
          variant={pagina === paginaActual ? "default" : "outline"}
          size="sm"
          onClick={() => handlePaginaChange(pagina)}
          className={pagina === paginaActual ? "bg-[#A50034] hover:bg-[#8A0029] text-white" : ""}
        >
          {pagina}
        </Button>
      ))}

      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePaginaChange(paginaActual + 1)}
        disabled={paginaActual === totalPaginas}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}