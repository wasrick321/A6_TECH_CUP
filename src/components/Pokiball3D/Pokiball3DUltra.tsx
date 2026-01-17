import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import type { Group } from "three"

function UltraBall() {
  const groupRef = useRef<Group>(null)

  // 🎥 Spin - Primarily Z rotation with slow X wobble
  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.rotation.z += 0.02
    groupRef.current.rotation.x += 0.004
  })

  // Curve for yellow stripes
  const stripeCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.6, 0.8),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 0.6, -0.8),
  ])

  return (
    <group ref={groupRef} rotation={[0, 0, 0]}>

      {/* Bottom white half */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
        <meshStandardMaterial color="white" roughness={0.35} />
      </mesh>

      {/* Top black half */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1.001, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="black" roughness={0.25} />
      </mesh>

      {/* Yellow stripe LEFT */}
      <mesh rotation={[0, Math.PI / 3, 0]} castShadow>
        <tubeGeometry args={[stripeCurve, 64, 0.05, 8, false]} />
        <meshStandardMaterial color="#f5c400" />
      </mesh>

      {/* Yellow stripe RIGHT */}
      <mesh rotation={[0, -Math.PI / 3, 0]} castShadow>
        <tubeGeometry args={[stripeCurve, 64, 0.05, 8, false]} />
        <meshStandardMaterial color="#f5c400" />
      </mesh>

      {/* Yellow equator band */}
      <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.06, 32, 100]} />
        <meshStandardMaterial color="#f5c400" roughness={0.4} metalness={0.1} />
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

interface Pokiball3DUltraProps {
  className?: string
}

export function Pokiball3DUltra({ className }: Pokiball3DUltraProps) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 3], fov: 50 }}
      className={className}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <UltraBall />
      <OrbitControls enableZoom />
    </Canvas>
  )
}
