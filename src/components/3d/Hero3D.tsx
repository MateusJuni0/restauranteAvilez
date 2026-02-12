'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSystem({ color = "#D4AF37" }) {
  const ref = useRef<THREE.Points>(null!);
  
  const particleCount = 1500;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = time * 0.04;
      ref.current.rotation.x = time * 0.02;
      ref.current.position.y = Math.sin(time * 0.4) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Hero3D({ color }: { color?: string }) {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
        <color attach="background" args={['#030303']} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleSystem color={color} />
      </Canvas>
    </div>
  );
}
