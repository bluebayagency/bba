'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { CONTACT_HREF } from './ui'

const navLinks = [
  { key: 'services', href: '/services' },
  { key: 'about', href: '/about' },
  { key: 'work', href: '/work-with-us' },
  { key: 'contact', href: CONTACT_HREF },
] as const

function GlobeIcon() {
  return (
    <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  )
}

export default function Navigation() {
  const { t, i18n } = useTranslation()
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [bannerOffset, setBannerOffset] = useState(0)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const menuPanelRef = useRef<HTMLDivElement>(null)

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

  const menuToggledRef = useRef(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    // Skip focus management on first render so the hamburger isn't focused on page load.
    if (!menuToggledRef.current) {
      menuToggledRef.current = true
      return
    }
    if (menuOpen) {
      const firstFocusable = menuPanelRef.current?.querySelector<HTMLElement>('a, button')
      firstFocusable?.focus()
    } else {
      hamburgerRef.current?.focus()
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
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
        className={`fixed left-0 right-0 z-50 transition-all duration-300 bg-white border-b ${
          scrolled ? 'border-gray-border' : 'border-transparent'
        } py-5`}
        style={{ top: bannerOffset }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="/" className="flex-shrink-0">
            <img
              src="/images/logos/Bluebay-Agency-Logo-900x275.png"
              alt="Bluebay Agency"
              width={900}
              height={275}
              className="h-10 lg:h-12 w-auto object-contain object-left"
            />
          </a>

          {/* Desktop nav: right-aligned, next to the language switcher */}
          <div className="hidden lg:flex items-center gap-9 ml-auto mr-6">
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                aria-current={isActive(href) ? 'page' : undefined}
                className={`nav-link font-montserrat text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                  isActive(href) ? 'text-navy underline underline-offset-[6px] decoration-accent' : 'text-charcoal/80 hover:text-navy'
                }`}
              >
                {t(`nav.${key}`)}
              </a>
            ))}
          </div>

          {/* Right: lang switcher + hamburger */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <button
              onClick={switchLang}
              className="hidden sm:flex items-center gap-1.5 font-sans text-xs font-light text-charcoal/50 hover:text-navy px-2 py-1.5 transition-colors duration-200"
              aria-label="Switch language"
            >
              <GlobeIcon />
              <span>{t('lang.switch_label')}</span>
            </button>


            {/* Hamburger */}
            <button
              ref={hamburgerRef}
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
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
        <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm" />
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        ref={menuPanelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white flex flex-col pt-20 pb-10 px-8 transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(href) ? 'page' : undefined}
              className="font-montserrat text-sm font-medium uppercase tracking-[0.18em] text-navy/80 hover:text-navy py-4 border-b border-gray-border transition-colors duration-200"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-3">
          <a
            href={CONTACT_HREF}
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-navy text-white font-sans text-sm font-medium tracking-[0.08em] py-4 hover:bg-navy/90 transition-colors duration-200"
          >
            {t('cta.primary')}
          </a>
          <button
            onClick={switchLang}
            className="flex items-center justify-center gap-2 font-sans text-sm text-charcoal/50 hover:text-navy transition-colors duration-200"
          >
            <GlobeIcon />
            <span>{t('lang.switch_label')}</span>
          </button>
        </div>
      </div>
    </>
  )
}
