"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SiteConfig } from "@/sanity/queries";

const FALLBACK_SLIDES = [
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUWsdNmKuEaxzZZ0jqya_oMyiSqeVGJkKZZrSrgYWX4hGCByFE2ujhLHR6AST5GEZQxu5I1OiNAOfhTABSGOG4mZWsb276fopDQeAKG9s4GtLrkSQZKqvoL3snM1Jh7gRN0g5sl7sKOU3UOSCH6jaRDmMTPyzFchxhkZv0-sZxikk05qxogqqaGZXPUgF6Y7DGpHvscbAYiC49-b_UDqQFaHOyg158IgVP0_Tmskk5NTrhAbYMcriGrf_NRv58LpUwQyEx7sQVk4Xp", alt: "Modern high-tech digital transformation visual" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBog4sRSUAzab58aUKImGwktfjzxFJtJ1cVnqtXzQYdiqGm2VDQpL1t5LDiMl4KFGvyBRNs0HkErSY9IbdZfLSaGQtJCrW2eCYuijw11OVQdloFLBet6H799ijjt68nmUL_k4XkoORAiDpe0Vhh-CCLS1qLNLDCESDRYUTpMaouWUvCpX1rmBeEIyv6fnnXD_HvsPMLZpPVE7oNUhTrP-3Yd0LqvAk8sgki-jWoXGkCjatyJSs_2CwG-0a0rT-2oS1wm8S4VOogEdPX", alt: "Cybersecurity and cloud infrastructure visual" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4l1dPvWgPMJP9Yi6Au8SBoW4pOxxPIOKG432EvgLmPciC9Zgop-d_Ydg7u9fTT0ySFDOPHii49iNmJvdwICcJYO3CJb2xy7-IuLxUh_cxXkXgs0A4TcSj8SRZoLMu6TC_Cg0xL9l2YebCXVDA2gwBoyRvN9a20ZhPKxWphCye8SzhwsWEPiOB30wOlzoqwAMsdpd23icj_yIpvgSzA3u9yToIRKEKOghvNjTpIwIYO7QnGaKNoowogVsbZ7oqiDeUmYbRjrQT8Fnp", alt: "Advanced software development and coding interface" },
];

type Props = { config: SiteConfig | null };

export default function HeroSection({ config }: Props) {
  const slides = config?.heroImages?.length ? config.heroImages : FALLBACK_SLIDES;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-40 pb-24 md:pt-56 md:pb-40 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-gradient-to-l from-[var(--color-primary)]/10 to-transparent rounded-bl-[100px]" />

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]" />
            </span>
            Innovation Digital
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--color-on-surface)] leading-[1.1]">
            Accélérez votre <br />
            <span className="text-[var(--color-primary)]">transformation</span> <br />
            numérique
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] max-w-lg leading-relaxed">
            Nous concevons des architectures IT robustes et des solutions
            logicielles sur mesure pour propulser votre entreprise vers
            l&apos;excellence technologique.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              id="hero-primary-btn"
              className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[var(--color-primary)]/20 hover:scale-105 active:scale-95 transition-all"
            >
              Contactez-nous
            </a>
            <a
              href="#expertise"
              id="hero-secondary-btn"
              className="bg-white border border-slate-200 text-[var(--color-on-surface)] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all"
            >
              Nos Services
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="aspect-square rounded-xl overflow-hidden shadow-2xl shadow-[var(--color-on-surface)]/10 relative bg-slate-200">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <Image
                  src={slide.url}
                  alt={slide.alt ?? "Kayiratech"}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-white" : "w-2 bg-white/40"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
