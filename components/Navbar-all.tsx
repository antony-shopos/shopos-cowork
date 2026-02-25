'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const menuItems = ['Products', 'Case Studies', 'Resources', 'Pricing']

  return (
    <header className="w-full bg-[] border-b border-black/5 relative z-50">
      {/* TOP BAR */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-24 py-5 flex items-center justify-between">
        {/* LEFT CLUSTER */}
        <div className="flex items-center gap-8">
          {/* LOGO */}
          <Link href="/">
            <img
              src="/images/logo/shopos-logo.png"
              alt="ShopOS"
              style={{
                width: '119.95px',
                height: '28px',
              }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-3">
            {menuItems.map(item => (
              <a
                key={item}
                className="transition-opacity"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '18px',
                  padding: '4px 6px',
                  color: '#525252',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center">
          {/* DESKTOP DOWNLOAD */}
          <div className="hidden md:block">
            <button
              className="flex items-center gap-2 transition-opacity"
              style={{
                backgroundColor: '#0A0A0A',
                color: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '999px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '22px',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Get Early Access
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.53223 0.275345C6.93218 -0.105157 7.56553 -0.0892913 7.94629 0.310501L12.3906 4.97652C12.7583 5.36261 12.7581 5.97018 12.3906 6.3564L7.94629 11.0234C7.56538 11.4231 6.93207 11.4384 6.53223 11.0576C6.1324 10.6767 6.11719 10.0434 6.49805 9.64351L9.33301 6.66695H1C0.447824 6.66695 0.000176227 6.21908 0 5.66695C0.000175956 5.11481 0.447824 4.66695 1 4.66695H9.33398L6.49805 1.68941C6.11729 1.28947 6.13234 0.656189 6.53223 0.275345Z"
                  fill="#FAFAFA"
                />
              </svg>
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button className="md:hidden ml-4" onClick={() => setOpen(!open)}>
            {open ? (
              <span style={{ fontSize: '24px' }}>✕</span>
            ) : (
              <span style={{ fontSize: '24px' }}>☰</span>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed left-0 right-0 bottom-0 top-[72px] bg-[#F6F6F6] transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-40`}
      >
        <div className="pt-12 px-6">
          <div className="flex flex-col gap-8 text-left">
            {menuItems.map(item => (
              <a
                key={item}
                className="transition-opacity"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '30px',
                  color: '#525252',
                }}
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}

            <button
              className="mt-10 w-full"
              style={{
                backgroundColor: '#0A0A0A',
                color: '#FFFFFF',
                padding: '16px 20px',
                borderRadius: '999px',
                fontFamily: 'Inter',
                fontSize: '16px',
              }}
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
