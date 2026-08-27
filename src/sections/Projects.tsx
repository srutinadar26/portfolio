"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/portfolio";

const ProjectVisual = dynamic(() => import("@/three/ProjectScenes/ProjectVisual"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

function iconSlug(label: string) {
  return label
    .toLowerCase()
    .replace("node.js", "nodejs")
    .replace("scikit-learn", "scikitlearn")
    .replace("html/css", "html5")
    .replace(/[^a-z0-9]/g, "");
}

export default function Projects() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-board").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={rootRef} className="relative py-32 md:py-40 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-4">04 / EXHIBITS</p>
        <h2 className="font-display font-bold text-ivory text-4xl md:text-6xl tracking-tightest mb-16">
          Projects
        </h2>

        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project) => (
            <div
              key={project.number}
              className="project-board grid md:grid-cols-12 gap-8 md:gap-14 items-center border-t border-ivory/10 pt-12"
            >
              <div className="md:col-span-5 order-2 md:order-1">
                <p className="font-mono text-xs tracking-widest2 text-cyan mb-4">
                  PROJECT / {project.number}
                </p>
                <h3 className="font-display font-bold text-ivory text-3xl md:text-4xl mb-4">
                  {project.name}
                </h3>
                <p className="font-body text-sand/85 text-base leading-relaxed mb-6 max-w-md">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 mb-6" aria-label={`${project.name} technology stack`}>
                  {project.stack.map((technology) => (
                    <span key={technology} className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest2 text-sand/75">
                      <img
                        src={`https://cdn.simpleicons.org/${iconSlug(technology)}`}
                        alt=""
                        width="16"
                        height="16"
                        className="h-4 w-4 object-contain"
                      />
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="project"
                      className="editorial-underline font-mono text-xs tracking-widest2 text-ivory uppercase"
                    >
                      View Project →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="project"
                      className="editorial-underline font-mono text-xs tracking-widest2 text-sand uppercase"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>

              <div
                className="relative md:col-span-7 order-1 md:order-2 h-72 md:h-96 rounded-2xl bg-petrol-dark/40 border border-ivory/10 overflow-hidden"
                data-cursor="project"
              >
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  className="absolute inset-0 h-full w-full object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-petrol-dark/35" />
                <div className="relative z-10 h-full">
                  <ProjectVisual kind={project.kind} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
