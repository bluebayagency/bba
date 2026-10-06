import Image from 'next/image'
import type { CSSProperties, ReactNode } from 'react'

// Shared building blocks. Palette: navy headings, slate body, white and light-sand
// surfaces, sky-blue accent for small highlights only.

export const CONTACT_HREF = '/contact'
export const CALENDLY_HREF = 'https://calendly.com/bluebayagencyllc/30min'
export const INSTAGRAM_HREF = 'https://www.instagram.com/bluebayagency/'
export const GOOGLE_REVIEWS_HREF = 'https://share.google/oYpa60QmWtq2GGf9W'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-6xl mx-auto px-6 lg:px-8 ${className}`}>{children}</div>
}

export function Section({
  tone = 'white',
  className = '',
  children,
  id,
}: {
  tone?: 'white' | 'sand' | 'navy'
  className?: string
  children: ReactNode
  id?: string
}) {
  const bg = tone === 'sand' ? 'bg-sand' : tone === 'navy' ? 'bg-navy text-white' : 'bg-white'
  return (
    <section id={id} className={`${bg} py-24 md:py-36 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-sans text-xs md:text-sm font-light tracking-[0.3em] uppercase text-accent ${className}`}>
      {children}
    </p>
  )
}

/** Large serif display type: page titles and statements. */
export function Display({
  as: Tag = 'h1',
  children,
  className = '',
  size = 'xl',
}: {
  as?: 'h1' | 'h2' | 'p'
  children: ReactNode
  className?: string
  size?: 'xl' | 'lg' | 'md'
}) {
  const fontSize = {
    xl: 'clamp(3rem, 8vw, 6.25rem)',
    lg: 'clamp(2.25rem, 5vw, 4rem)',
    md: 'clamp(1.75rem, 3.6vw, 2.75rem)',
  }[size]
  return (
    <Tag className={`font-canela-deck font-light leading-[1.08] text-navy ${className}`} style={{ fontSize }}>
      {children}
    </Tag>
  )
}

/** Italic emphasis inside serif headings. */
export function Em({ children, bold = false }: { children: ReactNode; bold?: boolean }) {
  return <em className={`italic ${bold ? 'font-medium' : 'font-light'}`}>{children}</em>
}

/** Marker-style highlight behind italic words, as in "an *elevated presence*". */
export function Mark({ children, on = 'white' }: { children: ReactNode; on?: 'white' | 'sand' }) {
  return (
    <mark
      className={`${on === 'sand' ? 'bg-white' : 'bg-sand'} text-navy italic font-medium px-2 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]`}
    >
      {children}
    </mark>
  )
}

/** Serif section heading with a rule beneath, e.g. "How it *works*". */
export function RuledHeading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h2
        className="font-canela-deck font-light text-navy leading-tight"
        style={{ fontSize: 'clamp(2rem, 4.2vw, 3.25rem)' }}
      >
        {children}
      </h2>
      <div aria-hidden="true" className="mt-5 h-px w-full bg-navy/40" />
    </div>
  )
}

export function Body({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`font-sans font-light text-charcoal leading-relaxed ${className}`}>{children}</p>
}

export function ButtonLink({
  href,
  children,
  external = false,
  variant = 'navy',
  className = '',
}: {
  href: string
  children: ReactNode
  external?: boolean
  variant?: 'navy' | 'light' | 'sand'
  className?: string
}) {
  const colors = {
    navy: 'bg-navy text-white hover:bg-navy/90',
    light: 'bg-white text-navy hover:bg-sand',
    sand: 'bg-sand text-navy hover:bg-[#CDC9BF]',
  }[variant]
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center rounded-[4px] font-sans text-sm font-medium tracking-wide px-8 py-4 transition-colors duration-300 ${colors} ${className}`}
    >
      {children}
    </a>
  )
}

/** "→ Italic underlined" text link. */
export function ArrowLink({
  href,
  children,
  external = false,
  light = false,
  className = '',
}: {
  href: string
  children: ReactNode
  external?: boolean
  light?: boolean
  className?: string
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-baseline gap-2 font-canela-deck italic text-lg md:text-xl ${
        light ? 'text-white' : 'text-navy'
      } ${className}`}
    >
      <span aria-hidden="true" className="not-italic font-sans text-base transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
      <span className={`underline underline-offset-4 decoration-1 ${light ? 'decoration-white/50' : 'decoration-accent'} group-hover:decoration-current`}>
        {children}
      </span>
    </a>
  )
}

const shapes = {
  none: '',
  arch: 'rounded-t-full',
  circle: 'rounded-full',
  corner: 'rounded-tr-[4rem] md:rounded-tr-[6rem]',
  soft: 'rounded-2xl',
} as const

/**
 * Image frame. With `src` it renders the photo; without, a labeled placeholder in the
 * brand palette so layouts can be reviewed before final photography is ready.
 */
export function ImageSlot({
  src,
  alt = '',
  label,
  placeholderText = 'Image placeholder',
  className = '',
  shape = 'none',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
  position,
}: {
  src?: string
  alt?: string
  label: string
  placeholderText?: string
  className?: string
  shape?: keyof typeof shapes
  sizes?: string
  priority?: boolean
  position?: string
}) {
  const style: CSSProperties | undefined = position ? { objectPosition: position } : undefined
  return (
    <div className={`relative overflow-hidden ${shapes[shape]} ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" style={style} />
      ) : (
        <div
          role="img"
          aria-label={`${placeholderText}: ${label}`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#E4DACA] via-[#ECE6DC] to-[#DCE5EC] p-6 text-center"
        >
          <svg aria-hidden="true" className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A1.5 1.5 0 0021.75 19.5V4.5A1.5 1.5 0 0020.25 3H3.75A1.5 1.5 0 002.25 4.5v15A1.5 1.5 0 003.75 21zm9-12.75h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-accent">{placeholderText}</span>
          <span className="max-w-[16rem] font-canela-deck italic text-navy/70 text-base">{label}</span>
        </div>
      )}
    </div>
  )
}

/** Minimal browser chrome around a site screenshot. */
export function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-md border border-gray-border bg-white shadow-[0_30px_60px_-30px_rgba(9,30,50,0.3)]">
      <div className="flex items-center gap-1.5 border-b border-gray-border bg-white px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-accent/30" />
        <span className="h-2 w-2 rounded-full bg-accent/30" />
        <span className="h-2 w-2 rounded-full bg-accent/30" />
        <span className="ml-3 font-sans text-[10px] tracking-wide text-charcoal/40">{url}</span>
      </div>
      {children}
    </div>
  )
}

/** Wide sand band with a centered serif statement (testimonials, page taglines). */
export function StatementBand({ children, tone = 'sand' }: { children: ReactNode; tone?: 'sand' | 'white' }) {
  return (
    <section className={`${tone === 'sand' ? 'bg-sand' : 'bg-white'} py-24 md:py-32`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">{children}</div>
    </section>
  )
}

/** Page header: small spaced eyebrow over a large centered serif title. */
export function PageHeader({ eyebrow, children }: { eyebrow: ReactNode; children: ReactNode }) {
  return (
    <header className="bg-white pt-40 md:pt-52 pb-24 md:pb-32">
      <Container className="text-center">
        <Eyebrow className="animate-fade-up opacity-0">{eyebrow}</Eyebrow>
        <div className="mt-6 animate-fade-up-delay opacity-0">{children}</div>
      </Container>
    </header>
  )
}
