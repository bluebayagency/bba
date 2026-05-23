'use client'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { useEffect } from 'react'
import en from '@/locales/en.json'
import es from '@/locales/es.json'

const i18n = i18next.createInstance()

// Always initialize with English so SSR and the initial client render agree,
// eliminating the hydration mismatch caused by browser-only language detection.
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export { i18n }

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only switch language when explicitly requested via ?lng= query param.
    // English is the default for all other visitors.
    const params = new URLSearchParams(window.location.search)
    const qs = params.get('lng')
    const lang = qs === 'es' ? 'es' : 'en'

    if (lang !== i18n.language) {
      i18n.changeLanguage(lang)
    }

    document.documentElement.lang = lang
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
