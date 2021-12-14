import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

// import Scene from '@/Scene';
import Model from '@/Model';

function App() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <div className="bg-black text-red-500"> asdf</div>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Canvas style={{ background: 'black ' }}>
          <ambientLight intensity={0.6} color="white" />
          <spotLight
            intensity={0.6}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />

          <OrbitControls />
          <Model />
        </Canvas>
      </div>
    </Suspense>
  );
}

export default App;
