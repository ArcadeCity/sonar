import { Suspense } from 'react'

const LanderComponent = () => {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
    </Suspense>
  )
}

export default LanderComponent
