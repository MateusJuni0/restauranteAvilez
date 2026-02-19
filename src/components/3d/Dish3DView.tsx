'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function DishModel({ imageUrl }: { imageUrl: string }) {
  const groupRef = useRef<THREE.Group>(null!);
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Flutuação mais sutil
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.05 + 0.5; // Sobe 0.5 para não tapar o texto
      // Rotação mais elegante
      groupRef.current.rotation.y = t * 0.3;
      // Inclinação para mostrar o prato de cima
      groupRef.current.rotation.x = -0.2;
    }
  });

  return (
    <group ref={groupRef} scale={0.7}> {/* Reduzi a escala total */}
      {/* Base do Prato (Porcelana) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.1, 0.08, 64]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.1} metalness={0.1} />
      </mesh>
      
      {/* Imagem do Prato (no topo) */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.15, 64]} />
        <meshStandardMaterial map={texture} roughness={0.5} metalness={0.1} />
      </mesh>

      {/* Detalhe Dourado Fino na Borda */}
      <mesh position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.18, 0.02, 16, 100]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function Dish3DView({ imageUrl, name, isActive }: { imageUrl: string; name: string; isActive: boolean }) {
  if (!isActive) return null;

  return (
    <div className="absolute inset-0 z-[10] pointer-events-none"> {/* Z-index menor para não bloquear texto */}
      <Canvas camera={{ position: [0, 4, 6], fov: 35 }}> {/* Câmera mais alta e longe */}
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#D4AF37" intensity={0.5} />
        <Suspense fallback={null}>
          <DishModel imageUrl={imageUrl} />
        </Suspense>
      </Canvas>
    </div>
  );
}
