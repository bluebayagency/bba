'use client'

import { useState } from 'react'

// MailerLite "Enter giveaway" form (embed code pfTvpY). This is the numeric ID from the
// form's action URL: https://assets.mailerlite.com/jsonp/2153473/forms/<FORM_ID>/subscribe
// The form has the built-in Email, Name and Company fields. Company holds the
// visitor's website, as on the Chamber form.
const FORM_ID = '202192072472528133'
const MAILERLITE_ACCOUNT = '2153473'

export type AiCheckLeadContext = {
  business: string
  city: string
  answer: 'yes' | 'somewhat' | 'no' | null
}

const inputClass =
  'block h-[56px] w-full rounded-[4px] border-2 border-navy/40 bg-white px-4 font-sans text-lg text-navy placeholder:text-charcoal/60'

export default function MailerLiteAiCheckForm({
  context,
  kiosk = false,
  onStart,
  onSuccess,
}: {
  context: AiCheckLeadContext
  /** On the shared booth tablet, keep the browser from saving or suggesting visitors' details. */
  kiosk?: boolean
  /** Called on first input, so kiosk mode knows something has been entered. */
  onStart?: () => void
  onSuccess?: () => void
}) {
  const [fields, setFields] = useState({ name: '', email: '', website: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // TODO: to save the Step 1 and Step 2 answers with each entry, add the fields to the
  // MailerLite form (built-in City, plus custom fields such as business and ai_answer)
  // and append them below, e.g. body.append('fields[city]', context.city).
  void context

  function update(key: keyof typeof fields, value: string) {
    setFields((f) => ({ ...f, [key]: value }))
    onStart?.()
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const body = new FormData()
      body.append('fields[name]', fields.name)
      body.append('fields[email]', fields.email)
      body.append('fields[company]', fields.website)
      body.append('ml-submit', '1')
      body.append('anticsrf', 'true')

      const res = await fetch(
        `https://assets.mailerlite.com/jsonp/${MAILERLITE_ACCOUNT}/forms/${FORM_ID}/subscribe`,
        { method: 'POST', body }
      )
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) onSuccess?.()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-md border-2 border-navy bg-french-blue-light p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy">
            <svg aria-hidden="true" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </span>
          <p className="font-roboto text-2xl font-bold text-navy">You&apos;re entered!</p>
        </div>
        <p className="font-sans text-lg text-charcoal">Thanks for stopping by. Watch your inbox for AI search tips.</p>
      </div>
    )
  }

  const connected = Boolean(FORM_ID)
  const autofill = (token: string) => (kiosk ? 'off' : token)

  return (
    <form onSubmit={handleSubmit} autoComplete={autofill('on')} className="space-y-5">
      {!connected && (
        <p className="rounded-[4px] border-2 border-dashed border-navy/30 p-4 font-sans text-base text-charcoal">
          Form not connected yet. Add the MailerLite form ID in MailerLiteAiCheckForm.tsx.
        </p>
      )}
      <div>
        <label htmlFor="ai-check-name" className="mb-2 block font-sans text-lg font-medium text-navy">
          Name
        </label>
        <input
          id="ai-check-name"
          type="text"
          required
          autoComplete={autofill('name')}
          value={fields.name}
          onChange={(e) => update('name', e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="ai-check-email" className="mb-2 block font-sans text-lg font-medium text-navy">
          Email
        </label>
        <input
          id="ai-check-email"
          type="email"
          required
          autoComplete={autofill('email')}
          value={fields.email}
          onChange={(e) => update('email', e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="ai-check-website" className="mb-2 block font-sans text-lg font-medium text-navy">
          Website
        </label>
        <input
          id="ai-check-website"
          type="text"
          inputMode="url"
          required
          autoComplete={autofill('url')}
          autoCapitalize="none"
          placeholder="yourbusiness.com"
          value={fields.website}
          onChange={(e) => update('website', e.target.value)}
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={!connected || status === 'loading'}
        className="flex min-h-[60px] w-full items-center justify-center rounded-[4px] bg-navy px-6 font-sans text-lg font-medium text-white transition-colors duration-200 hover:bg-navy/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Enter to win'}
      </button>
      {status === 'error' && (
        <p role="alert" className="font-sans text-lg text-[#C8432B]">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
