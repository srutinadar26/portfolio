"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MutableRefObject } from "react";

/**
 * Stylized "digital girl" character — the recurring visual motif of the site.
 *
 * NOTE: This is a procedural stand-in built from primitives so the scene is
 * fully self-contained with no external assets. Swap in a sculpted GLB
 * (e.g. exported from Blender) by replacing the contents of this component
 * with a <primitive object={gltf.scene} /> — the idle animation and
 * look-at rig below will keep working against a `groupRef.current.getObjectByName(...)`
 * head bone if you name it "Head".
 */
export default function Character({
  mouse,
}: {
  mouse: MutableRefObject<{ x: number; y: number }>;
}) {
  const group = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const t0 = useRef(Math.random() * 100);

  useFrame((state, delta) => {
    t0.current += delta;
    const breathe = Math.sin(t0.current * 1.4) * 0.015;
    if (group.current) {
      group.current.position.y = breathe;
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        mouse.current.x * 0.18,
        0.04
      );
    }
    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.lerp(
        head.current.rotation.y,
        mouse.current.x * 0.25,
        0.06
      );
      head.current.rotation.x = THREE.MathUtils.lerp(
        head.current.rotation.x,
        -mouse.current.y * 0.12,
        0.06
      );
    }
  });

  const skin = "#F2EED8";
  const hair = "#062E37";
  const outfit = "#0B4652";
  const outfitAccent = "#39C6D8";

  return (
    <group ref={group} position={[0, -1.1, 0]} name="DigitalGirl">
      {/* Legs */}
      <mesh position={[-0.18, 0.55, 0]} castShadow>
        <capsuleGeometry args={[0.13, 0.9, 6, 12]} />
        <meshStandardMaterial color={outfit} roughness={0.55} metalness={0.1} />
      </mesh>
      <mesh position={[0.18, 0.55, 0]} castShadow>
        <capsuleGeometry args={[0.13, 0.9, 6, 12]} />
        <meshStandardMaterial color={outfit} roughness={0.55} metalness={0.1} />
      </mesh>

      {/* Sneakers */}
      <mesh position={[-0.18, 0.08, 0.06]}>
        <boxGeometry args={[0.2, 0.14, 0.32]} />
        <meshStandardMaterial color={skin} roughness={0.5} />
      </mesh>
      <mesh position={[0.18, 0.08, 0.06]}>
        <boxGeometry args={[0.2, 0.14, 0.32]} />
        <meshStandardMaterial color={skin} roughness={0.5} />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 1.35, 0]} castShadow>
        <capsuleGeometry args={[0.32, 0.7, 8, 16]} />
        <meshStandardMaterial color={outfit} roughness={0.5} metalness={0.15} />
      </mesh>

      {/* Technical accent strap */}
      <mesh position={[0, 1.4, 0.31]} rotation={[0, 0, 0.15]}>
        <boxGeometry args={[0.06, 0.85, 0.02]} />
        <meshStandardMaterial
          color={outfitAccent}
          emissive={outfitAccent}
          emissiveIntensity={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.42, 1.3, 0]} rotation={[0, 0, 0.25]} castShadow>
        <capsuleGeometry args={[0.09, 0.55, 6, 12]} />
        <meshStandardMaterial color={skin} roughness={0.55} />
      </mesh>
      <mesh position={[0.42, 1.3, 0]} rotation={[0, 0, -0.25]} castShadow>
        <capsuleGeometry args={[0.09, 0.55, 6, 12]} />
        <meshStandardMaterial color={skin} roughness={0.55} />
      </mesh>

      {/* Head group (rig target for look-at) */}
      <group ref={head} position={[0, 1.95, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.26, 24, 24]} />
          <meshStandardMaterial color={skin} roughness={0.5} />
        </mesh>
        {/* Hair — simple bob shape */}
        <mesh position={[0, 0.08, -0.05]}>
          <sphereGeometry args={[0.29, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.62]} />
          <meshStandardMaterial color={hair} roughness={0.4} />
        </mesh>
        <mesh position={[-0.16, -0.05, 0.02]}>
          <capsuleGeometry args={[0.05, 0.32, 6, 10]} />
          <meshStandardMaterial color={hair} roughness={0.4} />
        </mesh>
        <mesh position={[0.16, -0.05, 0.02]}>
          <capsuleGeometry args={[0.05, 0.32, 6, 10]} />
          <meshStandardMaterial color={hair} roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}
