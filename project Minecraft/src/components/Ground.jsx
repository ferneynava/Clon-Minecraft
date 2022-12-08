import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../images/textures.js'

export function Ground () {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // x, y, z
    position: [0, -0.5, 0] // x, y, z
  }))

  return (
    <mesh ref={ref}>
      <planeGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  )
}
