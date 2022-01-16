import { useSpring, a } from '@react-spring/three';

export const ModelAnimationMount = ({ children }) => {
  const animation = useSpring({
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
    <a.group castShadow receiveShadow {...animation}>
      {children}
    </a.group>
  );
};
