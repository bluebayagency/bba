import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const IMG_BASE = '/images/projects/mindbodyspiritss'
const HOME_DESKTOP_SRC = `${IMG_BASE}/mindbodyspiritss-desktop-view.png`
const SPEAKER_SRC = `${IMG_BASE}/mindbodyspiritss-speaker.png`
const HOME_MOBILE_SRC = `${IMG_BASE}/mindbodyspiritss-mobile-view.png`
const AS_SEEN_ON_SRC = `${IMG_BASE}/mindbodyspiritss-mobile-as-seen-on.png`
const AI_OVERVIEW_SRC = `${IMG_BASE}/mindbodyspiritss-google-ai-search.png`
const CHATGPT_VIDEO_SRC = `${IMG_BASE}/mindbodyspiritss-chatgpt-ai-search-video.mp4`
const CHATGPT_VIDEO_POSTER = `${IMG_BASE}/mindbodyspiritss-chatgpt-ai-search-video-poster.jpg`
const CLAUDE_VIDEO_SRC = `${IMG_BASE}/mindbodyspiritss-claude-conversation.mp4`
const CLAUDE_VIDEO_POSTER = `${IMG_BASE}/mindbodyspiritss-claude-conversation-poster.jpg`

export const metadata: Metadata = {
  title: 'MindBodySpiritss: A Website & AI Search Visibility Case Study | Blue Bay Agency',
  description:
    'How Blue Bay Agency took MindBodySpiritss from zero digital presence to being cited inside Google’s AI Overview and named ChatGPT’s top recommendation for executive coaching in Redwood City, CA.',
  alternates: { canonical: '/case-studies/mindbodyspiritss' },
  openGraph: {
    title: 'MindBodySpiritss: A Website & AI Search Visibility Case Study | Blue Bay Agency',
    description:
      'A website, SEO, and AEO build for MindBodySpiritss that made it a direct answer inside Google’s AI Overview and ChatGPT’s top recommendation, starting from no digital presence at all.',
    type: 'article',
    // Placeholder OG image. Replace with a real 1200×630 export before publication.
    images: [
      {
        url: '/images/og/mindbodyspiritss-case-study.png',
        width: 1200,
        height: 630,
        alt: 'MindBodySpiritss: Website & AI Search Visibility Case Study by Blue Bay Agency',
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

export default function MindBodySpiritssCaseStudy() {
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
          05
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16 md:pt-36 lg:px-8">
          <Eyebrow>Case Study · Website, SEO &amp; AI Search Visibility</Eyebrow>

          <h1
            className="mt-6 max-w-4xl font-canela-deck font-light leading-[1.05] text-navy"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)' }}
          >
            Built from zero to the AI&rsquo;s top <em className="italic font-thin">recommendation.</em>
          </h1>

          <p className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-charcoal/60">
            A full digital presence, built from scratch and engineered from the first page to be found
            by Google, and quoted directly by AI search tools like ChatGPT.
          </p>

          {/* Meta row */}
          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-gray-border pt-8 md:grid-cols-4">
            {[
              { k: 'Client', v: <>MindBodySpiritss, LLC</> },
              { k: 'Founder', v: <>Naila Qureshi, M.A.</> },
              {
                k: 'Site',
                v: (
                  <a
                    href="https://mindbodyspiritss.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline transition-colors duration-200 hover:text-navy"
                  >
                    mindbodyspiritss.com
                  </a>
                ),
              },
              { k: 'Role', v: <>Strategy, Design, Dev, SEO &amp; AEO</> },
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
            src={HOME_DESKTOP_SRC}
            alt="MindBodySpiritss homepage, showing founder Naila Qureshi and the site's core positioning"
            ratio="aspect-[16/9]"
            sizes="(min-width: 1024px) 1152px, 100vw"
          />
        </div>

        {/* Outcomes strip: lead with results */}
        <div className="border-t border-gray-border bg-soft-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 divide-y divide-gray-border sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              {[
                {
                  stat: <>Zero&nbsp;&rarr;&nbsp;Launch</>,
                  label: 'Full digital presence built from scratch',
                  sub: 'site, SEO & content, one build cycle',
                },
                {
                  stat: <>3&times;</>,
                  label: 'Referenced on a single Google results page',
                  sub: 'AI Overview, sidebar card & organic listing',
                },
                {
                  stat: <>Top Match</>,
                  label: "ChatGPT's top recommendation",
                  sub: "quoted the site's own positioning back almost verbatim",
                },
              ].map((s, i) => (
                <div key={i} className="px-2 py-8 text-center sm:px-8">
                  <div
                    className="font-canela-deck font-light leading-none text-navy"
                    style={{ fontSize: 'clamp(1.6rem, 3.6vw, 2.5rem)' }}
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

      {/* ============================= FACT STRIP ============================= */}
      <section className="border-b border-gray-border bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 divide-y divide-gray-border sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5 lg:divide-x lg:divide-gray-border">
            {[
              { k: 'Industry', v: <>Executive &amp; Relationship Coaching</> },
              { k: 'Location', v: <>Redwood City, CA &middot; Virtual Nationwide</> },
              { k: 'Platform', v: <>Showit &amp; WordPress</> },
              { k: 'Services', v: <>Web Design, Dev, SEO &amp; AEO</> },
              { k: 'Starting Point', v: <>No existing website</> },
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

      {/* ============================= 01 · WHERE WE STARTED ============================= */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>01 · Where We Started</Eyebrow>
            <h2
              className="mt-6 font-canela-deck font-light leading-[1.1] text-navy"
              style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)' }}
            >
              No website. No search presence. No way to be found.
            </h2>
            <p className="mt-5 font-sans text-base font-light leading-relaxed text-charcoal/60">
              MindBodySpiritss started with no digital footprint at all. Every piece of the online
              presence had to be built from nothing, with search visibility designed in from the first
              page rather than added on afterward.
            </p>
          </div>

          <div className="mt-12">
            <dl className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
              {[
                {
                  n: '01',
                  t: 'A complete site architecture, from nothing',
                  d: 'Homepage, service pages, events, blog, and speaker page, each built to support the others rather than compete for the same keywords.',
                },
                {
                  n: '02',
                  t: 'No search visibility to build on',
                  d: 'Every meta title, description, and internal link had to be built around real keyword research, not layered onto an existing structure.',
                },
                {
                  n: '03',
                  t: 'No entity signals for AI tools to find',
                  d: 'Consistent name, credentials, location, and service details needed to exist somewhere before any AI tool could ever cite them.',
                },
                {
                  n: '04',
                  t: 'No third-party authority to point to',
                  d: 'No press, no podcast features, nothing beyond the site itself to lend outside credibility.',
                },
              ].map((item) => (
                <div key={item.n} className="flex gap-5 border-t border-gray-border py-6">
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
        </div>
      </section>

      {/* ============================= 02 · OUR APPROACH ============================= */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>02 · Our Approach</Eyebrow>
            <h2
              className="mt-6 font-canela-deck font-light leading-[1.1] text-navy"
              style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)' }}
            >
              Build the foundation, then engineer it to be found, by people and by AI.
            </h2>
            <p className="mt-5 font-sans text-base font-light leading-relaxed text-charcoal/60">
              Four pillars, built together rather than bolted on: architecture, search fundamentals,
              answer engine optimization, and a content system to keep compounding.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                i: '01',
                label: 'Structure',
                t: 'A full site architecture',
                d: 'Homepage, service pages, events, blog, and speaker page, each with a distinct purpose so pages support each other instead of competing.',
              },
              {
                i: '02',
                label: 'Search Fundamentals',
                t: 'On-page & technical SEO',
                d: 'Differentiated headlines by keyword intent, meta data, alt text, and internal linking built around real research, not guesswork.',
              },
              {
                i: '03',
                label: 'AEO',
                t: 'Built for AI extraction, not just Google',
                d: 'FAQ and service content structured in clear Q&A format, with consistent entity details so AI tools can accurately parse who Naila is.',
              },
              {
                i: '04',
                label: 'Content Engine',
                t: 'A system built to compound',
                d: 'Blog posts, video drops, a monthly event, and speaking positioning, all interlinked back to the two core service pages.',
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
                src={SPEAKER_SRC}
                alt="MindBodySpiritss speaker page, featuring Naila Qureshi's speaking topics and booking call to action"
                ratio="aspect-[3/4]"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <figcaption className="mt-3 font-sans text-xs font-light text-charcoal/40">
                Speaker · mobile
              </figcaption>
            </figure>
            <figure>
              <ShotImage
                src={HOME_MOBILE_SRC}
                alt="MindBodySpiritss homepage on mobile"
                ratio="aspect-[3/4]"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <figcaption className="mt-3 font-sans text-xs font-light text-charcoal/40">
                Homepage · mobile
              </figcaption>
            </figure>
            <figure>
              <ShotImage
                src={AS_SEEN_ON_SRC}
                alt="MindBodySpiritss As Seen On section on mobile, featuring press and podcast placements"
                ratio="aspect-[3/4]"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <figcaption className="mt-3 font-sans text-xs font-light text-charcoal/40">
                As Seen On · mobile
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ============================= 03 · AI SEARCH VISIBILITY ============================= */}
      <section className="border-y border-gray-border bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>03 · AI Search Visibility</Eyebrow>
            <h2
              className="mt-6 font-canela-deck font-light leading-[1.1] text-navy"
              style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)' }}
            >
              Not just a search result. The answer itself.
            </h2>
            <p className="mt-5 font-sans text-base font-light leading-relaxed text-charcoal/60">
              People are not only typing into Google anymore. They are asking ChatGPT, Claude, and
              Google&rsquo;s own AI Overview for a direct recommendation, and those tools give one
              answer, not ten blue links to sort through.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
            <figure>
              <ShotImage
                src={AI_OVERVIEW_SRC}
                alt="Google AI Overview referencing MindBodySpiritss inside the AI summary, the sidebar card, and the organic listing for the query high achievers coaching in Redwood City"
                ratio="aspect-[8/7]"
              />
              <figcaption className="mt-4 font-sans text-sm font-light leading-relaxed text-charcoal/55">
                <span className="font-medium text-navy">Google AI Overview.</span> Searching &ldquo;high
                achievers coaching in Redwood City&rdquo; surfaces MindBodySpiritss directly inside the
                AI-generated summary, in a dedicated sidebar card, and in the standard organic listing
                below, three placements on a single results page. Google&rsquo;s AI Overview also
                independently pulled a specific blog post into its &ldquo;Further Exploration&rdquo;
                section, a direct result of content structured for AI extraction.
              </figcaption>
            </figure>

            <figure>
              <div className="relative aspect-[8/7] w-full overflow-hidden border border-gray-border bg-soft-white">
                <video
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  src={CLAUDE_VIDEO_SRC}
                  poster={CLAUDE_VIDEO_POSTER}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support embedded video.
                </video>
              </div>
              <figcaption className="mt-4 font-sans text-sm font-light leading-relaxed text-charcoal/55">
                <span className="font-medium text-navy">Claude.</span> Asked about MindBodySpiritss,
                Claude searched the web on its own and accurately summarized Naila&rsquo;s coaching
                practice, credentials, and offerings, then surfaced the recurring Leadership &amp;
                Wellbeing Circle event without being prompted for it, evidence the same entity signals
                are legible across AI tools, not just one.
              </figcaption>
            </figure>
          </div>

          <div className="mt-14">
            <figure>
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-gray-border bg-soft-white">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={CHATGPT_VIDEO_SRC}
                  poster={CHATGPT_VIDEO_POSTER}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support embedded video.
                </video>
              </div>
              <figcaption className="mt-4 font-sans text-sm font-light leading-relaxed text-charcoal/55">
                <span className="font-medium text-navy">Watch it live.</span> A screen recording of a
                ChatGPT conversation, showing MindBodySpiritss surfaced as the top recommendation in
                real time.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ============================= THE RESULT ============================= */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[45fr_55fr] lg:gap-16">
            <div className="order-2 lg:order-1">
              <Eyebrow>The Result</Eyebrow>
              <h3
                className="mt-6 font-canela-deck font-light leading-[1.15] text-navy"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
              >
                Third-party press is now feeding the same authority signals.
              </h3>
              <p className="mt-5 font-sans text-base font-light leading-relaxed text-charcoal/60">
                The &ldquo;As Seen On&rdquo; section now features a real, earned press placement (Hello
                Pakistan, Editor&rsquo;s Choice) alongside podcast appearances (Auntie Please Podcast).
              </p>
              <p className="mt-4 font-sans text-base font-light leading-relaxed text-charcoal/60">
                These external mentions are exactly the kind of citation signal that strengthens both
                traditional SEO and AI answer engine trust, and there was nothing here to point to
                before this build.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <figure className="mx-auto max-w-sm">
                <ShotImage
                  src={AS_SEEN_ON_SRC}
                  alt="MindBodySpiritss As Seen On section, featuring the Hello Pakistan feature and the Auntie Please Podcast episode embed"
                  ratio="aspect-[9/16]"
                  sizes="(min-width: 1024px) 33vw, 60vw"
                />
                <figcaption className="mt-3 text-center font-sans text-xs font-light text-charcoal/40">
                  As Seen On · mobile
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= TESTIMONIAL ============================= */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <svg className="mx-auto mb-6 h-10 w-10 text-dusty-rose/50" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>

          <blockquote
            className="font-canela-deck font-thin italic leading-[1.35] text-navy"
            style={{ fontSize: 'clamp(1.3rem, 3vw, 2.1rem)' }}
          >
            She has an incredible ability to take the ideas, vision, and thoughts in my mind and
            transform them into a website that truly reflects who I am and what I do. She doesn&rsquo;t
            just build a website, she creates a visual experience that helps people understand my work
            and connect with my brand.
          </blockquote>

          <p className="mx-auto mt-6 max-w-2xl font-sans text-sm font-light leading-relaxed text-charcoal/55">
            Veronica has helped me become more visible online while ensuring my website remains
            authentic, professional, and aligned with my mission. If you&rsquo;re looking for someone
            who can turn your vision into a meaningful online presence, I wholeheartedly recommend
            Veronica and the Bluebay Agency team.
          </p>

          <div className="mt-10">
            <h3 className="font-canela-deck text-lg font-light text-navy">Naila Qureshi</h3>
            <p className="font-sans text-xs font-light text-charcoal/50">
              Founder, MindBodySpiritss LLC
            </p>
          </div>
        </div>
      </section>

      {/* ============================= WHAT'S NEXT ============================= */}
      <section className="relative bg-soft-white py-20 md:py-28">
        <div className="section-divider absolute left-0 right-0 top-0" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>What&rsquo;s Next</Eyebrow>
            <h2
              className="mt-6 font-canela-deck font-light leading-[1.1] text-navy"
              style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)' }}
            >
              From search visibility to direct authority.
            </h2>
            <p className="mt-5 font-sans text-base font-light leading-relaxed text-charcoal/60">
              With the foundation built, the next phase is expanding MindBodySpiritss&rsquo; visibility
              beyond search: positioning Naila for corporate speaking engagements, podcast guest
              appearances, and educational interviews. The speaking and podcast presence already built
              into the site lay the groundwork, the next step is pursuing the bookings and placements
              that generate the third-party mentions that continue to strengthen both traditional SEO
              and AI search visibility.
            </p>
          </div>
        </div>
      </section>

      {/* ============================= CTA ============================= */}
      <section className="relative overflow-hidden border-t border-gray-border bg-white py-24 md:py-32">
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
            A digital presence should work as hard as you do.
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
