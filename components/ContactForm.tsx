'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type Status = 'idle' | 'sending' | 'sent' | 'error'
type Values = { first_name: string; last_name: string; email: string; phone: string; message: string; company: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm({
  idPrefix = 'contact',
  withPhone = true,
  fieldTone = 'sand',
}: {
  idPrefix?: string
  withPhone?: boolean
  /** Field fill: sand on white sections, white on sand sections. */
  fieldTone?: 'sand' | 'white'
}) {
  const { t } = useTranslation()
  const [values, setValues] = useState<Values>({ first_name: '', last_name: '', email: '', phone: '', message: '', company: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  const set = (key: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues({ ...values, [key]: e.target.value })

  const fill = fieldTone === 'sand' ? 'bg-sand' : 'bg-white'
  const input = `mt-2 w-full border border-transparent ${fill} px-5 py-3.5 font-sans font-light text-charcoal transition-colors duration-200 focus:border-navy`

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const { first_name, last_name, email, message: msg } = values
    if (![first_name, last_name, email, msg].every((v) => v.trim())) {
      setMessage(t('contact.missing'))
      return
    }
    if (!EMAIL_RE.test(email.trim())) {
      setMessage(t('contact.invalid_email'))
      return
    }
    setMessage('')
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('sent')
    } catch {
      setStatus('error')
      setMessage(t('contact.error'))
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className={`rounded-md ${fill} px-8 py-12`}>
        <h3 className="font-canela-deck font-light text-navy text-3xl">{t('contact.success_h2')}</h3>
        <p className="mt-3 font-sans font-light text-charcoal leading-relaxed">{t('contact.success_body')}</p>
      </div>
    )
  }

  const label = (key: string, required: boolean) => (
    <>
      {t(`contact.${key}`)}
      {required && <span className="ml-1.5 text-xs text-charcoal/60">{t('contact.required')}</span>}
    </>
  )

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
        {(['first_name', 'last_name'] as const).map((key) => (
          <div key={key}>
            <label htmlFor={`${idPrefix}-${key}`} className="block font-sans text-sm text-navy">
              {label(key, true)}
            </label>
            <input
              id={`${idPrefix}-${key}`}
              name={key}
              type="text"
              autoComplete={key === 'first_name' ? 'given-name' : 'family-name'}
              required
              value={values[key]}
              onChange={set(key)}
              className={`${input} rounded-[40px]`}
            />
          </div>
        ))}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-email`} className="block font-sans text-sm text-navy">
          {label('email', true)}
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={set('email')}
          className={`${input} rounded-[40px]`}
        />
      </div>

      {withPhone && (
        <div>
          <label htmlFor={`${idPrefix}-phone`} className="block font-sans text-sm text-navy">
            {label('phone', false)}
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set('phone')}
            className={`${input} rounded-[40px]`}
          />
        </div>
      )}

      <div>
        <label htmlFor={`${idPrefix}-message`} className="block font-sans text-sm text-navy">
          {label('message', true)}
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={set('message')}
          className={`${input} rounded-[40px] resize-y`}
        />
      </div>

      {/* Honeypot: hidden from people, filled in by bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${idPrefix}-company`}>Company</label>
        <input id={`${idPrefix}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" value={values.company} onChange={set('company')} />
      </div>

      {message && (
        <p role="alert" className="font-sans text-sm text-navy">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center rounded-[4px] bg-navy hover:bg-navy/90 disabled:opacity-60 text-white font-sans text-sm font-medium tracking-wide px-10 py-4 transition-colors duration-300"
      >
        {status === 'sending' ? t('contact.sending') : t('contact.submit')}
      </button>
    </form>
  )
}
