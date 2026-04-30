import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions of Use for Bluebay Agency, LLC.',
  robots: { index: false, follow: false },
}

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Minimal header */}
      <header className="bg-navy py-5 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/">
            <img
              src="/images/logos/bluebay-agency-secondary-blue.svg"
              alt="Bluebay Agency"
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.85, width: '140px', height: 'auto' }}
            />
          </a>
          <a
            href="/"
            className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="bg-soft-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 md:py-28">

          <div className="mb-12">
            <p className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase mb-4">Legal</p>
            <h1 className="font-canela-deck font-light text-navy leading-[1.1] mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Terms and Conditions
            </h1>
            <p className="font-sans text-sm text-charcoal/40">Last Modified: 03/16/2026</p>
          </div>

          <div className="prose-legal">

            <Section title="Use and Consent">
              <p>The terms apply to https://bluebayagency.com/ and are between Bluebay Agency, LLC and users. By accessing the site, you agree to be bound by these terms. This website is not intended for persons under the age of 18.</p>
            </Section>

            <Section title="Privacy Policy">
              <p>The company respects user privacy and directs visitors to review its separate <a href="/privacy-policy">Privacy Policy</a>.</p>
            </Section>

            <Section title="Legal and Financial Disclaimer">
              <p>The information provided is not business, financial, or legal advice. Users should consult appropriate professionals regarding their specific situations.</p>
            </Section>

            <Section title="Earnings Disclaimer">
              <p>The site provides information for educational purposes only. There are no guarantees of any kind as to your earnings and income, as success depends on individual effort and circumstances.</p>
            </Section>

            <Section title="Medical Disclaimer">
              <p>The website offers educational content, not medical advice. You should always consult with a licensed and/or registered health care professional before making any health or dietary changes.</p>
              <p>Users assume all risks from exercise programs. Those with medical conditions, pregnant individuals, and nursing mothers must seek professional supervision.</p>
            </Section>

            <Section title="No Warranty or Liability">
              <p>Information is provided &quot;as is&quot; without warranties. THE INFORMATION IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND.</p>
              <p>Bluebay Agency, LLC excludes liability for damages, including indirect, consequential, and special damages. Cumulative liability caps at $1,000 (USD).</p>
            </Section>

            <Section title="Indemnification">
              <p>Users must defend and indemnify Bluebay Agency, LLC from claims arising from website use or user-submitted content.</p>
            </Section>

            <Section title="Intellectual Property Protection and Personal Use">
              <p>Content is proprietary. Users receive a limited non-exclusive non-transferable license to view, download, and/or print the content for personal use only.</p>
              <p>Unauthorized copying, distribution, or commercial use is prohibited. Unauthorized use constitutes theft.</p>
            </Section>

            <Section title="Your License to Us">
              <p>User-submitted content grants the company a perpetual, non-exclusive, royalty-free worldwide license for marketing and lawful purposes. Users may remove content anytime.</p>
            </Section>

            <Section title="User Limitations">
              <p>Prohibited content includes material that is harmful, threatening, defamatory, obscene, pornographic, or advocates illegal conduct. Users cannot probe security vulnerabilities or send unsolicited emails.</p>
            </Section>

            <Section title="Testimonials">
              <p>Testimonials reflect honest client opinions but are not guarantees of similar results.</p>
            </Section>

            <Section title="No Formal Endorsements">
              <p>Links to other companies do not guarantee success and are not endorsements. Users take responsibility for third-party purchases.</p>
            </Section>

            <Section title="Affiliate Disclosure">
              <p>The company may receive compensation from affiliate links. Users independently decide whether to use them and assume responsibility for resulting purchases.</p>
            </Section>

            <Section title="Third Party Links">
              <p>Links to external sites are educational only. Bluebay Agency, LLC is not responsible for the content, availability, or accuracy of other websites.</p>
              <p>Third-party privacy policies may differ; users should review them independently.</p>
            </Section>

            <Section title="Termination">
              <p>The company reserves the right to terminate website access anytime for any reason.</p>
            </Section>

            <Section title="Dispute Resolution and Jurisdiction">
              <p>Terms are governed by California law. The nearest state and federal court to Hermosa Beach, CA shall have exclusive jurisdiction over disputes.</p>
              <p>Bluebay Agency, LLC may recover attorney&apos;s fees if enforcement action is needed.</p>
            </Section>

            <Section title="Severability">
              <p>Invalid provisions are severed while remaining terms stay enforceable.</p>
            </Section>

            <Section title="Modification of Terms and Conditions">
              <p>The company may modify terms anytime without notice. Changes take effect immediately upon posting, and continued use indicates acceptance.</p>
            </Section>

          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        .prose-legal p {
          font-family: var(--font-inter), sans-serif;
          font-weight: 300;
          color: rgba(42,42,42,0.65);
          line-height: 1.75;
          margin-bottom: 1rem;
          font-size: 0.9375rem;
        }
        .prose-legal ul {
          margin: 0.75rem 0 1rem 0;
          padding-left: 1.25rem;
          list-style: none;
        }
        .prose-legal ul li {
          font-family: var(--font-inter), sans-serif;
          font-weight: 300;
          color: rgba(42,42,42,0.60);
          font-size: 0.9375rem;
          line-height: 1.7;
          margin-bottom: 0.5rem;
          padding-left: 1rem;
          position: relative;
        }
        .prose-legal ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(42,42,42,0.25);
        }
        .prose-legal strong {
          font-weight: 500;
          color: rgba(42,42,42,0.80);
        }
        .prose-legal a {
          color: #1a3a5c;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .prose-legal a:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 pb-10 border-b border-gray-200/60 last:border-0 last:mb-0 last:pb-0">
      <h2 className="font-canela-deck font-light text-navy mb-4" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}>
        {title}
      </h2>
      <div className="prose-legal">{children}</div>
    </div>
  )
}
