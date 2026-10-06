'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import BeforeAfterSlider from './BeforeAfterSlider'
import ScrollReveal from './ScrollReveal'
import { Testimonial } from './sections'
import { Body, BrowserFrame, ButtonLink, Container, Display, Em, PageHeader, RuledHeading } from './ui'

const IMG_BASE = '/images/projects/thecouplestherapy'

export default function CaseStudies() {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader eyebrow={t('caseStudies.eyebrow')}>
        <Display>{t('caseStudies.h1')}</Display>
      </PageHeader>

      <Testimonial />

      <section className="bg-white py-24 md:py-36">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            <ScrollReveal className="lg:col-span-5">
              <p className="font-canela-deck font-light text-navy leading-none" style={{ fontSize: 'clamp(4rem, 9vw, 7rem)' }}>
                {t('story.stat')}
              </p>
              <Body className="mt-8 text-lg max-w-md">{t('caseStudies.body')}</Body>
              <ButtonLink href="/couples-therapy-case-study" className="mt-10">
                {t('caseStudies.cta')}
              </ButtonLink>
            </ScrollReveal>
            <ScrollReveal delay={1} className="lg:col-span-7">
              <BrowserFrame url="thecouplestherapy.com">
                <div className="relative aspect-[2434/1376]">
                  <Image
                    src={`${IMG_BASE}/the-couples-therapy-new-site-after.png`}
                    alt={t('caseStudies.after_alt')}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                </div>
              </BrowserFrame>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-28 md:pb-40">
        <Container>
          <ScrollReveal>
            <RuledHeading>
              {t('caseStudies.compare_pre')} <Em>{t('caseStudies.compare_em')}</Em>
            </RuledHeading>
          </ScrollReveal>
          <ScrollReveal className="mt-12">
            <BeforeAfterSlider
              beforeSrc={`${IMG_BASE}/the-couples-therapy-old-site-before.png`}
              beforeAlt={t('caseStudies.before_alt')}
              afterSrc={`${IMG_BASE}/the-couples-therapy-new-site-after.png`}
              afterAlt={t('caseStudies.after_alt')}
            />
          </ScrollReveal>
        </Container>
      </section>
    </>
  )
}
