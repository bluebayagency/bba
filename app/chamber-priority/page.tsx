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

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 bg-white text-navy font-sans text-sm font-medium px-8 py-4 transition-all duration-300 tracking-wide group hover:bg-white/90"
            >
              Apply for One of 10 Priority Spots
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <a
              href="#eligibility"
              className="inline-flex items-center justify-center border border-white/25 hover:border-white/50 text-white/70 hover:text-white font-sans text-sm font-light px-8 py-4 transition-all duration-300 tracking-wide"
            >
              Check Eligibility
            </a>
          </div>

          <p className="font-sans text-xs text-white/30 tracking-wide">
            10 spots · Chamber members only · Closes when full
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-dusty-rose/60" />
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">The Problem</span>
          </div>

          <h2
            className="font-canela-deck font-light text-navy leading-[1.1] mb-14 max-w-2xl"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
          >
            Most Local Businesses Will Watch This Opportunity Pass.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200/50">
            {[
              {
                num: '01',
                heading: 'Your Website Was Not Built for This Moment',
                body: 'Most small business sites were built for a different era. When millions of new visitors start searching for what you offer, outdated pages lose them immediately.',
              },
              {
                num: '02',
                heading: 'Mobile Search Will Spike. Seconds Matter.',
                body: 'During major events, mobile local searches surge 3 to 5 times. Visitors decide in under eight seconds. A slow load or unclear page sends that lead to a competitor.',
              },
              {
                num: '03',
                heading: 'The Preparation Window Is Closing',
                body: 'Local search rankings take time to build. Businesses that act now carry a structural advantage into 2026 that cannot be replicated at the last minute.',
              },
            ].map((item) => (
              <div key={item.num} className="bg-white p-10 md:p-12">
                <p className="font-sans text-[11px] font-medium text-navy/25 tracking-[0.22em] uppercase mb-5">{item.num}</p>
                <h3 className="font-canela-deck font-light text-xl text-navy leading-snug mb-4">{item.heading}</h3>
                <p className="font-sans font-light text-charcoal/55 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO BREAK */}
      <div className="relative h-[282px] md:h-[352px] overflow-hidden">
        <img
          src="/images/stock/bluebay-agency-chamber-women-phone.jpg"
          alt="Woman searching on mobile"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-canela-deck font-light text-white text-center leading-snug px-6" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
            They are already searching.<br />
            <em className="font-thin italic text-white/70">The question is whether they'll find you.</em>
          </p>
        </div>
      </div>

      {/* OPPORTUNITY */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-dusty-rose/60" />
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">The Opportunity</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h2
                className="font-canela-deck font-light text-white leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
              >
                Early Movers Win Disproportionately.
              </h2>
              <p className="font-sans font-light text-white/50 leading-relaxed text-sm max-w-md">
                Global events do not distribute traffic equally. The first credible, visible result gets the click. Businesses that build their digital position now will be ranked and trusted before millions of visitors open their phones in Southern California.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  year: '2026',
                  event: 'International Soccer Tournament · USA',
                  detail: 'The tournament is 6 weeks away and visitors are already here. There is still time to get your digital presence in front of them, but the window is closing fast.',
                },
                {
                  year: '2028',
                  event: 'International Games · Los Angeles',
                  detail: 'The largest sustained global audience ever focused on one American city. Pre-surge search traffic starts building now.',
                },
                {
                  year: 'Now',
                  event: 'The Preparation Window',
                  detail: 'Rankings, mobile performance, and conversion architecture take time to compound. The advantage belongs to businesses that move first.',
                },
              ].map((item) => (
                <div key={item.year} className="border border-white/[0.08] p-7">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-canela-deck font-light text-2xl text-dusty-rose">{item.year}</span>
                    <span className="font-sans text-xs font-medium text-white/50 tracking-wide">{item.event}</span>
                  </div>
                  <p className="font-sans font-light text-white/35 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THEY GET */}
      <section id="eligibility" className="bg-sand py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-dusty-rose/60" />
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase">What You Receive</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="relative overflow-hidden mb-8">
                <img
                  src="/images/stock/bluebay-agency-laptop-mobile-preview-cafe.jpg"
                  alt="Strategic website review in progress"
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sand/60 to-transparent" />
              </div>
              <h2
                className="font-canela-deck font-light text-navy leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
              >
                The Global Event Traffic Readiness Review
              </h2>
              <p className="font-sans font-light text-charcoal/55 leading-relaxed mb-8 text-sm max-w-sm">
                A hands-on strategic assessment of your digital position. Conducted personally. Specific to your business. No automated reports.
              </p>
              <div className="border-t border-gray-border pt-6">
                <p className="font-sans text-xs text-charcoal/40 tracking-wide mb-1">Delivered within</p>
                <p className="font-canela-deck font-light text-2xl text-navy">2 to 3 Business Days</p>
              </div>
            </div>

            <div className="space-y-3">
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
              ].map((item, i) => (
                <div key={item.title} className="flex gap-5 bg-white border border-gray-border p-6">
                  <span className="font-sans text-[11px] font-medium text-navy/25 tracking-[0.2em] mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-sans text-sm font-medium text-navy mb-1">{item.title}</p>
                    <p className="font-sans text-xs font-light text-charcoal/50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
