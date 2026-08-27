"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { personal } from "@/data/portfolio";
import { useDeviceProfile } from "@/hooks/useDeviceProfile";

const HeroScene = dynamic(() => import("@/three/HeroScene/HeroScene"), { ssr: false });

export default function Hero({ ready }: { ready: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const { reduced } = useDeviceProfile();

  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-name-line", {
        yPercent: 110,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
      })
        .from(".hero-canvas", { opacity: 0, y: 30, duration: 1.1 }, "-=0.7")
        .from(".hero-tag", { opacity: 0, y: 12, duration: 0.6 }, "-=0.6")
        .from(".hero-statement", { opacity: 0, y: 12, duration: 0.6 }, "-=0.4")
        .from(".hero-scroll-cue", { opacity: 0, duration: 0.6 }, "-=0.2");
    }, rootRef);
    return () => ctx.revert();
  }, [ready]);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-6 md:px-16"
    >
      <div className="hero-canvas absolute inset-0 md:right-[-6%]">
        {ready && <HeroScene reduced={reduced} />}
      </div>

      <div className="relative z-10 pointer-events-none mt-24 md:mt-0">
        <p className="hero-tag eyebrow mb-4">PROJECT / SRUTI-NADAR-01</p>
        <h1
          className="hero-name-gradient font-display font-bold leading-[0.88] tracking-tightest text-[16vw] md:text-[8.5vw]"
        >
          <span className="hero-name-line block overflow-hidden">
            <span className="block">{personal.firstName}</span>
          </span>
          <span className="hero-name-line block overflow-hidden">
            <span className="block">{personal.lastName}</span>
          </span>
        </h1>
        <p className="hero-tag font-mono text-xs md:text-sm tracking-widest2 mt-6" style={{ color: '#1b7f91' }}>
          SOFTWARE  ·  WEB  ·  AI/ML
        </p>
        <p className="hero-statement font-body text-base md:text-lg max-w-md mt-4 leading-relaxed" style={{ color: '#5b6670' }}>
          {personal.statement}
        </p>
      </div>

      <div className="hero-scroll-cue absolute bottom-10 left-6 md:left-16 z-10 font-mono text-[10px] tracking-widest2 uppercase" style={{ color: '#5b6670' }}>
        Scroll to explore ↓
      </div>
    </section>
  );
}
