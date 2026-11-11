"use client"

import { LG_SERVICE_CENTER_URL } from "@/lib/business"
import { trackEvent } from "@/lib/tracking"

// Enlace a la ficha oficial de LG Argentina que respalda el servicio autorizado
export function LgVerifyLink({
  section,
  className = "",
  ariaLabel = "Verificar nuestra habilitación en la web oficial de LG (se abre en una pestaña nueva)",
  children,
}: {
  section: string
  className?: string
  ariaLabel?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={LG_SERVICE_CENTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      onClick={() => trackEvent("lg_verification_click", { lg_section: section })}
    >
      {children}
    </a>
  )
}
