'use client'

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
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 md:pt-24 pb-12 md:pb-16 text-center">

        {/* Top pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 md:mb-8 bg-white border border-black/10 rounded-full text-xs md:text-sm">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Introducing ShopOS Cowork
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 500,
            fontSize: 'clamp(32px, 6vw, 60px)',
            letterSpacing: '-0.02em',
            lineHeight: '110%',
            color: '#0A0A0A',
            marginBottom: '16px',
          }}
        >
          AI for your brand,
          <br />
          that{' '}
          <span
            style={{
              fontFamily: 'Newsreader14pt-MediumItalic',
              fontWeight: 500,
              fontSize: 'clamp(32px, 6vw, 60px)',
              letterSpacing: '-0.02em',
              color: '#3B82F6',
            }}
          >
            actually
          </span>{' '}
          does things
        </h1>

        {/* Supporting text */}
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            letterSpacing: '-0.02em',
            lineHeight: '30px',
            color: '#525252',
            marginBottom: '12px',
          }}
        >
          Connects to your store. Learns your voice. Does real work.
        </p>

        {/* OpenClaw Line */}
        <div
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            letterSpacing: '-0.02em',
            lineHeight: '30px',
            color: '#525252',
            marginBottom: '40px',
          }}
        >
          It’s Like{' '}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px 8px',
              gap: '4px',
              background: '#FFFFFF',
              border: '0.8px solid #E5E5E5',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)',
              borderRadius: '8px',
              height: '32px',
            }}
          >
            <img
              src="/images/openclaw.png"
              alt="OpenClaw"
              style={{
                width: '23.05px',
                height: '16px',
              }}
            />

            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '-0.02em',
                color: '#262626',
              }}
            >
              OpenClaw
            </span>
          </span>{' '}
          but for commerce
        </div>

        {/* CTA Block */}
        <div className="flex flex-col items-center">

          <button
            className="
              flex items-center gap-3
              px-5 py-2
              rounded-[12px]
              bg-[#0A0A0A]
              border border-white
              transition-all duration-200
              hover:bg-[rgba(10,10,10,0.8)]
              active:scale-[0.98]
            "
          >
            <img
              src="/images/download mac/mac-icon.png"
              alt="Mac"
              className="w-[26.05px] h-[32px]"
            />

            <div className="flex flex-col items-start leading-none">
              <span className="font-inter font-normal text-[12px] leading-[100%] text-[#FAFAFA]">
                Download for
              </span>
              <span className="font-inter font-medium text-[24px] md:text-[28px] leading-[32px] md:leading-[36px] text-[#FAFAFA]">
                Mac OS
              </span>
            </div>
          </button>

          <button
            className="
              mt-5
              font-inter font-medium text-[14px]
              leading-[150%]
              text-[#1A1A19]
              transition-opacity duration-200
              hover:opacity-70
            "
          >
            Read research
          </button>
        </div>

        {/* Chat Panel */}
        <div className="mt-12 md:mt-16 bg-white/70 backdrop-blur border border-black/10 rounded-3xl p-6 md:p-8 shadow-sm max-w-5xl mx-auto">

          <h3 className="text-xl md:text-2xl font-medium mb-2">
            Hello Zyvo,
          </h3>

          <p className="text-black/60 mb-6 text-sm md:text-base">
            What are you going to sell today?
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-stretch md:items-center bg-white border border-black/10 rounded-xl px-4 py-3">
            <input
              placeholder="Ask anything..."
              className="flex-1 outline-none bg-transparent text-sm"
            />

            <button className="md:ml-4 text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-black/80 transition">
              Connect Store
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}