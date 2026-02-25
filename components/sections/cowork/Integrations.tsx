'use client'

import { useEffect, useRef, useState } from 'react'

export default function Integrations() {
  const integrations = [
    '/images/integrations/shopify.svg',
    '/images/integrations/shopify plus.svg',
    '/images/integrations/claude.svg',
    '/images/integrations/gemini.svg',
    '/images/integrations/bigcommerce.svg',
    '/images/integrations/gpt4.svg',
    '/images/integrations/woocommerce.svg',
  ]

  const trackRef = useRef<HTMLDivElement>(null)
  const [enableTicker, setEnableTicker] = useState(false)

  /* Enable ticker only under 1000px */
  useEffect(() => {
    const checkWidth = () => {
      setEnableTicker(window.innerWidth < 1000)
    }

    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  /* ticker animation */
  useEffect(() => {
    if (!enableTicker) return

    let frame: number
    let pos = 0
    const speed = 0.4

    const animate = () => {
      if (!trackRef.current) return

      pos += speed

      if (pos >= trackRef.current.scrollWidth / 2) {
        pos = 0
      }

      trackRef.current.style.transform = `translateX(-${pos}px)`
      frame = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(frame)
  }, [enableTicker])

  return (
    <section className="relative bg-[#ffffff] py-24 overflow-hidden">
      {/* Grid */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h6
          style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '0',
            color: '#525252',
            marginBottom: '48px',
          }}
        >
          Works with Everything
        </h6>

        <div className="relative overflow-hidden">
          {/* fades only when ticker enabled */}
          {enableTicker && (
            <>
              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#f6f6f6] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#f6f6f6] to-transparent z-10 pointer-events-none" />
            </>
          )}

          <div
            ref={trackRef}
            className={`flex items-center gap-8 ${enableTicker ? '' : 'justify-center'}`}
          >
            {(enableTicker ? [...integrations, ...integrations] : integrations).map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="integration"
                className="h-8 md:h-10 object-contain opacity-90 flex-shrink-0"
              />
            ))}
          </div>
        </div>

        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0px',
            color: '#525252',
            marginTop: '20px',
          }}
        >
          More integrations coming: Amazon Seller Central, custom API connections
        </p>
      </div>
    </section>
  )
}
