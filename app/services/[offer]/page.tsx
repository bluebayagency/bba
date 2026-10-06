import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import OfferPage from '@/components/OfferPage'
import { OFFER_SLUGS, isOfferSlug } from '@/lib/offers'
import Footer from '@/components/Footer'
import en from '@/locales/en.json'

type Params = Promise<{ offer: string }>

export const dynamicParams = false

export function generateStaticParams() {
  return OFFER_SLUGS.map((offer) => ({ offer }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { offer } = await params
  if (!isOfferSlug(offer)) return {}
  const name = en.offers.find((o) => o.id === offer)?.name ?? 'Services'
  const description = en.offerPage[offer].meta
  return {
    title: name,
    description,
    alternates: { canonical: `/services/${offer}` },
    openGraph: {
      title: `${name} | Bluebay Agency`,
      description,
      type: 'website',
      url: `https://www.bluebayagency.com/services/${offer}`,
    },
  }
}

export default async function OfferRoute({ params }: { params: Params }) {
  const { offer } = await params
  if (!isOfferSlug(offer)) notFound()

  return (
    <main id="main-content">
      <Navigation />
      <OfferPage slug={offer} />
      <Footer />
    </main>
  )
}
