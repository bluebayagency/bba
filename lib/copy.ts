import copy from '@/content/copy.json'

export { copy }

// Looks up site copy by dot-separated key, e.g. t('nav.tagline') or t<string[]>('services.title')
export function t<T = string>(key: string): T {
  return key.split('.').reduce<unknown>((node, part) => (node as Record<string, unknown>)?.[part], copy) as T
}
