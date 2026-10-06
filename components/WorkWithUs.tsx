'use client'

import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'
import { Banner, FAQList, TitleHeader } from './sections'
import { Body, ButtonLink, CONTACT_HREF, Container, Em, RuledHeading } from './ui'

export default function WorkWithUs() {
  const { t } = useTranslation()
  const steps = t('work.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>

  return (
    <>
      <TitleHeader eyebrow={t('work.eyebrow')} lines={t('work.title', { returnObjects: true }) as string[]} />
      <Banner pre={t('work.banner_pre')} mark={t('work.banner_mark')} />

      <section className="bg-white pt-24 md:pt-36 pb-24 md:pb-36">
        <Container>
          <ScrollReveal>
            <p className="max-w-3xl font-sans font-medium text-navy text-xl md:text-2xl leading-snug">{t('work.lead')}</p>
          </ScrollReveal>

          <ScrollReveal className="mt-20 md:mt-28">
            <RuledHeading>
              {t('work.process_pre')} <Em>{t('work.process_em')}</Em>
            </RuledHeading>
          </ScrollReveal>
          <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <li>
                  <span className="font-sans text-xs font-medium tracking-[0.25em] text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-canela-deck font-light text-navy text-2xl md:text-3xl leading-tight">{step.title}</h3>
                  <Body className="mt-4">{step.desc}</Body>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal className="bg-navy grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-8 py-16 md:px-16 md:py-20">
            <h2 className="font-canela-deck font-light text-white leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              {t('work.which_h2')}
            </h2>
            <div>
              <p className="font-sans font-light text-white/85 leading-relaxed md:text-lg">{t('work.which_body')}</p>
              <ButtonLink href={CONTACT_HREF} variant="light" className="mt-10">
                {t('cta.primary')}
              </ButtonLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="faq" className="bg-white py-24 md:py-36 scroll-mt-24">
        <FAQList />
      </section>
    </>
  )
}
