"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { nav, personal } from "@/data/portfolio";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[500] flex items-center gap-1 md:gap-2 rounded-full border border-ivory/10 px-2 py-2 backdrop-blur-md transition-colors duration-500 ${
        scrolled ? "bg-shadow-deep/70" : "bg-shadow-deep/30"
      }`}
    >
      {nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          data-cursor="button"
          className="font-mono text-[10px] md:text-[11px] tracking-widest2 uppercase text-sand hover:text-ivory transition-colors px-3 py-2 rounded-full hover:bg-ivory/5"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
