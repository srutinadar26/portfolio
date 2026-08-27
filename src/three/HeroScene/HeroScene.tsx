"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import Character from "./Character";
import FloatingObjects from "./FloatingObjects";
import Particles from "./Particles";
import { useMousePosition } from "@/hooks/useMousePosition";

function Rig({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      mouse.current.x * 0.4,
      0.03
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      1.4 + mouse.current.y * 0.2,
      0.03
    );
    state.camera.lookAt(0, 1.2, 0);
  });
  return null;
}

export default function HeroScene({ reduced = false }: { reduced?: boolean }) {
  const mouse = useMousePosition();

  return (
    <Canvas
      dpr={[1, reduced ? 1.2 : 1.8]}
      camera={{ position: [0, 1.4, 5.2], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#cdd1d6"]} />
      <ambientLight intensity={0.55} color="#F2EED8" />
      <directionalLight position={[3, 4, 2]} intensity={1.1} color="#39C6D8" />
      <pointLight position={[-3, 1, -2]} intensity={0.6} color="#2864D7" />

      <Suspense fallback={null}>
        <Character mouse={mouse} />
        <FloatingObjects />
        {!reduced && <Particles count={180} />}
      </Suspense>

      {!reduced && <Rig mouse={mouse} />}

      {!reduced && (
        <EffectComposer multisampling={0}>
          <Bloom intensity={0.35} luminanceThreshold={0.4} luminanceSmoothing={0.9} mipmapBlur />
          <Vignette eskil={false} offset={0.2} darkness={0.7} />
        </EffectComposer>
      )}
    </Canvas>
  );
}
