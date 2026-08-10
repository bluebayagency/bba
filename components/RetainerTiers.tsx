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

const retainers = [
  {
    name: 'Care Plan',
    category: 'Website Maintenance Essentials',
    bestFor: 'WordPress sites needing reliable upkeep.',
    cta: 'Start My Care Plan',
    includes: [
      'Plugin/CMS updates & security patches',
      'Backups & uptime monitoring',
      'Small content edits (1–2/month)',
      'Priority email support',
    ],
  },
  {
    name: 'Growth',
    category: 'Care Plan + Search & AI Visibility',
    bestFor: 'Clients ready to actively grow traffic and visibility, not just maintain what exists.',
    cta: 'Start My Growth Plan',
    includes: [
      'Everything in Care Plan',
      'Ongoing technical SEO & AI-visibility work',
      'Monthly performance report',
      'Quarterly strategy check-in',
    ],
  },
]

export default function RetainerTiers() {
  const pathname = usePathname()
  const contactHref = pathname === '/' ? '#contact' : '/#contact'

  return (
    <section className="bg-soft-white py-24 md:py-36 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                Retainers
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2
              className="font-canela-deck font-light text-navy leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
            >
              Ongoing Growth Retainers
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="font-sans font-light text-charcoal/55 text-lg leading-relaxed">
              Keep your site secure, current, and growing after launch.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:items-stretch">
          {retainers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={((i + 1) as 1 | 2)}>
              <div className="flex flex-col h-full bg-white border border-gray-border transition-all duration-300 hover:border-navy/20 hover:shadow-lg hover:shadow-navy/5">
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <h3 className="font-canela-deck font-light text-2xl text-navy leading-tight mb-1">
                    {tier.name}
                  </h3>
                  <p className="font-sans text-xs font-medium text-dusty-rose tracking-wide uppercase mb-8 pb-8 border-b border-gray-border">
                    {tier.category}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="font-sans text-sm font-light text-charcoal/65 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-8 p-4 border border-gray-border bg-soft-white">
                    <p className="font-sans text-xs font-light text-charcoal/50 leading-relaxed">
                      <span className="font-medium text-charcoal/70">Best for: </span>
                      {tier.bestFor}
                    </p>
                  </div>

                  <a
                    href={contactHref}
                    className="block w-full text-center font-sans text-sm font-medium py-4 px-6 tracking-wide border border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-300"
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
