import React from 'react';
import { Float, Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { ModelAnimationMount, Spinner } from '.';

type ModelWrapperProps = {
  children: React.ReactNode;
};

export const PresentationalScene = ({ children }: ModelWrapperProps) => (
  <div className="w-full h-full">
    <React.Suspense fallback={<Spinner />}>
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
          <ModelAnimationMount>{children}</ModelAnimationMount>
        </Float>
      </Canvas>
    </React.Suspense>
    <Loader containerStyles={{ backgroundColor: 'rgb(17 24 39)' }} />
  </div>
);
