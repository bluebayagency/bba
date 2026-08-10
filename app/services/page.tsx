import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ServicesDetail from '@/components/ServicesDetail'
import CaseStudySpotlight from '@/components/CaseStudySpotlight'
import Packages from '@/components/Packages'
import RetainerTiers from '@/components/RetainerTiers'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web design, web development, search & AI visibility, conversion rate optimization, and email marketing for wellness and modern brands.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services | Bluebay Agency',
    description:
      'Web design, web development, search & AI visibility, conversion rate optimization, and email marketing for wellness and modern brands.',
    type: 'website',
    url: 'https://www.bluebayagency.com/services',
  },
}

export default function ServicesPage() {
  return (
    <main id="main-content">
      <Navigation />
      <ServicesDetail />
      <CaseStudySpotlight />
      <Packages />
      <RetainerTiers />
      <FinalCTA />
      <Footer />
    </main>
  )
}
