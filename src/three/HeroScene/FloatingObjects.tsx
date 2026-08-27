"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Obj = "cube" | "sphere" | "ring" | "cylinder" | "panel";

interface ObjectDef {
  kind: Obj;
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  emissive?: boolean;
}

const OBJECTS: ObjectDef[] = [
  {
    kind: "cube",
    position: [-2.4, 1.3, -0.8],
    scale: 0.32,
    color: "#39C6D8",
    speed: 0.6,
    emissive: true,
  },
  {
    kind: "sphere",
    position: [2.3, 1.8, -0.4],
    scale: 0.28,
    color: "#F2EED8",
    speed: 0.4,
  },
  {
    kind: "ring",
    position: [-1.9, -0.4, 0.6],
    scale: 0.5,
    color: "#2864D7",
    speed: 0.5,
    emissive: true,
  },
  {
    kind: "cylinder",
    position: [2.1, -0.6, 0.3],
    scale: 0.3,
    color: "#0B4652",
    speed: 0.35,
  },
  {
    kind: "panel",
    position: [1.6, 0.6, -1.2],
    scale: 0.55,
    color: "#39C6D8",
    speed: 0.3,
    emissive: true,
  },
  {
    kind: "cube",
    position: [-1.4, 2.3, -1],
    scale: 0.18,
    color: "#D8D4BD",
    speed: 0.7,
  },
  {
    kind: "sphere",
    position: [-2.6, -0.9, -0.6],
    scale: 0.2,
    color: "#2864D7",
    speed: 0.55,
  },
];

function FloatingObject({
  def,
  index,
}: {
  def: ObjectDef;
  index: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  const seed = useMemo(() => index * 12.9, [index]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (!ref.current) return;

    ref.current.position.y =
      def.position[1] +
      Math.sin(t * def.speed + seed) * 0.18;

    ref.current.rotation.x =
      t * def.speed * 0.3;

    ref.current.rotation.y =
      t * def.speed * 0.4;

    ref.current.rotation.z =
      Math.sin(t * def.speed * 0.5 + seed) * 0.15;
  });

  const material = def.emissive ? (
    <meshStandardMaterial
      color={def.color}
      emissive={def.color}
      emissiveIntensity={0.4}
      roughness={0.3}
      metalness={0.2}
      transparent
      opacity={0.9}
    />
  ) : (
    <meshStandardMaterial
      color={def.color}
      roughness={0.4}
      metalness={0.15}
      transparent
      opacity={0.85}
    />
  );

  return (
    <mesh
      ref={ref}
      position={def.position}
      scale={def.scale}
    >
      {def.kind === "cube" && (
        <boxGeometry args={[1, 1, 1]} />
      )}

      {def.kind === "sphere" && (
        <sphereGeometry args={[1, 32, 32]} />
      )}

      {def.kind === "ring" && (
        <torusGeometry args={[0.7, 0.16, 16, 48]} />
      )}

      {def.kind === "cylinder" && (
        <cylinderGeometry args={[0.6, 0.6, 1.2, 32]} />
      )}

      {def.kind === "panel" && (
        <boxGeometry args={[1.6, 1, 0.12]} />
      )}

      {material}
    </mesh>
  );
}

export default function FloatingObjects() {
  return (
    <group>
      {OBJECTS.map((def, i) => (
        <FloatingObject
          key={`${def.kind}-${i}`}
          def={def}
          index={i}
        />
      ))}
    </group>
  );
}