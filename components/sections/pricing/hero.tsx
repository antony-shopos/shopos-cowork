'use client'

import { useState } from 'react'
import SectionLayout from '@/components/SectionLayout'

export default function PricingHero() {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('monthly')

  return (
    <SectionLayout className="bg-[#FAFAFA]" borderClass="border-[#D4D4D4]">
      <div className="py-24 px-6 md:px-12 lg:px-16 max-w-[1200px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="font-space font-medium text-[32px] md:text-[32px] lg:text-[32px] leading-[110%] tracking-[-0.02em] text-[#0A0A0A] mb-2">
            Brands that Learn
          </h1>

          <p className="font-inter text-[18px] leading-[28px] text-[#737373] max-w-[560px] mx-auto">
            Choose how you want to build your commerce context graph
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center mt-10">
            <div className="flex items-center bg-[#F0F0F0] rounded-[8px] p-1 border border-[#E5E5E5]">
              <button
                onClick={() => setBilling('monthly')}
                className={`px-5 py-2 rounded-[8px] text-[14px] font-medium transition ${
                  billing === 'monthly' ? 'bg-white text-[#0A0A0A] shadow-sm' : 'text-[#737373]'
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setBilling('annually')}
                className={`px-5 py-2 rounded-[8px] text-[14px] font-medium transition ${
                  billing === 'annually' ? 'bg-white text-[#0A0A0A] shadow-sm' : 'text-[#737373]'
                }`}
              >
                Annually <span className="text-blue-500 ml-1">Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-4">
          <PricingCard
            title="Starter"
            description="For Solo founders, small teams, single brand"
            price={billing === 'monthly' ? '$299' : '$239'}
            features={[
              '200 generations/month',
              '1 brand workspace',
              'Brand Memory (basic)',
              'Files (10GB storage)',
              'Popular Spaces access (20 workflows)',
              'Community support',
            ]}
            buttonText="Start Free Trial"
          />

          <PricingCard
            title="Growth"
            description="For Growing D2C brands, small agencies"
            price={billing === 'monthly' ? '$799' : '$639'}
            features={[
              '1,000 generations/month',
              '3 brand workspaces',
              'Brand Memory (full)',
              'Files (100GB storage)',
              'All Spaces (100+ workflows)',
              'Loops (learning engine)',
              'Refine (unlimited iterations)',
              '5 team seats',
              'Email Support',
            ]}
            buttonText="Start Free Trial"
          />

          <PricingCard
            title="Enterprise"
            description="For Agencies managing 10+ brands, enterprise brands"
            price="Custom Pricing"
            features={[
              'Unlimited generations',
              'Unlimited brands',
              'ShopOS Cowork (desktop app)',
              'White-label capabilities',
              '3-tier approval workflows',
              'Dedicated account manager',
              'Custom integrations',
              'API access',
              'SOC 2 compliance',
              'SLA guarantees',
              'Priority support',
              'Quarterly business reviews',
            ]}
            buttonText="Contact Sales"
          />
        </div>
      </div>
      {/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#E5E5E5]" />
    </SectionLayout>
  )
}

/* CARD */

function PricingCard({
  title,
  description,
  price,
  features,
  buttonText,
}: {
  title: string
  description: string
  price: string
  features: string[]
  buttonText: string
}) {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-[20px] p-4 flex flex-col justify-between">
      <div>
        <h3 className="font-space text-[16px] font-bold text-[#0A0A0A]">{title}</h3>

        <p className="text-[14px] text-[#737373] mt-4">{description}</p>

        <div className="mt-4">
          <span className="text-[32px] font-bold text-[#0A0A0A]">{price}</span>
          {price !== 'Custom Pricing' && (
            <span className="text-[#737373] text-[16px] ml-1">/ month</span>
          )}
        </div>

        <ul className="mt-8 space-y-4 text-[14px] text-[#525252]">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-[2px]">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-10 bg-[#0A0A0A] text-white py-4 rounded-full text-[14px] font-medium">
        {buttonText}
      </button>
    </div>
  )
}
