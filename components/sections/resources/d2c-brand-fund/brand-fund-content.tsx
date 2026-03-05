'use client'

import SectionLayout from '@/components/SectionLayout'

export default function BrandFundContentSection() {
  return (
    <SectionLayout className="bg-[#FAFAFA]">
      <div className="py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-[900px] mx-auto">
          {/* CENTERED HERO TEXT */}
          <div className="text-center">
            <h2
              className="text-[clamp(36px,5vw,48px)] font-medium leading-[120%] text-[#0A0A0A]"
              style={{ fontFamily: 'Space Grotesk' }}
            >
              $100K to help D2C Brands <br />
              <span className="italic text-[#3B82F6] font-serifAlt">Stop Guessing</span>
            </h2>
          </div>
          <p className="mt-8 text-[18px] leading-[30px] text-[#525252] max-w-[760px]">
            Most brands operate like casinos. Launch creative, hope it works, repeat. Performance
            Brand Managers waste 60% of their time on repetitive workflows across fragmented tools.
          </p>
          {/* Divider */}
          <div className="my-12 border-t border-[#E5E5E5]" />

          {/* LEFT ALIGNED QUOTE */}
          <div className="max-w-[760px]">
            <span className="text-[36px] text-[#A3A3A3] leading-none">“</span>

            <p className="mt-2 text-[18px] leading-[30px] text-[#000000] font-medium ">
              We believe brands should learn systematically. Test creative, measure results, apply
              insights, compound knowledge.
            </p>

            <div className="mt-6">
              <p className="font-semibold text-[#0A0A0A]">Sai Krishna</p>
              <p className="text-[#737373]">Co-Founder, ShopOS</p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-[#E5E5E5]" />

          {/* LEFT PARAGRAPH */}
          <p className="text-[18px] leading-[30px] text-[#262626] max-w-[760px]">
            We are backing brands ready to shift from random content generation to continuous
            learning systems. If you are a Performance Brand Manager at a growing D2C brand
            ($1M-$50M ARR) tired of unpredictable creative performance, we want to work with you.
          </p>

          {/* CENTER CTA */}
          <div className="mt-12 flex justify-center items-center gap-6">
            <button className="bg-black text-white px-6 py-3 rounded-full text-[15px] font-medium hover:opacity-90 transition">
              Apply Now →
            </button>

            <button className="text-[#0A0A0A] text-[16px] font-medium hover:underline">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />
    </SectionLayout>
  )
}
