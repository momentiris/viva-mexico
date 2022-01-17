import { useSpring, animated } from '@react-spring/three';

type ModelAnimationMountProps = {
  children: React.ReactNode;
};

export const ModelAnimationMount = ({ children }: ModelAnimationMountProps) => {
  const { scale, rotation } = useSpring({
    from: {
      scale: [0, 0, 0],
      rotation: [0, -7, 0],
    },
    to: {
      scale: [1, 1, 1],
      rotation: [0, 0, 0],
    },
    config: { mass: 40, tension: 350, friction: 300, precision: 0.00001 },
  });

  return (
    //@ts-ignore
    <animated.group scale={scale} rotation={rotation}>
      {children}
    </animated.group>
  );
};
