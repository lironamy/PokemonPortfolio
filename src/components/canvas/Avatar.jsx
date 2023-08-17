import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useGLTF, useAnimations, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';

export const FLOOR_HEIGHT = 5;
export const NB_FLOORS = 2;


export default function Avatar(props) {
  const [isScrolling, setIsScrolling] = useState(false);
  const { nodes, materials } = useGLTF('/models/Mewtwo.glb');
  const {animations: animate } = useGLTF('/models/Mewtwo.glb');
  const [isModelVisible, setModelVisible] = useState(true);
  

  

  const ref = useRef();
  const bodyRef = useRef(); // reference to just body group
  const groupRef = useRef(); // reference to overall group 
  const tl = useRef();
  const scroll = useScroll();
  animate[2].name = "flySlow"
  animate[3].name = "flyfast"
  animate[5].name = "atk1"


  const {actions} = useAnimations(animate, ref);


  useEffect (() =>{
    actions.flyfast.play();
  }, [actions])
    
  useLayoutEffect(() => {
    tl.current = gsap.timeline();
  
    tl.current.to(ref.current.position, {
      duration: 1, 
      y: FLOOR_HEIGHT * (NB_FLOORS -0.5 ),
      x: 10, 
      onComplete: () => {
        actions.atk1.play();
      },
    });

    tl.current.to(bodyRef.current.rotation, {
      duration: 0.2,
      z: Math.PI * 2,
   
    });

    
    tl.current.to(ref.current.position, {
      duration: 0.5,
      y: FLOOR_HEIGHT * (NB_FLOORS -0.6 ),
      x: 10, 
      onComplete: () => {
        actions.atk1.stop()
      },
    });

    tl.current.to(bodyRef.current.rotation, {
      duration: 0.3,
      z: 5,
      onComplete: () => {
        actions.flyfast.play();
      },
    });
    
  
    tl.current.to(ref.current.position, {  
      duration: 1,
      y: FLOOR_HEIGHT * (NB_FLOORS + 1), 
      x: 25, 
      onComplete: () => {
        setModelVisible(false);
      },
    });
  
  }, [actions, ref]);


  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
    if (scroll.offset > 0.05) {
      setIsScrolling(true); 
    } else {
      setIsScrolling(false); 
    }
  });
 


  // useFrame((state) => {
  //   if (!isScrolling) { // Check if isScrolling is false, then run the lookAt
  //     ref.current.getObjectByName('Spine2').lookAt(state.mouse.x + 4, state.mouse.y, 2);
  //   }
  // });




  return (
    <group {...props} dispose={null} ref={ref}>

      {isModelVisible && (
      <group name="Scene">
      <group ref={groupRef}>
          <group 
            ref={bodyRef}
            name="Armature003" 
            position={[-10,-8, 0]} 
            rotation={[Math.PI / 2, 0, 5]} 
            scale={0.02}
          >
        <primitive object={nodes.pm0150_00} />
          <skinnedMesh
            name="Body00_OptMesh_0_0_node"
            geometry={nodes.Body00_OptMesh_0_0_node.geometry}
            material={materials['Body00_mat.011']}
            skeleton={nodes.Body00_OptMesh_0_0_node.skeleton}
            castShadow // Enable casting shadows
            receiveShadow // Enable receiving shadows
          />
          <skinnedMesh
            name="Body00_OptMesh_1_0_node001"
            geometry={nodes.Body00_OptMesh_1_0_node001.geometry}
            material={materials['Body00_mat.011']}
            skeleton={nodes.Body00_OptMesh_1_0_node001.skeleton}
            castShadow // Enable casting shadows
            receiveShadow // Enable receiving shadows
          />
          <skinnedMesh
            name="Body00_OptMesh_2_0_node"
            geometry={nodes.Body00_OptMesh_2_0_node.geometry}
            material={materials['Body00_mat.011']}
            skeleton={nodes.Body00_OptMesh_2_0_node.skeleton}
            castShadow // Enable casting shadows
            receiveShadow // Enable receiving shadows
          />
          <skinnedMesh
            name="Body00_OptMesh_3_0_node"
            geometry={nodes.Body00_OptMesh_3_0_node.geometry}
            material={materials['Body00_mat.011']}
            skeleton={nodes.Body00_OptMesh_3_0_node.skeleton}
            castShadow // Enable casting shadows
            receiveShadow // Enable receiving shadows
          />
          <group name="Body01_OptMesh_7_0_node">
            <skinnedMesh
              name="Body01_OptMesh_7_0011"
              geometry={nodes.Body01_OptMesh_7_0011.geometry}
              material={materials['Body01_mat.011']}
              skeleton={nodes.Body01_OptMesh_7_0011.skeleton}
              castShadow // Enable casting shadows
              receiveShadow // Enable receiving shadows
            />
            <skinnedMesh
              name="Body01_OptMesh_7_0011_1"
              geometry={nodes.Body01_OptMesh_7_0011_1.geometry}
              material={materials['Eye_mat.011']}
              skeleton={nodes.Body01_OptMesh_7_0011_1.skeleton}
              castShadow // Enable casting shadows
              receiveShadow // Enable receiving shadows
            />
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
      )}
    </group>
  );
}

useGLTF.preload('/models/Mewtwo.glb');
