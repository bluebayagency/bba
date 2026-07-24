'use client'

import { useTranslation } from 'react-i18next'
import { usePathname } from 'next/navigation'
import ScrollReveal from './ScrollReveal'

function CheckIcon({ muted = false }: { muted?: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${muted ? 'text-white/25' : 'text-navy/30'}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function ClockIcon({ muted = false }: { muted?: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 flex-shrink-0 ${muted ? 'text-white/30' : 'text-navy/30'}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export default function Pricing() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const contactHref = pathname === '/' ? '#contact' : '/#contact'
  const tiers = t('pricing.tiers', { returnObjects: true }) as Array<{
    badge: string | null
    tier_num: string
    name: string
    price: string
    timeline: string
    description: string
    subline: string
    best_for: string
    cta: string
    includes: string[]
  }>

  return (
    <section className="bg-soft-white py-24 md:py-36 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-6">
<span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                {t('pricing.eyebrow')}
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2
              className="font-canela-deck font-light text-navy leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
            >
              {t('pricing.h2')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="font-sans font-light text-charcoal/55 text-lg leading-relaxed">
              {t('pricing.body')}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:items-stretch">
          {tiers.slice(0, 3).map((tier, i) => {
            const isPopular = !!tier.badge
            return (
              <div key={tier.tier_num} className="flex flex-col">
                <ScrollReveal delay={((i + 1) as 1 | 2 | 3)}>
                  <div className={`flex flex-col h-full bg-white transition-all duration-300 ${isPopular ? 'border-2 border-navy shadow-2xl shadow-navy/10' : 'border border-gray-border hover:border-navy/20 hover:shadow-lg hover:shadow-navy/5'}`}>
                    <div className={`${isPopular ? 'h-1.5 bg-navy' : 'h-1 bg-navy/8'}`} />

                    <div className="p-8 md:p-10 flex flex-col flex-1">
                      <div className="h-7 mb-5">
                        {tier.badge && (
                          <span className="inline-block font-sans text-[11px] font-medium px-4 py-1.5 tracking-[0.15em] uppercase bg-dusty-rose text-white">
                            {tier.badge}
                          </span>
                        )}
                      </div>

                      <p className="font-sans text-[11px] font-medium text-navy/40 tracking-[0.22em] uppercase mb-3">
                        {tier.tier_num}
                      </p>
                      <h3 className="font-canela-deck font-light text-2xl text-navy leading-tight mb-4">
                        {tier.name}
                      </h3>
                      <p className="font-sans text-sm font-light text-charcoal/55 leading-relaxed mb-2">
                        {tier.description}
                      </p>
                      <p className="font-sans text-xs font-light text-charcoal/35 italic leading-relaxed mb-8 pb-8 border-b border-gray-border">
                        {tier.subline}
                      </p>

                      <div className="mb-6">
                        <p className="font-canela-deck font-light text-3xl text-navy leading-none mb-3">
                          {tier.price}
                        </p>
                        <div className="flex items-center gap-2">
                          <ClockIcon />
                          <span className="font-sans text-xs text-charcoal/45">{tier.timeline}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8 flex-1">
                        {tier.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="font-sans text-sm font-light text-charcoal/65 leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`mb-8 p-4 ${isPopular ? 'border border-navy/10 bg-navy/[0.03]' : 'border border-gray-border bg-soft-white'}`}>
                        <p className="font-sans text-xs font-light text-charcoal/50 leading-relaxed">
                          <span className="font-medium text-charcoal/70">{t('pricing.best_for_label')} </span>
                          {tier.best_for}
                        </p>
                      </div>

                      <a
                        href={contactHref}
                        className="block w-full text-center font-sans text-sm font-medium py-4 px-6 tracking-wide bg-navy text-white hover:bg-navy/80 transition-colors duration-300"
                      >
                        {tier.cta}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            )
          })}
        </div>

        {/* Custom quote row */}
        <ScrollReveal delay={2}>
          <div className="mt-12 md:mt-16 border border-gray-border bg-white px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-canela-deck font-light text-xl text-navy mb-2">
                {t('pricing.custom_heading')}
              </p>
              <p className="font-sans text-sm font-light text-charcoal/55 leading-relaxed max-w-xl">
                {t('pricing.custom_body')}
              </p>
            </div>
            <a
              href={contactHref}
              className="inline-flex items-center justify-center gap-2 border border-navy text-navy font-sans text-sm font-medium px-8 py-4 hover:bg-navy hover:text-white transition-all duration-300 tracking-wide w-full md:w-auto"
            >
              {t('pricing.custom_cta')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        {/* Tech stack note */}
        <ScrollReveal delay={2}>
          <div className="mt-10 text-center">
            <p className="font-sans text-xs text-charcoal/30 mb-3 tracking-wide">{t('pricing.tech_label')}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {['React · Next.js', 'TypeScript', 'WordPress', 'Showit', 'Shopify', 'Headless CMS', 'Vercel', 'DigitalOcean'].map((tech) => (
                <span key={tech} className="font-sans text-xs text-charcoal/30 font-light">{tech}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
