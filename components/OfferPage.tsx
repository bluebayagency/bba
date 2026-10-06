'use client'

import { useTranslation } from 'react-i18next'
import type { OfferSlug } from '@/lib/offers'
import NewsletterStrip from './NewsletterStrip'
import ScrollReveal from './ScrollReveal'
import { Banner, Outcomes, Testimonial, TitleHeader, offerHref, type Offer } from './sections'
import {
  ArrowLink,
  Body,
  ButtonLink,
  CONTACT_HREF,
  Container,
  Em,
  Eyebrow,
  ImageSlot,
  RuledHeading,
  StatementBand,
} from './ui'

type Item = { label?: string; title?: string; desc: string }

// Intro photo per offer page; pages without one show a labeled placeholder.
const introImages: Partial<Record<OfferSlug, { src: string; position?: string }>> = {
  'signature-website': { src: '/images/stock/bluebay-agency-brainstorm.png', position: '40% center' },
  'signature-brand': { src: '/images/stock/BluebayAgency-Brand-Strategy.png', position: 'center 45%' },
}

/** Landing page for one Signature offer. All copy lives under `offerPage.<slug>` in the locales. */
export default function OfferPage({ slug }: { slug: OfferSlug }) {
  const { t } = useTranslation()
  const c = (key: string) => t(`offerPage.${slug}.${key}`)
  const list = <T,>(key: string) => t(`offerPage.${slug}.${key}`, { returnObjects: true }) as T
  const offers = t('offers', { returnObjects: true }) as Offer[]
  const offerName = (id: string) => offers.find((o) => o.id === id)?.name ?? id

  const steps = list<Item[]>('steps')
  const included = list<Item[]>('included')
  const cross = list<Array<{ id: string; desc: string }>>('cross')
  const proof = c('proof')

  return (
    <>
      <TitleHeader eyebrow={c('eyebrow')} lines={list<string[]>('title')} size="xl" />
      <Banner pre={c('banner_pre')} mark={c('banner_mark')} />

      {/* Intro */}
      <section className="bg-white py-24 md:py-36">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <h2 className="font-sans font-medium text-navy text-xl md:text-2xl leading-snug">{c('lead')}</h2>
              <Body className="mt-5">{c('p1')}</Body>
              <Body className="mt-5">
                {c('p2_pre')}{' '}
                <strong className="font-medium text-navy">{c('p2_strong')}</strong>
                {c('p2_post') && <> {c('p2_post')}</>}
              </Body>
              <Body className="mt-5">{c('p3')}</Body>
              <ButtonLink href={CONTACT_HREF} className="mt-10">
                {c('cta')}
              </ButtonLink>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <ImageSlot
                src={introImages[slug]?.src}
                alt={c('image')}
                position={introImages[slug]?.position}
                sizes="(min-width: 1024px) 28rem, 90vw"
                label={c('image')}
                placeholderText={t('img.placeholder')}
                shape="corner"
                className="aspect-[4/5] w-full max-w-md mx-auto lg:mr-0"
                priority
              />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-white pb-24 md:pb-32">
        <Container>
          <ScrollReveal>
            <RuledHeading>
              {t('offerPage.how_pre')} <Em>{t('offerPage.how_em')}</Em>
            </RuledHeading>
          </ScrollReveal>
          <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((s, i) => (
              <ScrollReveal key={s.label} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <li>
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.08em] text-navy">{s.label}</h3>
                  <Body className="mt-4">{s.desc}</Body>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* What's included */}
      <section className="bg-white pb-24 md:pb-36">
        <Container>
          <ScrollReveal>
            <RuledHeading>
              {t('offerPage.incl_pre')} <Em>{t('offerPage.incl_em')}</Em>
            </RuledHeading>
          </ScrollReveal>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {included.map((item, i) => (
              <ScrollReveal key={item.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <li>
                  <span aria-hidden="true" className="font-sans text-xl text-accent">+</span>
                  <h3 className="mt-1 font-sans font-semibold text-navy leading-snug">{item.title}</h3>
                  <Body className="mt-2">{item.desc}</Body>
                </li>
              </ScrollReveal>
            ))}
          </ul>
          {c('addons') && (
            <ScrollReveal className="mt-12">
              <p className="font-sans font-light italic text-charcoal">{c('addons')}</p>
              <ArrowLink href={offerHref(c('addons_href'))} className="mt-2 !text-base">
                {c('addons_link')}
              </ArrowLink>
            </ScrollReveal>
          )}
        </Container>
      </section>

      <Outcomes
        line={
          <>
            {c('outcome_pre')}
            {c('outcome_em') && (
              <>
                {' '}
                <em className="italic">{c('outcome_em')}</em>
              </>
            )}
          </>
        }
        items={list<string[]>('outcomes')}
      />

      {/* Investment */}
      <section className="bg-white pb-24 md:pb-36">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-canela-deck font-medium italic text-navy text-2xl">{t('offerPage.invest')}</h2>
            <div aria-hidden="true" className="mt-3 h-px w-full bg-navy/40" />
            <Body className="mt-6 text-lg">{c('price')}</Body>
            <p className="mt-1 font-sans font-light italic text-charcoal/80">{c('discount')}</p>
            <Body className="mt-10">{c('ready')}</Body>
            <div className="mt-12 text-center">
              <ButtonLink href={CONTACT_HREF}>{c('invest_cta')}</ButtonLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Proof: a client quote, a verified outcome, or nothing until real proof exists */}
      {proof === 'quote' && <Testimonial />}
      {proof === 'outcome' && (
        <StatementBand>
          <ScrollReveal>
            <Eyebrow>{t('offerPage.outcome_label')}</Eyebrow>
            <p
              className="mt-8 font-canela-deck font-light text-navy leading-[1.22]"
              style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.9rem)' }}
            >
              {c('proof_text')}
            </p>
            <p className="mt-8 font-sans text-sm font-medium text-navy">{c('proof_source')}</p>
            <ArrowLink href={c('proof_href')} className="mt-4">
              {t('offerPage.outcome_link')}
            </ArrowLink>
          </ScrollReveal>
        </StatementBand>
      )}

      {/* Looking for Something Else? */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal className="bg-navy grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-8 py-14 md:px-16 md:py-20">
            <ImageSlot
              src="/images/stock/bluebay-agency-woman-working.jpg"
              alt={t('offerPage.cross_image')}
              label={t('offerPage.cross_image')}
              placeholderText={t('img.placeholder')}
              shape="arch"
              position="center 40%"
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="aspect-[4/5] w-full max-w-md mx-auto"
            />
            <div>
              <h2 className="font-canela-deck font-light text-white leading-tight" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.75rem)' }}>
                {t('offerPage.cross_h2')}
              </h2>
              <p className="mt-8 font-sans font-light text-white/85 leading-relaxed">{t('offerPage.cross_body')}</p>
              <ul className="mt-8 space-y-5">
                {cross.map((x) => (
                  <li key={x.id} className="font-sans font-light text-white/85 leading-relaxed">
                    <a href={offerHref(x.id)} className="group inline-flex items-baseline gap-2">
                      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                      <span className="bg-white px-1.5 font-medium text-navy">{offerName(x.id)}</span>
                    </a>
                    <span className="mt-1 block pl-6">{x.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 font-canela-deck font-light italic text-white text-xl md:text-2xl leading-snug">{c('cross_line')}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <NewsletterStrip />
    </>
  )
}
