'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, Suspense, useMemo } from 'react';
import * as THREE from 'three';

function PlateModel({ imageUrl }: { imageUrl: string }) {
  const groupRef = useRef<THREE.Group>(null!);
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  // Geometria de prato de alta gastronomia (fundo largo, borda baixa)
  const points = useMemo(() => {
    const pts = [];
    pts.push(new THREE.Vector2(0, 0));
    pts.push(new THREE.Vector2(0.8, 0.02));
    pts.push(new THREE.Vector2(1.2, 0.15));
    pts.push(new THREE.Vector2(1.3, 0.2));
    return pts;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Flutuação elegante (ritmo de respiração)
      groupRef.current.position.y = Math.sin(t * 0.6) * 0.08 + 0.3;
      groupRef.current.rotation.y = t * 0.25;
      // Inclinação dinâmica
      groupRef.current.rotation.x = -0.3 + Math.sin(t * 0.4) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Prato de Porcelana com Brilho Realista */}
      <mesh castShadow receiveShadow>
        <latheGeometry args={[points, 128]} />
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.02} 
          metalness={0.15} 
          side={THREE.DoubleSide} 
        />
      </mesh>
      
      {/* A Comida com Specular Map (simulado) */}
      <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.2, 128]} />
        <meshStandardMaterial 
          map={texture} 
          roughness={0.3} 
          metalness={0.2}
          emissive="#ffffff"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Anel de Dourado Champagne (mais sofisticado que o amarelo ouro) */}
      <mesh position={[0, 0.12, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.22, 0.01, 32, 100]} />
        <meshStandardMaterial color="#E5C185" metalness={1} roughness={0.05} />
      </mesh>

      {/* Sombra de Contato Suave */}
      <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.5, 64]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function Dish3DView({ imageUrl, name, isActive }: { imageUrl: string; name: string; isActive: boolean }) {
  if (!isActive) return null;

  return (
    <div className="absolute inset-0 z-[5] pointer-events-none">
      <Canvas camera={{ position: [0, 6, 10], fov: 25 }}>
        {/* Luz Ambiente de Estúdio */}
        <ambientLight intensity={0.4} />
        
        {/* Key Light (Luz Principal) */}
        <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={2} />
        
        {/* Fill Light (Luz de Preenchimento) */}
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ffffff" />
        
        {/* Rim Light (Luz de Contorno - O SEGREDO DO LUXO) */}
        <pointLight position={[0, 2, -5]} intensity={1.5} color="#D4AF37" />
        
        <Suspense fallback={null}>
          <PlateModel imageUrl={imageUrl} />
        </Suspense>
      </Canvas>
    </div>
  );
}
