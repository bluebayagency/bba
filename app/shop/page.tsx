import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Shop from '@/components/Shop'
import Footer from '@/components/Footer'
import { sortedProducts } from '@/lib/shop'

const BASE = 'https://www.bluebayagency.com'
const title = 'Shop Guides for Wellness Practices | Bluebay Agency'
const description =
  'Step-by-step guides to help med spas, studios, clinics and coaches get found on Google and AI search and turn website visitors into booked clients.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/shop' },
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${BASE}/shop`,
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

const productSchemas = sortedProducts().map((p) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: p.title,
  description: p.subtitle,
  url: p.stanUrl,
  ...(p.image ? { image: `${BASE}${p.image}` } : {}),
  brand: { '@type': 'Brand', name: 'Bluebay Agency' },
}))

export default function ShopPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemas) }}
      />
      <Navigation />
      <Shop />
      <Footer />
    </main>
  )
}
