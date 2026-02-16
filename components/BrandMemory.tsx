export default function BrandMemory() {
  return (
    <section className="relative bg-[#f6f6f6] py-28 overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Pill */}
        <div className="inline-block px-4 py-1.5 mb-6 bg-white border border-black/10 rounded-full text-sm">
          Brand Memory
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-medium mb-4">
          Build your brand DNA
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-black/60 max-w-2xl mx-auto mb-16">
          Cowork learns what makes your brand yours
        </p>

        {/* Large workspace container */}
        <div className="bg-[#e9e9e9] rounded-3xl h-[460px] max-w-6xl mx-auto border border-black/5 shadow-sm"></div>

      </div>
    </section>
  );
}
