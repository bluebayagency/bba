import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

const IMG_BASE = '/images/projects/thecouplestherapy'
const AFTER_SRC = `${IMG_BASE}/the-couples-therapy-new-site-after.png`
const BEFORE_SRC = `${IMG_BASE}/the-couples-therapy-old-site-before.png`
const MOBILE_SRC = `${IMG_BASE}/the-couples-therapy-mobile-site.png`
const COURT_PAGE_SRC = `${IMG_BASE}/the-couples-therapy-court-page-after.png`
const NEWPORT_PAGE_SRC = `${IMG_BASE}/the-couples-therapy-newport-location-page-after.png`
const RELATIONSHIP_PAGE_SRC = `${IMG_BASE}/the-couples-therapy-relationship-page-after.png`
const FOUNDER_PHOTO_SRC = `${IMG_BASE}/jessica-quiroz-founder.png`

export const metadata: Metadata = {
  title: 'The Couples Therapy and Reunification Counseling Inc.: A Web Redesign Case Study | Blue Bay Agency',
  description:
    'How Blue Bay Agency redesigned The Couples Therapy and Reunification Counseling Inc.: a modern visual system, a clearer path to booking, and a technical SEO foundation that drove a 65% lift in consultation form submissions within 30 days of launch.',
  alternates: { canonical: '/couples-therapy-case-study' },
  openGraph: {
    title: 'The Couples Therapy and Reunification Counseling Inc.: A Web Redesign Case Study | Blue Bay Agency',
    description:
      'A web redesign and technical SEO rebuild for The Couples Therapy and Reunification Counseling Inc. that drove a 65% lift in consultation form submissions within 30 days of launch.',
    type: 'article',
    // Placeholder OG image. Replace with a real 1200×630 export before publication.
    images: [
      {
        url: '/images/og/couples-therapy-case-study.png',
        width: 1200,
        height: 630,
        alt: 'The Couples Therapy and Reunification Counseling Inc.: Web Redesign Case Study by Blue Bay Agency',
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

function ShotImage({
  src,
  alt,
  ratio = 'aspect-[16/10]',
  sizes = '(min-width: 1024px) 50vw, 100vw',
}: {
  src: string
  alt: string
  ratio?: string
  sizes?: string
}) {
  return (
    <div className={`relative ${ratio} w-full overflow-hidden border border-gray-border bg-soft-white`}>
      <Image src={src} alt={alt} fill className="object-cover object-top" sizes={sizes} />
    </div>
  )
}

export default function CouplesTherapyCaseStudy() {
  return (
    <main id="main-content">
      <Navigation />

      {/* ============================= 2 · HERO ============================= */}
      <header className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute -right-24 top-0 select-none font-canela-deck leading-none text-navy/[0.035]"
          style={{ fontSize: 'clamp(9rem, 22vw, 20rem)', fontWeight: 100 }}
          aria-hidden="true"
        >
          04
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16 md:pt-36 lg:px-8">
          <Eyebrow>Case Study · Web Design, Development &amp; SEO</Eyebrow>

          <h1
            className="mt-6 max-w-4xl font-canela-deck font-light leading-[1.05] text-navy"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)' }}
          >
            A digital presence built to <em className="italic font-thin">scale</em> alongside the practice.
          </h1>

          <p className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-charcoal/60">
            A modern visual system, a clearer path to booking, and technical SEO built for growth.
          </p>

          {/* Meta row */}
          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-gray-border pt-8 md:grid-cols-4">
            {[
              { k: 'Client', v: <>The Couples Therapy and Reunification Counseling Inc.</> },
              {
                k: 'Site',
                v: (
                  <a
                    href="https://thecouplestherapy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline transition-colors duration-200 hover:text-navy"
                  >
                    thecouplestherapy.com
                  </a>
                ),
              },
              { k: 'Timeline', v: <>6 weeks</> },
              { k: 'Role', v: <>Strategy, Design, Dev, Copy</> },
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

        {/* Hero screenshot */}
        <div className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
          <ShotImage
            src={AFTER_SRC}
            alt="The Couples Therapy and Reunification Counseling Inc. homepage after the redesign"
            ratio="aspect-[16/9]"
            sizes="(min-width: 1024px) 1152px, 100vw"
          />
        </div>

        {/* Outcomes strip: lead with results */}
        <div className="border-t border-gray-border bg-soft-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 divide-y divide-gray-border sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              {[
                { stat: <>+65%</>, label: 'Consultation form submissions', sub: 'last 30 days' },
                { stat: <>+51%</>, label: 'Total page views', sub: 'last 30 days' },
                { stat: <>+46%</>, label: 'Button clicks', sub: 'last 30 days' },
              ].map((s, i) => (
                <div key={i} className="px-2 py-8 text-center sm:px-8">
                  <div
                    className="font-canela-deck font-light leading-none text-navy"
                    style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)' }}
                  >
                    {s.stat}
                  </div>
                  <div className="mt-3 font-sans text-sm font-medium text-navy">{s.label}</div>
                  <div className="mt-1 font-sans text-xs font-light text-charcoal/45">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ============================= 3 · FACT STRIP ============================= */}
      <section className="border-b border-gray-border bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 divide-y divide-gray-border sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5 lg:divide-x lg:divide-gray-border">
            {[
              { k: 'Industry', v: <>Mental Health &amp; Wellness</> },
              { k: 'Location', v: <>Los Angeles, CA</> },
              { k: 'Platform', v: <>Squarespace</> },
              { k: 'Services', v: <>UX, Visual Design, Dev, SEO</> },
              { k: 'Launched', v: <>July 2026</> },
            ].map((item) => (
              <div key={item.k} className="px-2 py-7 sm:px-6">
                <dt className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal/35">
                  {item.k}
                </dt>
                <dd className="mt-2 font-sans text-sm font-light leading-relaxed text-navy">
                  {item.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============================= 4 · WHERE WE STARTED ============================= */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>01 · Where We Started</Eyebrow>
            <h2
              className="mt-6 font-canela-deck font-light leading-[1.1] text-navy"
              style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)' }}
            >
              The natural growing pains of a practice scaling beyond its original site.
            </h2>
            <p className="mt-5 font-sans text-base font-light leading-relaxed text-charcoal/60">
              A strong reputation, amended incrementally rather than re-architected, giving rise to
              four opportunities.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
            {/* Left: numbered list */}
            <div>
              <dl className="divide-y divide-gray-border border-t border-gray-border">
                {[
                  {
                    n: '01',
                    t: 'A layout that had outgrown its architecture',
                    d: 'New pages were added over time without a system to support them, leading to inconsistent spacing and overlap.',
                  },
                  {
                    n: '02',
                    t: 'Understated calls to action',
                    d: 'Real depth of information, but the booking CTA rarely got the attention it deserved.',
                  },
                  {
                    n: '03',
                    t: 'A design overdue for its next chapter',
                    d: 'A visual identity that hadn’t evolved alongside the brand it represents.',
                  },
                  {
                    n: '04',
                    t: 'SEO fundamentals left unaddressed',
                    d: 'Meta titles, descriptions, and heading structure added ad hoc rather than planned upfront.',
                  },
                ].map((item) => (
                  <div key={item.n} className="flex gap-5 py-6">
                    <span className="font-canela-deck text-2xl font-light leading-none text-french-blue/60">
                      {item.n}
                    </span>
                    <div>
                      <dt className="font-sans text-sm font-semibold leading-snug text-navy">
                        {item.t}
                      </dt>
                      <dd className="mt-2 font-sans text-sm font-light leading-relaxed text-charcoal/55">
                        {item.d}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right: before screenshot */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <figure>
                <ShotImage
                  src={BEFORE_SRC}
                  alt="The Couples Therapy and Reunification Counseling Inc. original homepage before the redesign"
                  ratio="aspect-[4/5]"
                />
                <figcaption className="mt-3 font-sans text-xs font-light text-charcoal/40">
                  Before · thecouplestherapy.com
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 5 · OUR APPROACH ============================= */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>02 · Our Approach</Eyebrow>
            <h2
              className="mt-6 font-canela-deck font-light leading-[1.1] text-navy"
              style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)' }}
            >
              Establish the foundation, then let the design carry the practice&rsquo;s reputation.
            </h2>
            <p className="mt-5 font-sans text-base font-light leading-relaxed text-charcoal/60">
              A disciplined grid, distilled copy, and technical SEO built in from the first wireframe.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                i: '01',
                label: 'Structure',
                t: 'A disciplined design system',
                d: 'Consistent spacing and a considered grid: no overflow, no overlap, page to page.',
              },
              {
                i: '02',
                label: 'Conversion',
                t: 'One CTA, executed with intent',
                d: 'A single, deliberate call-to-action pattern and copy distilled to what helps visitors decide.',
              },
              {
                i: '03',
                label: 'Technical SEO',
                t: 'Engineered for search from day one',
                d: 'Targeted meta data, a clean H1–H6 hierarchy, and an internal linking structure built for search.',
              },
            ].map((p) => (
              <div
                key={p.i}
                className="group flex h-full flex-col border border-gray-border bg-white p-7 transition-all duration-300 hover:border-french-blue/30 hover:shadow-lg hover:shadow-navy/5"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-sans text-xs font-medium tracking-widest text-french-blue/70">
                    {p.i}
                  </span>
                  <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-dusty-rose">
                    {p.label}
                  </span>
                </div>
                <h3 className="mt-5 font-canela-deck text-xl font-light leading-tight text-navy">
                  {p.t}
                </h3>
                <p className="mt-3 font-sans text-sm font-light leading-relaxed text-charcoal/55">
                  {p.d}
                </p>
              </div>
            ))}
          </div>

          {/* Page system preview */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <figure>
              <ShotImage
                src={COURT_PAGE_SRC}
                alt="The Couples Therapy and Reunification Counseling Inc. attorney referrals page after the redesign"
                ratio="aspect-[3/4]"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <figcaption className="mt-3 font-sans text-xs font-light text-charcoal/40">
                For Attorneys · thecouplestherapy.com
              </figcaption>
            </figure>
            <figure>
              <ShotImage
                src={NEWPORT_PAGE_SRC}
                alt="The Couples Therapy and Reunification Counseling Inc. Newport Beach location page after the redesign"
                ratio="aspect-[3/4]"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <figcaption className="mt-3 font-sans text-xs font-light text-charcoal/40">
                Newport Beach · thecouplestherapy.com
              </figcaption>
            </figure>
            <figure>
              <ShotImage
                src={RELATIONSHIP_PAGE_SRC}
                alt="The Couples Therapy and Reunification Counseling Inc. couples and relationship therapy page after the redesign"
                ratio="aspect-[3/4]"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <figcaption className="mt-3 font-sans text-xs font-light text-charcoal/40">
                Couples Therapy · thecouplestherapy.com
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ============================= 6 · THE TRANSFORMATION ============================= */}
      <section className="border-y border-gray-border bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>03 · The Transformation</Eyebrow>
            <h2
              className="mt-6 font-canela-deck font-light leading-[1.1] text-navy"
              style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)' }}
            >
              An interactive comparison.
            </h2>
            <p className="mt-4 font-sans text-base font-light leading-relaxed text-charcoal/60">
              The same practice. An entirely different degree of polish.
            </p>
          </div>

          <div className="mt-12">
            <BeforeAfterSlider
              beforeSrc={BEFORE_SRC}
              beforeAlt="The Couples Therapy and Reunification Counseling Inc. original homepage before the redesign"
              afterSrc={AFTER_SRC}
              afterAlt="The Couples Therapy and Reunification Counseling Inc. homepage after the redesign"
            />
            <p className="mt-5 text-center font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal/35">
              Drag the handle to compare the original site to the redesign
            </p>
          </div>
        </div>
      </section>

      {/* ============================= 7 · THE RESULT ============================= */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[45fr_55fr] lg:gap-16">
            {/* Left: after + mobile screenshots */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[3fr_2fr] lg:grid-cols-1">
              <figure>
                <ShotImage
                  src={AFTER_SRC}
                  alt="The Couples Therapy and Reunification Counseling Inc. homepage after the redesign"
                  ratio="aspect-[4/3]"
                />
                <figcaption className="mt-3 font-sans text-xs font-light text-charcoal/40">
                  After · thecouplestherapy.com
                </figcaption>
              </figure>
              <figure>
                <ShotImage
                  src={MOBILE_SRC}
                  alt="The Couples Therapy and Reunification Counseling Inc. mobile homepage after the redesign"
                  ratio="aspect-[9/16]"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
                <figcaption className="mt-3 font-sans text-xs font-light text-charcoal/40">
                  After · mobile
                </figcaption>
              </figure>
            </div>

            {/* Right: copy */}
            <div>
              <Eyebrow>The Result</Eyebrow>
              <h3
                className="mt-6 font-canela-deck font-light leading-[1.15] text-navy"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
              >
                Refined enough to convert. Structured enough to be found.
              </h3>
              <p className="mt-5 font-sans text-base font-light leading-relaxed text-charcoal/60">
                Every page now sits on a consistent grid with deliberate breathing room, and a single,
                confident call to action guides visitors toward booking.
              </p>
              <p className="mt-4 font-sans text-base font-light leading-relaxed text-charcoal/60">
                Beneath the surface: a distinct title tag and meta description on every page, one clean
                H1 hierarchy, and internal links connecting services, therapists, and location pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 8 · RESULTS ============================= */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>04 · Results</Eyebrow>
            <h2
              className="mt-6 font-canela-deck font-light leading-[1.1] text-navy"
              style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)' }}
            >
              Positive movement across every metric that matters.
            </h2>
            <p className="mt-5 font-sans text-base font-light leading-relaxed text-charcoal/60">
              The numbers clients actually ask about: more traffic, more engagement, and more leads.
            </p>
          </div>

          <p className="mt-6 font-sans text-xs font-light italic text-charcoal/40">
            Site analytics from the last 30 days, measured after launch.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-gray-border bg-gray-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              { stat: <>+65%</>, label: 'Consultation form submissions', sub: 'last 30 days' },
              { stat: <>+46%</>, label: 'Button clicks', sub: 'site-wide engagement, last 30 days' },
              { stat: <>+51%</>, label: 'Total page views', sub: 'site-wide, last 30 days' },
              { stat: <>+9%</>, label: 'Site visits', sub: 'last 30 days' },
              { stat: <>+6%</>, label: 'Unique visitors', sub: 'last 30 days' },
              { stat: <>−3%</>, label: 'Bounce rate', sub: 'site-wide, last 30 days' },
            ].map((m, i) => (
              <div key={i} className="bg-white p-7 md:p-8">
                <div
                  className="font-canela-deck font-light leading-none text-navy"
                  style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.1rem)' }}
                >
                  {m.stat}
                </div>
                <div className="mt-3 font-sans text-sm font-medium text-navy">{m.label}</div>
                <div className="mt-1 font-sans text-xs font-light text-charcoal/45">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= 9 · TESTIMONIAL ============================= */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <svg className="mx-auto mb-6 h-10 w-10 text-dusty-rose/50" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>

          {/* Star rating + verified-source badge */}
          <a
            href="https://www.google.com/search?q=Bluebay+Agency+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-8 inline-flex items-center gap-2"
          >
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.454 1.405 1.02L10 15.591l4.069 2.485c.713.435 1.598-.207 1.404-1.02l-1.106-4.636 3.62-3.103c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
              ))}
            </div>
            <span className="font-sans text-xs font-medium text-charcoal/50 transition-colors duration-200 group-hover:text-navy">
              5.0 · Verified Google Review
            </span>
          </a>

          <blockquote
            className="font-canela-deck font-thin italic leading-[1.35] text-navy"
            style={{ fontSize: 'clamp(1.4rem, 3.2vw, 2.3rem)' }}
          >
            My website is beautiful, professional, and truly reflects my practice. Seeing the positive
            growth in traffic, engagement, and overall performance has made the investment more than
            worthwhile.
          </blockquote>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
              <Image
                src={FOUNDER_PHOTO_SRC}
                alt="Maria Jessica Quiroz, Founder of The Couples Therapy and Reunification Counseling Inc."
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="text-left">
              <h3 className="font-canela-deck text-lg font-light text-navy">
                Maria Jessica Quiroz
              </h3>
              <p className="font-sans text-xs font-light text-charcoal/50">
                Founder, The Couples Therapy and Reunification Counseling Inc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 10 · OUR PROCESS ============================= */}
      <section className="relative bg-white py-20 md:py-28">
        <div className="section-divider absolute left-0 right-0 top-0" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>05 · Our Process</Eyebrow>
            <h2
              className="mt-6 font-canela-deck font-light leading-[1.1] text-navy"
              style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)' }}
            >
              Four phases, executed in close collaboration.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: '01', t: 'Discovery & Strategy', d: 'Interviews, competitive audit, sitemap, content strategy.' },
              { n: '02', t: 'Design', d: 'Moodboard, homepage concept, full page system, mobile-first.' },
              { n: '03', t: 'Build', d: 'Development, booking integration, on-page SEO, QA.' },
              { n: '04', t: 'Launch & Refine', d: 'Analytics, 30-day review, ongoing iteration.' },
            ].map((step) => (
              <div
                key={step.n}
                className="group flex h-full flex-col border border-gray-border bg-white p-7 transition-all duration-300 hover:border-french-blue/30 hover:shadow-lg hover:shadow-navy/5"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-navy font-sans text-xs font-medium tracking-wider text-white">
                    {step.n}
                  </div>
                  <div className="h-px flex-1 bg-gray-border" />
                </div>
                <h3 className="font-canela-deck text-xl font-light leading-tight text-navy">
                  {step.t}
                </h3>
                <p className="mt-3 font-sans text-sm font-light leading-relaxed text-charcoal/55">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= 11 · CTA ============================= */}
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

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Eyebrow>Get in Touch</Eyebrow>
          <h2
            className="mt-6 font-canela-deck font-light leading-[1.1] text-navy"
            style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.25rem)' }}
          >
            A website should establish trust before a word is spoken.
          </h2>
          <div className="mt-10 flex justify-center">
            <a
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 bg-navy px-8 py-4 font-sans text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-navy/90 sm:w-auto"
            >
              Begin a Project
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
