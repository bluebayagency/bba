'use client'

import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

export interface HomeBlogPost {
  id: number
  slug: string
  date: string
  title: string
  excerpt: string
  image: { src: string; alt: string } | null
  categories: string[]
}

interface BlogProps {
  posts?: HomeBlogPost[]
  lang?: string
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

export default function Blog({ posts = [], lang = 'en' }: BlogProps) {
  const { t } = useTranslation()
  const blogBase = lang === 'es' ? '/es/blog' : '/blog'

  return (
    <section id="blog" className="bg-french-blue py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-dusty-rose/60" />
                <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                  {t('blog.eyebrow')}
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="font-canela-deck font-light text-white leading-[1.1]" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                {t('blog.h2')}
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={2}>
            <a
              href={blogBase}
              className="font-sans text-sm font-medium text-white border-b border-white/40 hover:border-white pb-0.5 transition-colors duration-200"
            >
              {t('blog.all_articles')} →
            </a>
          </ScrollReveal>
        </div>

        {posts.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-white/5 border border-white/10 animate-pulse" style={{ height: '380px' }} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <ScrollReveal key={post.id} delay={(i + 1) as 1 | 2 | 3}>
                <article className="group bg-white border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-navy/10 overflow-hidden">
                  {/* Image */}
                  <a href={`${blogBase}/${post.slug}`}>
                    <div className="overflow-hidden relative bg-navy/20" style={{ paddingTop: '60%' }}>
                      {post.image ? (
                        <img
                          src={post.image.src}
                          alt={post.image.alt}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-french-blue/30 to-navy/20" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      {post.categories[0] && (
                        <div className="absolute top-4 left-4">
                          <span className="font-sans text-[10px] font-medium text-white bg-navy/70 backdrop-blur-sm px-3 py-1 tracking-[0.15em] uppercase">
                            {post.categories[0]}
                          </span>
                        </div>
                      )}
                    </div>
                  </a>

                  {/* Content */}
                  <div className="p-6 md:p-7">
                    <p className="font-sans text-xs text-charcoal/40 mb-4">{post.date}</p>
                    <h3 className="font-canela-deck font-light text-xl text-navy leading-tight mb-3 group-hover:text-navy/80 transition-colors duration-200">
                      <a href={`${blogBase}/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }} />
                    </h3>
                    <p className="font-sans text-sm font-light text-charcoal/55 leading-relaxed mb-6 line-clamp-3">
                      {stripHtml(post.excerpt)}
                    </p>
                    <a
                      href={`${blogBase}/${post.slug}`}
                      className="inline-flex items-center gap-2 font-sans text-xs font-medium text-navy/60 hover:text-navy transition-colors duration-200"
                    >
                      {t('blog.read_article')}
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
