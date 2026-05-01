"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#expertise" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      } bg-white/80 backdrop-blur-xl`}
    >
      <div className="grid grid-cols-3 items-center max-w-7xl mx-auto px-8 h-20">
        {/* Logo */}
        <a href="#" className="flex items-center select-none">
          <Image
            src="/logo-kayiratech.png"
            alt="Kayiratech"
            width={130}
            height={52}
            className="object-contain"
          />
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center justify-center gap-10 font-semibold font-[var(--font-manrope)] tracking-tight">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setActive(label)}
              className={`transition-all duration-300 ${
                active === label
                  ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1"
                  : "text-slate-600 hover:text-[var(--color-primary)]"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-end">
          <a
            href="#contact"
            className="bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-xl font-semibold scale-95 active:scale-90 duration-200 transition-all hover:bg-[var(--color-primary-container)]"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </nav>
  );
}
