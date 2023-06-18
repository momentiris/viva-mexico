/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    ['1923060008_(Xochiquetzal)']: THREE.Mesh;
  };
  materials: {
    ['Material #32']: THREE.MeshStandardMaterial;
  };
};

const Xochiquetzal = ({ ...props }: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    '/xochiquetzal-transformed.glb'
  ) as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes['1923060008_(Xochiquetzal)'].geometry}
        material={materials['Material #32']}
        position={[0, -1.5, 0]}
        scale={0.025}
      />
    </group>
  );
};

export default Xochiquetzal;

useGLTF.preload('/xochiquetzal-transformed.glb');
