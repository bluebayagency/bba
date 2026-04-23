import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function EsBlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
