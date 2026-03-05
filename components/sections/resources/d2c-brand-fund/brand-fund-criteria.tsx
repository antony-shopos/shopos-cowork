"use client"

import SectionLayout from "@/components/SectionLayout"

export default function BrandFundCriteriaSection() {
  return (
    <SectionLayout className="bg-[#FAFAFA]">

      <div className="py-24 px-6 md:px-12 lg:px-16">

        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-8">

          {/* CARD 1 */}
          <div className="rounded-[24px] border border-[#E5E5E5] overflow-hidden bg-white">

            {/* Header */}
            <div className="bg-[#F3F3F3] px-6 py-3">
              <h3 className="text-[20px] font-medium font-sans text-[#0A0A0A]">
                Criteria
              </h3>
            </div>

            {/* Content */}
            <div className="px-8 py-8 space-y-6">

              <Bullet color="bg-[#EF4444]">
                D2C brand doing $1M + annual revenue
              </Bullet>

              <Bullet color="bg-[#EF4444]">
                Active ad spend on Meta, Google, or both
              </Bullet>

              <Bullet color="bg-[#EF4444]">
                10+ SKUs with regular creative needs
              </Bullet>

              <Bullet color="bg-[#EF4444]">
                Ready to test systematically for 90 days
              </Bullet>

            </div>

          </div>


          {/* CARD 2 */}
          <div className="rounded-[24px] border border-[#E5E5E5] overflow-hidden bg-white">

            {/* Header */}
            <div className="bg-[#F3F3F3] px-6 py-3">
              <h3 className="text-[20px] font-medium font-sans text-[#0A0A0A]">
                What you get
              </h3>
            </div>

            {/* Content */}
            <div className="px-8 py-8 space-y-6">

              <Bullet color="bg-[#10B981]">
                12 months ShopOS access (Pro tier, $199/mo value)
              </Bullet>

              <Bullet color="bg-[#10B981]">
                Dedicated onboarding and strategy session
              </Bullet>

              <Bullet color="bg-[#10B981]">
                Monthly performance reviews with our team
              </Bullet>

              <Bullet color="bg-[#10B981]">
                Case Study collaboration if results hit targets
              </Bullet>

            </div>

          </div>

        </div>

      </div>

    </SectionLayout>
  )
}


/* Bullet Item Component */
function Bullet({
  children,
  color
}: {
  children: React.ReactNode
  color: string
}) {
  return (
    <div className="flex items-center gap-4 text-[16px] leading-[24px] text-[#262626]">

      <span className={`mt-[6px] w-[8px] h-[8px] rounded-full ${color}`} />

      <p>{children}</p>

    </div>
  )
}