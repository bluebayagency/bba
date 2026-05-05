import type { Metadata } from 'next'
import MailerLiteChamberForm from '@/components/MailerLiteChamberForm'

export const metadata: Metadata = {
  title: 'Chamber Priority: Global Event Readiness Review | Bluebay Agency',
  description: 'A private offer for Manhattan Beach Chamber of Commerce members. Only 10 spots available before the 2026 International Soccer Tournament and 2028 LA International Games drive the largest local search surge in Southern California history.',
  robots: { index: false, follow: false },
}

export default function ChamberPriorityPage() {
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
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-dusty-rose animate-pulse" />
            <span className="font-sans text-xs text-white/40 tracking-wide">10 Spots Available</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-navy relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/stock/bluebay-agency-manhattan-beach.jpg"
            alt="Manhattan Beach, California"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(9,28,54,0.25)_0%,_transparent_70%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 pt-24 pb-28 md:pt-32 md:pb-36 text-center">

          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-8 bg-dusty-rose/60 hidden sm:block" />
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.28em] uppercase">
              <span className="flex flex-col sm:flex-row sm:gap-1 items-center">
                <span>Manhattan Beach Chamber</span>
                <span className="hidden sm:inline">·</span>
                <span>Private Offer</span>
              </span>
            </span>
            <div className="h-px w-8 bg-dusty-rose/60 hidden sm:block" />
          </div>

          <h1
            className="font-canela-deck font-light text-white leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            One Window to Position Your Business Before{' '}
            <em className="font-thin italic text-white/80">the Largest Visitor Surge in LA History.</em>
          </h1>

          <p
            className="font-sans font-light text-white/55 leading-relaxed mb-10 mx-auto max-w-xl"
            style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)' }}
          >
            2026 and 2028 bring two global events to Southern California. Millions of visitors. Phones in hand. Decisions made in seconds. We are offering 10 Chamber members a complimentary readiness review before the surge begins.
          </p>

          <div className="max-w-md mx-auto text-left">
            <MailerLiteChamberForm />
          </div>

          <p className="font-sans text-xs text-white/30 tracking-wide mt-6">
            10 spots · Chamber members only · Closes when full
          </p>
        </div>
      </section>

      {/* WHAT THEY GET */}
      <section id="eligibility" className="bg-sand py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-dusty-rose/60" />
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">Complimentary · What You Receive</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2
                className="font-canela-deck font-light text-navy leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
              >
                The Global Event Traffic Readiness Review
              </h2>
              <p className="font-sans font-light text-charcoal/55 leading-relaxed mb-8 text-sm">
                A hands-on strategic assessment of your digital position. Conducted personally. Specific to your business. No automated reports.
              </p>
              <div className="border-t border-gray-border pt-6">
                <p className="font-sans text-xs text-charcoal/40 tracking-wide mb-1">Delivered within</p>
                <p className="font-canela-deck font-light text-2xl text-navy">2 to 3 Business Days</p>
              </div>
            </div>

            <ul className="space-y-5">
              {[
                {
                  title: 'Mobile UX Audit',
                  desc: 'How your site performs on the device visitors will use most during both events.',
                },
                {
                  title: 'Conversion Breakdown',
                  desc: 'Where your site loses visitors today and what to fix before high-intent traffic arrives.',
                },
                {
                  title: 'Local SEO Visibility Analysis',
                  desc: 'Where you rank for the search terms that will matter most and where the gaps are.',
                },
                {
                  title: 'Competitive Positioning Review',
                  desc: 'How your digital presence compares to the local competitors chasing the same audience.',
                },
                {
                  title: 'Priority Recommendations',
                  desc: 'The highest-impact actions, ranked by return, that we would take first if this were our business.',
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <svg className="w-4 h-4 text-dusty-rose mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <p className="font-sans text-sm font-medium text-navy mb-0.5">{item.title}</p>
                    <p className="font-sans text-xs font-light text-charcoal/50 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EXCLUSIVITY */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-10 bg-dusty-rose/60" />
              <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">Availability</span>
              <div className="h-px w-10 bg-dusty-rose/60" />
            </div>

            <h2
              className="font-canela-deck font-light text-white leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
            >
              This Is Not an Open Offer.
            </h2>

            <p className="font-sans font-light text-white/50 leading-relaxed mb-14 text-sm max-w-xl mx-auto">
              Ten spots. Fixed. Each review is conducted personally and capacity is intentionally limited. When the spots are filled, this offer closes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06] mb-12">
              {[
                { num: '10', label: 'Total Spots' },
                { num: 'MB Chamber', label: 'Members Only' },
                { num: 'Closed', label: 'Once Full' },
              ].map((item) => (
                <div key={item.label} className="bg-navy px-8 py-10 text-center">
                  <div className="font-canela-deck font-light text-3xl text-dusty-rose mb-2">{item.num}</div>
                  <div className="font-sans text-xs text-white/35 tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="border border-white/[0.08] p-8 text-left">
              <p className="font-sans text-xs font-medium text-white/30 tracking-[0.2em] uppercase mb-4">Who This Is For</p>
              <ul className="space-y-3">
                {[
                  'Manhattan Beach Chamber of Commerce members in active business',
                  'Service, hospitality, retail, or experience businesses with a local customer base',
                  'Owners who treat digital visibility as a competitive asset',
                  'Those ready to act on recommendations, not just receive a report',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-dusty-rose mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="font-sans text-sm font-light text-white/45 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / FORM */}
      <section id="apply" className="bg-soft-white py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-dusty-rose/60" />
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">Apply Now</span>
            <div className="h-px w-10 bg-dusty-rose/60" />
          </div>

          <h2
            className="font-canela-deck font-light text-navy leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
          >
            Secure Your Spot Before This Closes.
          </h2>

          <p className="font-sans font-light text-charcoal/50 leading-relaxed mb-10 text-sm">
            Submit your details and we will confirm eligibility within one business day.
          </p>

          <div className="mb-8 text-left">
            <MailerLiteChamberForm />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              'No obligation',
              'Response within 1 business day',
              'Chamber members only',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-charcoal/25" />
                <span className="font-sans text-xs text-charcoal/40 tracking-wide">{item}</span>
              </div>
            ))}
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
