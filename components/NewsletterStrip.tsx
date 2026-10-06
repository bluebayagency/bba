'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ImageSlot } from './ui'

// Same MailerLite list the site's newsletter form has used.
const MAILERLITE_URL = 'https://assets.mailerlite.com/jsonp/2153473/forms/182156023212016988/subscribe'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** "Stay Inspired" newsletter strip: image left, signup right. */
export default function NewsletterStrip() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setMessage(t('newsletter.invalid'))
      return
    }
    setMessage('')
    setStatus('sending')
    try {
      const body = new FormData()
      body.append('fields[email]', email.trim())
      body.append('ml-submit', '1')
      body.append('anticsrf', 'true')
      const res = await fetch(MAILERLITE_URL, { method: 'POST', body })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('sent')
    } catch {
      setStatus('error')
      setMessage(t('newsletter.error'))
    }
  }

  return (
    <section className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        <ImageSlot
          src="/images/stock/bluebay-agency-laptop-mobile-preview-cafe.jpg"
          alt={t('newsletter.image')}
          label={t('newsletter.image')}
          placeholderText={t('img.placeholder')}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="min-h-[18rem] lg:min-h-[30rem]"
        />
        <div className="flex flex-col justify-center px-6 py-20 md:py-24 lg:pl-16 lg:pr-[max(2rem,calc((100vw-72rem)/2+2rem))] text-left lg:text-right">
          <h2 className="font-canela-deck font-light text-navy leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
            {t('newsletter.h_pre')}{' '}
            <em className="bg-navy px-3 italic text-white [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
              {t('newsletter.h_mark')}
            </em>
          </h2>
          <p className="mt-8 font-sans font-medium italic text-accent">{t('newsletter.sub')}</p>
          <p className="mt-4 font-sans font-light text-charcoal leading-relaxed lg:ml-auto max-w-md">{t('newsletter.body')}</p>

          {status === 'sent' ? (
            <p role="status" className="mt-8 font-canela-deck italic text-navy text-xl">
              {t('newsletter.success')}
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col sm:flex-row gap-3 lg:justify-end">
              <label htmlFor="newsletter-email" className="sr-only">
                {t('newsletter.email')}
              </label>
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                placeholder={t('newsletter.email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-72 rounded-[40px] border border-gray-border bg-white px-5 py-3.5 font-sans font-light text-charcoal placeholder:text-charcoal/50 focus:border-navy"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="rounded-[4px] bg-navy px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-white hover:bg-navy/90 disabled:opacity-60 transition-colors duration-300"
              >
                {status === 'sending' ? t('newsletter.sending') : t('newsletter.submit')}
              </button>
            </form>
          )}
          {message && (
            <p role="alert" className="mt-3 font-sans text-sm text-navy">
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
