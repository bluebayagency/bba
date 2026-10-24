// Products listed on /shop, rendered in `order`. Checkout happens on Stan Store.

export type ShopProduct = {
  title: string
  subtitle: string
  buttonText: string
  stanUrl: string
  /** Path under /public. Leave empty to show the placeholder cover. */
  image: string
  imageAlt: string
  order: number
}

// Product images live in /public/images/products/ and display in a 4:5 portrait frame.
export const PRODUCTS: ShopProduct[] = [
  {
    title: 'Brand Clarity Workbook',
    subtitle: 'Know who you serve, what makes you different and how to say it',
    buttonText: 'Get the Workbook',
    stanUrl: 'https://stan.store/bluebayagency/p/brand-clarity-workbook-9sgycxbw',
    image: '/images/products/brand-clarity-workbook-wellness-practices-digital-download-1.png',
    imageAlt: 'Brand Clarity Workbook cover',
    order: 1,
  },
  {
    title: 'Practice Homepage Blueprint',
    subtitle: 'A section-by-section plan for a homepage that turns visitors into booked clients',
    buttonText: 'Get the Blueprint',
    stanUrl: 'https://stan.store/bluebayagency/p/the-practice-homepage-blueprint',
    image: '/images/products/practice-homepage-blueprint-fill-in-the-blank-worksheet-preview.png',
    imageAlt: 'Practice Homepage Blueprint cover',
    order: 2,
  },
  {
    title: 'AI Visibility Pro Audit Kit',
    subtitle: 'Find out why ChatGPT and Google AI recommend your competitors, and fix it',
    buttonText: 'Get the Audit Kit',
    stanUrl: 'https://stan.store/bluebayagency/p/ai-visibility-pro-audit-kit',
    image: '/images/products/ai-visibility-pro-audit-kit-digital-workbook-wellness-business.png',
    imageAlt: 'AI Visibility Pro Audit Kit cover',
    order: 3,
  },
]

export const sortedProducts = () => [...PRODUCTS].sort((a, b) => a.order - b.order)
