import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ServicesDetail from '@/components/ServicesDetail'
import Pricing from '@/components/Pricing'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'Web design, web development, SEO, and email marketing for wellness and modern brands, with transparent pricing for every package.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services & Pricing | Bluebay Agency',
    description:
      'Web design, web development, SEO, and email marketing for wellness and modern brands, with transparent pricing for every package.',
    type: 'website',
    url: 'https://www.bluebayagency.com/services',
  },
}

export default function ServicesPage() {
  return (
    <main id="main-content">
      <Navigation />
      <ServicesDetail />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
