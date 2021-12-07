import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';
import Scene from '@/Scene';

function App() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Canvas>
          {/* <PerspectiveCamera makeDefault /> */}
          <OrbitControls />
          <ambientLight intensity={0.6} color="white" />
          <spotLight
            intensity={0.6}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />

          <Scene />
        </Canvas>
      </div>
    </Suspense>
  );
}

export default App;
