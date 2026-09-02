import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const IMG_BASE = '/images/olivias-wish'
const DESKTOP_SRC = `${IMG_BASE}/olivias-wish-desktop-coming-soon-preview.png`
const MOBILE_SRC = `${IMG_BASE}/olivias-wish-mobile-coming-soon-preview.png`

export const metadata: Metadata = {
  title: "Olivia's Wish: A Coming Soon Case Study | Blue Bay Agency",
  description:
    "A brand and coming-soon landing page for Olivia's Wish, herbal-infused baby congestion relief launching Fall 2026. The full case study lands alongside the brand.",
  alternates: { canonical: '/case-studies/olivias-wish' },
  openGraph: {
    title: "Olivia's Wish: A Coming Soon Case Study | Blue Bay Agency",
    description:
      "A brand and coming-soon landing page for Olivia's Wish, herbal-infused baby congestion relief launching Fall 2026.",
    type: 'article',
    // Placeholder OG image. Replace with a real 1200×630 export before publication.
    images: [
      {
        url: '/images/og/olivias-wish-case-study.png',
        width: 1200,
        height: 630,
        alt: "Olivia's Wish: Coming Soon Case Study by Blue Bay Agency",
      },
    ],
  },
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-dusty-rose">
      {children}
    </p>
  )
}

const pillars = [
  {
    n: '01',
    t: 'Herbal-infused comfort',
    d: 'That soothes without chemicals.',
  },
  {
    n: '02',
    t: 'Hypoallergenic fabrics',
    d: 'That care for sensitive skin.',
  },
  {
    n: '03',
    t: 'Real solutions',
    d: 'Inspired by actual parenting struggles.',
  },
]

export default function OliviasWishCaseStudy() {
  return (
    <main id="main-content">
      <Navigation />

      {/* ============================= HERO ============================= */}
      <header className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute -right-24 top-0 select-none font-canela-deck leading-none text-navy/[0.035]"
          style={{ fontSize: 'clamp(9rem, 22vw, 20rem)', fontWeight: 100 }}
          aria-hidden="true"
        >
          06
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16 md:pt-36 lg:px-8">
          <div className="flex items-center gap-3">
            <Eyebrow>Case Study</Eyebrow>
            <span className="h-3 w-px bg-gray-border" aria-hidden="true" />
            <span className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-charcoal/35">
              Coming Fall 2026
            </span>
          </div>

          <h1
            className="mt-6 max-w-3xl font-canela-deck font-light leading-[1.05] text-navy"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)' }}
          >
            Comfort, made for <em className="italic font-thin">little ones.</em>
          </h1>

          <p className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-charcoal/60">
            Every parent knows that particular kind of exhaustion, pacing the hallway at 2 a.m. with a
            congested, uncomfortable baby, wishing for something that actually helped. Olivia&rsquo;s
            Wish was born from exactly that ache: herbal-infused, hypoallergenic congestion relief made
            so babies can breathe easier, and parents can finally rest.
          </p>

          {/* Meta row */}
          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-gray-border pt-8 md:grid-cols-4">
            {[
              { k: 'Client', v: <>Olivia&rsquo;s Wish</> },
              { k: 'Founder', v: <>Barbara</> },
              { k: 'Launch', v: <>Fall 2026</> },
              { k: 'Role', v: <>Brand &amp; Coming Soon Site</> },
            ].map((item) => (
              <div key={item.k}>
                <dt className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal/35">
                  {item.k}
                </dt>
                <dd className="mt-2 font-sans text-sm font-light leading-relaxed text-navy/85">
                  {item.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Hero screenshot, framed browser mockup */}
        <div className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
          <div className="overflow-hidden border border-gray-border bg-white shadow-xl shadow-navy/5">
            <div className="flex items-center gap-1.5 border-b border-gray-border bg-soft-white px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <div className="ml-3 flex h-5 flex-1 items-center border border-gray-border bg-white px-2">
                <span className="font-sans text-[10px] text-charcoal/30">oliviaswish.com</span>
              </div>
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-soft-white">
              <Image
                src={DESKTOP_SRC}
                alt="Olivia's Wish coming soon landing page, announcing a Fall 2026 launch with an email signup"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 1152px, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* ============================= WHAT'S COMING ============================= */}
      <section className="border-y border-gray-border bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>What&rsquo;s Coming</Eyebrow>
            <h2
              className="mt-6 font-canela-deck font-light leading-[1.1] text-navy"
              style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)' }}
            >
              Made for babies with sensitive skin, congestion, and the parents who lose sleep over it.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
            {/* Left: pillars list */}
            <div>
              <dl className="divide-y divide-gray-border border-t border-gray-border">
                {pillars.map((p) => (
                  <div key={p.n} className="flex gap-5 py-6">
                    <span className="font-canela-deck text-2xl font-light leading-none text-french-blue/60">
                      {p.n}
                    </span>
                    <div>
                      <dt className="font-sans text-sm font-semibold leading-snug text-navy">
                        {p.t}
                      </dt>
                      <dd className="mt-2 font-sans text-sm font-light leading-relaxed text-charcoal/55">
                        {p.d}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right: mobile screenshot */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <figure className="mx-auto max-w-xs">
                <div className="relative aspect-[9/16] w-full overflow-hidden border border-gray-border bg-white shadow-xl shadow-navy/5">
                  <Image
                    src={MOBILE_SRC}
                    alt="Olivia's Wish coming soon landing page on mobile"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 33vw, 60vw"
                  />
                </div>
                <figcaption className="mt-3 text-center font-sans text-xs font-light text-charcoal/40">
                  Coming Soon · oliviaswish.com
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= CTA ============================= */}
      <section className="relative overflow-hidden border-t border-gray-border bg-soft-white py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center"
          aria-hidden="true"
        >
          <span
            className="whitespace-nowrap font-canela-deck leading-none text-navy/[0.03]"
            style={{ fontSize: 'clamp(6rem, 18vw, 16rem)', fontWeight: 100 }}
          >
            Blue Bay
          </span>
        </div>

        <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
          <Eyebrow>The Full Case Study Is Coming Soon</Eyebrow>
          <h2
            className="mt-6 font-canela-deck font-light leading-[1.1] text-navy"
            style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.25rem)' }}
          >
            We&rsquo;ll share the full story when Olivia&rsquo;s Wish launches.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.oliviaswish.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 bg-navy px-8 py-4 font-sans text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-navy/90 sm:w-auto"
            >
              Visit Olivia&rsquo;s Wish
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            <a
              href="/case-studies"
              className="inline-flex w-full items-center justify-center gap-2 border border-navy/20 px-8 py-4 font-sans text-sm font-medium tracking-wide text-navy transition-all duration-300 hover:border-navy/40 sm:w-auto"
            >
              Back to Case Studies
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
