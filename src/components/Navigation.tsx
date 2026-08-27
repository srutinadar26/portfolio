"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/portfolio";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed
        top-3
        sm:top-4
        md:top-6
        left-1/2
        -translate-x-1/2
        z-[500]

        flex
        items-center

        gap-0.5
        sm:gap-1
        md:gap-2

        max-w-[calc(100vw-24px)]
        sm:max-w-[calc(100vw-32px)]
        md:max-w-none

        overflow-x-auto
        overflow-y-hidden

        rounded-full

        px-1.5
        sm:px-2
        py-1.5
        sm:py-2

        /* Hide scrollbar */
        [scrollbar-width:none]
        [-ms-overflow-style:none]

        /* Dark turquoise glass */
        bg-[#073b46]/65
        backdrop-blur-xl
        backdrop-saturate-150

        /* Turquoise glass edge */
        border
        border-[#39c6d8]/25

        /* Depth + inner glass highlight */
        shadow-[0_8px_32px_rgba(2,35,42,0.45),inset_0_1px_0_rgba(57,198,216,0.16),inset_0_-1px_0_rgba(0,0,0,0.15)]

        transition-all
        duration-500
        ease-out

        ${scrolled
          ? `
              bg-[#073b46]/78
              border-[#39c6d8]/30
              shadow-[0_12px_38px_rgba(2,35,42,0.55),inset_0_1px_0_rgba(57,198,216,0.18),inset_0_-1px_0_rgba(0,0,0,0.18)]
            `
          : `
              bg-[#073b46]/60
            `
        }
      `}
    >
      {nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          data-cursor="button"
          className="
            group
            relative
            flex
            shrink-0
            items-center
            justify-center

            font-mono
            text-[9px]
            xs:text-[10px]
            sm:text-[11px]
            md:text-[12px]

            tracking-[0.08em]
            sm:tracking-widest2

            text-[#d8d4bd]

            px-2
            sm:px-2.5
            md:px-3

            py-1.5
            sm:py-2

            rounded-full

            whitespace-nowrap

            transition-all
            duration-300
            ease-out

            hover:text-[#f2eed8]

            hover:-translate-y-[2px]

            hover:bg-[#0b5360]/65

            hover:border
            hover:border-[#39c6d8]/30

            hover:shadow-[0_7px_20px_rgba(2,35,42,0.45),inset_0_1px_0_rgba(57,198,216,0.18)]

            active:translate-y-0
            active:scale-[0.97]
          "
        >
          {item.label}

          {/* Futuristic turquoise light */}
          <span
            className="
              pointer-events-none
              absolute

              left-1/2
              bottom-1

              -translate-x-1/2

              w-0
              h-[1px]

              rounded-full

              bg-[#39c6d8]

              opacity-0

              transition-all
              duration-300

              group-hover:w-1/2
              group-hover:opacity-80

              shadow-[0_0_8px_rgba(57,198,216,0.7)]
            "
          />
        </a>
      ))}
    </nav>
  );
}