"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, X } from "lucide-react"

interface MultiSelectSubtiposProps {
  subtiposDisponibles: string[]
  subtiposSeleccionados: string[]
  onToggleSubtipo: (subtipo: string) => void
  onLimpiarSubtipos: () => void
}

export function MultiSelectSubtipos({
  subtiposDisponibles,
  subtiposSeleccionados,
  onToggleSubtipo,
  onLimpiarSubtipos,
}: MultiSelectSubtiposProps) {
  const [open, setOpen] = useState(false)

  const capitalizarPrimeraLetra = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const handleToggleSubtipo = (subtipo: string) => {
    onToggleSubtipo(subtipo)
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
            {subtiposSeleccionados.length === 0
              ? "Seleccionar subtipos..."
              : `${subtiposSeleccionados.length} subtipo${subtiposSeleccionados.length > 1 ? "s" : ""} seleccionado${subtiposSeleccionados.length > 1 ? "s" : ""}`}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <div className="max-h-60 overflow-auto">
            <div className="p-2 border-b">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Subtipos</span>
                {subtiposSeleccionados.length > 0 && (
                  <Button variant="ghost" size="sm" onClick={onLimpiarSubtipos} className="h-6 px-2 text-xs">
                    Limpiar todo
                  </Button>
                )}
              </div>
            </div>
            <div className="p-2 space-y-2">
              {subtiposDisponibles.map((subtipo) => (
                <div key={subtipo} className="flex items-center space-x-2">
                  <Checkbox
                    id={subtipo}
                    checked={subtiposSeleccionados.includes(subtipo)}
                    onCheckedChange={() => handleToggleSubtipo(subtipo)}
                    className= "text-white"
                  />
                  <label
                    htmlFor={subtipo}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {capitalizarPrimeraLetra(subtipo)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Badges de subtipos seleccionados */}
      {subtiposSeleccionados.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {subtiposSeleccionados.map((subtipo) => (
            <Badge
              key={subtipo}
              variant="secondary"
              className="text-xs px-2 py-1 bg-[#A50034] text-white hover:bg-[#8A0029]"
            >
              {capitalizarPrimeraLetra(subtipo)}
              <button
                onClick={() => handleToggleSubtipo(subtipo)}
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