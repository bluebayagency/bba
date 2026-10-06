import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import CaseStudies from '@/components/CaseStudies'
import Footer from '@/components/Footer'

const description =
  'One practice. A full redesign. A 65% rise in consultations booked within 30 days.'

export const metadata: Metadata = {
  title: 'Case Studies',
  description,
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | Bluebay Agency',
    description,
    type: 'website',
    url: 'https://www.bluebayagency.com/case-studies',
  },
}

export default function CaseStudiesPage() {
  return (
    <main id="main-content">
      <Navigation />
      <CaseStudies />
      <Footer />
    </main>
  )
}
