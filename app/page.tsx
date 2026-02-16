import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Shift from '@/components/Shift'
import Testimonials from '@/components/Testimonials'
import HowItWorks from '@/components/HowItWorks'
import Integrations from '@/components/Integrations'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Spaces from '@/components/Spaces'
import BrandMemory from '@/components/BrandMemory'
import DownloadMac from '@/components/DownloadMac'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Shift />
      <Testimonials />
      <Spaces />
      <BrandMemory />
      <HowItWorks />
      <Integrations />
      <DownloadMac />
      <FAQ />
      <Footer />
    </main>
  )
}
