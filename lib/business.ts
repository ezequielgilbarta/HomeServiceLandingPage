// ─── Datos del negocio centralizados ─────────────────────────────────────────
// Si cambia el puntaje o la cantidad de reseñas en Google, se actualiza solo acá.

export const GOOGLE_PROFILE_URL = "https://share.google/fZs5DkT5sX4gsUw4Q"

export const LG_SERVICE_CENTER_URL =
  "https://www.lg.com/ar/soporte/ubicacion-centro-reparacion/AR0047750-S"

export const GOOGLE_RATING = 5.0
export const GOOGLE_REVIEW_COUNT = 17

// Formato es-AR: "5,0"
export const GOOGLE_RATING_LABEL = GOOGLE_RATING.toFixed(1).replace(".", ",")