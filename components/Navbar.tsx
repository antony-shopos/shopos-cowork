'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <div className="text-2xl font-display font-bold">Cowork</div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">Products</a>
              <a href="#how-it-works" className="text-sm text-gray-700 hover:text-black transition-colors">How it Works</a>
              <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">Vision</a>
              <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">Blog</a>
              <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">Github</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all">
              Download
            </button>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-slide-up">
            <a href="#" className="block text-sm text-gray-700 hover:text-black">Products</a>
            <a href="#how-it-works" className="block text-sm text-gray-700 hover:text-black">How it Works</a>
            <a href="#" className="block text-sm text-gray-700 hover:text-black">Vision</a>
            <a href="#" className="block text-sm text-gray-700 hover:text-black">Blog</a>
            <a href="#" className="block text-sm text-gray-700 hover:text-black">Github</a>
            <button className="w-full px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full mt-4">
              Download
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
