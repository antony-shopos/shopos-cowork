import SectionLayout from '@/components/SectionLayout'

export default function CtaSection() {
  return (
    <SectionLayout className="bg-[#FFFFFF]" borderClass="border-[#D4D4D4]">
      {/* ================= TRUST SIGNALS ================= */}
      <div className="px-6 md:px-12 lg:px-16 pt-24 pb-16 max-w-[1100px] mx-auto">
        <h3 className="text-center font-space font-medium text-[22px] md:text-[26px] text-[#0A0A0A] mb-8">
          Trust Signals
        </h3>

        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 text-[15px] text-[#0A0A0A]">
          {[
            'SOC 2 Type II Certified',
            '99.9% Uptime SLA (Enterprise)',
            '256-bit SSL Encryption',
            'Regular third-party security audits',
            'Regular third-party security audits',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[16px]">✓</span>
              <span className="font-semibold text-[#0A0A0A]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA BLOCK ================= */}
      <div className="relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-top bg-cover opacity-40 pointer-events-none"
          style={{
            backgroundImage: "url('/images/shopos-web/cta-bg.png')",
          }}
        />

        {/* CTA Content */}
        <div className="relative text-center px-6 md:px-12 lg:px-16 py-24 md:py-32 max-w-[900px] mx-auto">
          <h2 className="font-space font-medium text-[28px] md:text-[32px] leading-[110%] tracking-[-0.02em] text-[#0A0A0A] mb-10">
            Start building your commerce context graph
          </h2>

          <button className="bg-black text-white px-10 py-4 rounded-full text-[15px] font-medium hover:opacity-90 transition">
            Start Free Trial
          </button>

          <p className="text-[#737373] text-[14px] mt-4">No credit card required</p>
        </div>
      </div>
    </SectionLayout>
  )
}
