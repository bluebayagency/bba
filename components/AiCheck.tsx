'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import MailerLiteAiCheckForm from '@/components/MailerLiteAiCheckForm'
import { ButtonLink, CALENDLY_HREF } from '@/components/ui'
import { track } from '@/lib/analytics'
import { copy } from '@/lib/copy'

// Booth page for the AI Check. Kiosk mode (?kiosk=1) shows the clear button and
// resets the page after two minutes of no touch or typing.

const DEFAULT_CITY = 'Redondo Beach'
const IDLE_RESET_MS = 2 * 60 * 1000
const SHOP_HREF = '/shop'

const BUSINESSES = [
  { id: 'med-spa', label: 'Med spa', phrase: 'med spa' },
  { id: 'pilates', label: 'Pilates studio', phrase: 'Pilates studio' },
  { id: 'fitness', label: 'Fitness studio', phrase: 'boutique fitness studio' },
  { id: 'vet', label: 'Vet clinic', phrase: 'vet clinic' },
  { id: 'functional-medicine', label: 'Functional medicine', phrase: 'functional medicine doctor' },
  { id: 'longevity', label: 'Longevity coach', phrase: 'longevity coach' },
  { id: 'other', label: 'Other', phrase: '' },
] as const

type BusinessId = (typeof BUSINESSES)[number]['id']
type Answer = 'yes' | 'somewhat' | 'no'

const ANSWERS: { id: Answer; title: string; subtitle: string; selected: string }[] = [
  { id: 'yes', title: 'Yes', subtitle: 'AI named me', selected: 'bg-[#1E6B45] border-[#1E6B45] text-white' },
  { id: 'somewhat', title: 'Kind of', subtitle: 'Thin or wrong info', selected: 'bg-[#F2B544] border-[#F2B544] text-navy' },
  { id: 'no', title: 'No', subtitle: 'AI named others', selected: 'bg-[#C8432B] border-[#C8432B] text-white' },
]

const MESSAGES: Record<Answer | 'default', string> = {
  default: 'Want more clients from AI search? Pick the path that fits you.',
  yes: "Nice! AI knows you. Let's keep you at the top as more clients search this way. Pick the path that fits you.",
  somewhat: 'AI knows a little about you. A few fixes can move you to the top. Pick the path that fits you.',
  no: 'AI is sending clients to other businesses. Good news: this is fixable. Pick the path that fits you.',
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
}

/** Scrolls a step into view and moves focus to its heading for keyboard and screen reader users. */
function goToStep(id: string) {
  const section = document.getElementById(id)
  if (!section) return
  section.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
  section.querySelector<HTMLElement>('h2')?.focus({ preventScroll: true })
}

function Check({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={`h-5 w-5 flex-shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function Step({
  id,
  number,
  title,
  tone = 'white',
  wide = false,
  children,
}: {
  id: string
  number: number
  title: string
  tone?: 'white' | 'tint'
  /** Widens the content area (heading stays at reading width), for side-by-side cards. */
  wide?: boolean
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`${tone === 'tint' ? 'bg-french-blue-light' : 'bg-white'} scroll-mt-4 border-t border-gray-border py-14 md:py-20`}
    >
      <div className={`mx-auto px-4 sm:px-6 ${wide ? 'max-w-5xl' : 'max-w-3xl'}`}>
        <div className="mx-auto mb-8 flex max-w-3xl items-start gap-4">
          <span
            aria-hidden="true"
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy font-roboto text-xl font-bold text-white"
          >
            {number}
          </span>
          <div>
            <p className="font-sans text-base font-medium uppercase tracking-[0.2em] text-charcoal">Step {number}</p>
            <h2
              id={`${id}-title`}
              tabIndex={-1}
              className="font-canela-deck font-medium leading-tight text-navy"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}
            >
              {title}
            </h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}

export default function AiCheck() {
  const [kiosk, setKiosk] = useState(false)
  const [businessId, setBusinessId] = useState<BusinessId | null>(null)
  const [otherBusiness, setOtherBusiness] = useState('')
  const [city, setCity] = useState(DEFAULT_CITY)
  const [answer, setAnswer] = useState<Answer | null>(null)
  const [formTouched, setFormTouched] = useState(false)
  // Bumping this remounts the entry form so the next person gets an empty one.
  const [formKey, setFormKey] = useState(0)
  const otherInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setKiosk(new URLSearchParams(window.location.search).get('kiosk') === '1')
  }, [])

  const business =
    businessId === 'other' ? otherBusiness.trim() : (BUSINESSES.find((b) => b.id === businessId)?.phrase ?? '')
  const trimmedCity = city.trim()
  const question = `Who is the best ${business} in ${trimmedCity}?`
  const ready = Boolean(business && trimmedCity)

  let preview = question
  if (!business) preview = 'Pick your business type above.'
  else if (!trimmedCity) preview = 'Add your city above.'

  const dirty = businessId !== null || city !== DEFAULT_CITY || answer !== null || formTouched

  // Every event carries mode so booth traffic can be compared with web traffic in GA4.
  const trackEvent = useCallback(
    (name: string, params: Record<string, string> = {}) => track(name, { ...params, mode: kiosk ? 'booth' : 'web' }),
    [kiosk]
  )

  const resetPage = useCallback((trigger: 'button' | 'idle') => {
    trackEvent('ai_check_kiosk_clear', { trigger })
    setBusinessId(null)
    setOtherBusiness('')
    setCity(DEFAULT_CITY)
    setAnswer(null)
    setFormTouched(false)
    setFormKey((k) => k + 1)
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
    window.scrollTo({ top: 0, behavior: scrollBehavior() })
  }, [trackEvent])

  // Kiosk idle reset. Paused while the tab is hidden, so a visitor reading the
  // ChatGPT or Google tab does not come back to a cleared page.
  useEffect(() => {
    if (!kiosk || !dirty) return
    let timer: ReturnType<typeof setTimeout> | undefined
    const restart = () => {
      clearTimeout(timer)
      if (!document.hidden) timer = setTimeout(() => resetPage('idle'), IDLE_RESET_MS)
    }
    const activity = ['pointerdown', 'touchstart', 'keydown', 'input', 'wheel'] as const
    activity.forEach((e) => window.addEventListener(e, restart, { passive: true }))
    document.addEventListener('visibilitychange', restart)
    restart()
    return () => {
      clearTimeout(timer)
      activity.forEach((e) => window.removeEventListener(e, restart))
      document.removeEventListener('visibilitychange', restart)
    }
  }, [kiosk, dirty, resetPage])

  useEffect(() => {
    if (businessId === 'other') otherInputRef.current?.focus()
  }, [businessId])

  const selectBusiness = (id: BusinessId) => {
    setBusinessId(id)
    trackEvent('ai_check_business_selected', { business: id })
  }

  const askAi = (engine: 'chatgpt' | 'google_ai') => {
    trackEvent(engine === 'chatgpt' ? 'ai_check_ask_chatgpt' : 'ai_check_ask_google_ai', { business: businessId ?? '' })
    setTimeout(() => goToStep('step-2'), 300)
  }

  const selectAnswer = (id: Answer) => {
    setAnswer(id)
    trackEvent('ai_check_answer', { answer: id })
    setTimeout(() => goToStep('step-3'), 300)
  }

  // Leave the confirmation on screen for a moment, then move on to the next step.
  const entrySubmitted = () => {
    trackEvent('ai_check_entry_submitted', { answer: answer ?? '' })
    setTimeout(() => goToStep('step-4'), 1500)
  }

  const encoded = encodeURIComponent(question)
  const askLinks = [
    { engine: 'chatgpt' as const, label: 'Ask ChatGPT', href: `https://chatgpt.com/?q=${encoded}` },
    { engine: 'google_ai' as const, label: 'Ask Google AI', href: `https://www.google.com/search?udm=50&q=${encoded}` },
  ]

  const inputClass =
    'block h-[56px] w-full rounded-[4px] border-2 border-navy/40 bg-white px-4 font-sans text-lg text-navy placeholder:text-charcoal/60'

  return (
    <>
      <main id="main-content" className="overflow-x-hidden">
        {/* HERO */}
        {/* Kiosk keeps the hero short so the Step 1 chips show on the tablet without scrolling. */}
        <section
          className={`bg-white px-4 text-center sm:px-6 ${kiosk ? 'pb-8 pt-8 md:pb-10 md:pt-10' : 'pb-14 pt-12 md:pb-20 md:pt-20'}`}
        >
          <div className="mx-auto max-w-3xl">
            <p className="mb-5 font-sans text-base font-medium uppercase tracking-[0.25em] text-charcoal">
              Bluebay Agency, Hermosa Beach
            </p>
            <h1
              className="mb-5 font-canela-deck font-bold leading-[1.08] text-navy"
              style={{ fontSize: 'clamp(2.25rem, 8vw, 4rem)' }}
            >
              Does AI recommend your business?
            </h1>
            <p className="mb-8 font-sans text-xl text-charcoal md:text-2xl">Find out in 60 seconds, right here.</p>
            <a
              href="#step-3"
              onClick={(e) => {
                e.preventDefault()
                goToStep('step-3')
              }}
              className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-sand px-5 py-3 font-sans text-lg font-medium text-navy transition-colors duration-200 hover:bg-[#CDC9BF]"
            >
              <svg aria-hidden="true" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
              Enter to win a free AI Visibility Audit
              <svg aria-hidden="true" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* STEP 1 */}
        <Step id="step-1" number={1} title="Ask AI like a new client would">
          <fieldset className="mb-8">
            <legend className="mb-4 font-sans text-lg font-medium text-navy">What kind of business do you run?</legend>
            <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 md:grid-cols-3">
              {BUSINESSES.map((b) => {
                const selected = businessId === b.id
                return (
                  <button
                    key={b.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => selectBusiness(b.id)}
                    className={`flex min-h-[56px] items-center justify-center gap-2 rounded-[4px] border-2 px-4 py-2 text-center font-sans text-lg font-medium transition-colors duration-200 ${
                      selected ? 'border-navy bg-navy text-white' : 'border-navy/30 bg-white text-navy hover:border-navy'
                    }`}
                  >
                    {selected && <Check />}
                    {b.label}
                  </button>
                )
              })}
            </div>
          </fieldset>

          {businessId === 'other' && (
            <div className="mb-8">
              <label htmlFor="ai-check-other" className="mb-2 block font-sans text-lg font-medium text-navy">
                Your business type
              </label>
              <input
                ref={otherInputRef}
                id="ai-check-other"
                type="text"
                value={otherBusiness}
                onChange={(e) => setOtherBusiness(e.target.value)}
                placeholder="e.g. chiropractor"
                autoComplete="off"
                className={inputClass}
              />
            </div>
          )}

          <div className="mb-8">
            <label htmlFor="ai-check-city" className="mb-2 block font-sans text-lg font-medium text-navy">
              City
            </label>
            <input
              id="ai-check-city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              autoComplete={kiosk ? 'off' : 'address-level2'}
              className={inputClass}
            />
          </div>

          <div className="mb-8 rounded-md border-2 border-navy bg-french-blue-light p-5 sm:p-6">
            <p className="mb-2 font-sans text-base font-medium uppercase tracking-[0.2em] text-charcoal">We&apos;ll ask AI</p>
            <p
              aria-live="polite"
              className={`font-canela-deck text-2xl leading-snug md:text-3xl ${ready ? 'font-medium text-navy' : 'text-charcoal'}`}
            >
              {ready ? `“${preview}”` : preview}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {askLinks.map((link) => (
              <a
                key={link.engine}
                href={ready ? link.href : undefined}
                target="_blank"
                rel="noopener noreferrer"
                role="link"
                aria-disabled={!ready}
                onClick={ready ? () => askAi(link.engine) : undefined}
                className={`flex min-h-[60px] items-center justify-center gap-2 rounded-[4px] px-6 font-sans text-lg font-medium transition-colors duration-200 ${
                  ready ? 'bg-navy text-white hover:bg-navy/90' : 'cursor-not-allowed bg-gray-border text-charcoal/70'
                }`}
              >
                {link.label}
                <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        </Step>

        {/* STEP 2 */}
        <Step id="step-2" number={2} title="Were you in the answer?" tone="tint">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {ANSWERS.map((a) => {
              const selected = answer === a.id
              return (
                <button
                  key={a.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => selectAnswer(a.id)}
                  className={`flex min-h-[96px] flex-col items-center justify-center rounded-md border-2 px-4 py-4 text-center transition-colors duration-200 ${
                    selected ? a.selected : 'border-navy/30 bg-white text-navy hover:border-navy'
                  }`}
                >
                  <span className="font-roboto text-2xl font-bold">{a.title}</span>
                  <span className="font-sans text-lg">{a.subtitle}</span>
                  {selected && (
                    <span className="mt-2 inline-flex items-center gap-1 font-sans text-base font-semibold">
                      <Check className="h-4 w-4" />
                      Selected
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </Step>

        {/* STEP 3 */}
        <Step id="step-3" number={3} title="Enter to win a free AI Visibility Audit">
          <p className="mb-8 font-sans text-lg text-charcoal">
            We&apos;ll review how AI sees your business and send you a list of fixes.
          </p>
          <MailerLiteAiCheckForm
            key={formKey}
            context={{ business, city: trimmedCity, answer }}
            kiosk={kiosk}
            onStart={() => setFormTouched(true)}
            onSuccess={entrySubmitted}
          />
          <p className="mt-6 font-sans text-lg leading-relaxed text-charcoal">
            By entering, you agree Bluebay Agency may email you about the giveaway and AI search tips. Unsubscribe
            anytime. No purchase needed. See the{' '}
            <a href="/ai-check/official-rules" target="_blank" rel="noopener" className="font-medium text-navy underline underline-offset-4">
              Official Rules
            </a>{' '}
            and{' '}
            <a href="/privacy-policy" target="_blank" rel="noopener" className="font-medium text-navy underline underline-offset-4">
              Privacy Policy
            </a>
            .
          </p>

          <figure className="mt-10 border-l-4 border-navy pl-5">
            <blockquote className="font-sans text-lg italic leading-relaxed text-navy">
              &ldquo;{copy.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-3 font-sans text-base text-charcoal">
              <span className="font-medium text-navy">{copy.testimonial.name}</span>, {copy.testimonial.role}
            </figcaption>
          </figure>
        </Step>

        {/* STEP 4 */}
        <Step id="step-4" number={4} title="Your next step" tone="tint" wide>
          <p aria-live="polite" className="mx-auto mb-10 max-w-3xl font-sans text-xl leading-relaxed text-navy">
            {MESSAGES[answer ?? 'default']}
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              {
                title: 'Done for you',
                copy: 'We fix your AI visibility for you. Start with a free 30-minute call.',
                button: 'Book a free call',
                href: CALENDLY_HREF,
                external: true,
                event: 'ai_check_book_call_click',
                qr: '/images/qr/ai-check-contact.png',
                qrAlt: 'QR code for bluebayagency.com/contact',
                caption: 'Scan with your phone to book',
              },
              {
                title: 'Do it yourself',
                copy: 'Step-by-step workbooks to fix it at your own pace.',
                button: 'bluebayagency.com/shop',
                href: SHOP_HREF,
                external: false,
                event: 'ai_check_shop_click',
                qr: '/images/qr/ai-check-shop.png',
                qrAlt: 'QR code for bluebayagency.com/shop',
                caption: 'Scan with your phone to shop',
              },
            ].map((card) => (
              <div key={card.title} className="flex flex-col rounded-md border border-gray-border bg-white p-6 sm:p-8">
                <h3 className="mb-3 font-roboto text-2xl font-bold text-navy">{card.title}</h3>
                <p className="mb-6 font-sans text-lg leading-relaxed text-charcoal">{card.copy}</p>
                <div className="mt-auto" onClickCapture={() => trackEvent(card.event)}>
                  <ButtonLink href={card.href} external={card.external} className="min-h-[56px] w-full !text-lg">
                    {card.button}
                  </ButtonLink>
                </div>
                <figure className="mt-6 flex flex-col items-center">
                  <img
                    src={card.qr}
                    alt={card.qrAlt}
                    width={160}
                    height={160}
                    className="h-40 w-40 border border-gray-border"
                  />
                  <figcaption className="mt-3 font-sans text-lg text-charcoal">{card.caption}</figcaption>
                </figure>
              </div>
            ))}
          </div>

          {kiosk && (
            <div className="mx-auto mt-12 max-w-3xl">
              <button
                type="button"
                onClick={() => resetPage('button')}
                className="flex min-h-[64px] w-full items-center justify-center rounded-[4px] border-2 border-navy bg-white px-6 font-sans text-xl font-medium text-navy transition-colors duration-200 hover:bg-sand"
              >
                Done. Clear for the next person
              </button>
            </div>
          )}
        </Step>
      </main>

      <footer className="bg-navy px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-sans text-sm text-white/70">
            &copy; {new Date().getFullYear()} Bluebay Agency, LLC
          </p>
          {!kiosk && (
            <div className="flex items-center gap-6">
              <a href="/privacy-policy" className="font-sans text-sm text-white/70 hover:text-white">Privacy Policy</a>
              <a href="/terms-and-conditions" className="font-sans text-sm text-white/70 hover:text-white">Terms</a>
            </div>
          )}
        </div>
      </footer>
    </>
  )
}
