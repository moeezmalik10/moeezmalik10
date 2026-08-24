"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 2600;
const FIELD_RADIUS = 9;

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const { pointer } = useThree();
  const target = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // distribute roughly within a sphere for depth, not a flat plane
      const r = FIELD_RADIUS * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi) * 0.6;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    // Ease the rotation target toward the pointer position (normalized -1..1)
    target.current.x += (pointer.y * 0.3 - target.current.x) * 0.04;
    target.current.y += (pointer.x * 0.3 - target.current.y) * 0.04;

    pointsRef.current.rotation.x = target.current.x;
    // slow ambient drift, nudged toward the pointer's horizontal position
    pointsRef.current.rotation.y += 0.0006 + target.current.y * 0.002;

    const t = state.clock.getElapsedTime();
    pointsRef.current.position.y = Math.sin(t * 0.2) * 0.15;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#8b6bff"
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/**
 * Full-bleed background canvas for the hero. Pointer-events are disabled so
 * it never blocks clicks on the content sitting on top of it.
 */
export function ParticleCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <ParticleField />
      </Canvas>
    </div>
  );
}
