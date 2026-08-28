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
                group
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-sm
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:bg-white/[0.05]
              "
            >

              {/* =================================================
                  PROJECT IMAGE
                  ================================================= */}

              <div className="relative aspect-video w-full overflow-hidden bg-black/40">

                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                  "
                />

              </div>

              {/* =================================================
                  PROJECT CONTENT
                  ================================================= */}

              <div className="p-6 md:p-7">

                {/* Project Title + GitHub */}

                <div className="flex items-start justify-between gap-4">

                  <h3
                    className="
                      text-2xl
                      font-semibold
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-cyan-300
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
                      px-4
                      py-2
                      text-xs
                      font-medium
                      tracking-wider
                      text-white/70
                      transition-all
                      duration-300
                      hover:border-cyan-400/50
                      hover:bg-cyan-400/10
                      hover:text-cyan-300
                    "
                  >
                    GITHUB ↗
                  </a>

                </div>

                {/* =================================================
                    DESCRIPTION
                    ================================================= */}

                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-white/60
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
                        border-white/10
                        bg-white/[0.04]
                        px-3
                        py-1.5
                        text-[10px]
                        tracking-[0.12em]
                        text-white/60
                        transition-all
                        duration-300
                        group-hover:border-cyan-400/20
                        group-hover:text-white/80
                      "
                    >

                      {/* Technology Icon */}

                      <img
                        src={`https://cdn.simpleicons.org/${technology.icon}`}
                        alt=""
                        aria-hidden="true"
                        className="
                          h-3.5
                          w-3.5
                          shrink-0
                          object-contain
                          opacity-70
                          transition-all
                          duration-300
                          group-hover:opacity-100
                        "
                      />

                      {/* Technology Name */}

                      {technology.name}

                    </span>
                  ))}

                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}