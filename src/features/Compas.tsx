'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      cylinderGeometry: any;
      ringGeometry: any;
      coneGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      pointLight: any;
      directionalLight: any;
    }
  }
}

function CompassArrow({ randomRotation }: { randomRotation: number }) {
  const ref = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = randomRotation;
      
      if (hovered) {
        ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 4) * 0.1;
        ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.15;
        ref.current.position.y = 0.1;
        ref.current.scale.setScalar(1.15);
      } else {
        ref.current.rotation.x = 0;
        ref.current.rotation.z = 0;
        ref.current.position.y = 0;
        ref.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group ref={ref} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
      <mesh rotation={[-Math.PI * 0.5, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 2.2]} />
        <meshStandardMaterial 
          color={hovered ? "#ff3333" : "#ff6666"} 
          emissive="#440000" 
          emissiveIntensity={0.4}
          metalness={0.3} 
          roughness={0.1}
        />
      </mesh>
      <mesh position={[0, 1.15, 0]}>
        <coneGeometry args={[0.08, 0.3, 12]} />
        <meshStandardMaterial 
          color="#ff1111" 
          emissive="#880000" 
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}

function CompassRing() {
  return (
    <mesh rotation={[Math.PI * 0.5, 0, 0]}>
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
  const marks = [];
  for (let i = 0; i < 36; i++) {
    const angle = (i / 36) * Math.PI * 2;
    const isMajor = i % 9 === 0;
    const size = isMajor ? 0.18 : 0.08;
    marks.push(
      <mesh key={i} position={[Math.cos(angle) * 1.25, 0.03, Math.sin(angle) * 1.25]}>
        <cylinderGeometry args={[0.015, 0.015, size]} />
        <meshStandardMaterial 
          color={isMajor ? "#ffffff" : "#aaaaff"} 
          emissive={isMajor ? "#4444ff" : "#222244"} 
          emissiveIntensity={0.2}
        />
      </mesh>
    );
  }
  return <>{marks}</>;
}

function CompassBase() {
  return (
    <group position={[0, -0.8, 0]}>
      {/* ✅ ОСНОВАНИЕ - ЛЕЖИТ ПЛОСКО на столе */}
      <mesh rotation={[0, 0, 0]}>
        <cylinderGeometry args={[1.6, 1.6, 0.25]} />
        <meshStandardMaterial 
          color="#111133" 
          metalness={1} 
          roughness={0.05}
          emissive="#000066" 
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* ✅ Стекло - ПЛОСКОЕ сверху основания */}
      <mesh rotation={[0, 0, 0]} position={[0, 0.14, 0]}>
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
  const [randomRotation, setRandomRotation] = useState(0);

  // ✅ ПРАВИЛЬНО: Рандомное вращение через useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomRotation(Math.random() * Math.PI * 2);
    }, Math.random() * 2000 + 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg h-72 sm:h-80 md:h-96 lg:h-[28rem] mx-auto p-6 rounded-3xl bg-black/30 backdrop-blur-md border-2 border-white/20 shadow-2xl">
      <Canvas 
        camera={{ position: [0, 0, 4], fov: 35 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        className="w-full h-full rounded-2xl cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => e.currentTarget.style.cursor = 'grabbing'}
        onPointerUp={(e) => e.currentTarget.style.cursor = 'grab'}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={2} />
        <directionalLight position={[-2, 2, 1]} intensity={1.2} />
        <pointLight position={[0, 2, 2]} intensity={1} />
        
        <CompassBase />
        <CompassRing />
        <CompassMarkings />
        <CompassArrow randomRotation={randomRotation} />
        
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
