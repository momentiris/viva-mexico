import React from 'react';
import { Float, Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { ModelAnimationMount, Spinner } from '.';

type ModelWrapperProps = {
  children: React.ReactNode;
};

export const PresentationalScene = ({ children }: ModelWrapperProps) => {
  const timeoutRef = React.useRef<number>();
  const nodeRef = React.useRef<any>(null);

  const handleInteractionEnd = () => {
    window.clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      console.log('reset');
      nodeRef.current.reset();
    }, 1000 * 60 * 3);
  };

  React.useEffect(() => {
    () => window.clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="w-full h-full">
      <React.Suspense fallback={<Spinner />}>
        <Canvas className="w-full h-full">
          <ambientLight intensity={0.6} color="white" />
          <spotLight
            intensity={0.6}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />

          <OrbitControls
            ref={nodeRef}
            autoRotate={true}
            autoRotateSpeed={1}
            maxDistance={6}
            minDistance={0}
            enablePan={false}
            position={[0, 0, 0]}
            onEnd={handleInteractionEnd}
          />
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <ModelAnimationMount>{children}</ModelAnimationMount>
          </Float>
        </Canvas>
      </React.Suspense>
      <Loader containerStyles={{ backgroundColor: 'rgb(17 24 39)' }} />
    </div>
  );
};
