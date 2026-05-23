'use client'

import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

const pillarIcons = [
  <svg key="clarity" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="design" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>,
  <svg key="performance" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  <svg key="transparency" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>,
  <svg key="conversion" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>,
]

export default function WhyBluebay() {
  const { t } = useTranslation()
  const pillars = t('whyBluebay.pillars', { returnObjects: true }) as Array<{ num: string; title: string; desc: string }>
  const differentiators = t('whyBluebay.differentiators', { returnObjects: true }) as string[]

  return (
    <section id="about-intro" className="bg-navy py-24 md:py-36 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
<span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                {t('whyBluebay.eyebrow')}
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2
              className="font-canela-deck font-light text-white leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              {t('whyBluebay.h2')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="font-sans font-light text-white/50 text-lg leading-relaxed">
              {t('whyBluebay.body')}
            </p>
          </ScrollReveal>
        </div>

        {/* Pillars — 5 columns on large screens for perfect alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0.5">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.num} className="h-full" delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="group relative bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-french-blue/20 p-7 transition-all duration-400 h-full flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/50 group-hover:bg-white/5 transition-colors duration-300 flex-shrink-0">
                    {pillarIcons[i]}
                  </div>
                  <span className="font-canela-deck text-3xl font-thin text-white/[0.06] group-hover:text-white/10 transition-colors duration-300 select-none">
                    {pillar.num}
                  </span>
                </div>
                <h3 className="font-canela-deck font-light text-lg text-white mb-3 leading-tight">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm font-light text-white/50 leading-relaxed flex-1">
                  {pillar.desc}
                </p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-white/25 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Differentiators */}
        <ScrollReveal delay={2}>
          <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {differentiators.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/35 flex-shrink-0" />
                <span className="font-sans text-sm font-light text-white/50 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
