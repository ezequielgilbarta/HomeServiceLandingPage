// Push de eventos al dataLayer de GTM (mismo patrón que el botón de WhatsApp).
export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event, ...params })
}
