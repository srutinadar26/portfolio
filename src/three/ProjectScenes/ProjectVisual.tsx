"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";


function WebVisual() {
  const ref = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.3) * 0.25;
  });
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[2.2, 1.4, 0.05]} />
        <meshStandardMaterial color="#0B4652" roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.58, 0.03]}>
        <boxGeometry args={[2.2, 0.24, 0.02]} />
        <meshStandardMaterial color="#062E37" />
      </mesh>
      {[-0.9, -0.78, -0.66].map((x, i) => (
        <mesh key={i} position={[x, 0.58, 0.05]}>
          <circleGeometry args={[0.03, 12]} />
          <meshStandardMaterial color="#39C6D8" emissive="#39C6D8" emissiveIntensity={0.6} />
        </mesh>
      ))}
      {[0.25, -0.02, -0.29].map((y, i) => (
        <mesh key={i} position={[-0.6 + i * 0.1, y, 0.04]}>
          <planeGeometry args={[1.6 - i * 0.3, 0.08]} />
          <meshStandardMaterial color="#D8D4BD" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function AIVisual() {
  const ref = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: 18 }).map(() => ({
        pos: [
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 1.4,
          (Math.random() - 0.5) * 1,
        ] as [number, number, number],
      })),
    []
  );
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.15;
  });
  return (
    <group ref={ref}>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshStandardMaterial color="#39C6D8" emissive="#39C6D8" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function DatabaseVisual() {
  const ref = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.25;
  });
  return (
    <group ref={ref}>
      {[-0.6, 0, 0.6].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.9, 20]} />
          <meshStandardMaterial color="#0B4652" metalness={0.3} roughness={0.4} />
        </mesh>
      ))}
      <mesh position={[-0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.01, 0.01, 0.6, 6]} />
        <meshStandardMaterial color="#39C6D8" emissive="#39C6D8" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.01, 0.01, 0.6, 6]} />
        <meshStandardMaterial color="#39C6D8" emissive="#39C6D8" emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
}

function CreativeVisual() {
  const ref = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.z = Math.sin(s.clock.elapsedTime * 0.4) * 0.15;
  });
  return (
    <group ref={ref}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[i * 0.28 - 0.28, i * 0.15 - 0.15, i * -0.2]}>
          <planeGeometry args={[1.3, 0.85]} />
          <meshStandardMaterial
            color={i === 1 ? "#39C6D8" : "#0B4652"}
            transparent
            opacity={0.85}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

