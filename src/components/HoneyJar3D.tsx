"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  MeshTransmissionMaterial,
  OrbitControls,
  Html,
} from "@react-three/drei";
import * as THREE from "three";

/* A procedural glass honey jar — no external 3D model needed. */
function Jar({ honeyColor = "#E08C13" }: { honeyColor?: string }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    // slow idle spin that eases with the pointer
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.3) * 0.35;
  });

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      {/* Honey liquid (inner) */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.92, 0.92, 1.5, 64]} />
        <meshStandardMaterial
          color={honeyColor}
          roughness={0.15}
          metalness={0.0}
          emissive={honeyColor}
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Honey meniscus / top surface */}
      <mesh position={[0, 0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.92, 64]} />
        <meshStandardMaterial
          color={honeyColor}
          roughness={0.05}
          emissive={honeyColor}
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* Glass body */}
      <mesh>
        <cylinderGeometry args={[1, 1, 2, 64, 1, true]} />
        <MeshTransmissionMaterial
          thickness={0.35}
          roughness={0.05}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.06}
          backside
          samples={4}
          resolution={256}
          color="#fff7e6"
          attenuationColor="#f0a830"
          attenuationDistance={2}
        />
      </mesh>

      {/* Glass bottom */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1, 64]} />
        <MeshTransmissionMaterial
          thickness={0.4}
          roughness={0.1}
          transmission={1}
          ior={1.4}
          color="#fff7e6"
          samples={2}
          resolution={128}
        />
      </mesh>

      {/* Gold lid */}
      <group position={[0, 1.08, 0]}>
        <mesh>
          <cylinderGeometry args={[1.05, 1.05, 0.26, 64]} />
          <meshStandardMaterial color="#C8891B" roughness={0.3} metalness={0.9} />
        </mesh>
        <mesh position={[0, 0.14, 0]}>
          <torusGeometry args={[0.9, 0.05, 16, 64]} />
          <meshStandardMaterial color="#A16207" roughness={0.35} metalness={0.9} />
        </mesh>
      </group>

      {/* Front label */}
      <mesh position={[0, -0.1, 1.001]}>
        <planeGeometry args={[1.25, 1.1]} />
        <meshStandardMaterial color="#FFFBF2" roughness={0.9} />
      </mesh>
      <Html
        position={[0, -0.1, 1.02]}
        transform
        occlude
        distanceFactor={2.2}
        style={{ pointerEvents: "none" }}
      >
        <div
          style={{
            width: 150,
            textAlign: "center",
            fontFamily: "var(--font-lora), serif",
            color: "#5A3707",
          }}
        >
          <div style={{ fontSize: 11, letterSpacing: 3 }}>PURE RAW</div>
          <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1 }}>Honey</div>
          <div style={{ fontSize: 9, marginTop: 4, opacity: 0.7 }}>
            100% NATURAL · 500g
          </div>
        </div>
      </Html>

      {/* Wooden dipper leaning on the jar */}
      <group position={[1.15, 0.35, 0.2]} rotation={[0, 0, -0.5]}>
        <mesh>
          <cylinderGeometry args={[0.06, 0.06, 2, 16]} />
          <meshStandardMaterial color="#8a5a2b" roughness={0.8} />
        </mesh>
        <mesh position={[0, -1, 0]}>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshStandardMaterial color="#9a6630" roughness={0.75} />
        </mesh>
      </group>
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <div
        style={{
          width: 54,
          height: 54,
          borderRadius: "50%",
          border: "4px solid rgba(240,168,48,0.25)",
          borderTopColor: "#E08C13",
          animation: "spin 0.9s linear infinite",
        }}
      />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </Html>
  );
}

export default function HoneyJar3D({
  honeyColor = "#E08C13",
}: {
  honeyColor?: string;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 5.2], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.5} color="#f0a830" />
      <spotLight position={[0, 6, 2]} angle={0.4} intensity={1.2} penumbra={1} />

      <Suspense fallback={<Loader />}>
        <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.6}>
          <Jar honeyColor={honeyColor} />
        </Float>
        <Environment preset="sunset" />
      </Suspense>

      <ContactShadows
        position={[0, -1.6, 0]}
        opacity={0.5}
        scale={8}
        blur={2.6}
        far={4}
        color="#7A4A08"
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}
