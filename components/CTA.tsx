'use client'

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">
          Ready to sell like the big boys?
        </h2>
        <p className="text-xl font-inter text-gray-400 mb-12 max-w-2xl mx-auto">
          Your brand gets smarter every day, sounds like you and has agents working 24/7.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="bg-white text-black px-8 py-4 rounded-lg text-base font-inter font-medium hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
            Download for Mac OS
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-base font-inter font-medium hover:bg-white hover:text-black transition-all">
            Read research
          </button>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 max-w-2xl mx-auto">
          <p className="font-inter text-gray-400 text-sm mb-2">Install via terminal</p>
          <code className="font-mono text-sm text-green-400 block">
            curl -fsSL https://cowork.shopos.ai/download.sh | bash
          </code>
        </div>
      </div>
    </section>
  )
}
