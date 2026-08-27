"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, Twitter, FileText } from "lucide-react";
import { personal } from "@/data/portfolio";

const DigitalCore = dynamic(() => import("@/three/DigitalCore/DigitalCore"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={rootRef}
      className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden"
    >
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-40 pointer-events-none hidden md:block">
        <DigitalCore />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
        <p className="contact-reveal eyebrow mb-6">06 / NEXT CONVERSATION</p>
        <h2 className="contact-reveal font-display font-bold text-ivory text-5xl md:text-7xl tracking-tightest leading-[0.95] mb-10 text-balance">
          LET&apos;S BUILD
          <br />
          WHAT&apos;S NEXT.
        </h2>

        <a
          href={`mailto:${personal.email}`}
          data-cursor="button"
          className="contact-reveal editorial-underline inline-block font-mono text-lg md:text-2xl text-cyan mb-10"
        >
          {personal.email}
        </a>

        <div className="contact-reveal flex items-center justify-center md:justify-start gap-6">
          {personal.socials.github && (
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="button"
              className="text-sand hover:text-ivory transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
          )}
          {personal.socials.linkedin && (
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="button"
              className="text-sand hover:text-ivory transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          )}
          {personal.socials.twitter && (
            <a
              href={personal.socials.twitter}
              target="_blank"
              rel="noreferrer"
              data-cursor="button"
              className="text-sand hover:text-ivory transition-colors"
              aria-label="X / Twitter"
            >
              <Twitter size={22} />
            </a>
          )}
          {personal.resumeUrl && (
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="button"
              className="text-sand hover:text-ivory transition-colors"
              aria-label="Resume"
            >
              <FileText size={22} />
            </a>
          )}
          <a
            href={`mailto:${personal.email}`}
            data-cursor="button"
            className="text-sand hover:text-ivory transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      <footer className="relative z-10 max-w-4xl mx-auto mt-32 flex justify-between font-mono text-[10px] tracking-widest2 text-sand/40 uppercase">
        <span>© {new Date().getFullYear()} Sruti Nadar</span>
        <span>Designed &amp; built as a digital exhibition</span>
      </footer>
    </section>
  );
}
