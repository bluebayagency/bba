'use client'

import { useState } from 'react'
import Image from 'next/image'

interface YouTubeFacadeProps {
  videoId: string
  title: string
  poster: string
  posterAlt: string
}

export default function YouTubeFacade({ videoId, title, poster, posterAlt }: YouTubeFacadeProps) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 h-full w-full border-0"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group absolute inset-0 h-full w-full"
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={poster}
        alt={posterAlt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      <span className="absolute inset-0 bg-navy/10 transition-colors duration-300 group-hover:bg-navy/25" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
          <svg className="h-6 w-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  )
}
