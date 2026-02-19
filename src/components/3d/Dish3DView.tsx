'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

// Componente do Prato (Pure Three.js)
function DishModel({ imageUrl }: { imageUrl: string }) {
  const groupRef = useRef<THREE.Group>(null!);
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t) * 0.1;
      groupRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2, 1.9, 0.1, 64]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Face superior com a foto */}
      <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.9, 64]} />
        <meshStandardMaterial map={texture} roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Borda Dourada */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function Dish3DView({ imageUrl, name, isActive }: { imageUrl: string; name: string; isActive: boolean }) {
  if (!isActive) return null;

  return (
    <div className="absolute inset-0 z-[100] pointer-events-none">
      <Canvas camera={{ position: [0, 3, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={null}>
          <DishModel imageUrl={imageUrl} />
        </Suspense>
      </Canvas>
    </div>
  );
}
