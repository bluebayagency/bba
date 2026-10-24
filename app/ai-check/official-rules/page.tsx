import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: { absolute: 'AI Visibility Audit Giveaway: Official Rules | Bluebay Agency' },
  description: 'Official rules for the Bluebay Agency AI Visibility Audit giveaway.',
  robots: { index: false, follow: false },
}

// TODO: fill these in before the giveaway goes live, and have the rules reviewed.
const ENTRY_START = '[start date]'
const ENTRY_DEADLINE = '[end date]'
const DRAWING_DATE = '[drawing date]'
const PRIZE_VALUE = '[$ value]'
const LAST_UPDATED = '[date]'

export default function OfficialRulesPage() {
  return (
    <>
      <header className="bg-navy px-4 py-5 sm:px-6">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <a href="/">
            <img
              src="/images/logos/bluebayagency-symbol-icon.png"
              alt="Bluebay Agency"
              style={{ width: '40px', height: 'auto', filter: 'brightness(0) invert(1)' }}
            />
          </a>
          <a href="/ai-check" className="font-sans text-base text-white/80 hover:text-white">
            Back to the AI Check
          </a>
        </div>
      </header>

      <main id="main-content" className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
          <p className="mb-3 font-sans text-base font-medium uppercase tracking-[0.2em] text-charcoal">Official Rules</p>
          <h1
            className="mb-3 font-canela-deck font-medium leading-tight text-navy"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            AI Visibility Audit Giveaway
          </h1>
          <p className="mb-12 font-sans text-base text-charcoal">Last updated: {LAST_UPDATED}</p>

          <Rule title="No purchase necessary">
            <p>No purchase or payment of any kind is needed to enter or win. A purchase does not improve your chances of winning.</p>
          </Rule>

          <Rule title="Sponsor">
            <p>Bluebay Agency, LLC, Hermosa Beach, California (&ldquo;Sponsor&rdquo;).</p>
          </Rule>

          <Rule title="Who can enter">
            <p>
              Open to legal residents of the United States who are 18 or older and own or manage a business. Employees of
              Sponsor and their immediate family members are not eligible. Void where prohibited.
            </p>
          </Rule>

          <Rule title="Entry period">
            <p>
              The giveaway begins on {ENTRY_START} and ends at 11:59 p.m. Pacific Time on {ENTRY_DEADLINE}. Entries received
              after that time are not eligible.
            </p>
          </Rule>

          <Rule title="How to enter">
            <p>
              Complete the entry form at bluebayagency.com/ai-check, online or at a Sponsor event booth, with your name, email
              and business website. Limit one entry per person and one per business. Incomplete, duplicate or automated
              entries are void.
            </p>
          </Rule>

          <Rule title="Prize">
            <p>
              One winner receives one AI Visibility Audit: a review of how AI search tools describe and recommend the
              winner&apos;s business, with a written list of recommended fixes. Approximate retail value: {PRIZE_VALUE}. The
              prize cannot be transferred or exchanged for cash.
            </p>
          </Rule>

          <Rule title="Winner selection and odds">
            <p>
              The winner is chosen in a random drawing from eligible entries on or about {DRAWING_DATE}. Odds of winning depend
              on the number of eligible entries received.
            </p>
          </Rule>

          <Rule title="Winner notification">
            <p>
              Sponsor will contact the winner by email within 7 days of the drawing. If the winner does not reply within 7 days
              of that email, Sponsor may choose an alternate winner.
            </p>
          </Rule>

          <Rule title="Your information">
            <p>
              Sponsor uses entry information to run the giveaway and, as stated on the entry form, to email you about the
              giveaway and AI search tips. You can unsubscribe anytime. See our{' '}
              <a href="/privacy-policy" className="font-medium text-navy underline underline-offset-4">
                Privacy Policy
              </a>
              .
            </p>
          </Rule>

          <Rule title="General conditions">
            <p>
              By entering, you agree to these rules and to Sponsor&apos;s decisions, which are final. Sponsor may cancel, end
              or change the giveaway if fraud, technical problems or other causes outside its control affect it. The winner is
              responsible for any taxes on the prize.
            </p>
          </Rule>

          <Rule title="Questions">
            <p>
              Reach us through our{' '}
              <a href="/contact" className="font-medium text-navy underline underline-offset-4">
                contact page
              </a>
              .
            </p>
          </Rule>
        </div>
      </main>
    </>
  )
}

function Rule({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-8 border-b border-gray-border pb-8 last:mb-0 last:border-0 last:pb-0">
      <h2 className="mb-3 font-roboto text-xl font-bold text-navy">{title}</h2>
      <div className="font-sans text-lg leading-relaxed text-charcoal">{children}</div>
    </section>
  )
}
