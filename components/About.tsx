'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const industryLogos = [
  { src: '/images/projects/industry-experience/logo1.png', alt: 'Industry client logo', width: 400, height: 225 },
  { src: '/images/projects/industry-experience/logo2.png', alt: 'Industry client logo', width: 500, height: 150 },
  { src: '/images/projects/industry-experience/logo3.png', alt: 'Industry client logo', width: 180, height: 200 },
  { src: '/images/projects/industry-experience/logo4.png', alt: 'Industry client logo', width: 407, height: 253 },
  { src: '/images/projects/industry-experience/logo5.png', alt: 'Industry client logo', width: 400, height: 225 },
  { src: '/images/projects/industry-experience/logo6.png', alt: 'Industry client logo', width: 400, height: 187 },
  { src: '/images/projects/industry-experience/logo7.svg', alt: 'Industry client logo', width: 400, height: 240, scale: 0.53 },
]

export default function About() {
  const { t } = useTranslation()
  const [marqueuPaused, setMarqueuPaused] = useState(false)
  const certifications = t('about.certifications', { returnObjects: true }) as Array<{ label: string; sub: string }>


  return (
    <section id="about" className="bg-sand py-24 md:py-36 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <ScrollReveal>
            <div className="relative pb-10">
              <div className="relative bg-navy/5">
                <img
                  src="/images/founder/bluebay-agency-veronica-perez.png"
                  alt="Bluebay Agency Founder"
                  className="w-full h-auto object-cover object-top"
                  style={{ maxHeight: '640px' }}
                />
                <div className="absolute -bottom-8 left-6 md:left-10 bg-navy text-white p-6 shadow-2xl">
                  <div className="font-canela-deck text-4xl font-thin text-dusty-rose">{t('about.stat_num')}</div>
                  <div className="font-sans text-xs text-white/50 mt-1 tracking-wide leading-tight">{t('about.stat_label')}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="lg:pt-8">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-dusty-rose/60" />
                <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                  {t('about.eyebrow')}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2 className="font-canela-deck font-light text-navy leading-[1.1] mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                {t('about.h2')}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="font-sans font-light text-charcoal/60 leading-relaxed mb-5">
                {t('about.body1')}
              </p>
              <p className="font-sans font-light text-charcoal/50 text-sm leading-relaxed mb-10">
                {t('about.body2')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <p className="font-sans text-xs font-medium text-charcoal/30 tracking-[0.2em] uppercase mb-5">
                {t('about.certs_label')}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {certifications.map((cert) => (
                  <div key={cert.label} className="flex items-start gap-3 bg-white border border-gray-border p-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-navy/30 mt-1.5 flex-shrink-0" />
                    <div>
                      <div className="font-sans text-xs font-medium text-navy">{cert.label}</div>
                      <div className="font-sans text-[11px] text-charcoal/40 leading-snug">{cert.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-sans text-xs text-charcoal/40 mb-8">{t('about.certs_note')}</p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-border">
                <a href="https://www.manhattanbeachchamber.com/directory#!biz/id/69b31e10007ee52f4f0140d3" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/logos/mb-chamber-member.png"
                    alt="Manhattan Beach Chamber of Commerce Member"
                    width={80}
                    height={80}
                    className="h-14 w-auto object-contain opacity-70 hover:opacity-90 transition-opacity duration-200"
                  />
                </a>
                <div>
                  <div className="font-sans text-xs font-medium text-charcoal/50">{t('about.chamber_label')}</div>
                  <div className="font-sans text-xs text-charcoal/35">{t('about.chamber_sub')}</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Industry Experience */}
        <ScrollReveal>
          <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-gray-border">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-10 bg-dusty-rose/60" />
              <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                {t('about.industry_title')}
              </span>
            </div>
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-sand to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-sand to-transparent" />
              <div
                className="flex w-max animate-marquee"
                style={{ animationPlayState: marqueuPaused ? 'paused' : 'running' }}
                aria-label="Industry logos"
              >
                {[...industryLogos, ...industryLogos].map((logo, i) => (
                  <div key={i} className="flex-shrink-0 flex items-center justify-center px-6 md:px-10 h-10 md:h-12">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{ height: logo.scale ? `${logo.scale * 100}%` : '100%', width: 'auto', objectFit: 'contain' }}
                      className="grayscale opacity-50"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={() => setMarqueuPaused(!marqueuPaused)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-sand border border-gray-border p-1.5 text-charcoal/40 hover:text-charcoal/70 transition-colors duration-200"
                aria-label={marqueuPaused ? 'Play animation' : 'Pause animation'}
              >
                {marqueuPaused ? (
                  <svg aria-hidden="true" className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                ) : (
                  <svg aria-hidden="true" className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                )}
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
