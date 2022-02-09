import { motion } from 'framer-motion-3d';

type ModelAnimationMountProps = {
  children: React.ReactNode;
};

export const ModelAnimationMount = ({ children }: ModelAnimationMountProps) => {
  return (
    <motion.group
      scale={0}
      rotation={[0, -7, 0]}
      animate={{ rotateY: 0, scale: 1 }}
      transition={{ type: 'spring', duration: 6 }}
    >
      <group></group>
      {children}
    </motion.group>
  );
};
