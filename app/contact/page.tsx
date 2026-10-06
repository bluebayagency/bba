import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const description =
  'Share a little about your practice, and we’ll find a time to talk.'

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Bluebay Agency',
    description,
    type: 'website',
    url: 'https://www.bluebayagency.com/contact',
  },
}

export default function ContactPage() {
  return (
    <main id="main-content">
      <Navigation />
      <Contact />
      <Footer />
    </main>
  )
}
