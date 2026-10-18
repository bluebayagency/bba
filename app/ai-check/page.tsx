import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Check',
  description: 'See how your business shows up in AI search. Coming soon from Bluebay Agency.',
  robots: { index: false, follow: false },
}

export default function AiCheckPage() {
  return (
    <main id="main-content">
      <Navigation />

      <section className="bg-navy min-h-[70vh] flex items-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-28 text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-8 bg-dusty-rose/60 hidden sm:block" />
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.28em] uppercase">
              Coming Soon
            </span>
            <div className="h-px w-8 bg-dusty-rose/60 hidden sm:block" />
          </div>

          <h1
            className="font-canela-deck font-light text-white leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            AI Check
          </h1>

          <p
            className="font-sans font-light text-white/55 leading-relaxed mx-auto max-w-xl"
            style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)' }}
          >
            How does your business show up when people ask AI for a recommendation? This page is in progress. Check back soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
