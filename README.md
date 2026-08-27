# Sruti Nadar — Portfolio

An interactive, editorial 3D portfolio built with Next.js, React Three Fiber,
GSAP, and Lenis. Deep petrol-teal / cream visual identity with a stylized
"digital girl" character as the recurring motif.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm run start
```

for a production build.

## What to fill in before launch

Everything real about Sruti lives in one place:

**`src/data/portfolio.ts`**

- `personal.socials.github` / `.linkedin` — currently empty, add real URLs.
- `personal.resumeUrl` — points at `/resume.pdf`; drop your resume PDF into
  `public/resume.pdf`.
- `` — currently placeholder entries. Replace with real education,
  hackathons, or technical milestones. Nothing here was invented for you on
  purpose — add only what's true.
- `projects` — currently a single placeholder entry. Add real projects with
  descriptions, stack, and links. Set `kind` to `"web" | "ai" | "database" |
  "creative"` to pick the matching 3D visual treatment in the Projects section.

Everything in `skillCategories` reflects the technologies specified as
Sruti's actual skills (React, Node, Python, MongoDB, etc.) — this list is
intentionally separate from the site's own implementation stack (Next.js,
Three.js, GSAP...), which is never shown in the Skills section.

## Swapping in a real 3D character model

`src/three/HeroScene/Character.tsx` currently builds a stylized character
out of primitive geometry (capsules, spheres) so the project has zero
external asset dependencies out of the box. To use a sculpted model instead:

1. Export a rigged/posed character as `.glb` into `public/models/`.
2. In `Character.tsx`, load it with `useGLTF` from `@react-three/drei` and
   render `<primitive object={gltf.scene} />` in place of the primitive mesh
   tree. Keep the `group`/`head` refs so the idle-breathing and mouse
   look-at animation keeps working — name the head bone/node `"Head"` if you
   want the look-at rig to target it directly.

## Structure

```
src/
├── app/            # Next.js App Router entry, global layout & styles
├── components/     # Cursor, nav, preloader, smooth-scroll provider
├── sections/       # One file per scroll section (Hero, About, Skills...)
├── three/          # All React Three Fiber scenes, grouped by feature
├── data/           # Single source of truth for all site content
└── hooks/          # Mouse position + device/reduced-motion detection
```

## Notes

- Respects `prefers-reduced-motion`: Lenis smooth-scroll, the preloader
  timeline, and the hero's camera parallax / bloom all short-circuit to a
  static, fully-readable layout.
- Mobile automatically drops particle count, disables bloom/vignette
  postprocessing, and hides the custom cursor (see `useDeviceProfile`).
- Fonts (Space Grotesk, Sora, Manrope, JetBrains Mono) load via
  `next/font/google`, so they're self-hosted at build time — no runtime CDN
  dependency.
