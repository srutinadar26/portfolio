"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Core() {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) group.current.rotation.y = t * 0.25;
    if (inner.current) inner.current.rotation.x = t * 0.4;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#39C6D8"
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.3}
          wireframe
        />
      </mesh>
      <mesh ref={inner} scale={0.5}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#F2EED8"
          emissive="#39C6D8"
          emissiveIntensity={0.5}
          roughness={0.2}
        />
      </mesh>
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 1.4;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * r, Math.sin(angle * 1.7) * 0.3, Math.sin(angle) * r]}
          >
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial color="#D8D4BD" emissive="#D8D4BD" emissiveIntensity={0.4} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function DigitalCore() {
  return (
    <Canvas camera={{ position: [0, 0, 3.4], fov: 40 }} gl={{ alpha: true, antialias: true }}>
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.45} />
      <pointLight position={[2, 2, 2]} intensity={0.8} color="#39C6D8" />
      <Suspense fallback={null}>
        <Core />
      </Suspense>
    </Canvas>
  );
}
