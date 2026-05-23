'use client'

import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  const trust = t('hero.trust', { returnObjects: true }) as string[]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/stock/2025-oct-hermosa-beach-california-1694.jpg"
          alt="Hermosa Beach California coastline"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
<span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
              {t('hero.eyebrow')}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-canela-deck font-light text-white leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          >
            {t('hero.h1_1')}{' '}
            <em className="font-thin" style={{ fontStyle: 'italic', color: 'white' }}>
              {t('hero.h1_em')}
            </em>{' '}
            {t('hero.h1_2')}
          </h1>

          {/* Subheadline */}
          <p
            className="font-sans font-light text-white/75 leading-relaxed mb-12 max-w-xl"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}
          >
            {t('hero.body')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-navy font-sans text-sm font-medium px-8 py-4 transition-all duration-300 tracking-wide group hover:bg-white/90 w-full sm:w-auto"
            >
              {t('hero.cta_primary')}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Scarcity */}
          <p className="font-sans text-xs text-white/40 tracking-wide -mt-10 mb-14">
            {t('hero.scarcity')}
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {trust.map((item: string) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span className="font-sans text-xs text-white/50 tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
