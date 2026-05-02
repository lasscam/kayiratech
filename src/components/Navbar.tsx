"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#expertise" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      } bg-white md:bg-white/80 md:backdrop-blur-xl`}
    >
      {/* Checkbox invisible — toggle fiable sur iOS Safari */}
      <input
        type="checkbox"
        id="nav-mobile"
        className="sr-only"
        checked={menuOpen}
        onChange={(e) => setMenuOpen(e.target.checked)}
      />

      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
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

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-center gap-10 font-semibold font-[var(--font-manrope)] tracking-tight">
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

        {/* CTA — desktop */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-xl font-semibold scale-95 active:scale-90 duration-200 transition-all hover:bg-[var(--color-primary-container)]"
        >
          Contactez-nous
        </a>

        {/* Hamburger — mobile (label lié au checkbox, toujours fiable sur iOS) */}
        <label
          htmlFor="nav-mobile"
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-12 h-12 cursor-pointer select-none"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </label>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-8 py-6 flex flex-col gap-6 font-semibold font-[var(--font-manrope)]">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => { setActive(label); setMenuOpen(false); }}
              className={`text-lg transition-colors ${
                active === label
                  ? "text-[var(--color-primary)]"
                  : "text-slate-700"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[var(--color-primary)] text-white text-center px-6 py-3 rounded-xl font-semibold transition-all hover:bg-[var(--color-primary-container)]"
          >
            Contactez-nous
          </a>
        </div>
      )}
    </nav>
  );
}
