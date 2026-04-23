const GOOGLE_URL = 'https://translation.googleapis.com/language/translate/v2'

// Module-level cache survives across ISR renders within the same server process
const cache = new Map<string, string>()

function ck(text: string, lang: string): string {
  return `${lang}:${text.length}:${text.slice(0, 80)}`
}

async function callGoogle(
  texts: string[],
  targetLang: string,
  format: 'text' | 'html' = 'text'
): Promise<string[]> {
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY
  if (!apiKey) return texts

  const results = new Array<string>(texts.length).fill('')
  const uncached: Array<{ idx: number; text: string }> = []

  texts.forEach((text, idx) => {
    const key = ck(text, targetLang)
    const hit = cache.get(key)
    if (hit !== undefined) {
      results[idx] = hit
    } else {
      uncached.push({ idx, text })
    }
  })

  if (uncached.length === 0) return results

  try {
    const res = await fetch(`${GOOGLE_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: uncached.map((u) => u.text),
        source: 'en',
        target: targetLang.toLowerCase(),
        format,
      }),
    })

    if (!res.ok) {
      uncached.forEach((u) => { results[u.idx] = u.text })
      return results
    }

    const data = await res.json()
    const translations: Array<{ translatedText: string }> = data.data?.translations ?? []

    uncached.forEach((u, i) => {
      const translated = translations[i]?.translatedText ?? u.text
      cache.set(ck(u.text, targetLang), translated)
      results[u.idx] = translated
    })
  } catch {
    uncached.forEach((u) => { results[u.idx] = u.text })
  }

  return results
}

/** Translate an array of plain-text strings to the target language. */
export async function translateTexts(texts: string[], targetLang: string): Promise<string[]> {
  if (targetLang === 'en' || texts.length === 0) return texts
  return callGoogle(texts, targetLang, 'text')
}

/**
 * Translate an array of HTML strings, preserving all markup.
 * Google Translate's format=html keeps tags intact natively.
 */
export async function translateHtmlTexts(texts: string[], targetLang: string): Promise<string[]> {
  if (targetLang === 'en' || texts.length === 0) return texts
  return callGoogle(texts, targetLang, 'html')
}

/** Convenience: translate a single HTML string. */
export async function translateHtml(html: string, targetLang: string): Promise<string> {
  if (targetLang === 'en' || !html) return html
  const [result] = await callGoogle([html], targetLang, 'html')
  return result
}
