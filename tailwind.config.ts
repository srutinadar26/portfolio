import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        petrol: "#073B46",
        "petrol-dark": "#0B4652",
        "shadow-deep": "#062E37",
        ivory: "#F2EED8",
        sand: "#D8D4BD",
        cyan: "#39C6D8",
        cobalt: "#2864D7",
        ultraviolet: "#6C63A8",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        secondary: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.25em",
      },
      backgroundImage: {
        "grain": "url('/textures/grain.png')",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
