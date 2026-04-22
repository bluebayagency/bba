import en from '@/locales/en.json'
import es from '@/locales/es.json'

type Translations = typeof en

export function getT(lang?: string): Translations {
  return lang === 'es' ? (es as unknown as Translations) : en
}

export function getLang(searchParams?: { lng?: string }): string {
  return searchParams?.lng === 'es' ? 'es' : 'en'
}

export function getDateLocale(lang: string): string {
  return lang === 'es' ? 'es-ES' : 'en-US'
}
