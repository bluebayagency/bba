import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Portfolio from '@/components/Portfolio'
import CaseStudySpotlight from '@/components/CaseStudySpotlight'
import CaseStudyPreview from '@/components/CaseStudyPreview'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real websites, real results: see how Bluebay Agency designs and builds conversion-focused websites for wellness and modern brands.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | Bluebay Agency',
    description:
      'Real websites, real results: see how Bluebay Agency designs and builds conversion-focused websites for wellness and modern brands.',
    type: 'website',
    url: 'https://www.bluebayagency.com/case-studies',
  },
}

export default function CaseStudiesPage() {
  return (
    <main id="main-content">
      <Navigation />

      <section className="bg-white pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
            Case Studies
          </span>
          <h1
            className="mt-6 font-canela-deck font-light text-navy leading-[1.1]"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
          >
            Featured Case Studies.
          </h1>
          <p className="mt-5 font-sans font-light text-charcoal/55 text-lg leading-relaxed">
            Real websites, real results, see how strategy, design, and technical SEO come together to
            turn traffic into clients.
          </p>
        </div>
      </section>

      <CaseStudySpotlight />
      <CaseStudyPreview variant="navy" />
      <Portfolio />
      <FinalCTA />
      <Footer />
    </main>
  )
}
