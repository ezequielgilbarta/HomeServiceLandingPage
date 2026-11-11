// ─── Constantes de contacto centralizadas ────────────────────────────────────
export const WHATSAPP_SERVICIOS = "5491128528465"
export const WHATSAPP_REPUESTOS = "5491138652822"

export const waUrl = (numero: string, texto: string) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`
