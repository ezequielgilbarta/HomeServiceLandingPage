"use client"

import { useState, useEffect, useMemo } from "react"

export interface Articulo {
  id: number
  nombre: string
  descripcion: string
  precio: number
  modelos: string[]
  tipo: "repuesto" | "parte"
  subtipo: string
  imagen: string
}

export type TipoFiltro = "todos" | "repuesto" | "parte"
export type SubtiposFiltro = string[]
export type OrdenFiltro = "nombre" | "tipo" | "precio" | "subtipo"
export type ModelosFiltro = string[]

export function useArticulos() {
  const [articulos, setArticulos] = useState<Articulo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filtroTipo, setFiltroTipo] = useState<TipoFiltro>("todos")
  const [filtroSubtipos, setFiltroSubtipos] = useState<SubtiposFiltro>([])
  const [filtroModelos, setFiltroModelos] = useState<ModelosFiltro>([])
  const [ordenPor, setOrdenPor] = useState<OrdenFiltro>("nombre")
  const [paginaActual, setPaginaActual] = useState(1)
  const itemsPorPagina = 9

  useEffect(() => {
    const cargarArticulos = async () => {
      try {
        setLoading(true)
        const response = await fetch("/data/articulos.json")
        if (!response.ok) {
          throw new Error("Error al cargar los artículos")
        }
        const data = await response.json()
        setArticulos(data.articulos)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido")
      } finally {
        setLoading(false)
      }
    }

    cargarArticulos()
  }, [])

  const subtiposDisponibles = useMemo(() => {
    const subtipos = [...new Set(articulos.map((articulo) => articulo.subtipo))]
    return subtipos.sort()
  }, [articulos])

  const modelosDisponibles = useMemo(() => {
    const modelos = articulos.flatMap((articulo) => articulo.modelos)
    return [...new Set(modelos)].sort()
  }, [articulos])

  const articulosFiltrados = useMemo(() => {
    let resultado = [...articulos]

    // Filtrar por tipo
    if (filtroTipo !== "todos") {
      resultado = resultado.filter((articulo) => articulo.tipo === filtroTipo)
    }

    // Filtrar por subtipos (si hay subtipos seleccionados)
    if (filtroSubtipos.length > 0) {
      resultado = resultado.filter((articulo) => filtroSubtipos.includes(articulo.subtipo))
    }

    // Filtrar por modelos (si hay modelos seleccionados)
    if (filtroModelos.length > 0) {
      resultado = resultado.filter((articulo) =>
        articulo.modelos.some((modelo) => filtroModelos.includes(modelo))
      )
    }

    // Ordenar
    resultado.sort((a, b) => {
      switch (ordenPor) {
        case "nombre":
          return a.nombre.localeCompare(b.nombre)
        case "tipo":
          return a.tipo.localeCompare(b.tipo)
        case "subtipo":
          return a.subtipo.localeCompare(b.subtipo)
        case "precio":
          return a.precio - b.precio
        default:
          return 0
      }
    })

    return resultado
  }, [articulos, filtroTipo, filtroSubtipos, filtroModelos, ordenPor])

  const totalPaginas = Math.ceil(articulosFiltrados.length / itemsPorPagina)
  const articulosPaginados = articulosFiltrados.slice(
    (paginaActual - 1) * itemsPorPagina,
    paginaActual * itemsPorPagina,
  )

  // Reset página cuando cambian los filtros
  useEffect(() => {
    setPaginaActual(1)
  }, [filtroTipo, filtroSubtipos, filtroModelos, ordenPor])

  const toggleSubtipo = (subtipo: string) => {
    setFiltroSubtipos((prev) => (prev.includes(subtipo) ? prev.filter((s) => s !== subtipo) : [...prev, subtipo]))
  }

  const toggleModelo = (modelo: string) => {
    setFiltroModelos((prev) =>
      prev.includes(modelo) ? prev.filter((m) => m !== modelo) : [...prev, modelo]
    )
  }

  const limpiarSubtipos = () => {
    setFiltroSubtipos([])
  }

  const limpiarModelos = () => {
    setFiltroModelos([])
  }

  return {
    articulos: articulosPaginados,
    loading,
    error,
    filtroTipo,
    setFiltroTipo,
    filtroSubtipos,
    setFiltroSubtipos,
    toggleSubtipo,
    limpiarSubtipos,
    subtiposDisponibles,
    filtroModelos,
    setFiltroModelos,
    toggleModelo,
    limpiarModelos,
    modelosDisponibles,
    ordenPor,
    setOrdenPor,
    paginaActual,
    setPaginaActual,
    totalPaginas,
    totalArticulos: articulosFiltrados.length,
  }
}