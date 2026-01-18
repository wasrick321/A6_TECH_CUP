import { Canvas, useFrame } from "@react-three/fiber"
import { GradientTexture, OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import type { Group } from "three"

function PokeballBlue({ spin = true }: { spin?: boolean }) {
  const groupRef = useRef<Group>(null)

  // 🎥 Auto spin - Wobbling rotation (X and Y dominant) - slower
  useFrame(() => {
    if (groupRef.current && spin) {
      groupRef.current.rotation.x += 0.006
      groupRef.current.rotation.y += 0.0025
      groupRef.current.rotation.z += 0.0015
    }
  })

  return (
    <group ref={groupRef} rotation={[0, 0, 0]}>
      
      {/* Main sphere */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial roughness={0.3} metalness={0.2}>
          <GradientTexture
            stops={[0, 0.499, 0.5, 1]}
            colors={["#0066ff", "#0066ff", "#ffffff", "#ffffff"]}
            size={1024}
          />
        </meshStandardMaterial>
      </mesh>

      {/* Black middle band */}
      <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.06, 32, 100]} />
        <meshStandardMaterial
          color="black"
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* Center button (outer - 3D) */}
      <mesh position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 0.05, 32]} />
        <meshStandardMaterial
          color="white"
          roughness={0.25}
          metalness={0.3}
        />
      </mesh>

      {/* Center button (inner - 3D) */}
      <mesh position={[1.03, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 0.03, 32]} />
        <meshStandardMaterial
          color="#0066ff"
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>

    </group>
  )
}

interface Pokiball3DBlueProps {
  className?: string
  spin?: boolean
}

export function Pokiball3DBlue({ className, spin = true }: Pokiball3DBlueProps) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 3], fov: 50 }}
      className={className}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
      />

      <PokeballBlue spin={spin} />

      {/* Controls */}
      <OrbitControls enableZoom />
    </Canvas>
  )
}
