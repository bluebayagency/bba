'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import MailerLiteSignup from './MailerLiteSignup'

export default function Footer() {
  const { t } = useTranslation()

  const footerLinks = [
    { key: 'nav.work', href: '#work' },
    { key: 'nav.process', href: '#process' },
    { key: 'nav.pricing', href: '#pricing' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.faq', href: '#faq' },
    { key: 'contact.eyebrow', href: '#contact' },
  ]

  const certBadges = t('about.certifications', { returnObjects: true }) as Array<{ label: string; sub: string }>

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <img
                src="/images/logos/bluebay-agency-secondary-blue.svg"
                alt="Bluebay Agency"
                className="object-contain object-left"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.85, width: '160px', height: 'auto' }}
              />
            </a>
            <p className="font-sans font-light text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span className="font-sans text-xs text-white/35">{t('footer.location')}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs font-medium text-white/40 tracking-[0.2em] uppercase mb-6">
              {t('footer.nav_title')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm font-light text-white/40 hover:text-white/80 transition-colors duration-200"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-medium text-white/40 tracking-[0.2em] uppercase mb-6">
              {t('footer.contact_title')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@bluebayagency.com"
                  className="font-sans text-sm font-light text-white/40 hover:text-white/80 transition-colors duration-200"
                >
                  hello@bluebayagency.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+12138677879"
                  className="font-sans text-sm font-light text-white/40 hover:text-white/80 transition-colors duration-200"
                >
                  (213) 867-7879
                </a>
              </li>
              <li className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white/60 font-sans text-xs font-medium px-4 py-2.5 transition-all duration-300"
                >
                  {t('footer.book_cta')}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-sans text-xs font-medium text-white/40 tracking-[0.2em] uppercase mb-6">
              Newsletter
            </h4>
            <MailerLiteSignup />
          </div>
        </div>

        {/* Certifications row */}
        <div className="py-10 border-t border-white/[0.07] border-b border-b-white/[0.07]">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <span className="font-sans text-xs text-white/25 tracking-[0.15em] uppercase flex-shrink-0">
              {t('footer.certs_label')}
            </span>
            <div className="flex flex-wrap gap-3">
              {certBadges.map((cert) => (
                <div
                  key={cert.label}
                  className="flex items-center gap-2 border border-white/[0.08] px-4 py-2"
                >
                  <div className="w-1 h-1 rounded-full bg-white/25" />
                  <span className="font-sans text-xs text-white/40">
                    <span className="text-white/60 font-medium">{cert.label}</span>
                    {' '}{cert.sub}
                  </span>
                </div>
              ))}
            </div>
            <div className="md:ml-auto flex items-center gap-3">
              <Image
                src="/images/logos/mb-chamber-member.png"
                alt="Manhattan Beach Chamber of Commerce"
                width={48}
                height={48}
                className="h-10 w-auto object-contain opacity-40 hover:opacity-60 transition-opacity duration-200"
              />
              <span className="font-sans text-xs text-white/25 leading-tight">
                {t('footer.chamber_label')}<br />{t('footer.chamber_sub')}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/20">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-sans text-xs text-white/20 hover:text-white/40 transition-colors duration-200">
              {t('footer.privacy')}
            </a>
            <a href="#" className="font-sans text-xs text-white/20 hover:text-white/40 transition-colors duration-200">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
