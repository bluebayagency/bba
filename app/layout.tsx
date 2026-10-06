import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'
import I18nProvider from '@/components/I18nProvider'
import './globals.css'

const GA_ID = 'G-WSRSNTKHJW'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const canela = localFont({
  src: [
    { path: '../public/fonts/CanelaCondensed-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/CanelaCondensed-Light.woff', weight: '300', style: 'normal' },
  ],
  variable: '--font-canela',
  display: 'swap',
})

const canelaDeck = localFont({
  src: [
    { path: '../public/fonts/CanelaDeck-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../public/fonts/CanelaDeck-ThinItalic.woff2', weight: '100', style: 'italic' },
    { path: '../public/fonts/CanelaDeck-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/CanelaDeck-LightItalic.woff2', weight: '300', style: 'italic' },
    { path: '../public/fonts/CanelaDeck-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/CanelaDeck-RegularItalic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/CanelaDeck-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/CanelaDeck-MediumItalic.woff2', weight: '500', style: 'italic' },
    { path: '../public/fonts/CanelaDeck-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/CanelaDeck-BoldItalic.woff2', weight: '700', style: 'italic' },
    { path: '../public/fonts/CanelaDeck-Black.woff2', weight: '900', style: 'normal' },
    { path: '../public/fonts/CanelaDeck-BlackItalic.woff2', weight: '900', style: 'italic' },
  ],
  variable: '--font-canela-deck',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bluebayagency.com'),
  title: {
    default: 'Bluebay Agency | Strategic Website Partner for Wellness Practitioners',
    template: '%s | Bluebay Agency',
  },
  description:
    'Clarity, confidence, and a digital presence that finally feels like you. Website design, brand identity, and visibility for coaches, therapists, and wellness practitioners.',
  keywords: [
    'website design for wellness practitioners',
    'therapist website design',
    'coach website design',
    'wellness website design',
    'counseling practice website',
    'South Bay web design',
    'Hermosa Beach web design',
    'Los Angeles web designer for therapists',
  ],
  authors: [{ name: 'Bluebay Agency', url: 'https://www.bluebayagency.com' }],
  creator: 'Bluebay Agency',
  publisher: 'Bluebay Agency',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bluebay Agency | Strategic Website Partner for Wellness Practitioners',
    description:
      'Website design, brand identity, and visibility for wellness practitioners. Fifteen years in the industry.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bluebayagency.com',
    siteName: 'Bluebay Agency',
    images: [
      {
        url: '/images/stock/2025-oct-hermosa-beach-california-1200-mb.png',
        width: 1200,
        height: 630,
        alt: 'Bluebay Agency: Strategic Website Partner for Wellness Practitioners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bluebay Agency | Strategic Website Partner for Wellness Practitioners',
    description:
      'Strategic website partner for wellness practitioners.',
    images: ['/images/stock/2025-oct-hermosa-beach-california-1200-mb.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'p:domain_verify': '6bc3ab6c893e73eb8c0d6889c47f4775',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.bluebayagency.com/#business',
  name: 'Bluebay Agency',
  description:
    'Strategic website partner for coaches, therapists, and wellness practitioners. Fifteen years in web design. Based in the South Bay, California.',
  url: 'https://www.bluebayagency.com',
  email: 'hello@bluebayagency.com',
  foundingDate: '2007',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hermosa Beach',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.8622,
    longitude: -118.3995,
  },
  areaServed: [
    { '@type': 'City', name: 'Hermosa Beach' },
    { '@type': 'City', name: 'Manhattan Beach' },
    { '@type': 'City', name: 'Redondo Beach' },
    { '@type': 'City', name: 'Los Angeles' },
    { '@type': 'State', name: 'California' },
    { '@type': 'Country', name: 'United States' },
  ],
  serviceType: [
    'Website Design for Wellness Practitioners',
    'Brand Identity Design',
    'SEO and AI Search Visibility',
  ],
  image: 'https://www.bluebayagency.com/images/stock/2025-oct-hermosa-beach-california-1200-mb.png',
  logo: 'https://www.bluebayagency.com/images/logos/bluebay-agency-secondary-blue.svg',
  sameAs: [
    'https://share.google/EeYIuooVMIY5BSS2X',
    'https://www.instagram.com/bluebayagency/',
    'https://www.pinterest.com/bluebayagencyllc/',
    'https://www.linkedin.com/company/bluebay-agency-llc',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.bluebayagency.com/#website',
  name: 'Bluebay Agency',
  url: 'https://www.bluebayagency.com',
  publisher: { '@id': 'https://www.bluebayagency.com/#business' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How do I know which offer is right for me?",
      acceptedAnswer: { '@type': 'Answer', text: "Most practices start with a conversation. We\u2019ll walk through your goals and recommend the path that fits." },
    },
    {
      '@type': 'Question',
      name: "Can I combine offers?",
      acceptedAnswer: { '@type': 'Answer', text: "Yes. Many practices pair The Signature Website with The Signature Brand or The Signature Search Visibility, and each pairing includes a discount." },
    },
    {
      '@type': 'Question',
      name: "How long does each offer take?",
      acceptedAnswer: { '@type': 'Answer', text: "Typically a few weeks from kickoff to delivery, depending on scope. We\u2019ll confirm a timeline once we understand your practice." },
    },
    {
      '@type': 'Question',
      name: "What happens after launch?",
      acceptedAnswer: { '@type': 'Answer', text: "We stay close for the first 30 days, then check in at 90 days to talk through what the data shows and what might be worth exploring next." },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${montserrat.variable} ${canela.variable} ${canelaDeck.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-navy focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-sans"
        >
          Skip to main content
        </a>
        <I18nProvider>{children}</I18nProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </body>
    </html>
  )
}
