"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"name" | "status" | "done">("name");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      onComplete();
      return;
    }

    const tl = gsap.timeline();
    const counter = { value: 0 };

    tl.to({}, { duration: 0.35 })
      .call(() => setPhase("status"))
      .to(counter, {
        value: 100,
        duration: 1.3,
        ease: "power2.out",
        onUpdate: () => setProgress(Math.round(counter.value)),
      })
      .call(() => setPhase("done"))
      .to(rootRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        delay: 0.15,
      })
      .call(onComplete);

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9997] flex flex-col items-center justify-center bg-shadow-deep"
      style={{ backgroundColor: "var(--shadow-deep)" }}
    >
      <div className="env-blueprint opacity-[0.08]" />
      <p className="font-mono text-[10px] tracking-widest2 text-cyan mb-4">
        {"COORD / 19.0760N 72.8777E"}
      </p>
      <h1 className="font-display font-bold text-ivory text-[12vw] md:text-[6vw] leading-none tracking-tightest">
        SRUTI NADAR
      </h1>
      <p className="font-mono text-xs tracking-widest2 text-sand mt-6 uppercase">
        {phase === "name" ? "Initializing digital portfolio" : "Loading scene assets"}
      </p>
      <div className="mt-8 w-40 font-mono text-sm text-cyan">
        {String(progress).padStart(3, "0")}%
      </div>
    </div>
  );
}
