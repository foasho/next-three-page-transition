import { r3f } from '../utility/r3fHelper'
import { Preload } from '@react-three/drei'
import { Canvas, CanvasProps } from '@react-three/fiber'


export default function Scene(props: CanvasProps){
  return (
    <Canvas {...props}>
      <r3f.Out />
      <Preload all />
    </Canvas>
  )
}