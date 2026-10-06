// Slugs for the Signature offer landing pages at /services/<slug>.
export const OFFER_SLUGS = ['signature-website', 'signature-brand', 'signature-search'] as const
export type OfferSlug = (typeof OFFER_SLUGS)[number]

export function isOfferSlug(value: string): value is OfferSlug {
  return (OFFER_SLUGS as readonly string[]).includes(value)
}
