import { useTexture, Sphere } from '@react-three/drei'

const Globe = () => {
  const texture = useTexture('/earth.jpg')
  return (
    <Sphere scale={[1.8, 1.8, 1.8]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  )
}

export default Globe
