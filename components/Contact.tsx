'use client'

import { useTranslation } from 'react-i18next'
import DubsadoForm from './DubsadoForm'
import { ArrowLink, Body, CALENDLY_HREF, Container } from './ui'

/**
 * Two-column contact block: heading and note on the left, inquiry form on the right.
 * "page" is the /contact page (H1, phone field, Book a Call); "about" is the shorter
 * section at the end of the About page.
 */
export default function Contact({ variant = 'page' }: { variant?: 'page' | 'about' }) {
  const { t } = useTranslation()
  const isPage = variant === 'page'
  const title = t('contact.title', { returnObjects: true }) as string[]

  return (
    <section id="contact" className={`${isPage ? 'bg-white pt-40 md:pt-52' : 'bg-sand pt-24 md:pt-36'} pb-28 md:pb-40`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className={isPage ? 'animate-fade-up opacity-0' : ''}>
            {isPage ? (
              <>
                <p className="mb-6 font-sans text-xs md:text-sm font-light tracking-[0.3em] uppercase text-accent">
                  {t('contact.eyebrow')}
                </p>
                <h1
                  className="font-canela-deck font-light text-navy leading-[1.08]"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  {title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <Body className="mt-8 max-w-md text-lg">{t('contact.body')}</Body>
                <div className="mt-12">
                  <p className="font-sans text-sm font-light text-charcoal/80">{t('contact.call_prompt')}</p>
                  <ArrowLink href={CALENDLY_HREF} external className="mt-2">
                    {t('cta.call')}
                  </ArrowLink>
                </div>
              </>
            ) : (
              <>
                <h2
                  className="font-canela-deck font-light text-navy leading-[1.08]"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  {t('about.contact_h2')}
                </h2>
                <Body className="mt-8 max-w-md text-lg">{t('about.contact_body')}</Body>
              </>
            )}
          </div>
          <div className={isPage ? 'animate-fade-up-delay opacity-0' : ''}>
            <DubsadoForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
