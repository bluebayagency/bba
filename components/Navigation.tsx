'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'

const navKeys = ['work', 'process', 'pricing', 'about', 'faq'] as const
const navAnchors = ['#work', '#process', '#pricing', '#about', '#faq']

function GlobeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  )
}

export default function Navigation() {
  const { t, i18n } = useTranslation()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const navHrefs = navAnchors.map((a) => (isHome ? a : `/${a}`))
  const contactHref = isHome ? '#contact' : '/#contact'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [bannerOffset, setBannerOffset] = useState(0)

  useEffect(() => {
    const update = () => {
      setBannerOffset(document.documentElement.classList.contains('has-banner') ? 36 : 0)
    }
    update()
    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const switchLang = () => {
    const next = i18n.language.startsWith('es') ? 'en' : 'es'
    const url = new URL(window.location.href)
    url.searchParams.set('lng', next)
    window.location.href = url.toString()
  }

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 bg-soft-white border-b border-gray-border ${
          scrolled ? 'shadow-sm shadow-navy/5' : ''
        } py-4`}
        style={{ top: bannerOffset }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Primary logo — navy on soft-white */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/images/logos/bluebay-agency-primary-blue.svg"
              alt="Bluebay Agency"
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navKeys.map((key, i) => (
              <a
                key={key}
                href={navHrefs[i]}
                className="nav-link font-sans text-sm font-light text-navy/70 hover:text-navy tracking-wide transition-colors duration-200"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
          </div>

          {/* Right: lang switcher + CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <button
              onClick={switchLang}
              className="hidden sm:flex items-center gap-1.5 font-sans text-xs font-medium text-navy/50 hover:text-navy border border-gray-border hover:border-navy/30 px-3 py-1.5 transition-all duration-200"
              aria-label="Switch language"
            >
              <GlobeIcon />
              <span>{t('lang.switch_label')}</span>
            </button>

            <a
              href={contactHref}
              className="hidden sm:inline-flex items-center gap-2 bg-navy hover:bg-navy/80 text-white font-sans text-sm font-medium px-5 py-2.5 transition-colors duration-200 tracking-wide"
            >
              {t('nav.cta')}
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px bg-navy transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block w-5 h-px bg-navy transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-px bg-navy transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm" />
      </div>

      {/* Mobile panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-soft-white flex flex-col pt-20 pb-10 px-8 transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-1">
          {navKeys.map((key, i) => (
            <a
              key={key}
              href={navHrefs[i]}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-2xl font-light text-navy/80 hover:text-navy py-3 border-b border-gray-border transition-colors duration-200"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-3">
          <a
            href={contactHref}
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-navy text-white font-sans text-sm font-medium py-4 hover:bg-navy/80 transition-colors duration-200"
          >
            {t('nav.cta')}
          </a>
          <button
            onClick={switchLang}
            className="flex items-center justify-center gap-2 font-sans text-sm text-navy/50 hover:text-navy transition-colors duration-200"
          >
            <GlobeIcon />
            <span>{t('lang.switch_label')}</span>
          </button>
        </div>
      </div>
    </>
  )
}
