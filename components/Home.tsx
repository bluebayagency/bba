'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import NewsletterStrip from './NewsletterStrip'
import ScrollReveal from './ScrollReveal'
import TestimonialCarousel, { type Quote } from './TestimonialCarousel'
import { offerHref, type Offer } from './sections'
import {
  ArrowLink,
  Body,
  ButtonLink,
  CALENDLY_HREF,
  CONTACT_HREF,
  Container,
  ImageSlot,
  GOOGLE_REVIEWS_HREF,
  INSTAGRAM_HREF,
  Mark,
} from './ui'

// Homepage, laid out section-for-section after the Aspen Design Studios reference.

type Tile = { id: string; title: string; body: string; link: string; image: string }
type WorkItem = { id: string; body: string; strong: string }
type Path = { label: string; desc: string; kind: 'contact' | 'call' }

function useHome() {
  const { t } = useTranslation()
  const h = (key: string) => t(`home.${key}`)
  const list = <T,>(key: string) => t(`home.${key}`, { returnObjects: true }) as T
  return { t, h, list, ph: t('img.placeholder') }
}

/* 1. Hero. Mobile: headline, then the photo. Desktop: the photo fills the hero as a background
   (devices on the left), with the headline on the open wall to the right. The desktop height
   follows the photo's 16:9 shape so the devices are never cropped off. */
const HERO_WALL = '#ADA197' // average wall color on the photo's right side

function Hero() {
  const { h, ph } = useHome()
  return (
    <section
      className="relative flex flex-col lg:block bg-white pt-24 md:pt-28 lg:pt-0 lg:mt-24 lg:h-[min(85vh,760px,56.25vw)] lg:overflow-hidden"
      style={{ ['--hero-wall' as string]: HERO_WALL }}
    >
      <div className="order-2 lg:absolute lg:inset-0 lg:bg-[var(--hero-wall)]">
        <div className="relative animate-fade-in opacity-0 lg:absolute lg:inset-0">
          <ImageSlot
            src="/images/stock/bluebay-agency-web-design-seo-search-branding.png"
            alt={h('hero_image')}
            label={h('hero_image')}
            placeholderText={ph}
            className="aspect-[16/10] lg:aspect-auto lg:h-full"
            sizes="100vw"
            position="left center"
            priority
          />
        </div>
      </div>
      <div className="order-1 relative w-full lg:h-full max-w-6xl mx-auto lg:flex lg:items-center lg:justify-end">
        <div className="px-6 py-14 lg:py-0 lg:px-8 lg:w-[38%] text-right">
          <h1 className="font-canela-deck text-navy leading-[1.08] animate-fade-up opacity-0" style={{ fontSize: 'clamp(2.4rem, 4.2vw, 4rem)' }}>
            <span className="font-light">{h('hero_pre')}</span>{' '}
            <span className="font-medium">
              {h('hero_strong')} <em className="italic">{h('hero_em')}</em>
            </span>
          </h1>
          <ButtonLink href="/services" className="mt-10 animate-fade-up-delay opacity-0">
            {h('hero_cta')}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

/* 2. Service tiles: dark tile, image, light tile, image */
// Photos for the image cell beside each tile; tiles without one show a placeholder.
const tileImages: Record<string, { src: string; position?: string }> = {
  'signature-website': { src: '/images/stock/Bluebay-Agency-Coaches-Website.png', position: '60% 58%' },
  'signature-search': { src: '/images/stock/Bluebay-Agency-Phone-On-Book.png', position: 'center 35%' },
}

function Tiles() {
  const { h, list, ph } = useHome()
  const tiles = list<Tile[]>('tiles')
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {tiles.map((tile, i) => {
        const dark = i === 0
        return [
          <div key={`${tile.id}-copy`} className={`flex flex-col justify-center px-8 py-16 md:px-12 lg:aspect-[4/5] ${dark ? 'bg-navy' : 'bg-white'}`}>
            <h2 className={`font-canela-deck font-light leading-[1.1] ${dark ? 'text-white' : 'text-navy'}`} style={{ fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)' }}>
              {tile.title}
            </h2>
            <p className={`mt-8 font-sans text-sm font-light leading-relaxed ${dark ? 'text-white/85' : 'text-charcoal'}`}>{tile.body}</p>
            <ArrowLink href={offerHref(tile.id)} light={dark} className="mt-6 !text-base">
              {tile.link}
            </ArrowLink>
          </div>,
          <ImageSlot
            key={`${tile.id}-image`}
            src={tileImages[tile.id]?.src}
            alt={tile.image}
            position={tileImages[tile.id]?.position}
            label={tile.image}
            placeholderText={ph}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="aspect-square sm:aspect-auto sm:h-full min-h-[18rem]"
          />,
        ]
      })}
    </section>
  )
}

/* 3. Centered statement with highlighted phrase */
function Statement() {
  const { h } = useHome()
  return (
    <section className="bg-white py-28 md:py-40">
      <ScrollReveal className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="font-canela-deck font-light text-navy leading-[1.25]" style={{ fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)' }}>
          {h('statement_pre')} <Mark>{h('statement_mark')}</Mark>
        </p>
      </ScrollReveal>
    </section>
  )
}

/* 4. Two-tone banner over the branded-website phone mockup */
function Banner() {
  const { h, list } = useHome()
  const lines = list<string[][]>('banner')
  return (
    <section className="relative bg-sand overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-20 md:pt-28 lg:py-36">
        <ScrollReveal className="lg:w-1/2">
          <p className="font-canela-deck font-medium leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)' }}>
            {lines.map(([a, b]) => (
              <span key={a} className="block">
                <span className="text-navy">{a}</span> <em className="italic text-accent">{b}</em>
              </span>
            ))}
          </p>
        </ScrollReveal>
      </div>
      {/* Transparent phone cutout: sits on the sand like a backdrop, oversized and cropped by the section edges */}
      <div className="relative h-[24rem] sm:h-[30rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[56%]">
        <Image
          src="/images/stock/Bluebay-Agengy-Vet-Preview.png"
          alt={h('banner_image')}
          fill
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="object-contain object-top translate-y-6 scale-110 lg:translate-y-0 lg:object-center lg:scale-[1.3]"
        />
      </div>
    </section>
  )
}

/* 5. "Work with us" accordion */
function WorkWithUs() {
  const { t, h, list } = useHome()
  const items = list<WorkItem[]>('work_items')
  const offers = t('offers', { returnObjects: true }) as Offer[]
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-navy text-white py-24 md:py-36 mt-12 md:mt-16">
      <Container>
        <ScrollReveal>
          <h2 className="font-canela-deck font-light leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 6.25rem)' }}>
            {h('work_pre')} <em className="italic">{h('work_em')}</em>
          </h2>
        </ScrollReveal>
        <div className="mt-16 md:mt-24 border-b border-white/25">
          {items.map((item, i) => {
            const isOpen = open === i
            const name = offers.find((o) => o.id === item.id)?.name ?? item.id
            return (
              <div key={item.id} className="border-t border-white/25">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`home-work-${i}`}
                  id={`home-work-trigger-${i}`}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-canela-deck font-light text-xl md:text-2xl">{name}</span>
                  <span aria-hidden="true" className="font-sans text-2xl font-extralight text-white/70">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div id={`home-work-${i}`} role="region" aria-labelledby={`home-work-trigger-${i}`} hidden={!isOpen} className="pb-8 max-w-3xl">
                  <p className="font-sans text-sm md:text-base font-light leading-relaxed text-white/85">{item.body}</p>
                  <p className="mt-3 font-sans text-sm md:text-base font-medium italic leading-relaxed text-white">{item.strong}</p>
                  <ArrowLink href={offerHref(item.id)} light className="mt-5 !text-base">
                    {t('cta.learn')}
                  </ArrowLink>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-14 flex flex-col gap-2">
          <ArrowLink href="/services" light>
            {t('cta.services')}
          </ArrowLink>
          <ArrowLink href={CONTACT_HREF} light>
            {h('work_ready')}
          </ArrowLink>
        </div>
      </Container>
    </section>
  )
}

/* 6. "Intuitive design." with scattered editorial images */
function Approach() {
  const { h, list, ph } = useHome()
  const imgs = list<string[]>('approach_images')
  return (
    <section className="bg-white py-24 md:py-36 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 items-start">
        <ScrollReveal className="hidden lg:block lg:col-start-3 lg:col-span-3 lg:row-start-1">
          <ImageSlot
            src="/images/stock/bluebay-agency-soft-coastal.jpg"
            alt={imgs[1]}
            label={imgs[1]}
            placeholderText={ph}
            sizes="25vw"
            className="aspect-[16/10] w-full"
          />
        </ScrollReveal>
        <ScrollReveal delay={1} className="hidden lg:block lg:col-start-11 lg:col-span-2 lg:row-start-1 lg:row-span-2 lg:mt-40">
          <ImageSlot
            src="/images/stock/bluebay-agency-brainstorm.png"
            alt={imgs[2]}
            label={imgs[2]}
            placeholderText={ph}
            sizes="20vw"
            position="40% 55%"
            className="aspect-[4/3] w-full"
          />
        </ScrollReveal>
        <ScrollReveal className="hidden lg:block lg:col-start-1 lg:col-span-2 lg:row-start-2 lg:mt-20">
          <ImageSlot
            src="/images/stock/BluebayAgency-Brand-Strategy.png"
            alt={imgs[0]}
            label={imgs[0]}
            placeholderText={ph}
            sizes="20vw"
            position="center 52%"
            className="aspect-[5/4] w-full"
          />
        </ScrollReveal>

        <div className="px-6 lg:px-0 lg:col-start-3 lg:col-span-7 lg:row-start-2 lg:pt-10">
          <ScrollReveal>
            <h2 className="font-canela-deck text-navy leading-[1.08]" style={{ fontSize: 'clamp(2.25rem, 4.6vw, 3.75rem)' }}>
              <span className="block font-light">
                {h('approach_1')} <em className="italic">{h('approach_1_em')}</em>
              </span>
              <span className="block font-light">
                {h('approach_2')} <em className="italic">{h('approach_2_em')}</em>
              </span>
              <span className="block font-medium">
                {h('approach_3')} <em className="italic">{h('approach_3_em')}</em>
              </span>
            </h2>
            <div aria-hidden="true" className="mt-8 h-px w-full bg-accent/60" />
            <p className="mt-8 font-sans font-light text-navy/85 text-lg md:text-xl leading-relaxed">{h('approach_body')}</p>
            <ArrowLink href={CALENDLY_HREF} external className="mt-8 !text-base md:!text-lg">
              {h('approach_link')}
            </ArrowLink>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={2} className="hidden lg:block lg:col-start-9 lg:col-span-2 lg:row-start-3">
          <ImageSlot
            src="/images/stock/BluebayAgencyWater.png"
            alt={imgs[3]}
            label={imgs[3]}
            placeholderText={ph}
            sizes="20vw"
            position="center 70%"
            className="aspect-[4/3] w-full"
          />
        </ScrollReveal>
      </div>
    </section>
  )
}

/* 7. Logo card over a full-bleed photo */
function StudioCard() {
  const { t, h, ph } = useHome()
  return (
    <section className="relative py-20 md:py-28">
      <ImageSlot
        src="/images/stock/BluebayAgengy-Laptop-Hero.png"
        alt={h('studio_image')}
        label={h('studio_image')}
        placeholderText={ph}
        sizes="100vw"
        className="!absolute inset-0"
      />
      <div className="relative max-w-3xl mx-auto px-6">
        <ScrollReveal className="bg-white px-8 py-14 md:px-16 md:py-16 text-center shadow-[0_30px_80px_-40px_rgba(9,30,50,0.35)]">
          <img src="/images/logos/bluebayagency-llc-logo.png" alt="Bluebay Agency" width={800} height={270} className="mx-auto h-12 md:h-16 w-auto" />
          <p className="mt-3 font-sans text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] text-accent">{t('nav.tagline')}</p>
          <p className="mt-10 font-sans font-medium text-navy">
            {h('studio_pre')} <em className="italic">{h('studio_em')}</em>
          </p>
          <Body className="mt-5 text-sm md:text-base">{h('studio_p1')}</Body>
          <Body className="mt-3 text-sm md:text-base">{h('studio_p2')}</Body>
          <ButtonLink href="/about" className="mt-10">
            {h('studio_cta')}
          </ButtonLink>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* 8. Meet Bluebay: layered images left, copy right */
function MeetBluebay() {
  const { t, h, list, ph } = useHome()
  return (
    <section className="bg-white py-24 md:py-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal className="relative pb-24 md:pb-32">
            <ImageSlot
              src="/images/stock/BluebayAgencyWater.png"
              alt={h('meet_bg')}
              label={h('meet_bg')}
              placeholderText={ph}
              position="center 45%"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/3] w-full"
            />
            <ImageSlot
              src="/images/founder/bluebay-agency-founder-1462.JPG"
              alt={h('meet_image')}
              label={h('meet_image')}
              placeholderText={ph}
              position="center"
              sizes="(min-width: 1024px) 32vw, 75vw"
              className="!absolute left-1/2 -translate-x-1/2 bottom-0 w-[75%] aspect-[3/2] ring-8 ring-white"
            />
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-canela-deck text-navy leading-none" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)' }}>
              <span className="font-light">{h('meet_pre')}</span> <span className="font-medium">{h('meet_strong')}</span>
            </h2>
            <p className="mt-2 font-sans italic text-charcoal">
              <span aria-hidden="true" className="mr-2 text-accent">&#10042;</span>
              {h('meet_sub')}
            </p>
            {list<string[]>('meet_body').map((p) => (
              <Body key={p} className="mt-6">
                {p}
              </Body>
            ))}
            <ArrowLink href="/about" className="mt-8 !text-base">
              {t('cta.learn')}
            </ArrowLink>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}

/* 9. Testimonials carousel */
function Clients() {
  const { h, list } = useHome()
  return (
    <section className="bg-white pb-24 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-canela-deck font-light text-navy leading-tight" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.75rem)' }}>
            {h('clients_h2')}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={1} className="mt-12">
          <TestimonialCarousel quotes={list<Quote[]>('quotes')} prevLabel={h('prev')} nextLabel={h('next')} />
        </ScrollReveal>
        <ScrollReveal delay={2} className="mt-10">
          <a
            href={GOOGLE_REVIEWS_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-wrap items-center gap-3"
          >
            <span className="flex items-center gap-1" role="img" aria-label={h('rating_stars')}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} aria-hidden="true" className="h-4 w-4 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 1.5l2.635 5.34 5.895.857-4.265 4.158 1.007 5.873L10 14.9l-5.272 2.828 1.007-5.873L1.47 7.697l5.895-.857L10 1.5z" />
                </svg>
              ))}
            </span>
            <span className="font-sans text-xs font-medium tracking-wide text-charcoal/80 underline-offset-4 decoration-accent group-hover:underline">
              {h('rating_text')}
            </span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* 10. Instagram grid (placeholders link to the profile until a feed is connected) */
const gridOffsets = ['', 'md:mt-6', 'md:mt-6', '', '', 'md:mt-6', 'md:mt-6', '']
// Stand-in photos for the Instagram grid until a live feed is connected; alt text is in home.connect_images.
const gridImages = [
  { src: '/images/stock/Minimal Laptop Branding Mockup.png', position: '70% center' },
  { src: '/images/stock/bluebay-agency-manhattan-beach.jpg' },
  { src: '/images/stock/bluebay-agency-chamber-women-with phone-laptop.jpg', position: '60% center' },
  { src: '/images/stock/2025-oct-hermosa-beach-california-1694.jpg', position: '35% center' },
  { src: '/images/stock/bluebay-agency-coffee-on-desk.jpg' },
  { src: '/images/stock/bluebay-agency-chamber-women-phone.jpg', position: 'center 30%' },
  { src: '/images/stock/bluebay-agency-chamber-desktop.jpg', position: '60% center' },
  { src: '/images/stock/bluebay-agency-chamber-la-city.jpg', position: '40% center' },
]

function Connect() {
  const { h, list, ph } = useHome()
  const gridAlts = list<string[]>('connect_images')
  return (
    <section className="bg-white pb-24 md:pb-36">
      <Container className="text-center">
        <ScrollReveal>
          <a href={INSTAGRAM_HREF} target="_blank" rel="noopener noreferrer" className="font-sans text-xs italic uppercase tracking-[0.15em] text-accent">
            {h('connect_follow')} <span className="underline underline-offset-4">{h('connect_handle')}</span>
          </a>
          <h2 className="mt-4 font-canela-deck font-medium text-navy leading-none" style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)' }}>
            {h('connect_h2')}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <ul className="mt-14 mx-auto grid max-w-3xl grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {gridOffsets.map((offset, i) => (
              <li key={i} className={offset}>
                <a href={INSTAGRAM_HREF} target="_blank" rel="noopener noreferrer" className="block transition-opacity hover:opacity-85">
                  <ImageSlot
                    src={gridImages[i].src}
                    alt={gridAlts[i]}
                    label={`${h('connect_post')} ${i + 1}`}
                    placeholderText={ph}
                    position={gridImages[i].position}
                    sizes="(min-width: 640px) 12rem, 45vw"
                    className="aspect-[4/5] w-full [&_span:first-of-type]:hidden"
                  />
                </a>
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <div className="mt-12 flex items-center justify-center gap-3">
          <a
            href={INSTAGRAM_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white hover:bg-navy/90 transition-colors"
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  )
}

/* 11. Let's work together */
function Together() {
  const { h, list, ph } = useHome()
  const paths = list<Path[]>('paths')
  return (
    <section className="bg-white pb-24 md:pb-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal>
            <h2 className="font-canela-deck font-light text-navy leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {h('together_pre')}
              <em className="block italic">{h('together_em')}</em>
            </h2>
            <p className="mt-12 font-sans font-semibold text-navy">{h('together_strong')}</p>
            <Body className="mt-2">{h('together_p')}</Body>
            <ul className="mt-6 space-y-4">
              {paths.map((p) => (
                <li key={p.label} className="font-sans font-light text-charcoal leading-relaxed">
                  <a
                    href={p.kind === 'call' ? CALENDLY_HREF : CONTACT_HREF}
                    {...(p.kind === 'call' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group inline-flex items-baseline gap-2 font-medium text-navy"
                  >
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    <span className="underline underline-offset-4 decoration-accent">{p.label}</span>
                  </a>
                  <span className="block pl-6">{p.desc}</span>
                </li>
              ))}
            </ul>
            <Body className="mt-6">
              {h('together_close_pre')} <strong className="font-semibold italic text-navy">{h('together_close_em')}</strong>
            </Body>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <ImageSlot
              src="/images/stock/bluebay-agency-woman-working.jpg"
              alt={h('together_image')}
              label={h('together_image')}
              placeholderText={ph}
              shape="arch"
              position="center 40%"
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="aspect-[4/5] w-full max-w-md mx-auto lg:mr-0"
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Tiles />
      <Statement />
      <Banner />
      <WorkWithUs />
      <Approach />
      <StudioCard />
      <MeetBluebay />
      <Clients />
      {/* "let's connect" Instagram grid: hidden for now. Uncomment to bring it back. */}
      {/* <Connect /> */}
      <Together />
      <NewsletterStrip />
    </>
  )
}
