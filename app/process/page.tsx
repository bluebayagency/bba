import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Process from '@/components/Process'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'How Bluebay Agency takes a website from strategy to launch: a clear, four-step process built for wellness and modern brands ready to convert more visitors into clients.',
  alternates: { canonical: '/process' },
  openGraph: {
    title: 'Our Process | Bluebay Agency',
    description:
      'How Bluebay Agency takes a website from strategy to launch: a clear, four-step process built for wellness and modern brands.',
    type: 'website',
    url: 'https://www.bluebayagency.com/process',
  },
}

export default function ProcessPage() {
  return (
    <main id="main-content">
      <Navigation />
      <Process />
      <FinalCTA />
      <Footer />
    </main>
  )
}
