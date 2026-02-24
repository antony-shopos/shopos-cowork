"use client";

import { useEffect, useRef, useState } from "react";

export default function Spaces() {
  const items = [
    "/images/spaces/image 1.png",
    "/images/spaces/image 2.png",
    "/images/spaces/image 3.png",
    "/images/spaces/image 4.png",
    "/images/spaces/image 5.png",
  ];

  const sizeMap = [350, 250, 175, 250, 350];

  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const ordered = [
    ...items.slice(index),
    ...items.slice(0, index),
  ];

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
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <div className="inline-block px-4 py-1.5 mb-6 bg-white border border-black/10 rounded-full text-sm">
          Spaces
        </div>

        <h2 className="text-4xl md:text-5xl font-medium mb-4">
          There’s a Space for everything
        </h2>

        <p className="text-lg text-black/60 max-w-2xl mx-auto mb-16">
          AI workflows designed specifically to solve specific commerce problems.
        </p>

        {/* Slider */}
        <div className="flex justify-center mb-20">

          <div
            ref={trackRef}
            className="flex items-start gap-10 transition-all duration-700 ease-in-out"
          >
            {ordered.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-full transition-all duration-700 ease-in-out flex-shrink-0"
                style={{
                  width: sizeMap[i],
                  height: sizeMap[i],
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>

        <div className="bg-[#e9e9e9] rounded-3xl h-[420px] max-w-6xl mx-auto"></div>

      </div>
    </section>
  );
}
