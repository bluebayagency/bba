import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Bluebay Agency, LLC.',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="font-sans text-sm text-charcoal/40">Last Modified: 03/16/2026</p>
          </div>

          <div className="prose-legal">

            <Section title="Purpose">
              <p>Bluebay Agency, LLC is dedicated to safeguarding user privacy. This policy outlines what personal data may be collected when visiting bluebayagency.com and how the company handles such information.</p>
            </Section>

            <Section title="Privacy Policy Consent">
              <p>Users must accept this policy to use the website. The agreement covers information collected on the site, through electronic communications, and via third-party advertising linked to this policy. It does not apply to offline data collection or information gathered by unaffiliated third parties.</p>
            </Section>

            <Section title="Notice Regarding Applicability of U.S. State Privacy Laws">
              <p>The company does not currently meet thresholds requiring compliance with CCPA/CPRA or other state consumer privacy laws from California, Colorado, Connecticut, Delaware, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, Nevada, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, and Virginia. However, the organization commits to transparent and responsible data handling aligned with accepted privacy principles.</p>
            </Section>

            <Section title="Children's Online Privacy Protection Act (COPPA)">
              <p>The website is not intended for persons under eighteen years old. Children cannot use interactive sections, comment, fill forms, or submit information. Parents or guardians should contact the company if their child's data was collected without authorization so it can be deleted.</p>
            </Section>

            <Section title="CAN-SPAM Act of 2003">
              <p>The company complies with anti-spam regulations and does not transmit misleading information.</p>
            </Section>

            <Section title="Personal Information We Collect">
              <p>The company collects:</p>
              <ul>
                <li>Contact details (name, email, address, phone)</li>
                <li>Correspondence records if you contact them</li>
                <li>Transaction details and order fulfillment information</li>
                <li>Comments, feedback, and questions</li>
                <li>Website visit details, traffic data, and location information</li>
                <li>Computer and internet connection data, including IP address, operating system, and browser type</li>
              </ul>
            </Section>

            <Section title="Sources of Personal Information">
              <p>Users provide information when:</p>
              <ul>
                <li>Subscribing to or purchasing products/services</li>
                <li>Completing contact forms or email opt-ins</li>
              </ul>
              <p>The company automatically collects data when you:</p>
              <ul>
                <li>Visit or interact with the website</li>
                <li>Access or download content</li>
                <li>Open emails or click email links</li>
              </ul>
              <p>Third-party advertisers using cookies provide interest-based advertising data.</p>
            </Section>

            <Section title="How We Use the Information / Lawful Bases">
              <p>The company processes information to:</p>
              <ul>
                <li>Fulfill contracts and transactions</li>
                <li>Meet obligations and enforce rights from agreements</li>
                <li>Respond to requests and inquiries</li>
                <li>Notify about website or service changes</li>
                <li>Send marketing communications</li>
                <li>Administer promotions, contests, and surveys</li>
                <li>Improve website functionality</li>
                <li>Protect security and integrity</li>
                <li>Provide interest-based advertising</li>
              </ul>
              <p>The company will not sell or share personal information and has not done so in the past twelve months. Data may be transferred during bankruptcy, merger, acquisition, or when legally required.</p>
            </Section>

            <Section title="Use of Cookies">
              <p>Cookies are small text files identifying users and collecting visit information. First-party cookies are set by the website; third-party cookies come from advertising or analytics providers. Users can disable cookies through browser settings, though this may reduce site functionality.</p>
            </Section>

            <Section title="Interest-Based Advertising">
              <p>Third parties collect data to provide targeted advertisements. Users can opt out by:</p>
              <ul>
                <li>Adjusting browser privacy settings</li>
                <li>Using the Digital Advertising Alliance tool at optout.aboutads.info</li>
                <li>Using the Network Advertising Initiative tool at networkadvertising.org/choices</li>
                <li>Visiting youronlinechoices.com (for EU residents)</li>
              </ul>
            </Section>

            <Section title='"Do Not Track" (DNT) Signals'>
              <p>Due to lack of industry standardization, the company does not alter operations based on DNT signals.</p>
            </Section>

            <Section title="How the Information is Shared">
              <p>Information is shared with third-party service providers including eCommerce platforms, payment processors, email services, IT providers, and security software vendors.</p>
              <p>Data is disclosed when necessary to:</p>
              <ul>
                <li>Comply with laws or legal obligations</li>
                <li>Detect and prevent security, fraud, or technical issues</li>
                <li>Protect the company, website, users, employees, or others</li>
              </ul>
              <p>Current service providers include: MailerLite, PayPal, Stripe, Shopify, Google Analytics, and TypeForm.</p>
            </Section>

            <Section title="Information Retention">
              <p>The company retains data as long as necessary to fulfill requests, comply with legal obligations, maintain business records, resolve disputes, prevent fraud, or enforce agreements — or until you request deletion.</p>
            </Section>

            <Section title="Information Protection and Security">
              <p>The website uses SSL certificates and commercially acceptable security measures. Credit card information is never transmitted via email. If you receive suspicious requests, do not respond. While the company protects information, internet transmission carries inherent risks. Data breach notifications occur when legally required.</p>
            </Section>

            <Section title="Your Rights to Control Your Information">
              <p>You can unsubscribe from email communications using links in messages. Local data protection laws may grant additional rights depending on your location.</p>
              <p>Potential rights include:</p>
              <ul>
                <li><strong>Right to Disclosure/Access</strong> — Know what information is collected about you</li>
                <li><strong>Right to Correct/Rectification</strong> — Request correction of inaccurate data</li>
                <li><strong>Right to Erasure/Deletion</strong> — Request personal information removal</li>
                <li><strong>Right to Nondiscrimination</strong> — Receive equal service despite exercising privacy rights</li>
                <li><strong>Right to Obtain a List of Specific Third Parties</strong> — Request names of parties receiving your data</li>
                <li><strong>Right to Obtain Categories of Third Parties</strong> — Request categories of recipient organizations</li>
                <li><strong>Right to Opt Out of Targeted Advertising</strong> — Prevent use for advertising purposes</li>
                <li><strong>Right to Limit Use of Sensitive Personal Information</strong> — Restrict sensitive data usage</li>
                <li><strong>Right to Data Portability</strong> — Receive information in machine-readable or usable format</li>
                <li><strong>Right to Withdraw Consent</strong> — Stop processing based on prior authorization</li>
                <li><strong>Right to Remain Anonymous or Use a Pseudonym</strong> — Identify yourself alternatively when practical</li>
                <li><strong>Right to Restrict Processing</strong> — Limit purposes for data processing</li>
                <li><strong>Right to Object to Processing</strong> — Oppose information handling, especially for marketing</li>
                <li><strong>Right to Stop Unwanted Direct Marketing</strong> — Request cessation of promotional communications</li>
                <li><strong>Right to Complain</strong> — Lodge complaints with regulatory authorities</li>
                <li><strong>Right to Appeal</strong> — Challenge decisions about privacy rights requests</li>
              </ul>
            </Section>

            <Section title="Exercising Your Rights">
              <p>To exercise rights, submit requests to hello@bluebayagency.com specifying which right applies and providing identity verification information. The company responds within thirty to forty-five calendar days and may request additional time or deny requests if legal exceptions apply. You may appeal decisions using the same contact method.</p>
            </Section>

            <Section title="Use and Transfer of Your Information Out of the EEA or Canada">
              <p>The website operates in the United States, and third-party partners are also located there or outside the EEA and Canada. By using the site, you consent to transferring your information internationally.</p>
            </Section>

            <Section title="Contact Us">
              <p>For privacy questions or concerns, use the web form at bluebayagency.com/contact or email <a href="mailto:hello@bluebayagency.com">hello@bluebayagency.com</a>.</p>
            </Section>

            <Section title="Changes to this Privacy Policy">
              <p>The company updates this policy by posting changes and updating the revision date. Material changes trigger email notification to users who provided contact information and prominent website notices.</p>
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
