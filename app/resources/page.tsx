import type { Metadata } from 'next'
import ResourceDownloadForm from '@/components/ResourceDownloadForm'

export const metadata: Metadata = {
  title: 'The 7-Step Homepage Guide | Free Resource | Bluebay Agency',
  description: 'Download the free 7-Step Homepage Guide and learn exactly how to turn your homepage into a lead-generating machine. Built for service businesses ready to grow.',
  openGraph: {
    title: 'The 7-Step Homepage Guide | Free Resource | Bluebay Agency',
    description: 'Download the free 7-Step Homepage Guide and learn exactly how to turn your homepage into a lead-generating machine.',
    type: 'website',
    url: 'https://www.bluebayagency.com/resources',
    siteName: 'Bluebay Agency',
  },
}

const steps = [
  {
    num: '01',
    title: 'Define Your Primary Visitor Intent',
    desc: 'Know exactly who lands on your homepage and the single action you need them to take.',
  },
  {
    num: '02',
    title: 'Craft a Headline That Converts',
    desc: 'Write a headline that speaks to the outcome your visitor wants, not the service you sell.',
  },
  {
    num: '03',
    title: 'Build Trust Above the Fold',
    desc: 'Establish credibility in the first three seconds before a visitor decides to stay or leave.',
  },
  {
    num: '04',
    title: 'Structure Your Value Proposition',
    desc: 'Clearly communicate what you do, who you help, and why you are the right choice.',
  },
  {
    num: '05',
    title: 'Add Social Proof That Works',
    desc: 'Use the right type of proof at the right moment to remove doubt and build confidence.',
  },
  {
    num: '06',
    title: 'Design CTAs With Purpose',
    desc: 'Every call to action must have a single job. Learn how to make visitors click.',
  },
  {
    num: '07',
    title: 'Optimize for Mobile-First Visitors',
    desc: 'Over 70% of your visitors are on mobile. Design for them first, not as an afterthought.',
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-navy border-b border-white/[0.06] py-5 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/">
            <img
              src="/images/logos/bluebay-agency-secondary-blue.svg"
              alt="Bluebay Agency"
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.85, width: '140px', height: 'auto' }}
            />
          </a>
          <a
            href="/"
            className="font-sans text-xs text-white/30 hover:text-white/60 tracking-wide transition-colors duration-200"
          >
            ← Back to Site
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-8 bg-dusty-rose/60" />
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.28em] uppercase">Free Resource</span>
            <div className="h-px w-8 bg-dusty-rose/60" />
          </div>
          <h1
            className="font-canela-deck font-light text-white leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            The 7-Step<br />
            <em className="font-thin italic text-white/80">Homepage Guide</em>
          </h1>
          <p
            className="font-sans font-light text-white/55 leading-relaxed mx-auto max-w-xl"
            style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)' }}
          >
            The exact framework we use to turn homepages into lead-generating assets. Free for service businesses ready to grow.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left: what's inside */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-dusty-rose/60" />
                <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">What's Inside</span>
              </div>

              <h2
                className="font-canela-deck font-light text-navy leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)' }}
              >
                Most Homepages Lose Visitors in Under 8 Seconds.
              </h2>
              <p className="font-sans font-light text-charcoal/55 text-sm leading-relaxed mb-10 max-w-md">
                This guide breaks down the exact decisions that make the difference between a homepage that converts and one that quietly loses clients every single day.
              </p>

              <div className="space-y-px">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-5 bg-white border border-gray-border p-6">
                    <span className="font-sans text-[11px] font-medium text-navy/25 tracking-[0.2em] mt-0.5 flex-shrink-0">
                      {step.num}
                    </span>
                    <div>
                      <p className="font-sans text-sm font-medium text-navy mb-1">{step.title}</p>
                      <p className="font-sans text-xs font-light text-charcoal/50 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {['Free download', 'Instant delivery', 'No fluff'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-charcoal/25" />
                    <span className="font-sans text-xs text-charcoal/40 tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:sticky lg:top-10">
              <div className="bg-white border border-gray-border p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-8 bg-dusty-rose/60" />
                  <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">Get Instant Access</span>
                </div>

                <h3 className="font-canela-deck font-light text-2xl text-navy mb-2">
                  Download the Free Guide
                </h3>
                <p className="font-sans font-light text-sm text-charcoal/50 leading-relaxed mb-8">
                  Enter your details below and we'll send it straight to your inbox.
                </p>

                <ResourceDownloadForm />
              </div>

              {/* Trust signals below form */}
              <div className="mt-6 flex items-center gap-3">
                <img
                  src="/images/logos/mb-chamber-member.png"
                  alt="Manhattan Beach Chamber of Commerce"
                  className="h-8 w-auto object-contain opacity-40"
                />
                <span className="font-sans text-xs text-charcoal/30 leading-snug">
                  Bluebay Agency · South Bay, CA<br />15+ Years of Conversion Experience
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-navy border-t border-white/[0.06] py-8 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/20">
            &copy; {new Date().getFullYear()} Bluebay Agency, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="font-sans text-xs text-white/20 hover:text-white/40 transition-colors duration-200">Privacy Policy</a>
            <a href="/terms-and-conditions" className="font-sans text-xs text-white/20 hover:text-white/40 transition-colors duration-200">Terms</a>
            <a href="/" className="font-sans text-xs text-white/20 hover:text-white/40 transition-colors duration-200">bluebayagency.com</a>
          </div>
        </div>
      </div>
    </>
  )
}
