import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const GOOGLE_REVIEW_URL = 'https://share.google/k630BQNHgmMtNQFn7'

const testimonials = [
  {
    image: '/images/projects/thecouplestherapy/jessica-quiroz-founder.png',
    quote:
      'I never had to constantly explain or repeat myself like I have with other agencies. Veronica just got it. She understood exactly what I wanted, paid attention to every detail, and consistently went above and beyond.',
    subquote:
      'The quality of her work speaks for itself. My website is beautiful, professional, and truly reflects my practice.',
    name: 'Maria Jessica Quiroz',
    title: 'Founder, The Couples Therapy and Reunification Counseling Inc.',
  },
  {
    image: '/images/projects/thecouplestherapy/mindbodyspiritss-naila-qureshi-founder.png',
    quote:
      'She has an incredible ability to take the ideas, vision, and thoughts in my mind and transform them into a website that truly reflects who I am and what I do. She doesn’t just build a website. She creates a visual experience.',
    subquote:
      'She listens, understands, and brings ideas to life with creativity, patience, and attention to detail.',
    name: 'Naila Qureshi',
    title: 'Founder, MindBodySpiritss LLC',
  },
]

function StarRow() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 1.5l2.635 5.34 5.895.857-4.265 4.158 1.007 5.873L10 14.9l-5.272 2.828 1.007-5.873L1.47 7.697l5.895-.857L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-sand py-24 md:py-36 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-14 md:mb-20">
            <span className="font-sans text-xs font-medium text-dusty-rose tracking-[0.25em] uppercase mb-6">
              Client Reviews
            </span>
            <h2
              className="font-canela-deck font-light text-navy leading-[1.1] max-w-2xl"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Don&rsquo;t Just Take Our Word For It.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((review, i) => (
            <ScrollReveal key={review.name} delay={i === 0 ? 1 : 2}>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full flex flex-col bg-white border border-gray-border p-8 md:p-10 transition-all duration-300 hover:border-navy/20 hover:shadow-lg hover:shadow-navy/5"
              >
                <StarRow />

                <p className="mt-6 font-canela-deck font-light text-lg md:text-xl text-navy leading-snug">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="mt-4 font-sans text-sm font-light text-charcoal/50 leading-relaxed">
                  {review.subquote}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-border flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div>
                      <div className="font-sans text-sm font-medium text-navy">{review.name}</div>
                      <div className="font-sans text-xs text-charcoal/40">{review.title}</div>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-charcoal/30 group-hover:text-navy group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" fill="currentColor" viewBox="0 0 488 512">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
