"use client";

import { useState } from "react";

export default function DownloadMac() {
  const command =
    "curl -fsSL https://cowork.shopos.ai/download.sh | bash";

  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="relative bg-[#171717] py-32 overflow-hidden text-white">

      {/* Grid background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(115,115,115,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(115,115,115,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Mac icon */}
      <div className="flex justify-center mb-4">
        <img
          src="/images/download mac/mac-icon.png"
          alt="Mac"
          className="h-14 w-auto opacity-90"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-medium mb-4">
          Download for Mac
        </h2>

        <p className="text-lg text-white/60 max-w-3xl mx-auto mb-6 leading-relaxed">
          Autonomous AI agents that work 24×7, learn from feedback &
          continuously improve store performance
        </p>

        {/* ✅ Terminal command (fixed) */}
        <div className="flex items-center justify-between bg-[#262626] border border-white/10 rounded-2xl px-4 py-2 mb-16 font-mono text-sm text-white/60 max-w-xl mx-auto">

          <span className="truncate text-left">
            {command}
          </span>

          <button
            onClick={copyCommand}
            className="ml-6 w-11 h-11 rounded-xl border border-white/15 flex items-center justify-center hover:bg-white/10 transition"
          >
            {/* copy icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-80"
            >
              <rect x="9" y="9" width="13" height="13" rx="3" />
              <rect x="2" y="2" width="13" height="13" rx="3" />
            </svg>
          </button>

        </div>

      {/* Download button */}
<div className="flex justify-center mb-6">
  <button
    className="
      border border-white/100
      pl-5 pr-7 py-2
      rounded-xl
      font-medium
      bg-[#0A0A0A]
      hover:bg-[#1a1a1a]/90
      transition
      flex items-center gap-0
    "
  >
    {/* Mac icon */}
    <img
      src="/images/download mac/mac-icon.png"
      alt="Mac"
      className="h-12 w-auto opacity-100"
    />

    {/* Text */}
    <div className="text-left leading-tight">
      <span className="block text-sm text-white/70">
        Download for
      </span>
      <span className="block text-base font-medium">
        Mac OS
      </span>
    </div>
  </button>
</div>



        <button className="text-white/100 hover:text-white/80 transition">
          Read research
        </button>

      </div>
    </section>
  );
}
