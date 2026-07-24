import Image from 'next/image'

const AFTER_SRC = '/images/projects/thecouplestherapy/the-couples-therapy-new-site-after.png'

const metrics = [
  { stat: <>+65%</>, label: 'Consultation Form Submissions', sub: 'last 30 days' },
  { stat: <>+51%</>, label: 'Total Page Views', sub: 'last 30 days' },
  { stat: <>+46%</>, label: 'Button Clicks', sub: 'last 30 days' },
]

export default function CaseStudySpotlight() {
  return (
    <section className="bg-soft-white py-24 md:py-36 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">

          {/* Left: framed screenshot */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden border border-gray-border bg-white shadow-xl shadow-navy/5">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-gray-border bg-soft-white px-4 py-3">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <div className="ml-3 flex-1 h-5 bg-white border border-gray-border px-2 flex items-center">
                  <span className="font-sans text-[10px] text-charcoal/30">thecouplestherapy.com</span>
                </div>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={AFTER_SRC}
                  alt="The Couples Therapy Practice homepage after the redesign"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>
            </div>
          </div>

          {/* Right: copy, metrics, CTA */}
          <div className="order-1 lg:order-2">
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
              Featured Case Study
            </span>
            <h1
              className="mt-6 font-canela-deck font-light text-navy leading-[1.1]"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
            >
              A Web Redesign That Delivered Real Growth.
            </h1>
            <p className="mt-4 font-sans text-xs font-medium text-charcoal/40 tracking-[0.15em] uppercase">
              The Couples Therapy Practice · Mental Health &amp; Wellness · Los Angeles, CA
            </p>
            <p className="mt-6 font-sans text-base font-light leading-relaxed text-charcoal/60">
              A modern visual system, a clearer path to booking, and a technical SEO foundation built
              from the ground up, showing how strategy and design worked together to turn an established
              practice&rsquo;s traffic into consistent, qualified leads.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 py-6 border-y border-gray-border">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div
                    className="font-canela-deck font-light leading-none text-navy"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                  >
                    {m.stat}
                  </div>
                  <div className="mt-2 font-sans text-xs font-medium text-navy leading-snug">{m.label}</div>
                  <div className="mt-0.5 font-sans text-[11px] font-light text-charcoal/40">{m.sub}</div>
                </div>
              ))}
            </div>

            <a
              href="/couples-therapy-case-study"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy/85 text-white font-sans text-sm font-medium px-8 py-4 transition-colors duration-300 tracking-wide group w-full sm:w-auto"
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
