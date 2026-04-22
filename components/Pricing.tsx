'use client'

import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

export default function Pricing() {
  const { t } = useTranslation()
  const tiers = t('pricing.tiers', { returnObjects: true }) as Array<{
    badge: string | null
    tier_num: string
    name: string
    price: string
    price_alt: string
    timeline: string
    description: string
    best_for: string
    includes: string[]
  }>

  const highlights = [false, true, false]
  const darks = [false, false, true]

  return (
    <section id="pricing" className="bg-soft-white py-24 md:py-36 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-dusty-rose/60" />
              <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                {t('pricing.eyebrow')}
              </span>
              <div className="h-px w-10 bg-dusty-rose/60" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-canela-deck font-light text-navy leading-[1.1] mb-5" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              {t('pricing.h2')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="font-sans font-light text-charcoal/55 text-lg leading-relaxed">
              {t('pricing.body')}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
          {tiers.map((tier, i) => {
            const highlight = highlights[i]
            const dark = darks[i]
            return (
              <ScrollReveal key={tier.name} delay={(i + 1) as 1 | 2 | 3}>
                <div
                  className={`pricing-card relative flex flex-col border ${
                    highlight
                      ? 'bg-white border-navy/20 shadow-xl shadow-navy/8'
                      : dark
                      ? 'bg-navy border-navy text-white'
                      : 'bg-white border-gray-border'
                  }`}
                >
                  {/* Gold top accent for highlight */}
                  {highlight && <div className="h-1 bg-navy absolute top-0 left-0 right-0" />}

                  <div className="p-8 md:p-9 flex flex-col flex-1">
                    {/* Badge — inside card at top, always visible */}
                    {tier.badge && (
                      <div className="mb-5 -mt-1">
                        <span className={`inline-block font-sans text-[11px] font-medium px-4 py-1.5 tracking-[0.15em] uppercase ${
                          highlight ? 'bg-dusty-rose text-white' : 'bg-charcoal text-white'
                        }`}>
                          {tier.badge}
                        </span>
                      </div>
                    )}
                    {!tier.badge && <div className="mb-5 h-6" />}

                    {/* Tier info */}
                    <div className="mb-8 pb-8 border-b border-current/10">
                      <p className={`font-sans text-xs font-medium tracking-[0.2em] uppercase mb-3 ${dark ? 'text-white/40' : 'text-navy/50'}`}>
                        {tier.tier_num}
                      </p>
                      <h3 className={`font-canela-deck font-light text-xl leading-tight mb-4 ${dark ? 'text-white' : 'text-navy'}`}>
                        {tier.name}
                      </h3>
                      <p className={`font-sans text-xs leading-relaxed ${dark ? 'text-white/45' : 'text-charcoal/50'}`}>
                        {tier.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className={`font-serif text-4xl font-light ${dark ? 'text-white' : 'text-navy'}`}>{tier.price}</span>
                        <span className={`font-serif text-xl font-light ${dark ? 'text-white/50' : 'text-navy/50'}`}>{tier.price_alt}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className={`w-3.5 h-3.5 ${dark ? 'text-white/30' : 'text-navy/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className={`font-sans text-xs ${dark ? 'text-white/45' : 'text-charcoal/50'}`}>
                          Delivered in {tier.timeline}
                        </span>
                      </div>
                    </div>

                    {/* Includes */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlight ? 'text-navy' : dark ? 'text-white/30' : 'text-charcoal/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span className={`font-sans text-sm font-light leading-snug ${dark ? 'text-white/60' : 'text-charcoal/65'}`}>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Best for */}
                    <div className={`mb-8 p-4 text-xs font-sans font-light leading-relaxed border ${
                      dark ? 'bg-white/[0.05] border-white/10 text-white/40' : 'bg-soft-white border-gray-border text-charcoal/50'
                    }`}>
                      <span className="font-medium">{t('pricing.best_for_label')} </span>
                      {tier.best_for}
                    </div>

                    {/* CTA */}
                    <a
                      href="#contact"
                      className={`block w-full text-center font-sans text-sm font-medium py-4 px-6 transition-all duration-300 tracking-wide ${
                        highlight
                          ? 'bg-navy text-white hover:bg-navy/80'
                          : dark
                          ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                          : 'bg-navy text-white hover:bg-navy/80'
                      }`}
                    >
                      {dark ? t('pricing.apply_cta') : t('pricing.get_started')}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Tech stack note */}
        <ScrollReveal delay={2}>
          <div className="mt-12 text-center">
            <p className="font-sans text-xs text-charcoal/35 mb-3 tracking-wide">{t('pricing.tech_label')}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {['React · Next.js', 'TypeScript', 'WordPress', 'Showit', 'Shopify', 'Headless CMS', 'Vercel', 'DigitalOcean'].map((tech) => (
                <span key={tech} className="font-sans text-xs text-charcoal/35 font-light">{tech}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
