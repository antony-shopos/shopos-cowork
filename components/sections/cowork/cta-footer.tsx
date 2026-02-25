'use client'

export default function Cta() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundColor: '#FAFAFA',
        borderTop: '1px dashed #D4D4D4',
        borderBottom: '1px dashed #D4D4D4',
      }}
    >
      {/* Grid Background */}
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

      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            color: '#0A0A0A',
            marginBottom: '16px',
          }}
        >
          Ready to sell like the big boys?
        </h2>

        {/* Subheading */}
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '0',
            color: '#535862',
            marginBottom: '36px',
          }}
        >
          Your brand gets smarter every day, sounds like you and has agents working 24/7.
        </p>

        {/* CTA Block */}
        <div className="flex flex-col items-center">
          {/* Mac Button */}
          <button
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(10,10,10,0.8)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#0A0A0A'
            }}
            style={{
              backgroundColor: '#0A0A0A',
              border: '1px solid #FFFFFF',
              borderRadius: '12px',
              padding: '8px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              transition: 'background-color 200ms ease, transform 150ms ease',
            }}
          >
            {/* Mac Icon */}
            <img
              src="/images/download mac/mac-icon.png"
              alt="Mac"
              style={{
                width: '26.05px',
                height: '32px',
              }}
            />

            {/* Text Stack */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '18px',
                  color: '#FAFAFA',
                }}
              >
                Download for
              </span>

              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '28px',
                  lineHeight: '36px',
                  color: '#FAFAFA',
                }}
              >
                Mac OS
              </span>
            </div>
          </button>

          {/* Read Research */}
          <button
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.7'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1'
            }}
            style={{
              marginTop: '20px',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '150%',
              color: '#1A1A19',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: "opacity 200ms ease",
            }}
          >
            Read research
          </button>
        </div>
      </div>
    </section>
  )
}
