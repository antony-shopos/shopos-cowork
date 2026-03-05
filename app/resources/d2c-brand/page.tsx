import type { Metadata } from 'next'
import Navbar from '@/components/Navbar-all'
import Footer from '@/components/Footer'
import BrandFundHero from '@/components/sections/resources/d2c-brand-fund/hero'
import BrandFundContentSection from '@/components/sections/resources/d2c-brand-fund/brand-fund-content'
import BrandFundCriteriaSection from '@/components/sections/resources/d2c-brand-fund/brand-fund-criteria'

export const metadata: Metadata = {
  title: 'D2C Brand Fund - Support for Growing Ecommerce Brands',
  description:
    'D2C Brand Fund provides financial support and resources for emerging ecommerce brands to help them scale smarter with AI-powered tools.',
  alternates: {
    canonical: '/resources/d2c-brand-fund',
  },
}

export default function ShoposFiles() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <BrandFundHero />
      <BrandFundContentSection />
      <BrandFundCriteriaSection />
      <Footer />
    </main>
  )
}