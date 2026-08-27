"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { technologies } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

type IconData = {
  viewBox: string;
  paths: string;
  color: string;
};

const techSvgIcons: Record<string, IconData> = {
  python: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#3776AB" d="M12 0C5.37 0 5.73 2.33 5.73 2.33l.01 2.42h6.37v.73H3.83S0 5.03 0 11.97c0 6.94 3.34 6.7 3.34 6.7h2V16.3s-.11-3.34 3.28-3.34h5.65s3.18.05 3.18-3.07V3.95S17.97 0 12 0zM8.67 2.28c.58 0 1.05.47 1.05 1.05s-.47 1.05-1.05 1.05-1.05-.47-1.05-1.05.47-1.05 1.05-1.05z"/>
      <path fill="#FFD43B" d="M12 24c6.63 0 6.27-2.33 6.27-2.33l-.01-2.42H11.9v-.73h8.28S24 18.97 24 12.03c0-6.94-3.34-6.7-3.34-6.7h-2v2.38s.11 3.34-3.28 3.34H9.73s-3.18-.05-3.18 3.07v5.94S6.03 24 12 24zm3.33-2.28c-.58 0-1.05-.47-1.05-1.05s.47-1.05 1.05-1.05 1.05.47 1.05 1.05-.47 1.05-1.05 1.05z"/>
    `,
    color: "#3776AB",
  },

  javascript: {
    viewBox: "0 0 24 24",
    paths: `
      <rect fill="#F7DF1E" width="24" height="24" rx="2"/>
      <path fill="#323330" d="M6.4 19.2l1.7-1c.3.6.6 1 1.3 1 .6 0 1-.3 1-1.2V11h2.1v7.1c0 2-1.2 2.9-2.9 2.9-1.5 0-2.5-.8-2.9-1.8zm6.7-.3l1.7-1c.4.7 1 1.2 1.9 1.2.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.6-.7-.8-1.2-.8s-.8.3-.8.7c0 .5.3.7 1.1 1l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.3 2.7-3.1 2.7-1.8 0-2.9-.8-3.4-1.9z"/>
    `,
    color: "#F7DF1E",
  },

  react: {
    viewBox: "0 0 24 24",
    paths: `
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
      <g stroke="#61DAFB" stroke-width="1" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
      </g>
    `,
    color: "#61DAFB",
  },

  nodejs: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#339933" d="M12 1.85l8.5 4.9v9.8L12 21.45l-8.5-4.9v-9.8L12 1.85zm-.5.87L4 7.42v8.76L12 20.88l7.5-4.33V7.79l-7.5-4.33-.5-.74z"/>
      <path fill="#339933" d="M12 5.5a1 1 0 110 2 1 1 0 010-2zM8.5 9.5l3.5 2v4l-3.5-2v-4zm7 0v4l-3.5 2v-4l3.5-2z"/>
    `,
    color: "#339933",
  },

  express: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#F2EED8" d="M24 18.5c-1.2 0-2.1-.3-2.8-1l-3.4-4.2-3.5 4.3c-.7.6-1.6.9-2.7.9l4.5-5.5L12 7.5c1.1 0 2 .3 2.6.8l3.2 4 3.2-4c.7-.5 1.5-.8 2.6-.8l-4 5L24 18.5zM0 7.5h2.5c1.4 0 2.3.2 3 .8.6.5.9 1.3.9 2.3 0 1-.3 1.8-1 2.3-.7.6-1.6.8-2.9.8H1.8v4.3H0V7.5zm1.8 4.7h.6c.9 0 1.6-.1 2-.4.4-.3.6-.7.6-1.3 0-.5-.2-.9-.6-1.2-.4-.3-1-.4-1.9-.4H1.8v3.3z"/>
    `,
    color: "#F2EED8",
  },

  html: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#E34F26" d="M1.5 0h21l-1.9 21.4L12 24l-8.6-2.6L1.5 0zm4 4.2l-.3 3h8.8l-.3 3H5.5l.3 3.3h7.8l-.4 4-1.2.3-1.2-.3-.1-1.4H8.3l.2 2.7L12 19.8l3.5-1 .5-5.6H5.8l-.3-3h10.2l.3-3H5.5z"/>
    `,
    color: "#E34F26",
  },

  css: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#1572B6" d="M1.5 0h21l-1.9 21.4L12 24l-8.6-2.6L1.5 0zm4.2 4.2l.3 3.1h8.6l-.2 2.8H6.2l.3 3.1h7.7l-.3 3.8L12 17.7l-1.9-.7-.1-1.5H7.5l.3 3.1L12 19.8l4.2-1.2.5-6H6l-.3-3.2h10.3l.2-2.8H6L5.7 4.2z"/>
    `,
    color: "#1572B6",
  },

  tailwindcss: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#06B6D4" d="M12 6C8.4 6 6.3 7.8 5.7 11.4c1.2-1.8 2.7-2.4 4.5-1.95.99.27 1.74 1.02 2.52 1.83C14.1 12.72 15.75 14.4 19.2 14.4c3.6 0 5.7-1.8 6.3-5.4-1.2 1.8-2.7 2.4-4.5 1.95-.99-.27-1.74-1.02-2.52-1.83C17.1 7.68 15.45 6 12 6zM4.8 14.4C1.2 14.4-.9 16.2-1.5 19.8c1.2-1.8 2.7-2.4 4.5-1.95.99.27 1.74 1.02 2.52 1.83C6.9 21.12 8.55 22.8 12 22.8c3.6 0 5.7-1.8 6.3-5.4-1.2 1.8-2.7 2.4-4.5 1.95-.99-.27-1.74-1.02-2.52-1.83C9.9 16.08 8.25 14.4 4.8 14.4z"/>
    `,
    color: "#06B6D4",
  },

  mongodb: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#47A248" d="M12 2C12 2 8 7 8 12c0 3.3 1.8 6 4 6s4-2.7 4-6c0-5-4-10-4-10zm-.5 16.5c-.1 0-.2-.1-.2-.2v-3.1c0-.1.1-.2.2-.2h1c.1 0 .2.1.2.2v3.1c0 .1-.1.2-.2.2h-1z"/>
    `,
    color: "#47A248",
  },

  postgresql: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#336791" d="M17.5 3C14 3 12 5 12 5S10 3 6.5 3C3 3 1 6 1 9.5c0 5.5 7 11.5 11 14 4-2.5 11-8.5 11-14C23 6 21 3 17.5 3z"/>
    `,
    color: "#336791",
  },

  firebase: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#FFA000" d="M3.9 14.3l2-12c.1-.4.4-.6.7-.3l2.3 4.2L3.9 14.3z"/>
      <path fill="#F57C00" d="M12.5 9.5l-3.6-6.6c-.2-.4-.7-.4-.9 0L3.9 14.3l8.6-4.8z"/>
      <path fill="#FFCA28" d="M17.6 3.8c.3-.3.7-.1.7.3l2.7 14-8.9 5.1c-.3.2-.7.2-.9 0L3.9 18.5l8.6-9L17.6 3.8z"/>
    `,
    color: "#FFCA28",
  },

  numpy: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#4DABCF" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.5 8 12 11.8 4.5 8 12 4.2z"/>
      <path fill="#4D77CF" d="M12 13v8.5l8-4V9.4L12 13z"/>
      <path fill="#4DABCF" d="M12 13L4 9.4v8.1l8 4V13z"/>
    `,
    color: "#4DABCF",
  },

  pandas: {
    viewBox: "0 0 24 24",
    paths: `
      <rect x="4" y="2" width="4" height="6" rx="1" fill="#130754"/>
      <rect x="4" y="10" width="4" height="4" rx="1" fill="#130754"/>
      <rect x="4" y="16" width="4" height="6" rx="1" fill="#130754"/>
      <rect x="10" y="6" width="4" height="12" rx="1" fill="#E70488"/>
      <rect x="16" y="2" width="4" height="6" rx="1" fill="#130754"/>
      <rect x="16" y="10" width="4" height="4" rx="1" fill="#130754"/>
      <rect x="16" y="16" width="4" height="6" rx="1" fill="#130754"/>
    `,
    color: "#E70488",
  },

  matplotlib: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#11557C" d="M4 18.5C4 13 7.8 8 13 6.4c3.1-.9 5.6.3 6.6 2.3.8 1.7.3 3.7-1.2 4.8-1.3 1-3.1 1-4.5.2-1.1-.6-2.2-.7-3.2-.2-1.4.7-2.3 2.2-2.3 3.8v1.2H4z"/>
      <path fill="#FAA43A" d="M8.5 17.5c0-1.5.7-2.8 1.9-3.6 1.2-.8 2.6-.8 3.8-.1 1.1.7 2.5.7 3.5 0 1.1-.7 1.7-1.8 1.7-3.1 0-1.1-.5-2.1-1.4-2.8.7.1 1.4.4 1.9.8 1.5 1.2 2 3.2 1.2 4.9-1 2.1-3.5 3.2-5.7 2.5-1.1-.3-2.1-.2-3 .5-.8.6-1.3 1.5-1.3 2.5H8.5v-1.6z"/>
    `,
    color: "#FAA43A",
  },

  seaborn: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#4C72B0" d="M3 17.5C5.7 12.3 9.2 8.5 13.8 6.1c2.5-1.3 5-1.8 7.2-1.4-1.9 1.4-3.2 3.3-3.9 5.5-.9 2.9-2.7 5.2-5.3 6.7-2.7 1.5-5.7 1.8-8.8.6z"/>
      <path fill="#55A868" d="M5.1 19.8c3.8-.2 6.8-1.5 9.1-4 1.8-1.9 3-4.3 3.6-7.1.5 2.6.1 5-1.2 7.1-2.2 3.6-6.1 5-11.5 4z"/>
    `,
    color: "#4C72B0",
  },

  aws: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#FF9900" d="M5.2 15.4c3.7 2.2 8.4 2.7 12.7 1.2.4-.1.7.1.8.4.1.3-.1.7-.4.8-4.7 1.7-9.8 1.1-13.8-1.3-.3-.2-.4-.6-.2-.9.2-.3.6-.4.9-.2z"/>
      <path fill="#FF9900" d="M18.1 16.8c.5-.1 1.4-.2 1.7.1.3.3-.1 1.3-.3 1.8-.1.3.1.5.4.3 1-.8 1.3-2.5 1-2.8-1.1-.1-.5.4-.9 1-1.1z"/>
      <path fill="#F2EED8" d="M7.2 8.5c0-1.5 1.1-2.3 2.7-2.3 1.2 0 2 .3 2.7.7v-.2c0-.8-.2-1.4-.6-1.7-.4-.3-.9-.5-1.7-.5-.6 0-1.3.1-2 .4-.3.1-.6 0-.7-.3l-.2-.7c-.1-.3 0-.5.3-.7.9-.4 1.8-.6 2.8-.6 1.3 0 2.3.3 2.9 1 .6.6.9 1.5.9 2.7v3.8c0 .4.1.7.3 1 .1.2.1.4-.1.6l-.6.5c-.2.2-.5.2-.7 0-.3-.2-.5-.5-.7-.8-.8.8-1.7 1.2-2.8 1.2-1.7 0-3-1-3-2.8zm5.4-.9c-.6-.3-1.2-.4-1.8-.4-.9 0-1.5.4-1.5 1.3 0 .8.5 1.2 1.3 1.2.8 0 1.5-.4 2-1v-1.1z"/>
    `,
    color: "#FF9900",
  },

  docker: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#2496ED" d="M4 8h3v3H4V8zm4 0h3v3H8V8zm4 0h3v3h-3V8zm-4-4h3v3H8V4zm4 0h3v3h-3V4zm4 4h3v3h-3V8zM4 12h3v3H4v-3zm4 0h3v3H8v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zM3 16c2.5 3.6 6.2 5.2 11 5.2 4.4 0 7.1-1.8 8-5.2H3z"/>
    `,
    color: "#2496ED",
  },

  git: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#F05032" d="M23.5 11.3L12.7.5c-.6-.6-1.6-.6-2.2 0l-2.2 2.2 2.8 2.8c.7-.2 1.4 0 1.9.5.5.6.7 1.3.5 2l2.7 2.7c.7-.2 1.4 0 2 .5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.5-.4-2.2L13 8.4v5.4c.2.1.4.2.5.4.8.8.8 2 0 2.8s-2 .8-2.8 0c-.8-.8-.8-2 0-2.8.3-.3.6-.4.9-.5V8c-.3-.1-.6-.3-.9-.5-.6-.6-.7-1.5-.4-2.2L7.5 2.5.5 9.5c-.6.6-.6 1.6 0 2.2l10.8 10.8c.6.6 1.6.6 2.2 0L23.5 13.5c.6-.6.6-1.6 0-2.2z"/>
    `,
    color: "#F05032",
  },

  github: {
    viewBox: "0 0 24 24",
    paths: `
      <path fill="#F2EED8" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85.004 1.71.115 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
    `,
    color: "#F2EED8",
  },
};

/*
 * Deliberately scattered positions.
 * These are percentages inside the skills field.
 *
 * They are spaced far enough apart that the 72px
 * balls don't collide on desktop.
 */
const desktopPositions = [
  { x: 8, y: 8 },
  { x: 25, y: 18 },
  { x: 44, y: 7 },
  { x: 64, y: 19 },
  { x: 84, y: 9 },

  { x: 14, y: 38 },
  { x: 34, y: 33 },
  { x: 54, y: 43 },
  { x: 74, y: 34 },
  { x: 92, y: 42 },

  { x: 7, y: 67 },
  { x: 27, y: 58 },
  { x: 47, y: 72 },
  { x: 68, y: 61 },
  { x: 87, y: 70 },

  { x: 17, y: 88 },
  { x: 38, y: 86 },
  { x: 59, y: 91 },
  { x: 80, y: 86 },
];

const animationNames = [
  "techFloat0",
  "techFloat1",
  "techFloat2",
  "techFloat3",
];

function FloatingBall({
  tech,
  index,
}: {
  tech: { name: string; icon: string };
  index: number;
}) {
  const ballRef = useRef<HTMLDivElement>(null);
  const iconData = techSvgIcons[tech.icon];

  if (!iconData) return null;

  const position = desktopPositions[index % desktopPositions.length];
  const size = 72;

  return (
    <div
      ref={ballRef}
      className="floating-tech-ball absolute"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
        animation: `${animationNames[index % 4]} ${
          5.5 + (index % 5) * 0.45
        }s ease-in-out ${(index * 0.25) % 2}s infinite`,
        zIndex: index + 1,
      }}
    >
      <div
        className="tech-ball group relative flex items-center justify-center rounded-full cursor-default"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `
            radial-gradient(
              circle at 30% 22%,
              rgba(125,232,242,0.24),
              rgba(7,59,70,0.90) 45%,
              rgba(3,30,38,0.98) 100%
            )
          `,
          border: `1px solid ${iconData.color}55`,
          boxShadow: `
            0 12px 25px rgba(0,0,0,0.35),
            0 0 20px ${iconData.color}18,
            inset 0 2px 2px rgba(255,255,255,0.10),
            inset 0 -10px 18px rgba(0,0,0,0.25)
          `,
        }}
      >
        <div
          className="absolute inset-[5px] rounded-full pointer-events-none"
          style={{
            border: `1px solid ${iconData.color}20`,
          }}
        />

        <div
          className="absolute top-[8px] left-[20%] right-[20%] h-[8px] rounded-full blur-[5px] pointer-events-none"
          style={{
            background: `${iconData.color}22`,
          }}
        />

        <svg
          viewBox={iconData.viewBox}
          className="relative z-10 h-8 w-8 md:h-9 md:w-9 transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: iconData.paths,
          }}
        />

        <span
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[calc(100%+8px)]
            z-30
            -translate-x-1/2
            translate-y-1
            whitespace-nowrap
            rounded-full
            border
            border-[#39c6d8]/20
            bg-[#062e37]/95
            px-2.5
            py-1
            font-mono
            text-[9px]
            uppercase
            tracking-[0.12em]
            text-[#f2eed8]
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
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
        scale: 0.5,
        duration: 0.75,
        stagger: 0.06,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={rootRef}
      className="relative px-5 py-24 sm:px-8 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-4">02 / TECHNICAL ARTIFACTS</p>

        <h2 className="mb-10 font-display text-4xl font-bold tracking-tightest text-ivory sm:text-5xl md:mb-12 md:text-6xl">
          Tech Stack
        </h2>

        <div
          className="
            relative
            h-[760px]
            w-full
            overflow-visible
            sm:h-[720px]
            md:h-[700px]
            lg:h-[680px]
          "
        >
          {technologies.map((tech, index) => (
            <FloatingBall
              key={`${tech.name}-${index}`}
              tech={tech}
              index={index}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes techFloat0 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-8px);
          }
        }

        @keyframes techFloat1 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }

          50% {
            transform: translate(-50%, -50%) translateY(7px);
          }
        }

        @keyframes techFloat2 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-6px);
          }
        }

        @keyframes techFloat3 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }

          50% {
            transform: translate(-50%, -50%) translateY(6px);
          }
        }

        .tech-ball {
          transition:
            transform 300ms ease,
            box-shadow 300ms ease,
            border-color 300ms ease;
        }

        .tech-ball:hover {
          transform: translateY(-6px) scale(1.1);
          border-color: rgba(57, 198, 216, 0.65) !important;

          box-shadow:
            0 18px 35px rgba(0, 0, 0, 0.4),
            0 0 30px rgba(57, 198, 216, 0.22),
            inset 0 1px 1px rgba(255, 255, 255, 0.1) !important;
        }

        /*
         * Tablet layout
         * Keeps the scattered appearance while reducing
         * the horizontal spread.
         */
        @media (max-width: 900px) {
          .floating-tech-ball:nth-child(1) {
            left: 8% !important;
            top: 8% !important;
          }

          .floating-tech-ball:nth-child(2) {
            left: 30% !important;
            top: 18% !important;
          }

          .floating-tech-ball:nth-child(3) {
            left: 55% !important;
            top: 7% !important;
          }

          .floating-tech-ball:nth-child(4) {
            left: 80% !important;
            top: 20% !important;
          }

          .floating-tech-ball:nth-child(5) {
            left: 18% !important;
            top: 38% !important;
          }

          .floating-tech-ball:nth-child(6) {
            left: 43% !important;
            top: 34% !important;
          }

          .floating-tech-ball:nth-child(7) {
            left: 68% !important;
            top: 42% !important;
          }

          .floating-tech-ball:nth-child(8) {
            left: 90% !important;
            top: 36% !important;
          }

          .floating-tech-ball:nth-child(9) {
            left: 9% !important;
            top: 66% !important;
          }

          .floating-tech-ball:nth-child(10) {
            left: 34% !important;
            top: 58% !important;
          }

          .floating-tech-ball:nth-child(11) {
            left: 59% !important;
            top: 68% !important;
          }

          .floating-tech-ball:nth-child(12) {
            left: 84% !important;
            top: 62% !important;
          }

          .floating-tech-ball:nth-child(13) {
            left: 20% !important;
            top: 88% !important;
          }

          .floating-tech-ball:nth-child(14) {
            left: 47% !important;
            top: 84% !important;
          }

          .floating-tech-ball:nth-child(15) {
            left: 74% !important;
            top: 90% !important;
        }

        /*
         * Mobile layout
         * The balls remain scattered instead of becoming
         * a boring straight grid.
         */
        @media (max-width: 640px) {
          .floating-tech-ball {
            transform: translate(-50%, -50%) scale(0.86);
          }

          .floating-tech-ball:nth-child(1) {
            left: 15% !important;
            top: 7% !important;
          }

          .floating-tech-ball:nth-child(2) {
            left: 52% !important;
            top: 5% !important;
          }

          .floating-tech-ball:nth-child(3) {
            left: 84% !important;
            top: 12% !important;
          }

          .floating-tech-ball:nth-child(4) {
            left: 29% !important;
            top: 22% !important;
          }

          .floating-tech-ball:nth-child(5) {
            left: 68% !important;
            top: 25% !important;
          }

          .floating-tech-ball:nth-child(6) {
            left: 10% !important;
            top: 38% !important;
          }

          .floating-tech-ball:nth-child(7) {
            left: 48% !important;
            top: 37% !important;
          }

          .floating-tech-ball:nth-child(8) {
            left: 87% !important;
            top: 43% !important;
          }

          .floating-tech-ball:nth-child(9) {
            left: 27% !important;
            top: 52% !important;
          }

          .floating-tech-ball:nth-child(10) {
            left: 65% !important;
            top: 55% !important;
          }

          .floating-tech-ball:nth-child(11) {
            left: 10% !important;
            top: 67% !important;
          }

          .floating-tech-ball:nth-child(12) {
            left: 47% !important;
            top: 67% !important;
          }

          .floating-tech-ball:nth-child(13) {
            left: 86% !important;
            top: 73% !important;
          }

          .floating-tech-ball:nth-child(14) {
            left: 27% !important;
            top: 83% !important;
          }

          .floating-tech-ball:nth-child(15) {
            left: 65% !important;
            top: 87% !important;
          }

          .floating-tech-ball:nth-child(16) {
            left: 90% !important;
            top: 91% !important;
          }

          .floating-tech-ball:nth-child(n + 17) {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-tech-ball {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}