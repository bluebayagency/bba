import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CoreTruth from '@/components/CoreTruth'
import Services from '@/components/Services'
import CaseStudySpotlight from '@/components/CaseStudySpotlight'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
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
    <main id="main-content">
      <Navigation />
      <Hero />
      <CoreTruth />
      <Services />
      <CaseStudySpotlight />
      <Testimonials />
      <Blog posts={posts} lang={lang} />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  )
}
