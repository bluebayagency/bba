'use client'

import { track } from '@/lib/analytics'
import { sortedProducts } from '@/lib/shop'
import ScrollReveal from './ScrollReveal'
import { ArrowLink, Body, ButtonLink, CONTACT_HREF, Container, Display, ImageSlot } from './ui'

export default function Shop() {
  const products = sortedProducts()

  return (
    <>
      <header className="bg-white pt-40 md:pt-52 pb-16 md:pb-24">
        <Container className="text-center">
          <div className="animate-fade-up opacity-0">
            <Display size="lg">Shop Bluebay Guides</Display>
          </div>
          <Body className="mt-6 mx-auto max-w-2xl text-lg md:text-xl animate-fade-up-delay opacity-0">
            Simple, step-by-step guides to help your practice get found on Google and AI search, and get booked.
          </Body>
        </Container>
      </header>

      {products.map((p, i) => (
        <section key={p.title} aria-labelledby={`product-${p.order}`} className="bg-white py-12 md:py-20">
          <Container>
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
                {/* Falls back to a placeholder cover when `image` is empty in lib/shop.ts */}
                <ImageSlot
                  src={p.image || undefined}
                  alt={p.imageAlt}
                  label={p.title}
                  placeholderText="Cover"
                  fit="contain"
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className={`aspect-[4/5] w-full max-w-md mx-auto ${i % 2 === 1 ? 'md:order-last' : ''}`}
                />
                <div className="text-center md:text-left">
                  <h2
                    id={`product-${p.order}`}
                    className="font-canela-deck font-light text-navy leading-tight"
                    style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)' }}
                  >
                    {p.title}
                  </h2>
                  <Body className="mt-5 text-lg max-w-md mx-auto md:mx-0">{p.subtitle}</Body>
                  <div className="mt-8" onClickCapture={() => track('shop_product_click', { product: p.title })}>
                    <ButtonLink href={p.stanUrl} external className="min-h-[48px] w-full sm:w-auto">
                      {p.buttonText}
                      <span className="sr-only"> (opens the {p.title} page on Stan Store in a new tab)</span>
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      ))}

      <section className="bg-white pt-8 pb-24 md:pb-36">
        <Container className="text-center">
          <Body className="text-lg">Want us to do it for you?</Body>
          <ArrowLink href={CONTACT_HREF} className="mt-3">
            Book a free call
          </ArrowLink>
        </Container>
      </section>
    </>
  )
}
