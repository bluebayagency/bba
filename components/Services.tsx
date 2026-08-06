'use client'

import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'
import serviceIcons from './serviceIcons'

export default function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as Array<{ title: string; desc: string }>

  return (
    <section className="bg-white py-24 md:py-36 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16 md:mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
<span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                {t('services.eyebrow')}
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2
              className="font-canela-deck font-light text-navy leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              {t('services.h2')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="font-sans font-light text-charcoal/55 text-lg leading-relaxed">
              {t('services.body')}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="group h-full bg-white border border-gray-border hover:border-french-blue/30 p-7 transition-all duration-300 hover:shadow-lg hover:shadow-navy/5 flex flex-col">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-navy/15 text-navy/60 group-hover:border-navy/30 group-hover:text-navy transition-colors duration-300 mb-6 flex-shrink-0">
                  {serviceIcons[i]}
                </div>
                <h3 className="font-canela-deck font-light text-xl text-navy leading-tight mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm font-light text-charcoal/55 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 font-sans text-sm font-medium text-navy border border-navy hover:bg-navy hover:text-white px-8 py-4 transition-all duration-300 w-full sm:w-auto"
            >
              {t('services.cta_all')}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy/80 text-white font-sans text-sm font-medium px-8 py-4 transition-colors duration-200 tracking-wide w-full sm:w-auto"
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
