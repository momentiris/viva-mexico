import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { ModelSunStone } from './models/ModelSunStone.jsx';

export const ScreenOne = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 grid-rows-3 lg:grid-rows-2 bg-gray-800 gap-2">
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
          <ModelSunStone />
        </Canvas>
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
          <ModelSunStone />
        </Canvas>
        <Canvas className="bg-gray-400 col-span-1 lg:col-span-2">
          <ambientLight intensity={0.6} color="white" />
          <spotLight
            intensity={0.6}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <OrbitControls autoRotate={true} autoRotateSpeed={1} />
          <ModelSunStone />
        </Canvas>
      </div>
    </Suspense>
  );
};
