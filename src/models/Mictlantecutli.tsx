/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    ['1949030001_(mictlantecutli)']: THREE.Mesh;
  };
  materials: {
    ['Material #43']: THREE.MeshStandardMaterial;
  };
};

const Mictlantecutli = ({ ...props }: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    '/mictlantecutli-transformed.glb'
  ) as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes['1949030001_(mictlantecutli)'].geometry}
        material={materials['Material #43']}
        scale={0.011}
        position={[0, -1.7, 0]}
      />
    </group>
  );
};

export default Mictlantecutli;
useGLTF.preload('/mictlantecutli-transformed.glb');
