'use client'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <h1 className="text-2xl font-bold font-space">Cowork</h1>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-sm font-inter text-gray-700 hover:text-black transition-colors">Products</a>
              <a href="#how-it-works" className="text-sm font-inter text-gray-700 hover:text-black transition-colors">How it Works</a>
              <a href="#vision" className="text-sm font-inter text-gray-700 hover:text-black transition-colors">Vision</a>
              <a href="#blog" className="text-sm font-inter text-gray-700 hover:text-black transition-colors">Blog</a>
              <a href="#github" className="text-sm font-inter text-gray-700 hover:text-black transition-colors">Github</a>
            </nav>
          </div>
          <button className="bg-black text-white px-6 py-2.5 rounded-lg text-sm font-inter font-medium hover:bg-gray-800 transition-colors">
            Download
          </button>
        </div>
      </div>
    </header>
  )
}
