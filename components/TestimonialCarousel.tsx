'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export type Quote = { quote: string; name: string; role: string }

/**
 * Horizontally scrolling testimonial cards with snap points. Arrow buttons appear only
 * when there are more cards than fit, so it works for any number of quotes.
 */
export default function TestimonialCarousel({
  quotes,
  prevLabel,
  nextLabel,
}: {
  quotes: Quote[]
  prevLabel: string
  nextLabel: string
}) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    update()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current
    const card = el?.querySelector('li')
    if (!el || !card) return
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 24), behavior: 'smooth' })
  }

  const arrow = 'absolute top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-opacity duration-300 hover:bg-navy/90'

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {quotes.map((q) => (
          <li
            key={q.quote}
            className="snap-start shrink-0 basis-[88%] sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] bg-sand px-8 py-10 md:px-10 md:py-12 flex flex-col"
          >
            <blockquote className="flex-1 font-sans font-light italic text-navy/90 leading-relaxed">&ldquo;{q.quote}&rdquo;</blockquote>
            <p className="mt-8 font-sans text-sm font-medium text-navy">{q.name}</p>
            <p className="mt-1 font-sans text-xs font-light text-charcoal/75">{q.role}</p>
          </li>
        ))}
      </ul>
      {canPrev && (
        <button type="button" aria-label={prevLabel} onClick={() => scrollByCard(-1)} className={`${arrow} -left-3 md:-left-6`}>
          <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
        </button>
      )}
      {canNext && (
        <button type="button" aria-label={nextLabel} onClick={() => scrollByCard(1)} className={`${arrow} -right-3 md:-right-6`}>
          <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      )}
    </div>
  )
}
