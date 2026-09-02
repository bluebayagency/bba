import Image from 'next/image'

const HOME_DESKTOP_SRC = '/images/projects/mindbodyspiritss/mindbodyspiritss-desktop-view.png'

const outcomes = [
  { stat: <>Zero&nbsp;&rarr;&nbsp;Launch</>, label: 'Full digital presence built from scratch' },
  { stat: <>3&times;</>, label: 'Referenced on a single Google results page' },
  { stat: <>Top Match</>, label: "ChatGPT's top recommendation" },
]

interface CaseStudyPreviewProps {
  /** 'light' (default) matches the homepage's soft-white sections. 'navy' uses the
   *  brand's navy + sand palette, for pairing alongside another light section. */
  variant?: 'light' | 'navy'
  eyebrow?: string
}

export default function CaseStudyPreview({ variant = 'light', eyebrow = 'Latest Case Study' }: CaseStudyPreviewProps) {
  const isNavy = variant === 'navy'

  return (
    <section
      id="case-study-preview"
      className={`relative py-24 md:py-36 ${isNavy ? 'bg-navy' : 'bg-soft-white'}`}
    >
      <div className={`section-divider absolute top-0 left-0 right-0 ${isNavy ? 'opacity-20' : ''}`} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">

          {/* Left: framed screenshot */}
          <div className="order-2 lg:order-1">
            <div
              className={`overflow-hidden border shadow-xl ${
                isNavy ? 'border-sand/25 bg-navy shadow-black/20' : 'border-gray-border bg-white shadow-navy/5'
              }`}
            >
              {/* Browser chrome */}
              <div
                className={`flex items-center gap-1.5 border-b px-4 py-3 ${
                  isNavy ? 'border-sand/20 bg-white/5' : 'border-gray-border bg-soft-white'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${isNavy ? 'bg-sand/40' : 'bg-gray-300'}`} />
                <span className={`w-2.5 h-2.5 rounded-full ${isNavy ? 'bg-sand/40' : 'bg-gray-300'}`} />
                <span className={`w-2.5 h-2.5 rounded-full ${isNavy ? 'bg-sand/40' : 'bg-gray-300'}`} />
                <div
                  className={`ml-3 flex-1 h-5 border px-2 flex items-center ${
                    isNavy ? 'border-sand/20 bg-white/5' : 'border-gray-border bg-white'
                  }`}
                >
                  <span className={`font-sans text-[10px] ${isNavy ? 'text-sand/50' : 'text-charcoal/30'}`}>
                    mindbodyspiritss.com
                  </span>
                </div>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={HOME_DESKTOP_SRC}
                  alt="MindBodySpiritss homepage, featuring founder Naila Qureshi"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>
            </div>
          </div>

          {/* Right: copy, outcomes, CTA */}
          <div className="order-1 lg:order-2">
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
              {eyebrow}
            </span>
            <h2
              className={`mt-6 font-canela-deck font-light leading-[1.1] ${isNavy ? 'text-white' : 'text-navy'}`}
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
            >
              Built From Zero to the AI&rsquo;s Top Recommendation.
            </h2>
            <p
              className={`mt-4 font-sans text-xs font-medium tracking-[0.15em] uppercase ${
                isNavy ? 'text-sand/60' : 'text-charcoal/40'
              }`}
            >
              MindBodySpiritss &middot; Executive &amp; Relationship Coaching &middot; Redwood City, CA
            </p>
            <p
              className={`mt-6 font-sans text-base font-light leading-relaxed ${
                isNavy ? 'text-white/70' : 'text-charcoal/60'
              }`}
            >
              A full digital presence, built from scratch and engineered from the first page to be
              found by Google, and quoted directly by AI search tools like ChatGPT and Claude.
            </p>

            <div
              className={`mt-8 grid grid-cols-3 gap-4 py-6 border-y ${
                isNavy ? 'border-sand/20' : 'border-gray-border'
              }`}
            >
              {outcomes.map((o, i) => (
                <div key={i}>
                  <div
                    className={`font-canela-deck font-light leading-none ${isNavy ? 'text-white' : 'text-navy'}`}
                    style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.6rem)' }}
                  >
                    {o.stat}
                  </div>
                  <div
                    className={`mt-2 font-sans text-xs font-medium leading-snug ${
                      isNavy ? 'text-sand/80' : 'text-navy'
                    }`}
                  >
                    {o.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/case-studies/mindbodyspiritss"
              className={`mt-8 inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-8 py-4 transition-colors duration-300 tracking-wide group w-full sm:w-auto ${
                isNavy
                  ? 'bg-sand text-navy hover:bg-sand/85'
                  : 'bg-navy text-white hover:bg-navy/85'
              }`}
            >
              View Case Study
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
