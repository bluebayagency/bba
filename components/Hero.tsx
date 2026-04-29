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
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in">
            <span className="gold-line" />
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
              {t('hero.eyebrow')}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-canela-deck font-light text-white leading-[1.05] mb-8 opacity-0 animate-fade-up"
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
            className="font-sans font-light text-white/75 leading-relaxed mb-4 opacity-0 animate-fade-up-delay"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', maxWidth: '560px' }}
          >
            {t('hero.body')}
          </p>
          <p
            className="font-sans font-light text-white/60 leading-relaxed mb-12 opacity-0 animate-fade-up-delay"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', maxWidth: '560px' }}
          >
            {t('hero.body2')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-up-delay-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-navy font-sans text-sm font-medium px-8 py-4 transition-all duration-300 tracking-wide group hover:bg-white/90"
            >
              {t('hero.cta_primary')}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 text-white font-sans text-sm font-light px-8 py-4 transition-all duration-300 tracking-wide backdrop-blur-sm"
            >
              {t('hero.cta_secondary')}
            </a>
          </div>

          {/* Scarcity */}
          <p className="font-sans text-xs text-white/40 tracking-wide -mt-10 mb-14">
            {t('hero.scarcity')}
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 opacity-0 animate-fade-up-delay-3">
            {trust.map((item: string) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span className="font-sans text-xs text-white/50 tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in">
        <span className="font-sans text-xs text-white/30 tracking-widest uppercase">{t('hero.scroll')}</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
