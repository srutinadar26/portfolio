"use client";

import { personal } from "@/data/portfolio";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative py-24 md:py-32 px-6 md:px-16"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-ivory/10 rounded-2xl px-8 py-10 bg-petrol-dark/30">

        <div>
          <p className="eyebrow mb-3">
            05 / COMPLETE PROFILE
          </p>

          <h3 className="font-display font-bold text-ivory text-2xl md:text-3xl">
            Resume
          </h3>

          <p className="font-body text-sand/80 text-sm mt-2 max-w-md">
            A concise overview of my skills, experience, projects, and
            technical journey
          </p>
        </div>

        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noreferrer"
          data-cursor="button"
          className="
            font-mono
            text-xs
            tracking-widest2
            uppercase
            text-shadow-deep
            bg-cyan
            rounded-full
            px-8
            py-4
            whitespace-nowrap
            text-center
            hover:bg-ivory
            transition-colors
            duration-300
          "
        >
          Preview Resume
        </a>
      </div>
    </section>
  );
}