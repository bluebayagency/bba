'use client'

import { useTranslation } from 'react-i18next'
import { usePathname } from 'next/navigation'
import ScrollReveal from './ScrollReveal'

const projectMeta = [
  {
    tags: ['Brand Identity', 'Landing Page', 'Email Capture'],
    previewGif: '/images/olivias-wish/olivias-wish-desktop-coming-soon-preview.png',
    mobilePreview: '/images/olivias-wish/olivias-wish-mobile-coming-soon-preview.png',
    bgColor: 'from-[#E9E6DB] to-sand',
    headingText: 'text-navy',
    categoryText: 'text-[#8B5D52]/90',
    descText: 'text-charcoal/60',
    tagText: 'text-navy/60',
    tagBorder: 'border-navy/15',
    badgeText: 'text-navy/70',
    badgeBorder: 'border-navy/25',
    badgeHoverText: 'hover:text-navy',
    badgeHoverBorder: 'hover:border-navy/50',
    cardBorder: 'border-navy/10 hover:border-navy/20',
    mobileStripBg: 'bg-[#E9E6DB]',
    mobileLabelText: 'text-navy/45',
    comingSoon: true,
    href: null,
    internalHref: '/case-studies/olivias-wish',
  },
  {
    tags: ['React.js', 'Next.js', 'Tailwind'],
    previewGif: '/images/projects/goldie-grace/bluebay-agency-goldie-grace-preview-site.gif',
    mobilePreview: '/images/projects/goldie-grace/bluebay-agency-mobile-previews.png',
    bgColor: 'from-[#0d1a2c] to-[#0a1220]',
    headingText: 'text-white',
    categoryText: 'text-french-blue/80',
    descText: 'text-white/50',
    tagText: 'text-sand/70',
    tagBorder: 'border-sand/20',
    badgeText: 'text-french-blue/80',
    badgeBorder: 'border-french-blue/40',
    badgeHoverText: 'hover:text-white',
    badgeHoverBorder: 'hover:border-white/40',
    cardBorder: 'border-white/[0.06] hover:border-white/[0.12]',
    mobileStripBg: 'bg-navy/60',
    mobileLabelText: 'text-sand/60',
    comingSoon: true,
    href: null,
    internalHref: null,
  },
]

export default function Portfolio() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const contactHref = pathname === '/' ? '#contact' : '/#contact'
  const projects = t('portfolio.projects', { returnObjects: true }) as Array<{
    name: string; category: string; desc: string
  }>

  return (
    <section className="bg-french-blue-light py-24 md:py-36 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-xl">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
<span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                  {t('portfolio.eyebrow')}
                </span>
              </div>
            </ScrollReveal>
            {t('portfolio.h2') && (
              <ScrollReveal delay={1}>
                <h2 className="font-canela-deck font-light text-navy leading-[1.1]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
                  {t('portfolio.h2')}
                </h2>
              </ScrollReveal>
            )}
          </div>
          <ScrollReveal delay={2}>
            <p className="font-sans text-sm font-light text-charcoal/55 max-w-xs leading-relaxed">
              {t('portfolio.body')}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const meta = projectMeta[i]
            return (
              <ScrollReveal key={project.name} delay={(i + 1) as 1 | 2}>
                <div className={`portfolio-card group flex flex-col bg-gradient-to-br ${meta.bgColor} border ${meta.cardBorder} transition-all duration-500`}>
                  {/* Desktop preview */}
                  <div className="relative overflow-hidden" style={{ paddingTop: '58%' }}>
                    <img
                      src={meta.previewGif}
                      alt={`${project.name} desktop preview`}
                      className="card-img absolute inset-0 w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Mobile preview strip: 230px */}
                  <div className={`relative overflow-hidden ${meta.mobileStripBg}`} style={{ height: '230px' }}>
                    <img
                      src={meta.mobilePreview}
                      alt={`${project.name} mobile preview`}
                      className="w-full h-full object-contain object-center py-4"
                    />
                    <div className="absolute top-3 left-4">
                      <span className={`font-sans text-[10px] font-medium ${meta.mobileLabelText} tracking-[0.2em] uppercase`}>
                        {t('portfolio.mobile_label')}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-7 md:p-8 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <p className={`font-sans text-xs ${meta.categoryText} tracking-[0.15em] uppercase mb-2`}>
                          {project.category}
                        </p>
                        <h3 className={`font-canela-deck font-light text-2xl ${meta.headingText}`}>{project.name}</h3>
                      </div>
                      {meta.comingSoon && meta.internalHref ? (
                        <a
                          href={meta.internalHref}
                          className={`flex-shrink-0 font-sans text-[10px] font-medium ${meta.badgeText} ${meta.badgeHoverText} border ${meta.badgeBorder} ${meta.badgeHoverBorder} px-3 py-1.5 tracking-[0.15em] uppercase transition-colors duration-300`}
                        >
                          Coming Soon
                        </a>
                      ) : meta.comingSoon ? (
                        <span className={`flex-shrink-0 font-sans text-[10px] font-medium ${meta.badgeText} border ${meta.badgeBorder} px-3 py-1.5 tracking-[0.15em] uppercase`}>
                          Coming Soon
                        </span>
                      ) : meta.href ? (
                        <a
                          href={meta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </a>
                      ) : (
                        null
                      )}
                    </div>
                    <p className={`font-sans text-sm font-light ${meta.descText} leading-relaxed mb-6`}>
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {meta.tags.map((tag) => (
                        <span key={tag} className={`font-sans text-[11px] font-medium ${meta.tagText} border ${meta.tagBorder} px-3 py-1 tracking-wide`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={3}>
          <div className="mt-14 text-center">
            <a
              href={contactHref}
              className="inline-flex items-center justify-center gap-2 font-sans text-sm font-medium text-navy border border-navy/30 hover:bg-navy hover:text-white hover:border-navy px-8 py-4 transition-all duration-300 w-full sm:w-auto"
            >
              {t('portfolio.more_cta')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
