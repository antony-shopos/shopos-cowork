"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Products", "How it Works", "Vision", "Blog", "Github"];

  return (
    <header className="w-full bg-[] border-b border-black/5 relative z-50">
      
      {/* TOP BAR */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-24 py-5 flex items-center justify-between">

        {/* LEFT CLUSTER */}
        <div className="flex items-center gap-8">

          {/* LOGO */}
          <img
            src="/images/logo/shopos-logo.png"
            alt="ShopOS"
            style={{
              width: "119.95px",
              height: "28px",
            }}
          />

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-3">
            {menuItems.map((item) => (
              <a
                key={item}
                className="transition-opacity"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "18px",
                  padding: "4px 6px",
                  color: "#525252",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
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
              className="flex items-center gap-3 transition-opacity"
              style={{
                backgroundColor: "#0A0A0A",
                color: "#FFFFFF",
                padding: "10px 20px",
                borderRadius: "999px",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "18px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Download
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  border: "1px dashed #FFFFFF",
                  borderRadius: "3px",
                }}
              />
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden ml-4"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <span style={{ fontSize: "24px" }}>✕</span>
            ) : (
              <span style={{ fontSize: "24px" }}>☰</span>
            )}
          </button>

        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      {/* MOBILE FULLSCREEN MENU */}
<div
  className={`fixed left-0 right-0 bottom-0 top-[72px] bg-[#F6F6F6] transition-transform duration-300 ease-in-out ${
    open ? "translate-x-0" : "translate-x-full"
  } md:hidden z-40`}
>
  <div className="pt-12 px-6">

    <div className="flex flex-col gap-8 text-left">
      {menuItems.map((item) => (
        <a
          key={item}
          className="transition-opacity"
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "30px",
            color: "#525252",
          }}
          onClick={() => setOpen(false)}
        >
          {item}
        </a>
      ))}

      <button
        className="mt-10 w-full"
        style={{
          backgroundColor: "#0A0A0A",
          color: "#FFFFFF",
          padding: "16px 20px",
          borderRadius: "999px",
          fontFamily: "Inter",
          fontSize: "16px",
        }}
      >
        Download
      </button>
    </div>

  </div>
</div>

    </header>
  );
}