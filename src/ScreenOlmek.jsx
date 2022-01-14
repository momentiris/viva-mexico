import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Olmek } from './models/Olmek.jsx';

export const ScreenOlmek = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="w-full h-full">
        <Canvas className="bg-gray-400">
          <ambientLight intensity={0.6} color="white" />
          <spotLight
            intensity={0.6}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />

          <OrbitControls autoRotate={true} autoRotateSpeed={1} />
          <Olmek />
        </Canvas>
      </div>
    </Suspense>
  );
};
