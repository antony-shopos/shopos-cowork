export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f6f6f6] text-black">

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

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 text-center">

        {/* Top pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-white border border-black/10 rounded-full text-sm">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Introducing ShopOS Cowork
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6">
          AI for your brand,
          <br />
          that <span className="italic text-blue-600">actually</span> does things
        </h1>

        {/* Supporting text */}
        <p className="text-lg text-black/70 mb-2">
          Connects to your store. Learns your voice. Does real work.
        </p>

        <p className="text-lg text-black/70 mb-8">
          It’s like OpenClaw but for commerce
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <button className="bg-black text-white px-8 py-3 rounded-xl text-lg font-medium">
            Download for Mac OS
          </button>

          <button className="text-sm text-black/60 hover:text-black">
            Read research
          </button>
        </div>

        {/* Chat panel */}
        <div className="bg-white/70 backdrop-blur border border-black/10 rounded-3xl p-8 shadow-sm max-w-5xl mx-auto">

          <h3 className="text-2xl mb-2 font-medium">
            Hello Zyvo,
          </h3>

          <p className="text-black/60 mb-6">
            What are you going to sell today?
          </p>

          <div className="flex items-center bg-white border border-black/10 rounded-xl px-4 py-3 justify-between">
            <input
              placeholder="Ask anything..."
              className="flex-1 outline-none bg-transparent text-sm"
            />
            <button className="ml-4 text-sm bg-black text-white px-4 py-2 rounded-lg">
              Connect Store
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
