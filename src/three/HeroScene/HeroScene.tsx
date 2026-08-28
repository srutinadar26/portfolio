"use client";

import { Suspense, useRef } from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";

import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";

import * as THREE from "three";

import Character from "./Character";
import FloatingObjects from "./FloatingObjects";
import Particles from "./Particles";

import { useMousePosition } from "@/hooks/useMousePosition";

/* =========================================================
   RESPONSIVE CAMERA + MODEL RIG
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
    const width = size.width;

    const isSmallMobile = width < 480;
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;

    /* -------------------------------------------------------
       CAMERA
       ------------------------------------------------------- */

    const cameraZ = isSmallMobile
      ? 7.2
      : isMobile
        ? 6.8
        : isTablet
          ? 6.0
          : 5.2;

    const baseCameraX = isMobile
      ? 0
      : isTablet
        ? 0.2
        : 0.45;

    const baseCameraY = isSmallMobile
      ? 0.95
      : isMobile
        ? 1.05
        : isTablet
          ? 1.25
          : 1.4;

    /* -------------------------------------------------------
       MOUSE MOVEMENT
       Much weaker on phones.
       ------------------------------------------------------- */

    const mouseStrengthX = isSmallMobile
      ? 0.02
      : isMobile
        ? 0.04
        : isTablet
          ? 0.12
          : 0.28;

    const mouseStrengthY = isSmallMobile
      ? 0.015
      : isMobile
        ? 0.03
        : isTablet
          ? 0.08
          : 0.14;

    const targetX =
      baseCameraX +
      mouse.current.x * mouseStrengthX;

    const targetY =
      baseCameraY +
      mouse.current.y * mouseStrengthY;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      targetX,
      0.035
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      targetY,
      0.035
    );

    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      cameraZ,
      0.035
    );

    camera.lookAt(
      isMobile ? 0 : 0.15,
      isMobile ? 0.9 : 1.15,
      0
    );
  });

  return null;
}

/* =========================================================
   RESPONSIVE MODEL
   ========================================================= */

function ResponsiveCharacter({
  mouse,
}: {
  mouse: React.MutableRefObject<{
    x: number;
    y: number;
  }>;
}) {
  const { size } = useThree();

  const width = size.width;

  /*
   * IMPORTANT:
   *
   * We scale the Character itself instead of changing
   * Character.tsx.
   */

  const scale =
    width < 480
      ? 0.62
      : width < 640
        ? 0.70
        : width < 768
          ? 0.82
          : width < 1024
            ? 0.90
            : 1;

  /*
   * Horizontal position.
   *
   * Desktop -> right side
   * Mobile  -> centered
   */

  const x =
    width < 640
      ? 0
      : width < 1024
        ? 0.45
        : 0.95;

  /*
   * Character's own internal position is -1.1.
   * We compensate slightly so it remains visually centered.
   */

  const y =
    width < 480
      ? 0.05
      : width < 640
        ? 0
        : width < 1024
          ? -0.05
          : 0;

  return (
    <group
      position={[x, y, 0]}
      scale={scale}
    >
      <Character mouse={mouse} />
    </group>
  );
}

/* =========================================================
   RESPONSIVE CAMERA INITIALIZATION
   ========================================================= */

function ResponsiveCamera() {
  const { camera, size } = useThree();

  const width = size.width;

  if (!(camera instanceof THREE.PerspectiveCamera)) {
    return null;
  }

  /*
   * These are only the initial values.
   * Rig handles the smooth movement afterwards.
   */

  if (width < 480) {
    camera.position.set(0, 0.95, 7.2);
    camera.fov = 47;
  } else if (width < 640) {
    camera.position.set(0, 1.05, 6.8);
    camera.fov = 45;
  } else if (width < 768) {
    camera.position.set(0.2, 1.2, 6.2);
    camera.fov = 43;
  } else if (width < 1024) {
    camera.position.set(0.25, 1.3, 5.8);
    camera.fov = 41;
  } else {
    camera.position.set(0.45, 1.4, 5.2);
    camera.fov = 38;
  }

  camera.aspect = size.width / size.height;

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
      dpr={[1, reduced ? 1.2 : 1.6]}
      camera={{
        position: [0, 1.05, 6.8],
        fov: 45,
        near: 0.1,
        far: 100,
      }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
      frameloop="always"
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <color
        attach="background"
        args={["#eaf2fa"]}
      />

      {/* =====================================================
          CAMERA
          ===================================================== */}

      <ResponsiveCamera />

      {!reduced && (
        <Rig mouse={mouse} />
      )}

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

        <ResponsiveCharacter
          mouse={mouse}
        />

        <FloatingObjects />

        {!reduced && (
          <Particles count={180} />
        )}

      </Suspense>

      {/* =====================================================
          BLOOM
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