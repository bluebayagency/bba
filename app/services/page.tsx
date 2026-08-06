import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ServicesDetail from '@/components/ServicesDetail'
import Packages from '@/components/Packages'
import RefreshSessions from '@/components/RefreshSessions'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web design, web development, SEO, and email marketing for wellness and modern brands.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services | Bluebay Agency',
    description:
      'Web design, web development, SEO, and email marketing for wellness and modern brands.',
    type: 'website',
    url: 'https://www.bluebayagency.com/services',
  },
}

export default function ServicesPage() {
  return (
    <main id="main-content">
      <Navigation />
      <ServicesDetail />
      <Packages />
      <RefreshSessions />
      <FinalCTA />
      <Footer />
    </main>
  )
}
