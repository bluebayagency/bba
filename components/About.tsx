'use client'

import { useTranslation } from 'react-i18next'
import Contact from './Contact'
import IndustryLogos from './IndustryLogos'
import ScrollReveal from './ScrollReveal'
import { ArrowLink, Body, CONTACT_HREF, Container, ImageSlot } from './ui'

export default function About() {
  const { t } = useTranslation()
  const ph = t('img.placeholder')
  const meet = t('about.meet_body', { returnObjects: true }) as string[]
  const feel = t('about.feel_body', { returnObjects: true }) as string[]
  const points = t('about.approach_points', { returnObjects: true }) as string[]

  return (
    <>
      <header className="bg-white pt-40 md:pt-52 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-sans text-sm md:text-base font-light tracking-[0.3em] uppercase text-accent animate-fade-up opacity-0">
            {t('about.eyebrow')}
          </p>
          <h1
            className="mt-8 font-canela-deck font-light text-navy leading-[1.12] animate-fade-up-delay opacity-0"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.9rem)' }}
          >
            <span className="block">{t('about.title_1')}</span>
            <span className="block">
              {t('about.title_2_pre')} <em className="italic">{t('about.title_2_em')}</em>
            </span>
          </h1>
        </div>
      </header>

      {/* Circle image + "bridge that gap" */}
      <section className="bg-white pb-28 md:pb-40">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
            <ScrollReveal>
              <ImageSlot
                src="/images/stock/bluebay-agency-coastal-2.jpg"
                alt={t('about.circle_image')}
                label={t('about.circle_image')}
                placeholderText={ph}
                shape="circle"
                position="55% center"
                sizes="(min-width: 768px) 24rem, 90vw"
                className="aspect-square w-full max-w-sm mx-auto"
              />
            </ScrollReveal>
            <ScrollReveal delay={1} className="text-center md:text-left">
              <p className="font-sans font-light text-navy/85 text-xl md:text-2xl leading-relaxed max-w-md mx-auto md:mx-0">
                {t('about.gap')}
              </p>
              <p className="mt-6 font-sans font-medium text-navy text-xl md:text-2xl">{t('about.gap_strong')}</p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Meet Veronica: text left, layered images right */}
      <section className="bg-white pb-28 md:pb-40 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <h2 className="font-canela-deck font-light text-navy leading-tight" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)' }}>
                {t('about.meet_pre')} <span className="font-medium">{t('about.meet_strong')}</span>
              </h2>
              <p className="mt-3 font-sans text-xs md:text-sm font-light uppercase tracking-[0.3em] text-accent">
                {t('about.meet_role')}
              </p>
              {meet.map((p) => (
                <Body key={p} className="mt-6">
                  {p}
                </Body>
              ))}
            </ScrollReveal>
            <ScrollReveal delay={1} className="relative pb-16 lg:pb-24">
              <ImageSlot
                src="/images/stock/BluebayAgencyWater.png"
                alt={t('about.meet_image_bg')}
                label={t('about.meet_image_bg')}
                placeholderText={ph}
                shape="soft"
                position="center 45%"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] w-full lg:w-[115%]"
              />
              <figure className="absolute left-8 md:left-16 bottom-0 w-1/2">
                <ImageSlot
                  src="/images/founder/bluebay-agency-veronica-perez.png"
                  alt={t('about.meet_image')}
                  label={t('about.meet_image')}
                  placeholderText={ph}
                  shape="soft"
                  position="center 20%"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="aspect-[3/4] w-full ring-8 ring-white"
                />
              </figure>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <IndustryLogos />

      {/* Our Approach */}
      <section className="bg-sand py-24 md:py-36">
        <ScrollReveal className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-canela-deck font-light italic text-navy leading-tight" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)' }}>
            {t('about.approach_pre')} {t('about.approach_em')}
          </h2>
          <p className="mt-8 font-sans text-navy text-xl md:text-2xl font-light">{t('about.approach_lead')}</p>
          <Body className="mt-6">{t('about.approach_body')}</Body>
          <Body className="mt-6">
            {t('about.approach_blend_pre')} <strong className="font-medium text-navy">{t('about.approach_blend_strong')}</strong>{' '}
            {t('about.approach_blend_post')}
          </Body>
          <ul className="mt-10 space-y-2">
            {points.map((p) => (
              <li key={p} className="font-sans font-light text-navy">
                <span aria-hidden="true" className="mr-2 text-accent">~</span>
                {p}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </section>

      {/* The Feel */}
      <section className="bg-white py-24 md:py-36 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <ScrollReveal>
            <ImageSlot
              src="/images/stock/bluebay-agency-coastal-3.jpg"
              alt={t('about.feel_image')}
              label={t('about.feel_image')}
              placeholderText={ph}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[16/10] w-full rounded-r-3xl"
            />
          </ScrollReveal>
          <ScrollReveal delay={1} className="px-6 lg:px-0 lg:pr-[max(2rem,calc((100vw-72rem)/2+2rem))]">
            <h2 className="font-canela-deck font-light text-navy leading-tight" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)' }}>
              {t('about.feel_pre')} <em className="italic">{t('about.feel_em')}</em>
            </h2>
            {feel.map((p) => (
              <Body key={p} className="mt-6 max-w-lg">
                {p}
              </Body>
            ))}
            <div className="mt-10 flex flex-col gap-2">
              <ArrowLink href="/services">{t('cta.services')}</ArrowLink>
              <ArrowLink href={CONTACT_HREF}>{t('cta.primary')}</ArrowLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Contact variant="about" />
    </>
  )
}
