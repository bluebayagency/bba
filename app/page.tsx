import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CoreTruth from '@/components/CoreTruth'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import Pricing from '@/components/Pricing'
import About from '@/components/About'
import Blog from '@/components/Blog'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import { getPosts, getFeaturedImage, getCategories, formatDate } from '@/lib/blog'
import { getLang, getDateLocale } from '@/lib/i18n-server'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lng?: string }>
}) {
  const { lng } = await searchParams
  const lang = getLang({ lng })
  const dateLocale = getDateLocale(lang)

  const rawPosts = await getPosts(lang, 3)
  const posts = rawPosts.map((post) => ({
    id: post.id,
    slug: post.slug,
    date: formatDate(post.date, dateLocale),
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    image: getFeaturedImage(post),
    categories: getCategories(post),
  }))

  return (
    <main>
      <Navigation />
      <Hero />
      <CoreTruth />
      <Process />
      <Portfolio />
      <Pricing />
      <About />
      <Blog posts={posts} lang={lang} />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  )
}
