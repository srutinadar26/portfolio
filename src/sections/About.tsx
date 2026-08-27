"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { introduction } from "@/data/portfolio";

const DigitalCore = dynamic(
  () => import("@/three/DigitalCore/DigitalCore"),
  {
    ssr: false,
  }
);

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",

        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 65%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={rootRef}
      className="relative pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-16"
    >
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start max-w-6xl mx-auto">

        {/* LEFT */}
        <div className="md:col-span-4 about-reveal">
          <p className="eyebrow mb-6">
            {introduction.eyebrow}
          </p>

          <div className="h-56 w-56 md:h-64 md:w-64">
            <DigitalCore />
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-8">
          {introduction.bio.map((para, i) => (
            <p
              key={i}
              className="about-reveal font-body text-ivory/90 text-base md:text-lg leading-[1.7] mb-5 max-w-2xl"
            >
              {para}
            </p>
          ))}

          <div className="about-reveal mt-10 flex flex-wrap gap-3">
            {introduction.focusAreas.map((area) => (
              <span
                key={area}
                className="
                  font-mono
                  text-[11px]
                  tracking-widest2
                  uppercase
                  text-cyan
                  border
                  border-cyan/30
                  rounded-full
                  px-4
                  py-2
                "
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}