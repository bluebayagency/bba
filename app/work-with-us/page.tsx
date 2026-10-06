import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import WorkWithUs from '@/components/WorkWithUs'
import Footer from '@/components/Footer'

const description =
  'A considered process, start to finish: conversation, strategy, design, refinement, delivery, and a 90-day check-in once your work is live.'

export const metadata: Metadata = {
  title: 'Work With Us',
  description,
  alternates: { canonical: '/work-with-us' },
  openGraph: {
    title: 'Work With Us | Bluebay Agency',
    description,
    type: 'website',
    url: 'https://www.bluebayagency.com/work-with-us',
  },
}

export default function WorkWithUsPage() {
  return (
    <main id="main-content">
      <Navigation />
      <WorkWithUs />
      <Footer />
    </main>
  )
}
