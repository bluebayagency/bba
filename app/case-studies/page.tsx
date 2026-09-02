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
      <CaseStudySpotlight headingLevel="h1" />
      <CaseStudyPreview variant="navy" eyebrow="Featured Case Study" />
      <Portfolio />
      <FinalCTA />
      <Footer />
    </main>
  )
}
