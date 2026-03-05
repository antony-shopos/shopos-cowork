'use client'

import SectionLayout from '@/components/SectionLayout'

export default function BrandFundHero() {
  return (
    <SectionLayout className="relative bg-[#FAFAFA] overflow-hidden">
      {/* Dot background */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16">
        <div className="max-w-[900px] mx-auto text-center">
          {/* Applications Open Badge */}
          <div className="flex justify-center mb-8">
            <span className="flex items-center gap-2 px-5 py-1 rounded-full border border-[#059669] text-[#059669] text-[13px] font-display font-medium bg-[#ECFDF5]">
              <span className="w-2 h-2 bg-[#059669] rounded-full" />
              APPLICATIONS OPEN
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-[clamp(42px,6vw,64px)] leading-[110%] font-medium text-[#0A0A0A]"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            D2C Brand Fund
          </h1>

          {/* Description */}
          <p className="mt-6 text-[20px] leading-[32px] text-[#525252] max-w-[700px] mx-auto">
            Every growing brand deserves systematic learning infrastructure. ShopOS is committing
            $100K to help brands scale smarter.
          </p>
        </div>
      </div>
      {/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />
    </SectionLayout>
  )
}
