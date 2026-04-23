import type { Metadata } from 'next'
import Link from 'next/link'
import { getPosts, getFeaturedImage, getCategories, formatDate, WPPost } from '@/lib/blog'
import { getT } from '@/lib/i18n-server'
import { translateHtmlTexts } from '@/lib/translate'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Blog | Bluebay Agency',
  description: 'Estrategias de marketing digital, diseño web y crecimiento de marca para negocios modernos.',
  alternates: {
    canonical: '/es/blog',
    languages: { en: '/blog' },
  },
}

interface DisplayPost {
  id: number
  slug: string
  date: string
  titleHtml: string
  excerptHtml: string
  image: { src: string; alt: string } | null
  categories: string[]
}

async function buildDisplayPosts(): Promise<DisplayPost[]> {
  // Try WordPress Spanish posts first
  let posts: WPPost[] = await getPosts('es', 12)

  // If none exist, fall back to English and auto-translate
  const needsTranslation = posts.length === 0
  if (needsTranslation) {
    posts = await getPosts('en', 12)
  }

  if (posts.length === 0) return []

  const titles = posts.map((p) => p.title.rendered)
  const excerpts = posts.map((p) => p.excerpt.rendered)

  const [translatedTitles, translatedExcerpts] = needsTranslation
    ? await Promise.all([
        translateHtmlTexts(titles, 'ES'),
        translateHtmlTexts(excerpts, 'ES'),
      ])
    : [titles, excerpts]

  return posts.map((post, i) => ({
    id: post.id,
    slug: post.slug,
    date: formatDate(post.date, 'es-ES'),
    titleHtml: translatedTitles[i],
    excerptHtml: translatedExcerpts[i],
    image: getFeaturedImage(post),
    categories: getCategories(post),
  }))
}

export default async function EsBlogPage() {
  const t = getT('es')
  const posts = await buildDisplayPosts()

  return (
    <div className="bg-soft-white min-h-screen">

      {/* Header */}
      <section className="bg-navy pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span
            className="font-canela-deck text-white/[0.03] leading-none whitespace-nowrap"
            style={{ fontSize: 'clamp(5rem, 15vw, 14rem)', fontWeight: 100 }}
          >
            Blog
          </span>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-dusty-rose/60" />
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
              {t.blogPage.eyebrow}
            </span>
          </div>
          <h1
            className="font-canela-deck font-light text-white leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            {t.blogPage.h1}
          </h1>
          <p className="font-sans font-light text-white/50 text-lg max-w-xl leading-relaxed">
            {t.blogPage.subtitle}
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="font-sans text-charcoal/40 text-center py-20">{t.blogPage.no_posts}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/es/blog/${post.slug}`}
                  className="group block bg-white border border-gray-border hover:border-navy/20 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300 overflow-hidden"
                >
                  {/* Image */}
                  <div className="overflow-hidden relative bg-navy/5" style={{ paddingTop: '60%' }}>
                    {post.image ? (
                      <img
                        src={post.image.src}
                        alt={post.image.alt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-french-blue/20 to-navy/10" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    {post.categories[0] && (
                      <div className="absolute top-4 left-4">
                        <span className="font-sans text-[10px] font-medium text-white bg-navy/70 backdrop-blur-sm px-3 py-1 tracking-[0.15em] uppercase">
                          {post.categories[0]}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7">
                    <p className="font-sans text-xs text-charcoal/40 mb-4">{post.date}</p>
                    <h2 className="font-canela-deck font-light text-xl text-navy leading-tight mb-3 group-hover:text-navy/75 transition-colors duration-200">
                      <span dangerouslySetInnerHTML={{ __html: post.titleHtml }} />
                    </h2>
                    <div
                      className="font-sans text-sm font-light text-charcoal/55 leading-relaxed mb-5 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerptHtml }}
                    />
                    <span className="inline-flex items-center gap-2 font-sans text-xs font-medium text-navy/60 group-hover:text-navy transition-colors duration-200">
                      {t.blogPage.read_article}
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand py-20 md:py-28 border-t border-gray-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-dusty-rose/60" />
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
              {t.blogPage.cta_eyebrow}
            </span>
            <div className="h-px w-10 bg-dusty-rose/60" />
          </div>
          <h2
            className="font-canela-deck font-light text-navy leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {t.blogPage.cta_heading}
          </h2>
          <p className="font-sans font-light text-charcoal/55 text-lg leading-relaxed mb-8">
            {t.blogPage.cta_body}
          </p>
          <Link
            href="/?lng=es#contact"
            className="inline-flex items-center gap-2 bg-navy text-white font-sans text-sm font-medium px-8 py-4 hover:bg-navy/80 transition-all duration-300 tracking-wide"
          >
            {t.blogPage.cta_button}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
