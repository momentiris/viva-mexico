import { Suspense } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Float, Loader, OrbitControls } from '@react-three/drei';

import { ModelAnimationMount } from './ModelAnimationMount.jsx';

import {
  Olmek,
  SunStone,
  Maya,
  Toltek,
  SacrificalStone,
} from './models/index.jsx';

const models = {
  olmek: <Olmek />,
  sunstone: <SunStone />,
  maya: <Maya />,
  toltek: <Toltek />,
  sacrificialstone: <SacrificalStone />,
};

export const SceneContainer = () => {
  const params = useParams();
  const model = models[params.model];

  if (!model) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full h-full gap-2 bg-gradient-to-bl from-gray-900 to-gray-600">
      <Suspense fallback={null}>
        <Canvas>
          <ambientLight intensity={0.6} color="white" />
          <spotLight
            intensity={0.6}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />

          <OrbitControls autoRotate={true} autoRotateSpeed={1} />
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <ModelAnimationMount>{model}</ModelAnimationMount>
          </Float>
        </Canvas>
      </Suspense>
      <Loader containerStyles={{ backgroundColor: 'rgb(17 24 39)' }} />
    </div>
  );
};
