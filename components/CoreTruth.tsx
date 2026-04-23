'use client'

import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

export default function CoreTruth() {
  const { t } = useTranslation()

  return (
    <section className="bg-sand py-24 md:py-36 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image */}
          <ScrollReveal>
            <div className="relative overflow-hidden">
              <img
                src="/images/founder/bluebay-agency-founder-pug-laptop.png"
                alt="Veronica Perez, Bluebay Agency founder, working with her pug"
                className="w-full h-full object-cover object-center"
                style={{ maxHeight: '640px', objectPosition: 'center 15%' }}
              />
            </div>
          </ScrollReveal>

          {/* Text content */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-12 bg-dusty-rose/60" />
                <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                  {t('coreTruth.eyebrow')}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2
                className="font-canela-deck font-light text-navy leading-[1.15] mb-8"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}
              >
                {t('coreTruth.h2')}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="font-sans font-light text-charcoal/60 text-lg leading-relaxed mb-6">
                {t('coreTruth.body1')}
              </p>
              <p className="font-sans font-light text-charcoal/50 leading-relaxed">
                {t('coreTruth.body2')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="mt-12 flex items-center gap-6">
                <div className="h-px flex-1 max-w-[80px] bg-gray-border" />
                <div className="font-canela-deck text-4xl font-thin text-navy/15 select-none leading-none">&ldquo;</div>
              </div>
              <blockquote className="mt-4 font-canela-deck text-xl md:text-2xl font-thin italic text-navy/60 leading-relaxed">
                {t('coreTruth.quote')}
              </blockquote>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
