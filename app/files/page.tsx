import Navbar from '@/components/Navbar-all'
import Footer from '@/components/Footer'
import ShoposFilesHero from '@/components/sections/files/hero'


export default function ShoposFiles() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <ShoposFilesHero />
      <Footer />
    </main>
  )
}