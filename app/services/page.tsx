import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

const description =
  'Three ways to work together, one strategic partner throughout: The Signature Website, The Signature Brand, and The Signature Search Visibility for wellness practitioners.'

export const metadata: Metadata = {
  title: 'Services',
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services | Bluebay Agency',
    description,
    type: 'website',
    url: 'https://www.bluebayagency.com/services',
  },
}

export default function ServicesPage() {
  return (
    <main id="main-content">
      <Navigation />
      <Services />
      <Footer />
    </main>
  )
}
