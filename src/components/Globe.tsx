import { useTexture, Sphere } from '@react-three/drei'
import { setCursor } from '@/utils'

const Globe = () => {
  const texture = useTexture('/earth.jpg')
  return (
    <Sphere
      scale={[1.8, 1.8, 1.8]}
      onPointerOver={() => setCursor('pointer')}
      onPointerOut={() => setCursor('auto')}
    >
      <meshStandardMaterial map={texture} />
    </Sphere>
  )
}

export default Globe
