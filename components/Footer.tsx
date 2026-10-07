'use client'

import { useTranslation } from 'react-i18next'
import { offerHref, type Offer } from './sections'
import { CONTACT_HREF, GOOGLE_REVIEWS_HREF, INSTAGRAM_HREF } from './ui'

// Facebook is in the content spec; add it here once the page URL is available.
const socials = [
  { label: 'Instagram', href: INSTAGRAM_HREF, viewBox: '0 0 24 24', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'Google Reviews', href: GOOGLE_REVIEWS_HREF, viewBox: '0 0 488 512', d: 'M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/bluebay-agency-llc/', viewBox: '0 0 24 24', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/bluebayagencyllc/', viewBox: '0 0 24 24', d: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
]

const linkClass =
  'font-sans text-sm font-light text-white/80 underline underline-offset-4 decoration-white/30 hover:text-white hover:decoration-white transition-colors duration-200'

export default function Footer() {
  const { t } = useTranslation()

  // An "Email" link belongs here too, once the public inbox address is confirmed.
  const getInTouch = [
    { label: t('footer.contact_us'), href: CONTACT_HREF },
    { label: t('footer.call'), href: 'tel:+12138677879' },
    { label: t('footer.text'), href: 'sms:+12138677879' },
  ]
  const offers = (t('offers', { returnObjects: true }) as Offer[]).map((o) => ({ label: o.name, href: offerHref(o.id) }))

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-14">
          <div>
            <a href="/" className="inline-block">
              <img
                src="/images/logos/Bluebay-Agency-Logo-900x275-White.png"
                alt="Bluebay Agency"
                width={900}
                height={275}
                className="h-auto w-44 md:w-52 object-contain object-left"
              />
            </a>
            <p className="mt-4 font-sans text-xs font-medium uppercase tracking-[0.25em] text-white/70">{t('footer.tagline')}</p>
            <div className="mt-8 flex items-center gap-4">
              <span className="font-sans text-sm font-light text-white/70">{t('footer.follow')}</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox={s.viewBox}>
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns sit together on the right on desktop */}
          <div className="flex flex-wrap gap-x-16 gap-y-10 lg:justify-end">
          <nav aria-label={t('footer.get_in_touch')} className="text-left lg:text-center">
            <h2 className="font-sans text-sm font-medium text-white">{t('footer.get_in_touch')}</h2>
            <ul className="mt-5 space-y-2">
              {getInTouch.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t('footer.services')} className="text-left lg:text-center">
            <h2 className="font-sans text-sm font-medium text-white">{t('footer.services')}</h2>
            <ul className="mt-5 space-y-2">
              {offers.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <a
            href="https://share.google/EeYIuooVMIY5BSS2X"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-white/60 hover:text-white/80 transition-colors duration-200"
          >
            {t('footer.address')}
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <p className="font-sans text-xs text-white/60">
              &copy; {new Date().getFullYear()} {t('footer.copyright')}
            </p>
            <a href="/privacy-policy" className="font-sans text-xs text-white/60 hover:text-white/80 transition-colors duration-200">
              {t('footer.privacy')}
            </a>
            <a href="/terms-and-conditions" className="font-sans text-xs text-white/60 hover:text-white/80 transition-colors duration-200">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
