const WP_API = 'https://blog.bluebayagency.com/wp-json/wp/v2'

export interface WPPost {
  id: number
  slug: string
  date: string
  modified: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
      media_details?: { width: number; height: number }
    }>
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>
    author?: Array<{ name: string }>
  }
}

const EMBED = '_embed=wp:featuredmedia,wp:term,author'
const EXCLUDED_SLUGS = ['hello-world']

function filterPosts(posts: WPPost[]): WPPost[] {
  return posts.filter((p) => !EXCLUDED_SLUGS.includes(p.slug))
}

export async function getPosts(lang?: string, perPage = 9): Promise<WPPost[]> {
  try {
    const langParam = lang === 'es' ? '&lang=es' : ''
    const res = await fetch(
      `${WP_API}/posts?${EMBED}&per_page=${perPage}&status=publish${langParam}`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const posts: WPPost[] = await res.json()
    return filterPosts(posts)
  } catch {
    return []
  }
}

export async function getPostBySlug(slug: string, lang?: string): Promise<WPPost | null> {
  try {
    const langParam = lang === 'es' ? '&lang=es' : ''
    const res = await fetch(
      `${WP_API}/posts?${EMBED}&slug=${slug}&status=publish${langParam}`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return null
    const posts: WPPost[] = await res.json()
    return posts[0] ?? null
  } catch {
    return null
  }
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    const res = await fetch(
      `${WP_API}/posts?per_page=100&status=publish&_fields=slug`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const posts: Array<{ slug: string }> = await res.json()
    return posts.map((p) => p.slug)
  } catch {
    return []
  }
}

export function getFeaturedImage(post: WPPost): { src: string; alt: string } | null {
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  if (!media?.source_url) return null
  return {
    src: media.source_url,
    alt: media.alt_text || post.title.rendered,
  }
}

export function getCategories(post: WPPost): string[] {
  return post._embedded?.['wp:term']?.[0]?.map((t) => t.name) ?? []
}

export function getAuthor(post: WPPost): string {
  return post._embedded?.author?.[0]?.name ?? 'Bluebay Agency'
}

export function formatDate(dateString: string, locale = 'en-US'): string {
  return new Date(dateString).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}
