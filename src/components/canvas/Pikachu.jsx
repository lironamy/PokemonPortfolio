import React, { useRef,useEffect  } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Pikachu(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Pikachu.glb')
  const {animations: animate } = useGLTF('/models/Pikachu.glb');

  animate[1].name = "idle"


  const { actions } = useAnimations(animations, group);

  useEffect (() =>{
    actions.idle.play();
  }, [actions])


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Pikachu" rotation={[Math.PI / 2, 0, 0]} scale={0.05} position={[0,-6,0]}>
          <primitive object={nodes.pm0025_00_pikachu} />
          <group name="PikachuM">
            <skinnedMesh name="PikachuM_1" geometry={nodes.PikachuM_1.geometry} material={materials['Material 160']} skeleton={nodes.PikachuM_1.skeleton} />
            <skinnedMesh name="PikachuM_2" geometry={nodes.PikachuM_2.geometry} material={materials['Material.001']} skeleton={nodes.PikachuM_2.skeleton} />
            <skinnedMesh name="PikachuM_3" geometry={nodes.PikachuM_3.geometry} material={materials['Material.003']} skeleton={nodes.PikachuM_3.skeleton} />
            <skinnedMesh name="PikachuM_4" geometry={nodes.PikachuM_4.geometry} material={materials['Material.002']} skeleton={nodes.PikachuM_4.skeleton} />
            <directionalLight
              position={[-50, 500, 500]}
              intensity={0.5}
              castShadow
              shadow-mapSize-width={5024}
              shadow-mapSize-height={5024}
              shadow-camera-far={10}
            />
          </group>
        </group>
        <group name="Sun" />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Pikachu.glb')
