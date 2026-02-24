export default function HowCoworkRuns() {
  const features = [
    {
      title: "Runs on Your Machine",
      desc: "Mac desktop app. Your data stays on your computer. No cloud uploads unless you choose.",
    },
    {
      title: "Connects to Your Store",
      desc: "Compatible with Shopify, WooCommerce, BigCommerce, and any API platform. Manages products and performance.",
    },
    {
      title: "Remembers Your Brand",
      desc: "Stores your voice, style, rules. Every output sounds like you from Day 1.",
    },
    {
      title: "Browses the Web",
      desc: "Researches competitors, tracks trends, pulls pricing data. Your AI brand analyst with a browser.",
    },
    {
      title: "Pre-Built Workflows",
      desc:
        'Product Photography. Competitor Research. Catalog Generation. Ad Copy. Call them like "Create lifestyle photos for new sneakers."',
    },
    {
      title: "Asks Permission",
      desc:
        "Before dangerous actions price changes, bulk updates, publishing it asks. You approve. Then it executes.",
    },
  ];

  return (
    <section className="relative bg-[#f6f6f6] py-24 overflow-hidden">

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

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            How Cowork Runs Your Store
          </h2>

          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Autonomous AI agents handling daily work
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-medium mb-3">
                {item.title}
              </h3>

              <p className="text-black/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
