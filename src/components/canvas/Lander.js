import { Suspense, useEffect, useRef } from 'react'
import { extend } from 'react-three-fiber'
// import { useFrame, useThree } from 'react-three-fiber'
import { Water } from 'three/examples/jsm/objects/Water'
import { Environment, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import useStore from '@/helpers/store'
// import Effects from './Effects'

const M = a(MeshDistortMaterial)

extend({ Water })

const LanderComponent = () => {
  const router = useStore((s) => s.router)
  const { color } = useSpring({
    color: router.route === '/box' ? '#272727' : 'black',
  })

  return (
    <Suspense fallback={null}>
      <water />
      {/* <Effects /> */}
      <ambientLight intensity={0.5} />
      <Sphere args={[1, 32, 32]}>
        <M factor={2} color={color} />
      </Sphere>
      <Environment preset={'studio'} />
    </Suspense>
  )
}

export default LanderComponent
