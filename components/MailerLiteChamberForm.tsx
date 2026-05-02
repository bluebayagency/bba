'use client'

import { useState } from 'react'

export default function MailerLiteChamberForm() {
  const [fields, setFields] = useState({ email: '', name: '', company: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const body = new FormData()
      body.append('fields[email]', fields.email)
      body.append('fields[name]', fields.name)
      body.append('fields[company]', fields.company)
      body.append('ml-submit', '1')
      body.append('anticsrf', 'true')

      const res = await fetch(
        'https://assets.mailerlite.com/jsonp/2153473/forms/186341718061221247/subscribe',
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
      <div className="bg-navy/[0.04] border border-navy/10 px-8 py-10 text-left">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <p className="font-sans text-xs font-medium text-navy/40 tracking-[0.2em] uppercase">Application Received</p>
        </div>
        <h4 className="font-canela-deck font-light text-2xl text-navy mb-2">You're on the list.</h4>
        <p className="font-sans font-light text-sm text-charcoal/50 leading-relaxed">
          We'll confirm your eligibility within one business day. Keep an eye on your inbox.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        required
        placeholder="Email"
        value={fields.email}
        onChange={(e) => setFields({ ...fields, email: e.target.value })}
        className="w-full bg-white border border-gray-200 focus:border-navy outline-none font-sans font-light text-sm text-navy placeholder:text-gray-400 px-4 py-3.5 transition-colors duration-200"
      />
      <input
        type="text"
        placeholder="Full Name"
        value={fields.name}
        onChange={(e) => setFields({ ...fields, name: e.target.value })}
        className="w-full bg-white border border-gray-200 focus:border-navy outline-none font-sans font-light text-sm text-navy placeholder:text-gray-400 px-4 py-3.5 transition-colors duration-200"
      />
      <input
        type="text"
        required
        placeholder="Business Name and Website"
        value={fields.company}
        onChange={(e) => setFields({ ...fields, company: e.target.value })}
        className="w-full bg-white border border-gray-200 focus:border-navy outline-none font-sans font-light text-sm text-navy placeholder:text-gray-400 px-4 py-3.5 transition-colors duration-200"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-navy text-white font-sans text-xs font-medium tracking-[0.1em] uppercase px-4 py-4 hover:bg-navy/85 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
      >
        {status === 'loading' ? 'Submitting…' : 'Apply for One of 10 Priority Spots'}
      </button>
      {status === 'error' && (
        <p className="font-sans text-xs text-red-500 text-center pt-1">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  )
}
