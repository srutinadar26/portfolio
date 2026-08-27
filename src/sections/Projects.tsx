"use client";

import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16">
          <p className="mb-4 text-sm tracking-[0.3em] text-cyan-400">
            05 / PROJECTS
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Featured
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            A collection of AI-powered applications, full-stack products,
            and data-driven systems I've built while exploring technology
            and solving real-world problems.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-black/40">
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Project Number */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs tracking-[0.2em] text-white backdrop-blur-md">
                    {project.number}
                  </span>
                </div>

                {/* Project Type */}
                <div className="absolute right-5 top-5">
                  <span className="rounded-full border px-3 py-1 text-xs uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                    {project.kind}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                    {project.name}
                  </h3>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="shrink-0 rounded-full border border-white/10 px-4 py-2 text-xs font-medium tracking-wider text-white/70 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    GITHUB ↗
                  </a>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/60 md:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] tracking-[0.15em] text-white/60 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-white/80"
                    >
                      {technology}
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