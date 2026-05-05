'use client'

import { useState } from 'react'

export default function ResourceDownloadForm() {
  const [fields, setFields] = useState({ email: '', name: '' })
  const [optIn, setOptIn] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{ email?: string; optIn?: string }>({})

  function validate() {
    const e: typeof errors = {}
    if (!fields.email) e.email = 'Email is required.'
    if (!optIn) e.optIn = 'Please confirm to continue.'
    return e
  }

  async function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setStatus('loading')

    try {
      const body = new FormData()
      body.append('fields[email]', fields.email)
      body.append('fields[name]', fields.name)
      body.append('ml-submit', '1')
      body.append('anticsrf', 'true')

      const res = await fetch(
        'https://assets.mailerlite.com/jsonp/2153473/forms/180789768750106575/subscribe',
        { method: 'POST', body }
      )

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-navy/[0.04] border border-navy/10 px-8 py-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <p className="font-sans text-xs font-medium text-navy/40 tracking-[0.2em] uppercase">Guide Sent</p>
        </div>
        <h4 className="font-canela-deck font-light text-2xl text-navy mb-2">Check your inbox.</h4>
        <p className="font-sans font-light text-sm text-charcoal/50 leading-relaxed">
          The 7-Step Homepage Guide is on its way. If you don't see it within a few minutes, check your spam folder.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={fields.name}
          onChange={(e) => setFields({ ...fields, name: e.target.value })}
          className="w-full bg-white border border-gray-200 focus:border-navy outline-none font-sans font-light text-sm text-navy placeholder:text-gray-400 px-4 py-3.5 transition-colors duration-200"
        />
      </div>
      <div>
        <input
          type="email"
          required
          placeholder="Email Address"
          value={fields.email}
          onChange={(e) => { setFields({ ...fields, email: e.target.value }); setErrors({ ...errors, email: undefined }) }}
          className={`w-full bg-white border focus:border-navy outline-none font-sans font-light text-sm text-navy placeholder:text-gray-400 px-4 py-3.5 transition-colors duration-200 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
        />
        {errors.email && <p className="font-sans text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>
      <div className="flex items-start gap-3 pt-1">
        <button
          type="button"
          onClick={() => { setOptIn(!optIn); setErrors({ ...errors, optIn: undefined }) }}
          className={`w-4 h-4 mt-0.5 flex-shrink-0 border transition-colors duration-200 flex items-center justify-center ${optIn ? 'bg-navy border-navy' : 'bg-white border-gray-300'}`}
          aria-checked={optIn}
          role="checkbox"
        >
          {optIn && (
            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          )}
        </button>
        <label
          className="font-sans text-xs font-light text-charcoal/50 leading-relaxed cursor-pointer"
          onClick={() => { setOptIn(!optIn); setErrors({ ...errors, optIn: undefined }) }}
        >
          I agree to receive helpful web design and conversion tips from Bluebay Agency. Unsubscribe anytime.
        </label>
      </div>
      {errors.optIn && <p className="font-sans text-xs text-red-500">{errors.optIn}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-navy text-white font-sans text-xs font-medium tracking-[0.1em] uppercase px-4 py-4 hover:bg-navy/85 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
      >
        {status === 'loading' ? 'Sending…' : 'Send Me The Guide'}
      </button>

      {status === 'error' && (
        <p className="font-sans text-xs text-red-500 text-center pt-1">
          Something went wrong. Please try again or email us at hello@bluebayagency.com.
        </p>
      )}

      <p className="font-sans text-[11px] text-charcoal/30 text-center leading-relaxed pt-1">
        Free. No spam. Unsubscribe at any time.
      </p>
    </form>
  )
}
