export default function Shift() {
  return (
    <section className="relative w-full py-24 md:py-24 overflow-hidden bg-[#171717] text-white flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute z-0 inset-0 opacity-20 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(115,115,115,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(115,115,115,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        {/* Pill label */}
        <div className="inline-block z-10 px-4 py-1.5 mb-8 text-sm bg-white/10 rounded-full text-white/80">
          The Shift
        </div>

        {/* Striked line */}
        <h2 className="text-3xl md:text-5xl font-medium mb-2 opacity-60 leading-tight">
          <span className="line-through">AI that generates content</span>
        </h2>

        {/* Main headline */}
        <h2 className="text-3xl md:text-5xl font-medium mb-8 leading-tight">
          AI that runs your commerce & store
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
          A swarm of AI agents. They work 24/7, learn from feedback & continuously improve store
          performance
        </p>
      </div>
    </section>
  )
}
