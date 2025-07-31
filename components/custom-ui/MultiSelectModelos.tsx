"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, X } from "lucide-react"

interface MultiSelectModelosProps {
  modelosDisponibles: string[]
  modelosSeleccionados: string[]
  onToggleModelo: (modelo: string) => void
  onLimpiarModelos: () => void
}

export function MultiSelectModelos({
  modelosDisponibles,
  modelosSeleccionados,
  onToggleModelo,
  onLimpiarModelos,
}: MultiSelectModelosProps) {
  const [open, setOpen] = useState(false)

  const capitalizarPrimeraLetra = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const handleToggleModelo = (modelo: string) => {
    onToggleModelo(modelo)
  }

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-transparent"
          >
            {modelosSeleccionados.length === 0
              ? "Seleccionar modelos..."
              : `${modelosSeleccionados.length} modelo${modelosSeleccionados.length > 1 ? "s" : ""} seleccionado${modelosSeleccionados.length > 1 ? "s" : ""}`}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <div className="max-h-60 overflow-auto">
            <div className="p-2 border-b">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Modelos</span>
                {modelosSeleccionados.length > 0 && (
                  <Button variant="ghost" size="sm" onClick={onLimpiarModelos} className="h-6 px-2 text-xs">
                    Limpiar todo
                  </Button>
                )}
              </div>
            </div>
            <div className="p-2 space-y-2">
              {modelosDisponibles.map((modelo) => (
                <div key={modelo} className="flex items-center space-x-2">
                  <Checkbox
                    id={modelo}
                    checked={modelosSeleccionados.includes(modelo)}
                    onCheckedChange={() => handleToggleModelo(modelo)}
                    className= "text-white"
                  />
                  <label
                    htmlFor={modelo}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {capitalizarPrimeraLetra(modelo)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Badges de sodelos seleccionados */}
      {modelosSeleccionados.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {modelosSeleccionados.map((modelo) => (
            <Badge
              key={modelo}
              variant="secondary"
              className="text-xs px-2 py-1 bg-[#A50034] text-white hover:bg-[#8A0029]"
            >
              {capitalizarPrimeraLetra(modelo)}
              <button
                onClick={() => handleToggleModelo(modelo)}
                className="ml-1 hover:bg-white/20 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}