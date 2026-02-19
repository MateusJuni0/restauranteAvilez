'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { Float, ContactShadows, Environment, PresentationControls, Html } from '@react-three/drei';

// Interface para o componente
interface Dish3DProps {
  imageUrl: string;
  name: string;
  isActive: boolean;
}

function DishModel({ imageUrl, name }: { imageUrl: string; name: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  // Carrega a textura da imagem do prato com tratamento de CORS
  const texture = useLoader(THREE.TextureLoader, imageUrl, (loader) => {
    loader.setCrossOrigin('anonymous');
  });
  
  // Criamos uma geometria de "Prato" (Cilindro muito baixo ou Disco)
  // Para o efeito "abrir em 3D", vamos usar um disco com a foto em cima e uma borda dourada
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Flutuação suave
      meshRef.current.position.y = Math.sin(t) * 0.1;
      // Rotação lenta para mostrar que é 3D
      meshRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group>
      {/* O "Prato" Físico */}
      <mesh ref={meshRef}>
        <cylinderGeometry args={[2, 1.8, 0.15, 64]} />
        
        {/* Lado de cima: A foto do prato */}
        <meshStandardMaterial 
          attach="material-4" // Top face do cilindro
          map={texture} 
          roughness={0.3}
          metalness={0.2}
        />
        
        {/* Borda: Dourado Belcanto */}
        <meshStandardMaterial 
          attach="material-0" 
          color="#D4AF37" 
          metalness={1} 
          roughness={0.2} 
        />
        {/* Lado de baixo: Branco Porcelana */}
        <meshStandardMaterial 
          attach="material-5" 
          color="#ffffff" 
        />
      </mesh>

      {/* Partículas de "Aroma/Fumo" Minimalistas */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 0.5, 0]}>
           {/* Aqui poderíamos colocar pequenos glitters dourados flutuando */}
        </mesh>
      </Float>
    </group>
  );
}

export default function Dish3DView({ imageUrl, name, isActive }: Dish3DProps) {
  if (!isActive) return null;

  return (
    <div className="absolute inset-0 z-[100] pointer-events-auto">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0.3, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <Suspense fallback={<Html center><div className="text-[#D4AF37] animate-pulse uppercase tracking-widest text-xs">Carregando Experiência 3D...</div></Html>}>
            <DishModel imageUrl={imageUrl} name={name} />
          </Suspense>
        </PresentationControls>

        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
