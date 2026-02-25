import Navbar from '@/components/Navbar-all'
import Footer from '@/components/Footer'
import ShoposLoopsHero from '@/components/sections/loops/hero'
import BrandMemoryStore from '@/components/sections/brand-memory/brand-memory-store'


export default function ShoposLoops() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <ShoposLoopsHero />
      <Footer />
    </main>
  )
}