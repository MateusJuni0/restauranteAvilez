'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, ScrollControls, Scroll, useScroll, Float, Html } from '@react-three/drei'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import FluidBackground from './FluidBackground'

// Componente de Texto Grande com Scroll
const Overlay = () => {
  const scroll = useScroll()
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    // Parallax suave no texto
    if (ref.current && scroll) {
      ref.current.position.y = -scroll.offset * 10
    }
  })

  return (
    <group ref={ref}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text
          position={[0, 0, 2]}
          fontSize={1.5}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        >
          JOSE AVILEZ
        </Text>
      </Float>
       <Text
          position={[0, -5, 0]}
          fontSize={1}
          color="#aaa"
          anchorX="center"
          anchorY="middle"
        >
          Experiência Gastronômica
        </Text>
    </group>
  )
}

const Rig = () => {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()
  
    return useFrame(() => {
      camera.position.lerp(vec.set(mouse.x * 0.5, mouse.y * 0.5, camera.position.z), 0.05)
      camera.lookAt(0, 0, 0)
    })
  }
  

export default function PortalMain() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#000', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: false }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <Suspense fallback={<Html center><div style={{ color: 'white' }}>Carregando...</div></Html>}>
          <ScrollControls pages={2} damping={0.2}>
            {/* Fundo Fluido atrás */}
            <group position={[0, 0, -2]}>
               <FluidBackground />
            </group>
            
             <Rig />
            {/* Conteúdo 3D Overlay */}
            <Overlay />

              <Scroll html>
              <div style={{ position: 'absolute', top: '100vh', left: '10vw', color: 'white' }}>
                <h1 style={{ fontSize: '10vw', fontFamily: 'Inter, sans-serif' }}>SABOR</h1>
              </div>
              <div style={{ position: 'absolute', top: '180vh', left: '40vw', color: 'white' }}>
                <h2 style={{ fontSize: '5vw', fontFamily: 'Inter, sans-serif' }}>ARTE</h2>
              </div>
            </Scroll>

            {/* Efeitos de Pós-Processamento (Cinematográfico) */}
            <EffectComposer>
              <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={0.5} />
              <Noise opacity={0.15} />
              <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}
