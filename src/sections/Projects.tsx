"use client";

import Image from "next/image";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADER
            ===================================================== */}

        <div className="mb-16">
          <p className="mb-4 text-sm tracking-[0.3em] text-cyan-400">
            05 / PROJECTS
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Featured
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            A collection of AI-powered applications, full-stack products, and
            data-driven systems I&apos;ve built while exploring technology and
            solving real-world problems.
          </p>
        </div>

        {/* =====================================================
            PROJECT GRID
            ===================================================== */}

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="
                project-card
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.10]
                bg-[#071116]/40
                backdrop-blur-xl
                transition-all
                duration-300
                ease-out
                hover:-translate-y-3
                hover:border-cyan-450
                hover:shadow-[0_25px_80px_rgba(0,0,0,5),0_0_45px_rgba(34,211,238,0.10)]
              "
            >

              {/* =================================================
                  CARD GLOW / ATMOSPHERIC LAYER
                  ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-px
                  rounded-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34,211,238,0.18), transparent 35%, transparent 65%, rgba(59,130,246,0.12))",
                }}
              />

              {/* =================================================
                  INNER BORDER
                  ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[1px]
                  z-20
                  rounded-3xl
                  border
                  border-white/[0.04]
                "
              />

              {/* =================================================
                  PROJECT IMAGE
                  ================================================= */}

              <div
                className="
                  relative
                  aspect-video
                  w-full
                  overflow-hidden
                  bg-black/50
                "
              >
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-[1.07]
                    group-hover:brightness-110
                  "
                />

                {/* Dark gradient */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#05090b]
                    via-black/20
                    to-transparent
                    opacity-90
                  "
                />

                {/* Cyan image glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.16),transparent_55%)]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Image top shine */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    right-0
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-300/50
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* =================================================
                  PROJECT CONTENT
                  ================================================= */}

              <div className="relative z-30 p-6 md:p-7">

                {/* Title + GitHub */}

                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-white
                      transition-all
                      duration-300
                      group-hover:text-cyan-300
                      group-hover:translate-x-1
                    "
                  >
                    {project.name}
                  </h3>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="
                      shrink-0
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-2
                      text-xs
                      font-medium
                      tracking-wider
                      text-white/60
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-400/50
                      hover:bg-cyan-400/10
                      hover:text-cyan-300
                      hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]
                    "
                  >
                    GITHUB ↗
                  </a>
                </div>

                {/* Description */}

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-sm
                    leading-6
                    text-white/55
                    transition-colors
                    duration-300
                    group-hover:text-white/70
                    md:text-base
                  "
                >
                  {project.description}
                </p>

                {/* =================================================
                    TECH STACK
                    ================================================= */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology.name}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.035]
                        px-3
                        py-1.5
                        text-[10px]
                        tracking-[0.12em]
                        text-white/55
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        group-hover:border-cyan-400/15
                        group-hover:bg-cyan-400/[0.04]
                        group-hover:text-white/75
                      "
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${technology.icon}`}
                        alt=""
                        aria-hidden="true"
                        className="
                          h-3.5
                          w-3.5
                          shrink-0
                          object-contain
                          opacity-60
                          transition-all
                          duration-300
                          group-hover:opacity-100
                        "
                      />

                      {technology.name}
                    </span>
                  ))}
                </div>

                {/* Bottom decorative line */}

                <div
                  className="
                    mt-7
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-white/[0.05]
                    via-white/[0.03]
                    to-transparent
                  "
                />

                {/* Bottom metadata */}

                <div className="mt-4 flex items-center justify-between">
                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-white/25
                    "
                  >
                    AI / ENGINEERING / DESIGN
                  </span>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-cyan-400/40
                      shadow-[0_0_10px_rgba(34,211,238,0.4)]
                      transition-all
                      duration-300
                      group-hover:bg-cyan-300
                      group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  HOVER SPOTLIGHT
                  ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-1/2
                  h-32
                  w-3/4
                  -translate-x-1/2
                  translate-y-1/2
                  rounded-full
                  bg-cyan-400/10
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}