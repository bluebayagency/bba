'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'
import { Container, Eyebrow } from './ui'

const industryLogos = [
  { src: '/images/projects/industry-experience/logo1.png' },
  { src: '/images/projects/industry-experience/logo2.png' },
  { src: '/images/projects/industry-experience/logo3.png' },
  { src: '/images/projects/industry-experience/logo4.png' },
  { src: '/images/projects/industry-experience/logo5.png' },
  { src: '/images/projects/industry-experience/logo6.png' },
  { src: '/images/projects/industry-experience/logo7.svg', scale: 0.53 },
]

/** "Industry Experience" strip: grayscale client logos scrolling in a loop, with a pause button. */
export default function IndustryLogos() {
  const { t } = useTranslation()
  const [paused, setPaused] = useState(false)

  return (
    <section className="bg-sand py-16 md:py-20 border-b border-navy/10" aria-labelledby="industry-experience">
      <Container>
        <ScrollReveal>
          <Eyebrow>
            <span id="industry-experience">{t('about.industry_title')}</span>
          </Eyebrow>
        </ScrollReveal>
      </Container>
      <div className="relative mt-10 md:mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-sand to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-sand to-transparent" />
        {/* The list is doubled so the loop is seamless; the copy is hidden from screen readers */}
        <ul
          className="flex w-max animate-marquee motion-reduce:animate-none"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {[...industryLogos, ...industryLogos].map((logo, i) => (
            <li
              key={i}
              aria-hidden={i >= industryLogos.length}
              className="flex h-10 md:h-14 flex-shrink-0 items-center justify-center px-8 md:px-14"
            >
              <img
                src={logo.src}
                alt={i < industryLogos.length ? t('about.industry_logo') : ''}
                style={{ height: logo.scale ? `${logo.scale * 100}%` : '100%', width: 'auto' }}
                className="object-contain grayscale opacity-50"
              />
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          aria-label={paused ? t('about.industry_play') : t('about.industry_pause')}
          className="absolute right-4 md:right-8 top-1/2 z-20 -translate-y-1/2 border border-gray-border bg-sand p-2 text-charcoal/50 transition-colors duration-200 hover:text-navy"
        >
          {paused ? (
            <svg aria-hidden="true" className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          ) : (
            <svg aria-hidden="true" className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
          )}
        </button>
      </div>
    </section>
  )
}
