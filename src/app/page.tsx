"use client";

import { useState } from "react";

import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Journey from "@/sections/Journey";
import Projects from "@/sections/Projects";
import Resume from "@/sections/Resume";
import Contact from "@/sections/Contact";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <Preloader onComplete={() => setLoaded(true)} />
      )}

      <Navigation />

      <main className="relative z-10">
        <Hero ready={loaded} />

        <About />

        <Skills />

        <Journey />

        <Projects />

        <Resume />

        <Contact />
      </main>
    </>
  );
}