import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

const description =
  'Answers on choosing an offer, combining offers, timelines, and what happens after launch with Bluebay Agency.'

export const metadata: Metadata = {
  title: 'FAQ',
  description,
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | Bluebay Agency',
    description,
    type: 'website',
    url: 'https://www.bluebayagency.com/faq',
  },
}

export default function FAQPage() {
  return (
    <main id="main-content">
      <Navigation />
      <FAQ />
      <Footer />
    </main>
  )
}
