import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  getAllSlugs,
  getPostBySlug,
  getFeaturedImage,
  getCategories,
  getAuthor,
  formatDate,
  stripHtml,
} from '@/lib/blog'
import { getT } from '@/lib/i18n-server'
import { translateHtmlTexts } from '@/lib/translate'

export const revalidate = 3600

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

async function getSpanishPost(slug: string) {
  const post = await getPostBySlug(slug)
  if (!post) return null

  // Always translate English content to Spanish
  const [shortTranslations, [translatedContent]] = await Promise.all([
    translateHtmlTexts([post.title.rendered, post.excerpt.rendered], 'ES'),
    translateHtmlTexts([post.content.rendered], 'ES'),
  ])

  return {
    post,
    titleHtml: shortTranslations[0],
    excerptHtml: shortTranslations[1],
    contentHtml: translatedContent,
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = await getSpanishPost(slug)
  if (!data) return {}

  const { post, titleHtml, excerptHtml } = data
  const image = getFeaturedImage(post)
  const title = stripHtml(titleHtml)
  const description = stripHtml(excerptHtml).slice(0, 160)

  return {
    title,
    description,
    alternates: {
      canonical: `/es/blog/${slug}`,
      languages: { en: `/blog/${slug}` },
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      locale: 'es_ES',
      alternateLocale: ['en_US'],
      authors: [getAuthor(post)],
      ...(image ? { images: [{ url: image.src, alt: image.alt }] } : {}),
    },
  }
}

export default async function EsBlogPostPage({ params }: Props) {
  const { slug } = await params
  const t = getT('es')
  const data = await getSpanishPost(slug)
  if (!data) notFound()

  const { post, titleHtml, contentHtml } = data
  const image = getFeaturedImage(post)
  const categories = getCategories(post)
  const author = getAuthor(post)

  return (
    <div className="bg-soft-white">

      {/* Hero */}
      <section className="bg-navy pt-32 pb-0 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8 pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-10">
            <Link
              href="/es/blog"
              className="inline-flex items-center gap-2 font-sans text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              {t.blogPage.back_to_blog}
            </Link>
          </div>

          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="font-sans text-[10px] font-medium text-white/60 border border-white/20 px-3 py-1 tracking-[0.15em] uppercase"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1
            className="font-canela-deck font-light text-white leading-[1.1] mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6">
            <span className="font-sans text-xs text-white/40">
              {t.blogPage.by} <span className="text-white/60">{author}</span>
            </span>
            <span className="font-sans text-xs text-white/40">
              {t.blogPage.published}{' '}
              <span className="text-white/60">{formatDate(post.date, 'es-ES')}</span>
            </span>
          </div>
        </div>

        {/* Featured image — bleeds out of hero */}
        {image && (
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="overflow-hidden" style={{ maxHeight: '520px' }}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                style={{ maxHeight: '520px' }}
              />
            </div>
          </div>
        )}
      </section>

      {/* Article content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand border-t border-gray-border py-20 md:py-28">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/?lng=es#contact"
              className="inline-flex items-center gap-2 bg-navy text-white font-sans text-sm font-medium px-8 py-4 hover:bg-navy/80 transition-all duration-300 tracking-wide"
            >
              {t.blogPage.cta_button}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/es/blog"
              className="inline-flex items-center gap-2 font-sans text-sm text-navy/60 hover:text-navy border border-navy/20 hover:border-navy/40 px-6 py-4 transition-all duration-300"
            >
              {t.blogPage.all_posts}
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
