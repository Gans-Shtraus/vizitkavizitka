"use client";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef } from "react";

// Расширяем JSX типы правильно
extend({
  CylinderGeometry: THREE.CylinderGeometry,
  RingGeometry: THREE.RingGeometry,
  MeshStandardMaterial: THREE.MeshStandardMaterial,
  PlaneGeometry: THREE.PlaneGeometry,
});

function CompassCube() {
  const texture = useTexture("/images/NeWeb.png");
  const meshRef = useRef<THREE.Mesh>(null);
  const isDragging = useRef(false);
  const autoRotationSpeed = useRef(0.5);

  useEffect(() => {
    const handlePointerDown = () => {
      isDragging.current = true;
      autoRotationSpeed.current = 0;
    };

    const handlePointerUp = () => {
      isDragging.current = false;
      setTimeout(() => {
        if (!isDragging.current) {
          autoRotationSpeed.current = 0.5;
        }
      }, 1000);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current && !isDragging.current) {
      meshRef.current.rotation.y += delta * autoRotationSpeed.current;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

function CompassRing() {
  return (
    <mesh
      rotation={[Math.PI * 0.5, 0, 0]}
      position={[0, -0.6, 0]} // Смещение вниз
    >
      <ringGeometry args={[1.3, 1.35, 128]} />
      <meshStandardMaterial
        color="#22aaee"
        emissive="#112244"
        emissiveIntensity={0.3}
        metalness={1}
        roughness={0}
      />
    </mesh>
  );
}

function CompassMarkings() {
  const marks: React.ReactNode[] = [];
  const cubeHeight = 1.2; // Высота куба
  const offsetY = -cubeHeight / 2 + 0.1; // Смещение вниз: половина высоты куба минус небольшой отступ

  for (let i = 0; i < 36; i++) {
    const angle = (i / 36) * Math.PI * 2;
    const isMajor = i % 9 === 0;
    const size = isMajor ? 0.18 : 0.08;

    marks.push(
      <mesh
        key={`mark-${i}`}
        position={[
          Math.cos(angle) * 1.25,
          offsetY, // Фиксированная высота — у основания куба
          Math.sin(angle) * 1.25,
        ]}
      >
        <cylinderGeometry args={[0.015, 0.015, size]} />
        <meshStandardMaterial
          color={isMajor ? "#ffffff" : "#aaaaff"}
          emissive={isMajor ? "#4444ff" : "#222244"}
          emissiveIntensity={0.2}
        />
      </mesh>,
    );
  }

  return <>{marks}</>;
}

function CompassBase() {
  return (
    <group position={[0, -0.8, 0]}>
      {/* Основание */}
      <mesh>
        <cylinderGeometry args={[1.6, 1.6, 0.25]} />
        <meshStandardMaterial
          color="#111133"
          metalness={1}
          roughness={0.05}
          emissive="#000066"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Стекло */}
      <mesh position={[0, 0.14, 0]}>
        <cylinderGeometry args={[1.45, 1.45, 0.12]} />
        <meshStandardMaterial
          color="#444488"
          transparent
          opacity={0.2}
          metalness={0.1}
          roughness={0.9}
        />
      </mesh>
    </group>
  );
}

export default function Compass() {
  return (
    <div className="w-full h-full rounded-2xl cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 35 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: false,
        }}
        className="w-full h-full rounded-2xl"
      >
        {/* Освещение */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={2} />
        <directionalLight position={[-2, 2, 1]} intensity={1.2} />
        <pointLight position={[0, 2, 2]} intensity={1} />

        {/* Элементы компаса */}
        <CompassBase />
        <CompassRing />
        <CompassMarkings />
        <CompassCube />

        {/* Управление камерой */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI / 1.5}
          makeDefault
        />
      </Canvas>
    </div>
  );
}
