import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from './components/Loader'
import Globe from './components/Globe'

const App = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} />
      <ambientLight />
      <Suspense fallback={<Loader />}>
        <Globe />
      </Suspense>
    </Canvas>
  )
}

export default App
