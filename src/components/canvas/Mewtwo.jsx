import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useGLTF, useAnimations, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';

export default function Mewtwo(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Mewtwo2.glb')
  const {animations: animate } = useGLTF('/models/Mewtwo2.glb');
  animate[1].name = "idle"

  const { actions } = useAnimations(animations, group)

  
  useEffect (() =>{
    actions.idle.play();
  }, [actions])

    useFrame((state) => {
      group.current.getObjectByName('Spine2').lookAt(state.mouse.x + 2, state.mouse.y, 2);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature003" rotation={[Math.PI / 2, 0, 0]} scale={0.03} position={[0,0.5,-2]}>
          <primitive object={nodes.pm0150_00} />
          <skinnedMesh name="Body00_OptMesh_0_0_node" geometry={nodes.Body00_OptMesh_0_0_node.geometry} material={materials['Body00_mat.011']} skeleton={nodes.Body00_OptMesh_0_0_node.skeleton} />
          <skinnedMesh name="Body00_OptMesh_1_0_node001" geometry={nodes.Body00_OptMesh_1_0_node001.geometry} material={materials['Body00_mat.011']} skeleton={nodes.Body00_OptMesh_1_0_node001.skeleton} />
          <skinnedMesh name="Body00_OptMesh_2_0_node" geometry={nodes.Body00_OptMesh_2_0_node.geometry} material={materials['Body00_mat.011']} skeleton={nodes.Body00_OptMesh_2_0_node.skeleton} />
          <skinnedMesh name="Body00_OptMesh_3_0_node" geometry={nodes.Body00_OptMesh_3_0_node.geometry} material={materials['Body00_mat.011']} skeleton={nodes.Body00_OptMesh_3_0_node.skeleton} />
          <group name="Body01_OptMesh_7_0_node">
            <skinnedMesh name="Body01_OptMesh_7_0011" geometry={nodes.Body01_OptMesh_7_0011.geometry} material={materials['Body01_mat.011']} skeleton={nodes.Body01_OptMesh_7_0011.skeleton} />
            <skinnedMesh name="Body01_OptMesh_7_0011_1" geometry={nodes.Body01_OptMesh_7_0011_1.geometry} material={materials['Eye_mat.011']} skeleton={nodes.Body01_OptMesh_7_0011_1.skeleton} />
            <directionalLight
              position={[-0, 10000, 1000]}
              intensity={1}
              castShadow
              shadow-mapSize-width={5024}
              shadow-mapSize-height={5024}
              shadow-camera-far={50}
            />

          </group>
        </group>
      </group>
    </group>
  )
}



useGLTF.preload('/models/Mewtwo2.glb')
