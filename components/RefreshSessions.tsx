'use client'

import { usePathname } from 'next/navigation'
import ScrollReveal from './ScrollReveal'

function CheckIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-navy/30"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

const sessions = [
  {
    name: 'The Clarity Audit',
    category: 'Website Audit',
    duration: 'Diagnostic Review',
    description: 'A full walkthrough of your current site, from first impression to conversion path, with a clear, prioritized list of what to fix and why.',
    bestFor: "Brands unsure why their site isn't converting and want an outside expert's eye before committing to anything bigger.",
    cta: 'Request an Audit',
    includes: [
      'Full site walkthrough',
      'Conversion and UX review',
      'Messaging and clarity check',
      'Technical SEO health check',
      'Prioritized action report',
    ],
  },
  {
    name: 'The Refresh Session',
    category: 'Website Refresh',
    duration: '2 Hours',
    description: 'A focused block of hands-on time to update copy, swap visuals, or fix the small things that have been nagging at you.',
    bestFor: 'Small, targeted updates: a page or two of copy, new photos, or a quick design fix.',
    cta: 'Book My Refresh Session',
    includes: [
      'Up to 2 pages',
      'Copy and content updates',
      'Image and visual refresh',
      'Small UX and design fixes',
      'Live before the session ends',
    ],
  },
  {
    name: 'The Refresh Half-Day',
    category: 'Website Half-Day',
    duration: '4 Hours',
    description: 'A deeper working session across several pages to tighten messaging, refresh design, and smooth out the conversion path.',
    bestFor: 'A more thorough pass across your site without the timeline of a full rebuild.',
    cta: 'Book My Half-Day',
    includes: [
      'Up to 4 pages',
      'Design consistency pass',
      'Messaging refinement',
      'Mobile responsiveness check',
      'CTA and conversion flow tightening',
    ],
  },
]

export default function RefreshSessions() {
  const pathname = usePathname()
  const contactHref = pathname === '/' ? '#contact' : '/#contact'

  return (
    <section className="bg-sand py-24 md:py-36 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                Not Ready For a Rebuild?
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2
              className="font-canela-deck font-light text-navy leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
            >
              Sometimes Your Site Just Needs a Refresh.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="font-sans font-light text-charcoal/55 text-lg leading-relaxed">
              If your site&rsquo;s foundation is solid but it needs new copy, updated visuals, or a few key fixes, these focused sessions get it done without a full rebuild.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:items-stretch">
          {sessions.map((session, i) => (
            <div key={session.name} className="flex flex-col">
              <ScrollReveal delay={((i + 1) as 1 | 2 | 3)}>
                <div className="flex flex-col h-full bg-white border border-gray-border transition-all duration-300 hover:border-navy/20 hover:shadow-lg hover:shadow-navy/5">
                  <div className="p-8 md:p-10 flex flex-col flex-1">
                    <h3 className="font-canela-deck font-light text-2xl text-navy leading-tight mb-1">
                      {session.name}
                    </h3>
                    <p className="font-sans text-xs font-medium text-dusty-rose tracking-wide uppercase mb-4">
                      {session.category}
                    </p>
                    <p className="font-sans text-sm font-light text-charcoal/55 leading-relaxed mb-8 pb-8 border-b border-gray-border">
                      {session.description}
                    </p>

                    <div className="mb-6">
                      <p className="font-canela-deck font-light text-2xl text-navy leading-none">
                        {session.duration}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {session.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckIcon />
                          <span className="font-sans text-sm font-light text-charcoal/65 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-8 p-4 border border-gray-border bg-soft-white">
                      <p className="font-sans text-xs font-light text-charcoal/50 leading-relaxed">
                        <span className="font-medium text-charcoal/70">Best for: </span>
                        {session.bestFor}
                      </p>
                    </div>

                    <a
                      href={contactHref}
                      className="block w-full text-center font-sans text-sm font-medium py-4 px-6 tracking-wide border border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-300"
                    >
                      {session.cta}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
