'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, Suspense, useMemo } from 'react';
import * as THREE from 'three';

function PlateModel({ imageUrl }: { imageUrl: string }) {
  const groupRef = useRef<THREE.Group>(null!);
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  // Criar o perfil de um prato curvo (LatheGeometry)
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 10; i++) {
      // Cria uma curva suave de prato: (raio, altura)
      pts.push(new THREE.Vector2(i * 0.15, Math.pow(i * 0.1, 2) * 0.5));
    }
    return pts;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Movimento de flutuação e rotação
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.1 + 0.2;
      groupRef.current.rotation.y = t * 0.4;
      groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Prato de Porcelana Curvo */}
      <mesh>
        <latheGeometry args={[points, 64]} />
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.05} 
          metalness={0.1} 
          side={THREE.DoubleSide} 
        />
      </mesh>
      
      {/* A Comida (Levemente acima do fundo do prato) */}
      <mesh position={[0, 0.12, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.2, 64]} />
        <meshStandardMaterial 
          map={texture} 
          roughness={0.4} 
          metalness={0.1} 
          transparent 
        />
      </mesh>

      {/* Borda Dourada Elevada */}
      <mesh position={[0, 0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.3, 0.015, 16, 100]} />
        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
      </mesh>

      {/* Sombra Fake no fundo do card (ground shadow) */}
      <mesh position={[0, -0.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.4, 64]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export default function Dish3DView({ imageUrl, name, isActive }: { imageUrl: string; name: string; isActive: boolean }) {
  if (!isActive) return null;

  return (
    <div className="absolute inset-0 z-[5] pointer-events-none">
      <Canvas camera={{ position: [0, 5, 8], fov: 30 }}>
        <ambientLight intensity={0.7} />
        {/* Luz Direcional para criar brilho na porcelana */}
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <pointLight position={[-5, 5, -5]} color="#D4AF37" intensity={1} />
        
        <Suspense fallback={null}>
          <PlateModel imageUrl={imageUrl} />
        </Suspense>
      </Canvas>
    </div>
  );
}
