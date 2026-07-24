import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet the founder behind Bluebay Agency: 15+ years building and optimizing conversion-focused websites for wellness and modern brands, based in Hermosa Beach, CA.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Bluebay Agency',
    description:
      'Meet the founder behind Bluebay Agency: 15+ years building and optimizing conversion-focused websites for wellness and modern brands.',
    type: 'website',
    url: 'https://www.bluebayagency.com/about',
  },
}

export default function AboutPage() {
  return (
    <main id="main-content">
      <Navigation />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  )
}
