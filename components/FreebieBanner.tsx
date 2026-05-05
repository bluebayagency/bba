'use client'

import { useState, useEffect } from 'react'

function EmailIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0 text-dusty-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg className="w-3 h-3 flex-shrink-0 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  )
}

export default function FreebieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('freebie-banner-v1')
    if (!dismissed) setVisible(true)
  }, [])

  function dismiss(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    localStorage.setItem('freebie-banner-v1', '1')
    setVisible(false)
    document.documentElement.classList.remove('has-banner')
  }

  useEffect(() => {
    if (visible) {
      document.documentElement.classList.add('has-banner')
    } else {
      document.documentElement.classList.remove('has-banner')
    }
    return () => document.documentElement.classList.remove('has-banner')
  }, [visible])

  if (!visible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-9 bg-navy border-b border-white/[0.06] flex items-center justify-center px-10">
      <a
        href="/resources"
        className="flex items-center gap-2.5 group min-w-0"
      >
        <EmailIcon />
        <span className="font-sans text-xs text-white/70 group-hover:text-white/90 transition-colors duration-200 truncate">
          <span className="hidden sm:inline">Free Download: </span>
          <span className="font-medium text-white">The 7-Step Homepage Guide</span>
          <span className="hidden md:inline text-white/45"> — Grab Your Copy</span>
        </span>
        <ArrowIcon />
      </a>
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors duration-200 p-1"
      >
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
