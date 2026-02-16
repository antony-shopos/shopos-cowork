export default function HowItWorks() {
  const risks = [
    {
      title: "Low Risk",
      desc: "Read products, browse websites, research",
      color: "bg-green-500",
    },
    {
      title: "Medium Risk",
      desc: "Generate images, write copy, create drafts",
      color: "bg-yellow-400",
    },
    {
      title: "High Risk",
      desc: "Update prices, publish products, bulk changes",
      color: "bg-red-500",
    },
  ];

  return (
    <section className="relative bg-[#f6f6f6] py-32 overflow-hidden">

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
        <div className="text-center mb-20">
          <h2 className="text-5xl font-medium mb-5">
            How It Works
          </h2>

          <p className="text-lg text-black/60 max-w-3xl mx-auto">
            Cowork handles the workflow. Asks permission before anything risky.
            Ships results back to your store.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-14">

          {/* LEFT: mac window */}
          <div className="bg-[#FFFFFF] border border-black/5 rounded-3xl overflow-hidden">

            {/* mac header */}
            <div className="bg-[#e9e9e9] flex gap-2 px-5 py-3 border-b border-black/5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            {/* terminal content */}
            <div className="px-6 py-6 font-mono text-sm text-black/60 leading-7">
              <p>1&nbsp;&nbsp;Download the app</p>
              <p>2&nbsp;&nbsp;Connect your store (OAuth, takes 30 seconds)</p>
              <p>3&nbsp;&nbsp;Onboard your brand (voice, style, rules)</p>
              <p>4&nbsp;&nbsp;Start talking</p>
              <p>&nbsp;</p>
              <p>7&nbsp;&nbsp;"Research my top competitor's new collection"</p>
              <p>8&nbsp;&nbsp;"Write product descriptions for these 20 SKUs"</p>
              <p>9&nbsp;&nbsp;"Generate lifestyle photos for the spring launch"</p>
              <p>10&nbsp;"Update prices based on competitor analysis"</p>
            </div>

          </div>

          {/* RIGHT: risk cards */}
          <div className="flex flex-col gap-8">

            {risks.map((risk, i) => (
              <div
                key={i}
                className="bg-white border border-black/10 rounded-3xl px-8 py-8 shadow-sm"
              >
                {/* colored circle */}
                <div className="w-12 h-12 rounded-xl border border-black/10 flex items-center justify-center mb-5">
                  <div className={`w-6 h-6 rounded-full ${risk.color}`} />
                </div>

                <h4 className="font-semibold text-lg mb-2">
                  {risk.title}
                </h4>

                <p className="text-black/60 leading-relaxed">
                  {risk.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-black/60">
          Not every action is equal. You're always in control.
        </p>

      </div>
    </section>
  );
}
