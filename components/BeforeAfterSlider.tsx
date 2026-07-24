'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

/**
 * Interactive before/after comparison.
 * Two stacked screenshots in one frame; a draggable vertical handle
 * (mouse + touch via Pointer Events, plus keyboard) reveals more of
 * one image or the other. Position is clamped 0–100%, default 50%.
 */
interface BeforeAfterSliderProps {
  beforeSrc: string
  beforeAlt: string
  afterSrc: string
  afterAlt: string
}

export default function BeforeAfterSlider({ beforeSrc, beforeAlt, afterSrc, afterAlt }: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50)
  const [isHinting, setIsHinting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const interactedRef = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  const stopHint = useCallback(() => {
    interactedRef.current = true
    setIsHinting(false)
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    stopHint()
    draggingRef.current = true
    setFromClientX(e.clientX)
  }

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!draggingRef.current) return
      setFromClientX(e.clientX)
    }
    const up = () => {
      draggingRef.current = false
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    window.addEventListener('pointercancel', up)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('pointercancel', up)
    }
  }, [setFromClientX])

  // One-time "drag me" demo on load: nudges the handle left and right so
  // the interaction reads as obviously draggable, not just decorative.
  // Cancels immediately if the visitor starts interacting on their own.
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    const step = (delay: number, fn: () => void) => {
      timers.push(setTimeout(() => { if (!interactedRef.current) fn() }, delay))
    }
    step(700, () => { setIsHinting(true); setPos(32) })
    step(1500, () => setPos(68))
    step(2300, () => setPos(50))
    step(3000, () => setIsHinting(false))
    return () => timers.forEach(clearTimeout)
  }, [])

  const onKeyDown = (e: React.KeyboardEvent) => {
    stopHint()
    if (e.key === 'ArrowLeft') {
      setPos((p) => Math.max(0, p - 2))
      e.preventDefault()
    } else if (e.key === 'ArrowRight') {
      setPos((p) => Math.min(100, p + 2))
      e.preventDefault()
    } else if (e.key === 'Home') {
      setPos(0)
      e.preventDefault()
    } else if (e.key === 'End') {
      setPos(100)
      e.preventDefault()
    }
  }

  const hintTransition = isHinting ? 'transition-[left] duration-700 ease-in-out' : ''

  return (
    <div
      ref={containerRef}
      className="relative w-full h-0 pt-[calc(62.5%+150px)] md:pt-[calc(56.25%+150px)] overflow-hidden bg-navy select-none touch-none"
    >
      {/* ---- AFTER (bottom layer, fills frame) ---- */}
      <div className="absolute inset-0">
        <Image src={afterSrc} alt={afterAlt} fill className="object-cover object-top" sizes="(min-width: 1024px) 896px, 100vw" priority />
      </div>

      {/* ---- BEFORE (top layer, clipped to the left of the handle) ---- */}
      <div
        className={`absolute inset-0 ${isHinting ? 'transition-[clip-path] duration-700 ease-in-out' : ''}`}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover object-top" sizes="(min-width: 1024px) 896px, 100vw" />
      </div>

      {/* Corner labels */}
      <span className="absolute top-4 left-4 z-20 font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-white/90 bg-navy/60 backdrop-blur px-3 py-1.5">
        Before
      </span>
      <span className="absolute top-4 right-4 z-20 font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-navy bg-white/90 backdrop-blur px-3 py-1.5">
        After
      </span>

      {/* Divider line + draggable handle */}
      <div
        className={`absolute top-0 bottom-0 z-30 -ml-px w-0.5 bg-white/90 pointer-events-none ${hintTransition}`}
        style={{ left: `${pos}%` }}
      />
      {isHinting && (
        <span
          className={`absolute top-1/2 z-30 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 pointer-events-none animate-ping ${hintTransition}`}
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        />
      )}
      <button
        type="button"
        role="slider"
        aria-label="Drag to compare the before and after designs"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${Math.round(pos)}% revealed`}
        onPointerDown={onPointerDown}
        onKeyDown={onKeyDown}
        className={`absolute top-1/2 z-40 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lg shadow-navy/20 ring-1 ring-navy/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy ${hintTransition}`}
        style={{ left: `${pos}%` }}
      >
        <svg className="h-5 w-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 8L5 12L9 16M5 12H19M15 8L19 12L15 16" />
        </svg>
      </button>
    </div>
  )
}
