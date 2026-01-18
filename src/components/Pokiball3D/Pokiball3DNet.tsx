import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import type { Group } from "three"

interface YellowPanelProps {
  rotation: [number, number, number]
}

function YellowPanel({ rotation }: YellowPanelProps) {
  return (
    <mesh rotation={rotation} position={[0, 0.55, 0]} castShadow>
      <planeGeometry args={[0.6, 0.8]} />
      <meshStandardMaterial
        color="#f4c430"
        roughness={0.35}
        metalness={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function NetBall({ spin = true }: { spin?: boolean }) {
  const groupRef = useRef<Group>(null)

  // 🎥 Spin - Fast Y rotation with slight Z tilt - slower
  useFrame(() => {
    if (!groupRef.current) return
    if (spin) {
      groupRef.current.rotation.y += 0.0125
      groupRef.current.rotation.z += 0.001
    }
  })

  return (
    <group ref={groupRef} rotation={[0, 0, 0]}>

      {/* Bottom white half */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
        <meshStandardMaterial color="white" roughness={0.35} />
      </mesh>

      {/* Top green half */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1.001, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#2fb59a" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Yellow top panels */}
      <YellowPanel rotation={[Math.PI / 2, 0, 0]} />
      <YellowPanel rotation={[Math.PI / 2, Math.PI / 2, 0]} />
      <YellowPanel rotation={[Math.PI / 2, Math.PI, 0]} />
      <YellowPanel rotation={[Math.PI / 2, -Math.PI / 2, 0]} />

      {/* Black equator band */}
      <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.06, 32, 100]} />
        <meshStandardMaterial color="black" roughness={0.4} metalness={0.1} />
      </mesh>

      {/* Yellow stripe in band */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshStandardMaterial color="#f4c430" />
      </mesh>

      {/* Button outer */}
      <mesh position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 0.05, 32]} />
        <meshStandardMaterial color="white" roughness={0.25} metalness={0.3} />
      </mesh>

      {/* Button inner */}
      <mesh position={[1.03, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 0.03, 32]} />
        <meshStandardMaterial color="#666" roughness={0.4} metalness={0.2} />
      </mesh>

    </group>
  )
}

interface Pokiball3DNetProps {
  className?: string
  spin?: boolean
}

export function Pokiball3DNet({ className, spin = true }: Pokiball3DNetProps) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 3], fov: 50 }}
      className={className}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <NetBall spin={spin} />
      <OrbitControls enableZoom />
    </Canvas>
  )
}
