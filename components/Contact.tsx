'use client'

import { useTranslation } from 'react-i18next'
import Script from 'next/script'
import ScrollReveal from './ScrollReveal'

interface ContactProps {
  /** Heading level for the "Your Brand Deserves a Website That Converts." title; use
   *  "h1" only when this section leads the page (e.g. /contact). */
  headingLevel?: 'h1' | 'h2'
}

export default function Contact({ headingLevel = 'h2' }: ContactProps) {
  const { t } = useTranslation()
  const trust = t('contact.trust', { returnObjects: true }) as string[]
  const Heading = headingLevel

  return (
    <section id="contact" className="bg-soft-white py-24 md:py-36 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-6">
<span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                {t('contact.eyebrow')}
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <Heading className="font-canela-deck font-light text-navy leading-[1.1] mb-5" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              {t('contact.h2')}
            </Heading>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="font-sans font-light text-charcoal/55 text-lg leading-relaxed max-w-xl mx-auto">
              {t('contact.body')}
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={2}>
          <div className="bg-white border border-gray-border">
            <iframe
              src="https://hello.dubsado.com/public/form/view/69cd745fdaed1883b751ed8d?iframe=true"
              title="Contact form"
              frameBorder={0}
              width="100%"
              height="750"
              style={{ display: 'block' }}
            />
          </div>
        </ScrollReveal>

        <Script
          src="//cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js"
          strategy="afterInteractive"
        />
        <Script id="dubsado-resize" strategy="afterInteractive">{`
          setTimeout(function(){ iFrameResize({ checkOrigin: false }); }, 30);
        `}</Script>

        <ScrollReveal delay={3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {trust.map((item: string) => (
              <div key={item} className="flex items-center gap-2">
                <svg aria-hidden="true" className="w-3.5 h-3.5 text-navy/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="font-sans text-xs text-charcoal/40">{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
