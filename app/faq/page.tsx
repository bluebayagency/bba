import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about working with Bluebay Agency: turnaround time, what\'s included, ongoing support, and how our boutique process works.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | Bluebay Agency',
    description:
      'Answers to common questions about working with Bluebay Agency: turnaround time, what\'s included, ongoing support, and how our boutique process works.',
    type: 'website',
    url: 'https://www.bluebayagency.com/faq',
  },
}

export default function FAQPage() {
  return (
    <main id="main-content">
      <Navigation />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
