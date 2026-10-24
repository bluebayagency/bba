import type { Metadata } from 'next'
import AiCheck from '@/components/AiCheck'

const title = 'Can AI Find Your Business? | Bluebay Agency'
const description =
  'Take a free 60-second test to see if ChatGPT and Google AI recommend your business, and enter to win a free AI Visibility Audit.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/ai-check' },
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://www.bluebayagency.com/ai-check',
    siteName: 'Bluebay Agency',
    images: [
      {
        url: '/images/stock/2025-oct-hermosa-beach-california-1200-mb.png',
        width: 1200,
        height: 630,
        alt: 'Bluebay Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/stock/2025-oct-hermosa-beach-california-1200-mb.png'],
  },
}

export default function AiCheckPage() {
  return <AiCheck />
}
