import React, { useRef,useEffect  } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Ash(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Ash.glb')
  const {animations: animate } = useGLTF('/models/Ash.glb');

  animate[0].name = "dance"

  const { actions } = useAnimations(animations, group);

  useEffect (() =>{
    actions.dance.play();
  }, [actions])


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={1.8} position={[0,-6,0]}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="G_bag" geometry={nodes.G_bag.geometry} material={materials['Material.003']} skeleton={nodes.G_bag.skeleton} />
          <skinnedMesh name="G_body" geometry={nodes.G_body.geometry} material={materials['Material.001']} skeleton={nodes.G_body.skeleton} />
          <skinnedMesh name="G_body001" geometry={nodes.G_body001.geometry} material={materials['Material.002']} skeleton={nodes.G_body001.skeleton} />
          <skinnedMesh name="G_hair" geometry={nodes.G_hair.geometry} material={materials['Material.005']} skeleton={nodes.G_hair.skeleton} />
          <skinnedMesh name="G_hat" geometry={nodes.G_hat.geometry} material={materials['Material.004']} skeleton={nodes.G_hat.skeleton} />
          <skinnedMesh name="G_head" geometry={nodes.G_head.geometry} material={materials['Material.007']} skeleton={nodes.G_head.skeleton} />
          <skinnedMesh name="G_head001" geometry={nodes.G_head001.geometry} material={materials['Material.006']} skeleton={nodes.G_head001.skeleton} />
          <skinnedMesh name="G_mouth" geometry={nodes.G_mouth.geometry} material={nodes.G_mouth.material} skeleton={nodes.G_mouth.skeleton} />
          <skinnedMesh name="G_tooth" geometry={nodes.G_tooth.geometry} material={nodes.G_tooth.material} skeleton={nodes.G_tooth.skeleton} />
          {/* <directionalLight
              position={[-500, 1000, -500]}
              intensity={1}
              castShadow
              shadow-mapSize-width={5024}
              shadow-mapSize-height={5024}
              shadow-camera-far={10}
            /> */}
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Ash.glb')
