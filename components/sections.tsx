'use client'

import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'
import {
  ArrowLink,
  Body,
  ButtonLink,
  CONTACT_HREF,
  Container,
  Display,
  Em,
  ImageSlot,
  Mark,
  RuledHeading,
  StatementBand,
} from './ui'

export type Offer = { id: string; name: string; home: string; home_link: string; price: string; desc: string }

/** Each offer's dedicated landing page. */
export const offerHref = (id: string) => `/services/${id}`

/** Eyebrow + large centered serif title, one line per entry. */
export function TitleHeader({ eyebrow, lines, size = 'lg' }: { eyebrow: string; lines: string[]; size?: 'xl' | 'lg' }) {
  return (
    <header className="bg-white pt-40 md:pt-52 pb-24 md:pb-32">
      <Container className="text-center">
        <p className="font-sans text-xs md:text-sm font-light tracking-[0.3em] uppercase text-accent animate-fade-up opacity-0">
          {eyebrow}
        </p>
        <div className="mt-6 animate-fade-up-delay opacity-0">
          <Display size={size}>
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </Display>
        </div>
      </Container>
    </header>
  )
}

/** Sand band with a serif statement; the closing phrase gets a white marker highlight. */
export function Banner({ pre, mark }: { pre: string; mark: string }) {
  return (
    <StatementBand>
      <ScrollReveal>
        <Display as="p" size="lg">
          {pre} <Mark on="sand">{mark}</Mark>
        </Display>
      </ScrollReveal>
    </StatementBand>
  )
}

/** Intro: bold value line, supporting paragraphs, optional CTA and image. */
export function Intro({
  lead,
  paragraphs,
  image,
  cta = true,
}: {
  lead: string
  paragraphs: string[]
  image?: string
  cta?: boolean
}) {
  const { t } = useTranslation()
  const text = (
    <ScrollReveal>
      <h2 className="font-sans font-medium text-navy text-xl md:text-2xl leading-snug">{lead}</h2>
      {paragraphs.map((p) => (
        <Body key={p} className="mt-5 md:text-lg">
          {p}
        </Body>
      ))}
      {cta && (
        <ButtonLink href={CONTACT_HREF} className="mt-10">
          {t('cta.primary')}
        </ButtonLink>
      )}
    </ScrollReveal>
  )

  return (
    <section className="bg-white py-24 md:py-36">
      <Container>
        {image ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {text}
            <ScrollReveal delay={1}>
              <ImageSlot
                label={image}
                placeholderText={t('img.placeholder')}
                shape="corner"
                className="aspect-[4/5] w-full max-w-md mx-auto lg:mr-0"
              />
            </ScrollReveal>
          </div>
        ) : (
          <div className="max-w-3xl">{text}</div>
        )}
      </Container>
    </section>
  )
}

/** Accent line, rule, and three outcome statements. */
export function Outcomes({ line, items }: { line: ReactNode; items: string[] }) {
  return (
    <section className="bg-white pb-24 md:pb-36">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center font-sans font-medium text-accent text-lg md:text-xl">{line}</p>
          <div aria-hidden="true" className="mt-6 h-px w-full bg-navy/40" />
        </ScrollReveal>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {items.map((item, i) => (
            <ScrollReveal key={item} delay={(i + 1) as 1 | 2 | 3}>
              <li>
                <span aria-hidden="true" className="block font-sans text-2xl leading-none text-accent">
                  ~
                </span>
                <span className="mt-4 block font-sans font-light text-navy text-xl md:text-2xl leading-snug">{item}</span>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Testimonial({ tone = 'sand' }: { tone?: 'sand' | 'white' }) {
  const { t } = useTranslation()
  const quote = t('testimonial.quote')
  const mark = t('testimonial.mark')
  const idx = quote.indexOf(mark)
  const before = idx >= 0 ? quote.slice(0, idx) : quote
  const after = idx >= 0 ? quote.slice(idx + mark.length) : ''

  return (
    <StatementBand tone={tone}>
      <ScrollReveal>
        <figure>
          <blockquote
            className="font-canela-deck font-light text-navy leading-[1.22]"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.1rem)' }}
          >
            &ldquo;{before}
            {idx >= 0 && <Mark on={tone}>{mark}</Mark>}
            {after}&rdquo;
          </blockquote>
          <figcaption className="mt-10 font-sans text-sm font-light text-charcoal">
            <span className="block font-medium text-navy">{t('testimonial.name')}</span>
            <span className="block mt-1 text-charcoal/75">{t('testimonial.role')}</span>
          </figcaption>
        </figure>
      </ScrollReveal>
    </StatementBand>
  )
}

/** Ruled "Frequently Asked Questions" heading with a two-column Q&A grid. */
export function FAQList({ headingLevel = 'h2', eyebrow }: { headingLevel?: 'h1' | 'h2'; eyebrow?: string }) {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>
  const Heading = headingLevel

  return (
    <Container>
      <ScrollReveal>
        {eyebrow && (
          <p className="mb-6 font-sans text-xs md:text-sm font-light tracking-[0.3em] uppercase text-accent">{eyebrow}</p>
        )}
        <Heading
          className="font-canela-deck font-light text-navy leading-tight"
          style={{ fontSize: 'clamp(2rem, 4.2vw, 3.25rem)' }}
        >
          {t('faq.title_pre')} <em className="italic">{t('faq.title_em')}</em>
        </Heading>
        <div aria-hidden="true" className="mt-5 h-px w-full bg-navy/40" />
      </ScrollReveal>
      <dl className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {items.map((item, i) => (
          <ScrollReveal key={item.q} delay={((i % 2) + 1) as 1 | 2}>
            <div>
              <dt className="font-sans font-medium text-navy text-lg">{item.q}</dt>
              <dd className="mt-3">
                <Body>{item.a}</Body>
              </dd>
            </div>
          </ScrollReveal>
        ))}
      </dl>
      <ScrollReveal className="mt-16 text-center">
        <ButtonLink href={CONTACT_HREF}>{t('cta.primary')}</ButtonLink>
      </ScrollReveal>
    </Container>
  )
}
