// Reseñas reales de Google, copiadas tal como figuran en el perfil del negocio.
// Todas son de 5 estrellas. No se incluyen fechas a propósito (Google solo muestra
// "hace X semanas"), así la web no necesita actualizarse para corregirlas.
// "etiqueta" es el comentario de precio que Google muestra junto a algunas reseñas.

export type Resena = {
  autor: string
  texto: string
  etiqueta?: string
}

export const RESENAS: Resena[] = [
  {
    autor: "Rodolfo Koval",
    etiqueta: "Buen precio",
    texto:
      "No es la primera vez que acuden sin demora, demostrando capacidad técnica y empatía.\nMuy recomendable",
  },
  {
    autor: "Diego Trevisan",
    etiqueta: "Precio razonable",
    texto:
      "La verdad impecable, vinieron el mismo dia que me comuniqué a hacer el diagnóstico, fue rápido y muy serio. Y al día siguiente vino el técnico con todos los repuestos a hacer la reparación correspondiente. Nivel precio calidad acorde.",
  },
  {
    autor: "Mariela Ezcurra",
    texto:
      "Excelente servicio! Siempre buscan la solución, son cumplidores y los presupuestos son accesibles, super recomendable!",
  },
  {
    autor: "Claudio Zuchovicki",
    etiqueta: "Buen precio",
    texto:
      "Genios. Muy buen servicio. Muy buen precio y mejor calidad en la atención. Muy recomendado",
  },
  {
    autor: "Juan Pablo Piñol",
    texto:
      "Muy buena atención, personal muy atento, cordial y capacitado. Se me rompió la heladera y entendiendo lo importante que es para la vida diaria, en 2 días ya la tenía reparada con el motor nuevo.",
  },
  {
    autor: "Osvaldo Ninaus",
    etiqueta: "Precio razonable",
    texto:
      "Excelente atención, rapidez en la respuesta y profesionalismo del técnico son destacables. Los recomiendo 100%",
  },
  {
    autor: "Silvia Holzkan",
    texto:
      "Muy responsable en el trabajo y minucioso\nUna excelente experiencia de profesionalismo",
  },
  {
    autor: "Priscila Villar",
    etiqueta: "Precio razonable",
    texto:
      "Muy buena atencion y predisposicion, resolvieron todo en tiempo y forma! Muy recomendable!",
  },
]
