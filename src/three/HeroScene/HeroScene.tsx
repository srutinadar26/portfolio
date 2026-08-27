"use client";

import { Suspense, useRef } from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";

import { EffectComposer, Bloom } from "@react-three/postprocessing";

import * as THREE from "three";

import Character from "./Character";
import FloatingObjects from "./FloatingObjects";
import Particles from "./Particles";

import { useMousePosition } from "@/hooks/useMousePosition";

/* =========================================================
   RESPONSIVE CAMERA RIG
   ========================================================= */

function Rig({
  mouse,
}: {
  mouse: React.MutableRefObject<{
    x: number;
    y: number;
  }>;
}) {
  const { camera, size } = useThree();

  useFrame(() => {
    /*
     * Adjust camera behavior based on screen width.
     */
    const isMobile = size.width < 640;
    const isTablet = size.width >= 640 && size.width < 1024;

    const mouseStrengthX = isMobile
      ? 0.15
      : isTablet
        ? 0.25
        : 0.4;

    const mouseStrengthY = isMobile
      ? 0.08
      : isTablet
        ? 0.14
        : 0.2;

    const targetX = mouse.current.x * mouseStrengthX;

    const targetY =
      (isMobile ? 1.25 : isTablet ? 1.35 : 1.4) +
      mouse.current.y * mouseStrengthY;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      targetX,
      0.03
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      targetY,
      0.03
    );

    camera.lookAt(
      0,
      isMobile ? 1.15 : 1.2,
      0
    );
  });

  return null;
}

/* =========================================================
   RESPONSIVE CAMERA SETTINGS
   ========================================================= */

function ResponsiveCamera() {
  const { camera, size } = useThree();

  if (!(camera instanceof THREE.PerspectiveCamera)) {
    return null;
  }

  const width = size.width;

  /*
   * Mobile
   */
  if (width < 480) {
    camera.position.set(0, 1.25, 6.2);
    camera.fov = 44;
  }

  /*
   * Large mobile / small tablet
   */
  else if (width < 768) {
    camera.position.set(0, 1.3, 5.8);
    camera.fov = 42;
  }

  /*
   * Tablet
   */
  else if (width < 1024) {
    camera.position.set(0, 1.35, 5.5);
    camera.fov = 40;
  }

  /*
   * Desktop
   */
  else {
    camera.position.set(0, 1.4, 5.2);
    camera.fov = 38;
  }

  camera.updateProjectionMatrix();

  return null;
}

/* =========================================================
   HERO SCENE
   ========================================================= */

export default function HeroScene({
  reduced = false,
}: {
  reduced?: boolean;
}) {
  const mouse = useMousePosition();

  return (
    <Canvas
      /*
       * Responsive pixel ratio.
       * Lower on mobile for better performance.
       */
      dpr={[1, reduced ? 1.2 : 1.8]}

      /*
       * Responsive camera starts here.
       * ResponsiveCamera adjusts it after Canvas mounts.
       */
      camera={{
        position: [0, 1.4, 5.2],
        fov: 38,
        near: 0.1,
        far: 100,
      }}

      /*
       * Keep antialiasing but don't use transparent
       * canvas rendering.
       */
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}

      /*
       * Don't automatically clear the scene with transparency.
       */
      frameloop="always"
    >
      {/* =====================================================
          SOLID HERO BACKGROUND
          ===================================================== */}

      <color
        attach="background"
        args={["#eaf2fa"]}
      />

      {/* =====================================================
          RESPONSIVE CAMERA
          ===================================================== */}

      <ResponsiveCamera />

      {/* =====================================================
          LIGHTING
          ===================================================== */}

      <ambientLight
        intensity={0.42}
        color="#F2EED8"
      />

      <directionalLight
        position={[3, 4, 2]}
        intensity={0.9}
        color="#39C6D8"
      />

      <pointLight
        position={[-3, 1, -2]}
        intensity={0.45}
        color="#2864D7"
      />

      {/* =====================================================
          3D CONTENT
          ===================================================== */}

      <Suspense fallback={null}>
        <Character mouse={mouse} />

        <FloatingObjects />

        {!reduced && (
          <Particles count={180} />
        )}
      </Suspense>

      {/* =====================================================
          MOUSE CAMERA MOVEMENT
          ===================================================== */}

      {!reduced && (
        <Rig mouse={mouse} />
      )}

      {/* =====================================================
          GLOW
          =====================================================

          Bloom is kept subtle because your design uses
          turquoise/cobalt lighting.

          There is NO VIGNETTE here.
          ===================================================== */}

      {!reduced && (
        <EffectComposer multisampling={0}>
          <Bloom
            intensity={0.18}
            luminanceThreshold={0.65}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      )}
    </Canvas>
  );
}