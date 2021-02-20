import React, { useRef, useEffect } from 'react'
import { extend, useFrame, useThree } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
// import { WaterPass } from './WaterPass'
// import './styles.css'

extend({
  EffectComposer,
  ShaderPass,
  RenderPass,
  // WaterPass,
  UnrealBloomPass,
  FilmPass,
})

export default function Effects() {
  const composer = useRef()
  const { scene, gl, size, camera } = useThree()
  useEffect(() => void composer.current.setSize(size.width, size.height), [
    size,
  ])
  useFrame(() => composer.current.render(), 2)
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray='passes' scene={scene} camera={camera} />
      {/* <waterPass attachArray='passes' factor={0.2} /> */}
      <unrealBloomPass attachArray='passes' args={[undefined, 2.5, 1, 0.9]} />
      {/* <filmPass attachArray='passes' args={[0.05, 1.5, 1500, false]} /> */}
      <shaderPass
        attachArray='passes'
        args={[FXAAShader]}
        material-uniforms-resolution-value={[1 / size.width, 1 / size.height]}
        renderToScreen
      />
    </effectComposer>
  )
}
