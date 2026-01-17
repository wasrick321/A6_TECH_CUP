import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { GradientTexture, OrbitControls } from "@react-three/drei"
import type { Group } from "three"

function Pokeball() {
  const groupRef = useRef<Group>(null)

  // 🎥 Auto spin
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={groupRef} rotation={[Math.PI / 2, 0, 0]}>
      
      {/* Main sphere */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial roughness={0.3} metalness={0.2}>
          <GradientTexture
            stops={[0, 0.499, 0.5, 1]}
            colors={["#d10000", "#d10000", "#ffffff", "#ffffff"]}
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
          color="#666"
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>

    </group>
  )
}

interface Pokiball3DProps {
  className?: string
}

export function Pokiball3D({ className }: Pokiball3DProps) {
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

      <Pokeball />

      <OrbitControls enableZoom />
    </Canvas>
  )
}
