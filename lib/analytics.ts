// Thin wrapper around the GA4 gtag loaded in app/layout.tsx. Safe to call before
// gtag loads or when it is blocked: the event is dropped.

type GtagParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    gtag?: (command: 'event', name: string, params?: GtagParams) => void
  }
}

export function track(name: string, params?: GtagParams) {
  if (typeof window === 'undefined') return
  window.gtag?.('event', name, params)
}
