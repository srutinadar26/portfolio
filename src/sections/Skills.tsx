"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategories, technologies } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

/* ── SVG icon paths for each technology ── */
const techSvgIcons: Record<string, { viewBox: string; paths: string; color: string }> = {
  python: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#3776AB" d="M12 0C5.37 0 5.73 2.33 5.73 2.33l.01 2.42h6.37v.73H3.83S0 5.03 0 11.97c0 6.94 3.34 6.7 3.34 6.7h2V16.3s-.11-3.34 3.28-3.34h5.65s3.18.05 3.18-3.07V3.95S17.97 0 12 0zM8.67 2.28c.58 0 1.05.47 1.05 1.05s-.47 1.05-1.05 1.05-1.05-.47-1.05-1.05.47-1.05 1.05-1.05z"/><path fill="#FFD43B" d="M12 24c6.63 0 6.27-2.33 6.27-2.33l-.01-2.42H11.9v-.73h8.28S24 18.97 24 12.03c0-6.94-3.34-6.7-3.34-6.7h-2v2.38s.11 3.34-3.28 3.34H9.73s-3.18-.05-3.18 3.07v5.94S6.03 24 12 24zm3.33-2.28c-.58 0-1.05-.47-1.05-1.05s.47-1.05 1.05-1.05 1.05.47 1.05 1.05-.47 1.05-1.05 1.05z"/>`,
    color: "#3776AB",
  },
  javascript: {
    viewBox: "0 0 24 24",
    paths: `<rect fill="#F7DF1E" width="24" height="24" rx="2"/><path fill="#323330" d="M6.4 19.2l1.7-1c.3.6.6 1 1.3 1 .6 0 1-.3 1-1.2V11h2.1v7.1c0 2-1.2 2.9-2.9 2.9-1.5 0-2.5-.8-2.9-1.8zm6.7-.3l1.7-1c.4.7 1 1.2 1.9 1.2.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.6-.7-.8-1.2-.8s-.8.3-.8.7c0 .5.3.7 1.1 1l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.3 2.7-3.1 2.7-1.8 0-2.9-.8-3.4-1.9z"/>`,
    color: "#F7DF1E",
  },
  react: {
    viewBox: "0 0 24 24",
    paths: `<circle cx="12" cy="12" r="2.2" fill="#61DAFB"/><g stroke="#61DAFB" stroke-width="1" fill="none"><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></g>`,
    color: "#61DAFB",
  },
  nodejs: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#339933" d="M12 1.85l8.5 4.9v9.8L12 21.45l-8.5-4.9v-9.8L12 1.85zm-.5.87L4 7.42v8.76L12 20.88l7.5-4.33V7.79l-7.5-4.33-.5-.74z"/><path fill="#339933" d="M12 5.5a1 1 0 110 2 1 1 0 010-2zM8.5 9.5l3.5 2v4l-3.5-2v-4zm7 0v4l-3.5 2v-4l3.5-2z"/>`,
    color: "#339933",
  },
  express: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#F2EED8" d="M24 18.5c-1.2 0-2.1-.3-2.8-1l-3.4-4.2-3.5 4.3c-.7.6-1.6.9-2.7.9l4.5-5.5L12 7.5c1.1 0 2 .3 2.6.8l3.2 4 3.2-4c.7-.5 1.5-.8 2.6-.8l-4 5L24 18.5zM0 7.5h2.5c1.4 0 2.3.2 3 .8.6.5.9 1.3.9 2.3 0 1-.3 1.8-1 2.3-.7.6-1.6.8-2.9.8H1.8v4.3H0V7.5zm1.8 4.7h.6c.9 0 1.6-.1 2-.4.4-.3.6-.7.6-1.3 0-.5-.2-.9-.6-1.2-.4-.3-1-.4-1.9-.4H1.8v3.3z"/>`,
    color: "#F2EED8",
  },
  html: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#E34F26" d="M1.5 0h21l-1.9 21.4L12 24l-8.6-2.6L1.5 0zm4 4.2l-.3 3h8.8l-.3 3H5.5l.3 3.3h7.8l-.4 4-1.2.3-1.2-.3-.1-1.4H8.3l.2 2.7L12 19.8l3.5-1 .5-5.6H5.8l-.3-3h10.2l.3-3H5.5z"/>`,
    color: "#E34F26",
  },
  css: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#1572B6" d="M1.5 0h21l-1.9 21.4L12 24l-8.6-2.6L1.5 0zm4.2 4.2l.3 3.1h8.6l-.2 2.8H6.2l.3 3.1h7.7l-.3 3.8L12 17.7l-1.9-.7-.1-1.5H7.5l.3 3.1L12 19.8l4.2-1.2.5-6H6l-.3-3.2h10.3l.2-2.8H6L5.7 4.2z"/>`,
    color: "#1572B6",
  },
  tailwindcss: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#06B6D4" d="M12 6C8.4 6 6.3 7.8 5.7 11.4c1.2-1.8 2.7-2.4 4.5-1.95.99.27 1.74 1.02 2.52 1.83C14.1 12.72 15.75 14.4 19.2 14.4c3.6 0 5.7-1.8 6.3-5.4-1.2 1.8-2.7 2.4-4.5 1.95-.99-.27-1.74-1.02-2.52-1.83C17.1 7.68 15.45 6 12 6zM4.8 14.4C1.2 14.4-.9 16.2-1.5 19.8c1.2-1.8 2.7-2.4 4.5-1.95.99.27 1.74 1.02 2.52 1.83C6.9 21.12 8.55 22.8 12 22.8c3.6 0 5.7-1.8 6.3-5.4-1.2 1.8-2.7 2.4-4.5 1.95-.99-.27-1.74-1.02-2.52-1.83C9.9 16.08 8.25 14.4 4.8 14.4z"/>`,
    color: "#06B6D4",
  },
  mongodb: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#47A248" d="M12 2C12 2 8 7 8 12c0 3.3 1.8 6 4 6s4-2.7 4-6c0-5-4-10-4-10zm-.5 16.5c-.1 0-.2-.1-.2-.2v-3.1c0-.1.1-.2.2-.2h1c.1 0 .2.1.2.2v3.1c0 .1-.1.2-.2.2h-1z"/>`,
    color: "#47A248",
  },
  postgresql: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#336791" d="M17.5 3C14 3 12 5 12 5S10 3 6.5 3C3 3 1 6 1 9.5c0 5.5 7 11.5 11 14 4-2.5 11-8.5 11-14C23 6 21 3 17.5 3zm-5.5 17c-2.5-1.8-8-6.3-8-10.5C4 7 5.5 5 7 5c2 0 3.5 1 5 3 1.5-2 3-3 5-3 1.5 0 3 2 3 4.5 0 4.2-5.5 8.7-8 10.5z"/><circle cx="12" cy="10" r="2.5" fill="#336791"/>`,
    color: "#336791",
  },
  firebase: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#FFA000" d="M3.9 14.3l2-12c.1-.4.4-.6.7-.3l2.3 4.2L3.9 14.3z"/><path fill="#F57C00" d="M12.5 9.5l-3.6-6.6c-.2-.4-.7-.4-.9 0L3.9 14.3l8.6-4.8z"/><path fill="#FFCA28" d="M17.6 3.8c.3-.3.7-.1.7.3l2.7 14-8.9 5.1c-.3.2-.7.2-.9 0L3.9 18.5l8.6-9L17.6 3.8z"/>`,
    color: "#FFCA28",
  },
  numpy: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#4DABCF" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.5 8 12 11.8 4.5 8 12 4.2z"/><path fill="#4D77CF" d="M12 13v8.5l8-4V9.4L12 13z"/><path fill="#4DABCF" d="M12 13L4 9.4v8.1l8 4V13z"/>`,
    color: "#4DABCF",
  },
  pandas: {
    viewBox: "0 0 24 24",
    paths: `<rect x="4" y="2" width="4" height="6" rx="1" fill="#130754"/><rect x="4" y="10" width="4" height="4" rx="1" fill="#130754"/><rect x="4" y="16" width="4" height="6" rx="1" fill="#130754"/><rect x="10" y="6" width="4" height="12" rx="1" fill="#E70488"/><rect x="16" y="2" width="4" height="6" rx="1" fill="#130754"/><rect x="16" y="10" width="4" height="4" rx="1" fill="#130754"/><rect x="16" y="16" width="4" height="6" rx="1" fill="#130754"/>`,
    color: "#E70488",
  },
  scikitlearn: {
    viewBox: "0 0 24 24",
    paths: `<circle cx="6" cy="12" r="3" fill="#F09436"/><circle cx="12" cy="6" r="3" fill="#3499CD"/><circle cx="18" cy="12" r="3" fill="#F09436"/><circle cx="12" cy="18" r="3" fill="#3499CD"/><circle cx="12" cy="12" r="2" fill="#F09436"/>`,
    color: "#F09436",
  },
  tensorflow: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#FF6F00" d="M1.3 6.6l10.1-5.8c.4-.2.8-.2 1.2 0l10.1 5.8L12 12.4 1.3 6.6z"/><path fill="#FF6F00" d="M12 12.4v11.5l-10.1-5.8c-.4-.2-.6-.6-.6-1V6.6L12 12.4z" opacity=".7"/><path fill="#FF6F00" d="M22.7 6.6v10.5c0 .4-.2.8-.6 1L12 23.9V12.4l10.7-5.8z" opacity=".85"/>`,
    color: "#FF6F00",
  },
  transformers: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#FFD21E" d="M12 2a2 2 0 00-2 2v1H7a2 2 0 00-2 2v2a2 2 0 002 2h1v6H7a2 2 0 00-2 2v2a2 2 0 002 2h10a2 2 0 002-2v-2a2 2 0 00-2-2h-1v-6h1a2 2 0 002-2V7a2 2 0 00-2-2h-3V4a2 2 0 00-2-2z"/>`,
    color: "#FFD21E",
  },
  fastapi: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#009688" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4c0 0-1 0-1 0l-1-6c0-1 .45-1 1-1h2c.55 0 1 0 1 1l-1 6h-1z"/><text x="9.5" y="17" font-size="10" font-weight="bold" fill="white">⚡</text>`,
    color: "#009688",
  },
  flask: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#F2EED8" d="M9 2h6v2h-2v3l6 9.5c.6 1 .3 2.2-.7 2.8-.3.2-.6.2-.9.2H6.6c-1.2 0-2.1-.9-2.1-2.1 0-.3.1-.6.2-.9L11 7V4H9V2zm3 6.5L6.5 17h11L12 8.5z"/>`,
    color: "#F2EED8",
  },
  docker: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#2496ED" d="M13 4h3v3h-3V4zm-4 0h3v3H9V4zM5 4h3v3H5V4zm4 4h3v3H9V8zM5 8h3v3H5V8zm-4 4h3v3H1v-3zm4 0h3v3H5v-3zm4 0h3v3H9v-3zm4 0h3v3h-3v-3zm6-1.5c-.7-.5-2.3-.7-3.5-.4-.2-1.3-.9-2.4-2.3-3.4l-.7-.5-.5.7c-.6 1-1 2.4-.8 3.5-1.1.6-3 .7-3.5.7H.5c-.3 1.5-.3 6.3 3.7 10 2.8 2.6 7 4 12.2 4 7.4 0 12.8-3.4 15.4-10.7 1 0 3.2.1 4.3-2.1l.2-.4-.7-.4z"/>`,
    color: "#2496ED",
  },
  git: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#F05032" d="M23.5 11.3L12.7.5c-.6-.6-1.6-.6-2.2 0l-2.2 2.2 2.8 2.8c.7-.2 1.4 0 1.9.5.5.6.7 1.3.5 2l2.7 2.7c.7-.2 1.4 0 2 .5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.5-.4-2.2L13 8.4v5.4c.2.1.4.2.5.4.8.8.8 2 0 2.8s-2 .8-2.8 0c-.8-.8-.8-2 0-2.8.3-.3.6-.4.9-.5V8c-.3-.1-.6-.3-.9-.5-.6-.6-.7-1.5-.4-2.2L7.5 2.5.5 9.5c-.6.6-.6 1.6 0 2.2l10.8 10.8c.6.6 1.6.6 2.2 0L23.5 13.5c.6-.6.6-1.6 0-2.2z"/>`,
    color: "#F05032",
  },
  github: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#F2EED8" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85.004 1.71.115 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>`,
    color: "#F2EED8",
  },
  socketio: {
    viewBox: "0 0 24 24",
    paths: `<path fill="#010101" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path fill="#F2EED8" d="M14.5 7L9 12.5h2L14.5 7zM9.5 17l5.5-5.5h-2L9.5 17z"/>`,
    color: "#F2EED8",
  },
};

/* ── Floating Tech Ball Component ── */
function FloatingBall({
  tech,
  index,
  total,
}: {
  tech: { name: string; icon: string };
  index: number;
  total: number;
}) {
  const ballRef = useRef<HTMLDivElement>(null);
  const iconData = techSvgIcons[tech.icon];

  // Calculate a semi-random position spread across the container
  const angle = (index / total) * Math.PI * 2;
  const radius = 30 + (index % 3) * 15;
  const left = 50 + Math.cos(angle) * radius;
  const top = 50 + Math.sin(angle) * radius;

  // Each ball gets a unique animation duration / delay for organic feel
  const dur = 4 + (index % 5) * 1.2;
  const delay = (index * 0.3) % 3;
  const yAmp = 8 + (index % 4) * 4;

  return (
    <div
      ref={ballRef}
      className="floating-tech-ball group absolute"
      style={{
        left: `${Math.min(Math.max(left, 5), 95)}%`,
        top: `${Math.min(Math.max(top, 5), 95)}%`,
        animation: `techFloat${index % 4} ${dur}s ease-in-out ${delay}s infinite`,
        ["--y-amp" as string]: `${yAmp}px`,
      }}
    >
      <div className="relative w-14 h-14 md:w-[4.5rem] md:h-[4.5rem] rounded-full flex items-center justify-center transition-all duration-300 cursor-default"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${iconData?.color || '#39C6D8'}33, ${iconData?.color || '#39C6D8'}11)`,
          border: `1px solid ${iconData?.color || '#39C6D8'}44`,
          boxShadow: `0 0 16px ${iconData?.color || '#39C6D8'}15`,
        }}
      >
        {iconData && (
          <svg
            viewBox={iconData.viewBox}
            className="w-7 h-7 md:w-9 md:h-9"
            dangerouslySetInnerHTML={{ __html: iconData.paths }}
          />
        )}
        {/* Tooltip on hover */}
        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap font-mono text-[10px] md:text-[11px] tracking-widest2 uppercase text-ivory bg-shadow-deep/90 border border-ivory/10 rounded px-2 py-1 z-20">
          {tech.name}
        </span>
      </div>
    </div>
  );
}

export default function Skills() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".floating-tech-ball", {
        opacity: 0,
        scale: 0,
        duration: 0.7,
        stagger: 0.05,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={rootRef} className="relative py-32 md:py-40 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-4">02 / TECHNICAL ARTIFACTS</p>
        <h2 className="font-display font-bold text-ivory text-4xl md:text-6xl tracking-tightest mb-16">
          Tech Stack
        </h2>

        {/* Floating tech balls container */}
        <div className="relative w-full" style={{ minHeight: "520px" }}>
          {technologies.map((tech, i) => (
            <FloatingBall key={tech.name} tech={tech} index={i} total={technologies.length} />
          ))}
        </div>

      </div>
    </section>
  );
}
