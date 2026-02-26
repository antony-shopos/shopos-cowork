'use client'

import SectionLayout from '@/components/SectionLayout'

export default function PricingComparison() {
  return (
    <SectionLayout
      className="relative bg-[#FFFFFF]"
      borderClass="border-[#D4D4D4]"
      scrollX
    >
      <div className="relative py-20">

        {/* GRID BACKGROUND */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />

        {/* IMPORTANT: Only this creates overflow */}
        <div className="min-w-[720px]">

          <div className="px-6 md:px-12 lg:px-16 max-w-[1100px] mx-auto">

            {/* HEADER */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] mb-8 md:mb-12">
              <div className="font-display font-medium text-[15px] md:text-[16px] text-[#0A0A0A]">
                Feature
              </div>

              <div className="text-center font-display font-medium text-[15px] md:text-[16px] text-[#0A0A0A]">
                Starter
              </div>

              <div className="text-center font-display font-medium text-[15px] md:text-[16px] text-[#0A0A0A]">
                Growth
              </div>

              <div className="text-center font-display font-medium text-[15px] md:text-[16px] text-[#0A0A0A]">
                Enterprise
              </div>
            </div>

            {/* ROWS */}
            <div className="space-y-6 md:space-y-12">
              {rows.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1.6fr_1fr_1fr_1fr] items-center"
                >
                  <div className="text-[15px] md:text-[16px] text-[#0A0A0A]">
                    {row.label}
                  </div>

                  <Cell value={row.starter} />
                  <Cell value={row.growth} />
                  <Cell value={row.enterprise} />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </SectionLayout>
  )
}

/* DATA */

const rows = [
  { label: 'Generations/month', starter: '200', growth: '1000', enterprise: 'Unlimited' },
  { label: 'Brand workspaces', starter: '1', growth: '3', enterprise: 'Unlimited' },
  { label: 'Team seats', starter: '1', growth: '5', enterprise: 'Unlimited' },
  { label: 'Brand Memory', starter: 'Basic', growth: 'Full', enterprise: 'Full + Custom' },
  { label: 'Files Storage', starter: '10GB', growth: '100GB', enterprise: 'Unlimited' },
  { label: 'Spaces access', starter: '20', growth: '100+', enterprise: '100+' },
  { label: 'Loops', starter: false, growth: true, enterprise: true },
  { label: 'Refine', starter: false, growth: true, enterprise: true },
  { label: 'ShopOS Cowork', starter: false, growth: false, enterprise: true },
  { label: 'White Label', starter: false, growth: false, enterprise: true },
  { label: 'API Access', starter: false, growth: false, enterprise: true },
  { label: 'Support', starter: 'Community', growth: 'Email', enterprise: 'Dedicated' },
]

function Cell({ value }: { value: any }) {
  return (
    <div className="flex justify-center text-[15px] md:text-[16px] text-[#0A0A0A]">
      {typeof value === 'boolean' ? (
        value ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )
      ) : (
        <span>{value}</span>
      )}
    </div>
  )
}