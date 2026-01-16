import { Canvas, useFrame } from "@react-three/fiber"
import { GradientTexture, OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import type { Group } from "three"

function Pokeball() {
  const groupRef = useRef<Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005
      groupRef.current.rotation.y += 0.008
      groupRef.current.rotation.z += 0.003
    }
  })

  return (
    <group ref={groupRef} rotation={[Math.PI / 2, 0, 0]}>
      
      {/* Main sphere */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial>
          <GradientTexture
            stops={[0, 0.499, 0.5, 1]}
            colors={["#d10000", "#d10000", "#ffffff", "#ffffff"]}
            size={1024}
          />
        </meshStandardMaterial>
      </mesh>

      {/* Black middle band */}
      <mesh>
        <torusGeometry args={[1, 0.06, 32, 100]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Center button (outer) */}
      <mesh position={[0, 0, 1]}>
        <circleGeometry args={[0.18, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Center button (inner) */}
      <mesh position={[0, 0, 1.01]}>
        <circleGeometry args={[0.1, 32]} />
        <meshStandardMaterial color="#555" />
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

      {/* Controls */}
      <OrbitControls enableZoom />
    </Canvas>
  )
}
