import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loading from './components/Loading'
import Globe from './components/Globe'

const App = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true} />
      <ambientLight />
      <Suspense fallback={<Loading />}>
        <Globe />
      </Suspense>
    </Canvas>
  )
}

export default App
