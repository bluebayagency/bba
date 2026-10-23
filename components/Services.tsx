'use client'

import { t } from '@/lib/copy'
import ScrollReveal from './ScrollReveal'
import { Banner, Intro, offerHref, TitleHeader, type Offer } from './sections'
import { ArrowLink, Body, ButtonLink, CONTACT_HREF, Container, Display, Em, RuledHeading } from './ui'

export default function Services() {
  const offers = t<Offer[]>('offers')

  return (
    <>
      <TitleHeader eyebrow={t('services.eyebrow')} lines={t<string[]>('services.title')} />
      <Banner pre={t('services.banner_pre')} mark={t('services.banner_mark')} />
      <Intro lead={t('services.lead')} paragraphs={[t('services.body')]} cta={false} />

      <section className="bg-white pb-24 md:pb-36">
        <Container>
          <ScrollReveal>
            <RuledHeading>
              {t('services.offers_pre')} <Em>{t('services.offers_em')}</Em>
            </RuledHeading>
          </ScrollReveal>
          <div className="mt-6">
            {offers.map((o) => (
              <ScrollReveal key={o.id}>
                <article
                  id={o.id}
                  className="scroll-mt-32 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-b border-gray-border py-12 md:py-16"
                >
                  <div className="md:col-span-5">
                    <h3 className="font-canela-deck font-light text-navy text-3xl md:text-4xl leading-tight">{o.name}</h3>
                  </div>
                  <div className="md:col-span-7">
                    <Body className="text-lg">{o.desc}</Body>
                    <ArrowLink href={offerHref(o.id)} className="mt-6">
                      {t('cta.learn')}
                    </ArrowLink>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand py-24 md:py-32">
        <ScrollReveal className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Display as="p" size="md">
            {t('services.closing')}
          </Display>
          <ButtonLink href={CONTACT_HREF} className="mt-12">
            {t('cta.primary')}
          </ButtonLink>
        </ScrollReveal>
      </section>
    </>
  )
}
