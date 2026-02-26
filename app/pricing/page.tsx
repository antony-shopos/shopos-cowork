import Navbar from '@/components/Navbar-all'
import Footer from '@/components/Footer'
import PricingHero from '@/components/sections/pricing/hero'
import PricingComparison from '@/components/sections/pricing/pricing-comparison'
import FAQ from '@/components/sections/pricing/faq'
import Cta from '@/components/sections/pricing/cta-section'
import CtaSection from '@/components/sections/pricing/cta-section'


export default function ShoposPricing() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <PricingHero />
      <PricingComparison />
      <FAQ />
      <CtaSection/>
      <Footer />
    </main>
  )
}