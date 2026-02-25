import SectionLayout from "@/components/SectionLayout"

export default function BrandMemoryStore() {
  return (
    <SectionLayout
      className="bg-transparent"
      borderClass="border-[#D4D4D4]"
    >
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">

        {/* Heading */}
        <h2
          className="text-center mb-8"
          style={{
            fontFamily: "Space Grotesk",
            fontWeight: 500,
            fontSize: "clamp(28px,4vw,36px)",
            letterSpacing: "-0.02em",
            color: "#0A0A0A",
          }}
        >
          What’s stored in Brand Memory?
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-5">
            <h3 className="text-[#0A0A0A] font-semibold mb-4 text-[18px]">
              Visual Assets
            </h3>
            <ul className="space-y-2 text-[#262626] text-[15px]">
              <li>Logo variations</li>
              <li>Color palette (Hex/RGB)</li>
              <li>Typography weights</li>
              <li>Photography composition</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-5">
            <h3 className="text-[#0A0A0A] font-semibold mb-4 text-[18px]">
              Written Guidelines
            </h3>
            <ul className="space-y-2 text-[#262626] text-[15px]">
              <li>Voice & Tone</li>
              <li>Messaging Pillars</li>
              <li>Value Props</li>
              <li>Compliance Rules</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-5">
            <h3 className="text-[#0A0A0A] font-semibold mb-4 text-[18px]">
              Technical Specs
            </h3>
            <ul className="space-y-2 text-[#262626] text-[15px]">
              <li>Image Dimensions</li>
              <li>Preferred Formats</li>
              <li>Naming Conventions</li>
              <li>Versioning</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-5">
            <h3 className="text-[#0A0A0A] font-semibold mb-4 text-[18px]">
              Benefits
            </h3>
            <ul className="space-y-2 text-[#262626] text-[15px]">
              <li>Scale: 1 person = 5</li>
              <li>100% Consistency</li>
              <li>Legal Guardrails</li>
              <li>Zero Re-briefing</li>
            </ul>
          </div>

        </div>
      </div>
    </SectionLayout>
  )
}