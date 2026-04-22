'use client'

import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

export default function FinalCTA() {
  const { t } = useTranslation()

  return (
    <section className="relative bg-french-blue py-28 md:py-44 overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-canela-deck text-white/[0.02] leading-none whitespace-nowrap"
          style={{ fontSize: 'clamp(6rem, 18vw, 16rem)', fontWeight: 100 }}
        >
          Bluebay Agency
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-dusty-rose/60" />
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
              {t('finalCta.eyebrow')}
            </span>
            <div className="h-px w-12 bg-dusty-rose/60" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2
            className="font-canela-deck font-light text-white leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}
          >
            {t('finalCta.h2_1')}{' '}
            <em className="italic text-white font-thin">{t('finalCta.h2_em')}</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="font-sans font-light text-white/45 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            {t('finalCta.body')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-navy hover:bg-white/90 font-sans text-sm font-medium px-10 py-4 transition-all duration-300 tracking-wide group"
            >
              {t('finalCta.cta_primary')}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-french-blue/40 text-white/70 hover:text-white font-sans text-sm font-light px-8 py-4 transition-all duration-300 tracking-wide"
            >
              {t('finalCta.cta_secondary')}
            </a>
          </div>
          <p className="mt-8 font-sans text-xs text-white/20 tracking-wide">
            {t('finalCta.note')}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
