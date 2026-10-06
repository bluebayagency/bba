import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import Footer from '@/components/Footer'

const description =
  'Where clarity meets beauty. Bluebay is a strategic partner for coaches, therapists, and wellness practitioners, with fifteen years in the industry.'

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Bluebay Agency',
    description,
    type: 'website',
    url: 'https://www.bluebayagency.com/about',
  },
}

export default function AboutPage() {
  return (
    <main id="main-content">
      <Navigation />
      <About />
      <Footer />
    </main>
  )
}
