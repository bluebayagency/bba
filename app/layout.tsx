import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
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

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bluebayagency.com'),
  title: {
    default: 'Bluebay Agency | Web Design & Development',
    template: '%s | Bluebay Agency',
  },
  description:
    'Bluebay Agency builds highly-converting, mobile-first websites for businesses ready to grow. Strategy-led design and development with 17+ years of experience.',
  keywords: [
    'web design California',
    'web development agency',
    'conversion-focused web design',
    'mobile-first web design',
    'landing page design',
    'lead generation website',
    'small business website',
    'boutique web design agency',
    'Los Angeles web design',
    'South Bay web design',
    'website redesign',
  ],
  authors: [{ name: 'Bluebay Agency', url: 'https://www.bluebayagency.com' }],
  creator: 'Bluebay Agency',
  publisher: 'Bluebay Agency',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bluebay Agency | Web Design & Development',
    description:
      'We build highly-converting, mobile-first websites that help your business connect, build trust, and grow. Strategy-led design backed by 17+ years of experience.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bluebayagency.com',
    siteName: 'Bluebay Agency',
    images: [
      {
        url: '/images/stock/2025-oct-hermosa-beach-california-1200-mb.png',
        width: 1200,
        height: 630,
        alt: 'Bluebay Agency — Web Design & Development, Hermosa Beach CA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bluebay Agency | Web Design & Development — Hermosa Beach, CA',
    description:
      'Highly-converting, mobile-first websites built for businesses ready to grow. Strategy-led design from Hermosa Beach, CA.',
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
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.bluebayagency.com/#business',
  name: 'Bluebay Agency',
  description:
    'Web design and development agency specializing in highly-converting, mobile-first websites. Based in Hermosa Beach, California with 17+ years of experience.',
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
    { '@type': 'State', name: 'California' },
    { '@type': 'Country', name: 'United States' },
  ],
  serviceType: [
    'Web Design',
    'Web Development',
    'Landing Page Design',
    'Conversion Rate Optimization',
    'Mobile-First Development',
    'SEO Optimization',
    'Brand Identity',
    'E-commerce Development',
  ],
  priceRange: '$895 - $10,000+',
  image: 'https://www.bluebayagency.com/images/stock/2025-oct-hermosa-beach-california-1200-mb.png',
  logo: 'https://www.bluebayagency.com/images/logos/bluebay-agency-secondary-blue.svg',
  sameAs: [],
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
      name: 'How fast is the turnaround?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most projects are completed in 2 to 14 business days depending on scope. Landing systems ship in 2 to 3 days. Growth websites in 5 to 7 days. Full Conversion Sprints in 10 to 14 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you only design websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build highly-converting websites, but the work behind them goes deeper than design. Strategy, messaging, structure, and lead generation all work together so your website becomes a genuine business asset.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I need to get started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Very little. We only need your business details, offer information, and access to your current website if applicable. We handle the strategy, copy direction, design, and engineering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer ongoing support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Optional ongoing optimization, SEO management, and landing page improvements are available as a monthly retainer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my website be optimized for SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every build includes technical SEO structure: metadata, OG tags, schema markup, performance optimization, and mobile-first architecture. SEO is woven into the engineering from day one.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Bluebay Agency different from other agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We take the time to actually listen. Every project starts with understanding your business, your clients, and what success looks like for you. Nearly 18 years of experience means we know what works.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many clients do you work with at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We keep our roster intentionally small, usually 3 to 5 active projects at a time. It means more focus, faster turnaround, and a better experience for everyone we work with.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${canela.variable} ${canelaDeck.variable}`}>
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
