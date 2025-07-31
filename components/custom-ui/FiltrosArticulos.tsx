"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MultiSelectSubtipos } from "@/components/custom-ui/MultiSelectSubtipos"
import { MultiSelectModelos } from "@/components/custom-ui/MultiSelectModelos"
import type { TipoFiltro, SubtiposFiltro, ModelosFiltro, OrdenFiltro } from "@/hooks/use-articulos"

interface FiltrosArticulosProps {
  filtroTipo: TipoFiltro
  onFiltroTipoChange: (tipo: TipoFiltro) => void
  filtroSubtipos: SubtiposFiltro
  onToggleSubtipo: (subtipo: string) => void
  onLimpiarSubtipos: () => void
  subtiposDisponibles: string[]
  filtroModelos: ModelosFiltro
  onToggleModelo: (modelo: string) => void
  onLimpiarModelos: () => void
  modelosDisponibles: string[]
  ordenPor: OrdenFiltro
  onOrdenChange: (orden: OrdenFiltro) => void
  totalArticulos: number
}

export function FiltrosArticulos({
  filtroTipo,
  onFiltroTipoChange,
  filtroSubtipos,
  onToggleSubtipo,
  onLimpiarSubtipos,
  subtiposDisponibles,
  filtroModelos,
  onToggleModelo,
  onLimpiarModelos,
  modelosDisponibles,
  ordenPor,
  onOrdenChange,
  totalArticulos,
}: FiltrosArticulosProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo:</label>
          <Select value={filtroTipo} onValueChange={onFiltroTipoChange}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="repuesto">Repuestos</SelectItem>
              <SelectItem value="parte">Partes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Subtipos:</label>
          <MultiSelectSubtipos
            subtiposDisponibles={subtiposDisponibles}
            subtiposSeleccionados={filtroSubtipos}
            onToggleSubtipo={onToggleSubtipo}
            onLimpiarSubtipos={onLimpiarSubtipos}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Modelos:</label>
          <MultiSelectModelos
            modelosDisponibles={modelosDisponibles}
            modelosSeleccionados={filtroModelos}
            onToggleModelo={onToggleModelo}
            onLimpiarModelos={onLimpiarModelos}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ordenar por:</label>
          <Select value={ordenPor} onValueChange={onOrdenChange}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nombre">Nombre</SelectItem>
              <SelectItem value="tipo">Tipo</SelectItem>
              <SelectItem value="subtipo">Subtipo</SelectItem>
              {/* <SelectItem value="precio">Precio</SelectItem> */}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <div className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md w-full text-center">
            {totalArticulos} artículo{totalArticulos !== 1 ? "s" : ""} encontrado{totalArticulos !== 1 ? "s" : ""}
          </div>
        </div>
      </div>
    </div>
  )
}