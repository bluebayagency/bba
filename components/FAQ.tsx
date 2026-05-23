'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

export default function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const items = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>

  return (
    <section id="faq" className="bg-soft-white py-24 md:py-36 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-dusty-rose/60" />
              <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                {t('faq.eyebrow')}
              </span>
              <div className="h-px w-10 bg-dusty-rose/60" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-canela-deck font-light text-navy leading-[1.1]" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              {t('faq.h2')}
            </h2>
          </ScrollReveal>
        </div>

        <div className="space-y-0">
          {items.map((item, i) => (
            <div key={i} className={`border-b border-gray-border ${i === 0 ? 'border-t' : ''}`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className={`font-canela-deck font-light text-lg leading-tight transition-colors duration-200 ${
                  openIndex === i ? 'text-navy' : 'text-charcoal/80 group-hover:text-navy'
                }`}>
                  {item.q}
                </span>
                <span aria-hidden="true" className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-300 ${
                  openIndex === i ? 'border-navy bg-navy text-white rotate-45' : 'border-gray-border text-charcoal/30 group-hover:border-navy/40 group-hover:text-navy'
                }`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className="faq-answer"
                style={{ maxHeight: openIndex === i ? '300px' : '0px', opacity: openIndex === i ? 1 : 0 }}
              >
                <p className="font-sans font-light text-charcoal/60 text-sm md:text-base leading-relaxed pb-7 pr-14">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ScrollReveal delay={2}>
          <div className="mt-14 text-center">
            <p className="font-sans text-sm text-charcoal/40 mb-4">{t('faq.still_question')}</p>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 font-sans text-sm font-medium text-navy border border-navy/30 hover:bg-navy hover:text-white px-8 py-4 transition-all duration-300 w-full sm:w-auto">
              {t('faq.ask_cta')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
