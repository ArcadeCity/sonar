import { Suspense, useRef } from 'react'
import { useResource, useThree } from 'react-three-fiber'
import { Stars } from '@react-three/drei'

const LanderComponent = () => {
  return (
    <Suspense fallback={null}>
      <Stars count={500} fade />
    </Suspense>
  )
}

export default LanderComponent
