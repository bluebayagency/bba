import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Bluebay Agency: tell us about your brand and goals, and we\'ll explore how a conversion-focused website can turn your traffic into paying clients.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Bluebay Agency',
    description:
      'Get in touch with Bluebay Agency: tell us about your brand and goals, and we\'ll explore how a conversion-focused website can turn your traffic into paying clients.',
    type: 'website',
    url: 'https://www.bluebayagency.com/contact',
  },
}

const contactOptions = [
  {
    title: 'Call Us',
    value: '(213) 867-7879',
    href: 'tel:+12138677879',
    external: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    ),
  },
  {
    title: 'Book a Consultation',
    value: 'Schedule a free 30-minute call',
    href: 'https://calendly.com/bluebayagencyllc/30min',
    external: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    ),
  },
]

export default function ContactPage() {
  return (
    <main id="main-content">
      <Navigation />

      <section className="bg-white pt-28 pb-16 md:pt-36 md:pb-20 border-b border-gray-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">
              Contact
            </span>
            <h1
              className="mt-6 font-canela-deck font-light text-navy leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Let&rsquo;s Start the Conversation.
            </h1>
            <p className="mt-5 font-sans font-light text-charcoal/55 text-lg leading-relaxed">
              Call or book a consultation, whatever&rsquo;s easiest for you.
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
            {contactOptions.map((option) => (
              <a
                key={option.title}
                href={option.href}
                {...(option.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex h-full flex-col border border-gray-border bg-white p-7 transition-all duration-300 hover:border-french-blue/30 hover:shadow-lg hover:shadow-navy/5"
              >
                <div className="mb-6 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy/60 transition-colors duration-300 group-hover:border-navy/30 group-hover:text-navy">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {option.icon}
                  </svg>
                </div>
                <h3 className="mb-2 font-canela-deck text-xl font-light leading-tight text-navy">
                  {option.title}
                </h3>
                <p className="font-sans text-sm font-light leading-relaxed text-charcoal/55">
                  {option.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
