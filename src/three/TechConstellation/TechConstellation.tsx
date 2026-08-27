"use client";

import { useEffect, useState } from "react";
import { skillConnections } from "@/data/portfolio";

interface Props {
  nodeRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  containerRef: React.RefObject<HTMLDivElement>;
}

/**
 * Draws animated SVG lines between skill-chip DOM nodes based on their
 * measured positions. Lightweight alternative to a full 3D line renderer —
 * keeps the "living architecture" feel without the mobile GPU cost.
 */
export default function TechConstellation({ nodeRefs, containerRef }: Props) {
  const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);
  const [box, setBox] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      setBox({ w: rect.width, h: rect.height });

      const next: { x1: number; y1: number; x2: number; y2: number }[] = [];
      skillConnections.forEach(([a, b]) => {
        const elA = nodeRefs.current[a];
        const elB = nodeRefs.current[b];
        if (!elA || !elB) return;
        const ra = elA.getBoundingClientRect();
        const rb = elB.getBoundingClientRect();
        next.push({
          x1: ra.left - rect.left + ra.width / 2,
          y1: ra.top - rect.top + ra.height / 2,
          x2: rb.left - rect.left + rb.width / 2,
          y2: rb.top - rect.top + rb.height / 2,
        });
      });
      setLines(next);
    };

    measure();
    window.addEventListener("resize", measure);
    const id = setInterval(measure, 400);
    return () => {
      window.removeEventListener("resize", measure);
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={box.w}
      height={box.h}
      style={{ zIndex: 0 }}
    >
      {lines.map((l, i) => (
        <line
          key={i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="#39C6D8"
          strokeOpacity={0.22}
          strokeWidth={1}
          strokeDasharray="4 5"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="18;0"
            dur="1.6s"
            repeatCount="indefinite"
          />
        </line>
      ))}
    </svg>
  );
}
