/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export const SunStone = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/sunstone-transformed.glb');

  useEffect(() => {
    group.current.rotation.x = 90;
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry} material={materials.model} />
    </group>
  );
};

useGLTF.preload('/sunstone-transformed.glb');