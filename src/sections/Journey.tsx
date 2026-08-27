"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { journey } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".journey-line-fill", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 60%",
          end: "bottom 70%",
          scrub: 0.6,
        },
      });
      gsap.utils.toArray<HTMLElement>(".journey-item").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          x: -24,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 78%" },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={rootRef} className="relative py-32 md:py-40 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <p className="eyebrow mb-4">03 / EXHIBITION TIMELINE</p>
        <h2 className="font-display font-bold text-ivory text-4xl md:text-6xl tracking-tightest mb-20">
          My Journey
        </h2>

        <div className="relative pl-10">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-ivory/10">
            <div className="journey-line-fill absolute inset-0 bg-cyan origin-top scale-y-0" />
          </div>

          <div className="flex flex-col gap-16">
            {journey.map((item) => (
              <div key={item.title} className="journey-item relative">
                <div className="absolute -left-[42px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan" />
                <p className="font-mono text-[10px] tracking-widest2 text-cyan mb-2">
                  {item.date} — {item.tag}
                </p>
                <h3 className="font-display font-semibold text-ivory text-xl md:text-2xl mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sand/80 text-sm md:text-base leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
