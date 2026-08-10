'use client'

import { useTranslation } from 'react-i18next'
import { usePathname } from 'next/navigation'
import ScrollReveal from './ScrollReveal'
import serviceIcons from './serviceIcons'

// page_items order is Design, Dev, Search & AI Visibility, CRO, Email.
// serviceIcons keeps CRO appended at index 4 so the homepage teaser's
// indices 0-3 stay untouched, so map page_items position -> icon index here.
const pageIconOrder = [0, 1, 2, 4, 3]

function StarRow() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 1.5l2.635 5.34 5.895.857-4.265 4.158 1.007 5.873L10 14.9l-5.272 2.828 1.007-5.873L1.47 7.697l5.895-.857L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function ServicesDetail() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const contactHref = pathname === '/' ? '#contact' : '/#contact'
  const items = t('services.page_items', { returnObjects: true }) as Array<{
    title: string; desc: string; features: string[]
  }>

  return (
    <section className="bg-navy py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16 md:mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
<span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                {t('services.page_eyebrow')}
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h1
              className="font-canela-deck font-light text-white leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(2.1rem, 4.8vw, 3.75rem)' }}
            >
              {t('services.page_h1')}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="font-sans font-light text-white/55 text-lg leading-relaxed">
              {t('services.page_intro')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <div className="mt-5 flex items-center gap-2.5">
              <StarRow />
              <span className="font-sans text-xs font-medium text-white/50 tracking-wide">
                5-Star Rating &middot; Verified Google Reviews
              </span>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="h-full bg-white border border-gray-border p-8 md:p-10 transition-all duration-300 hover:border-french-blue/30 hover:shadow-lg hover:shadow-navy/5">
                <div className="w-11 h-11 flex items-center justify-center rounded-full border border-navy/15 text-navy/70 mb-6">
                  {serviceIcons[pageIconOrder[i]]}
                </div>
                <h2 className="font-canela-deck font-light text-2xl text-navy leading-tight mb-3">
                  {item.title}
                </h2>
                <p className="font-sans text-sm font-light text-charcoal/55 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <ul className="space-y-3 pt-6 border-t border-gray-border">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-navy/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="font-sans text-sm font-light text-charcoal/65 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={2}>
          <div className="mt-14 text-center">
            <a
              href={contactHref}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-navy font-sans text-sm font-medium px-8 py-4 transition-colors duration-200 tracking-wide w-full sm:w-auto"
            >
              {t('services.cta_start')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
