import Navbar from '@/components/Navbar-all'
import Footer from '@/components/Footer'
import ShoposRefineHero from '@/components/sections/refine/hero'


export default function ShoposRefine() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <ShoposRefineHero />
      <Footer />
    </main>
  )
}