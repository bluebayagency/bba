'use client'

import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

const projectMeta = [
  {
    tags: ['React.js', 'Next.js', 'Tailwind'],
    previewGif: '/images/projects/goldie-grace/bluebay-agency-goldie-grace-preview-site.gif',
    mobilePreview: '/images/projects/goldie-grace/bluebay-agency-mobile-previews.png',
    bgColor: 'from-[#1a0f05] to-[#2d1f0e]',
    comingSoon: true,
    href: null,
  },
  {
    tags: ['React.js', 'Headless CMS', 'SEO'],
    previewGif: '/images/projects/nopalvia/bluebay-agency-nopalvia-preview.gif',
    mobilePreview: '/images/projects/nopalvia/bluebay-agency-nopalvia-mobile-preview.png',
    bgColor: 'from-[#0d1a0a] to-[#1a2e14]',
    comingSoon: false,
    href: 'https://nopalvia.com/',
  },
]

export default function Portfolio() {
  const { t } = useTranslation()
  const projects = t('portfolio.projects', { returnObjects: true }) as Array<{
    name: string; category: string; desc: string
  }>

  return (
    <section id="work" className="bg-charcoal py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-xl">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-dusty-rose/60" />
                <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
                  {t('portfolio.eyebrow')}
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="font-canela-deck font-light text-white leading-[1.1]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
                {t('portfolio.h2')}
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={2}>
            <p className="font-sans text-sm font-light text-white/40 max-w-xs leading-relaxed">
              {t('portfolio.body')}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const meta = projectMeta[i]
            return (
              <ScrollReveal key={project.name} delay={(i + 1) as 1 | 2}>
                <div className={`portfolio-card group flex flex-col bg-gradient-to-br ${meta.bgColor} border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500`}>
                  {/* Desktop preview */}
                  <div className="relative overflow-hidden" style={{ paddingTop: '58%' }}>
                    <img
                      src={meta.previewGif}
                      alt={`${project.name} desktop preview`}
                      className="card-img absolute inset-0 w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Mobile preview strip — 230px */}
                  <div className="relative overflow-hidden bg-black/25" style={{ height: '230px' }}>
                    <img
                      src={meta.mobilePreview}
                      alt={`${project.name} mobile preview`}
                      className="w-full h-full object-contain object-center py-4"
                    />
                    <div className="absolute top-3 left-4">
                      <span className="font-sans text-[10px] font-medium text-white/30 tracking-[0.2em] uppercase">
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
                        <p className="font-sans text-xs text-white/30 tracking-[0.15em] uppercase mb-2">
                          {project.category}
                        </p>
                        <h3 className="font-canela-deck font-light text-2xl text-white">{project.name}</h3>
                      </div>
                      {meta.comingSoon ? (
                        <span className="flex-shrink-0 font-sans text-[10px] font-medium text-white/40 border border-white/15 px-3 py-1.5 tracking-[0.15em] uppercase">
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
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                          <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="font-sans text-sm font-light text-white/50 leading-relaxed mb-6">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {meta.tags.map((tag) => (
                        <span key={tag} className="font-sans text-[11px] font-medium text-white/40 border border-white/10 px-3 py-1 tracking-wide">
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

        {/* More coming soon strip */}
        <ScrollReveal delay={3}>
          <div className="mt-6 border border-dashed border-white/[0.08] px-8 md:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="font-sans text-[10px] font-medium text-white/25 tracking-[0.22em] uppercase block mb-2">More Work in Progress</span>
              <p className="font-sans text-sm font-light text-white/30 max-w-md leading-relaxed">
                Additional case studies are in production. Book a call to preview work currently in progress.
              </p>
            </div>
            <span className="flex-shrink-0 font-sans text-[10px] font-medium text-white/20 border border-dashed border-white/[0.08] px-4 py-2 tracking-[0.18em] uppercase whitespace-nowrap">
              Coming Soon
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white/60 border border-white/20 hover:border-white/50 hover:text-white px-6 py-3 transition-all duration-300"
            >
              {t('portfolio.more_cta')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
