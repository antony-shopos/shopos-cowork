import Navbar from '@/components/sections/cowork/Navbar-cowork'
import Hero from '@/components/sections/cowork/Hero'
import Shift from '@/components/sections/cowork/Shift'
import Testimonials from '@/components/sections/cowork/Testimonials'
import HowItWorks from '@/components/sections/cowork/HowItWorks'
import Integrations from '@/components/sections/cowork/Integrations'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Spaces from '@/components/sections/cowork/Spaces'
import BrandMemory from '@/components/sections/cowork/BrandMemory'
import DownloadMac from '@/components/sections/cowork/DownloadMac'
import CtaFooter from '@/components/sections/cowork/cta-footer'
import HowCoworkRuns from '@/components/sections/cowork/HowCoworkRuns'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <Shift />
      <Testimonials />
      <HowCoworkRuns />
      <Spaces />
      <BrandMemory />
      <HowItWorks />
      <Integrations />
      <DownloadMac />
      <FAQ />
      <CtaFooter />
      <Footer />
    </main>
  )
}
