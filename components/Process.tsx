'use client'

import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

export default function Process() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true }) as Array<{
    num: string; title: string; desc: string; detail: string
  }>

  return (
    <section id="process" className="bg-soft-white py-24 md:py-36 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-20 md:mb-28">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-dusty-rose/60" />
              <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                {t('process.eyebrow')}
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2
              className="font-canela-deck font-light text-navy leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              {t('process.h2')}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="relative group h-full">
                <div className="relative z-10 bg-white border border-gray-border hover:border-french-blue/30 p-8 md:p-7 transition-all duration-300 h-full group-hover:shadow-lg group-hover:shadow-navy/5 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 flex items-center justify-center bg-navy text-white font-sans text-xs font-medium tracking-wider flex-shrink-0">
                      {step.num}
                    </div>
                    <div className="flex-1 h-px bg-gray-border" />
                  </div>
                  <h3 className="font-canela-deck font-light text-xl text-navy mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm font-light text-charcoal/60 leading-relaxed mb-6 flex-1">
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.detail.split(' · ').map((tag) => (
                      <span key={tag} className="font-sans text-[10px] font-medium text-navy/50 bg-navy/5 border border-navy/10 px-2 py-0.5 tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-navy/30 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={2}>
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 font-sans text-sm font-medium text-navy border border-navy hover:bg-navy hover:text-white px-8 py-4 transition-all duration-300 w-full sm:w-auto"
            >
              {t('process.cta')}
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
