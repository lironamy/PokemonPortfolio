import React from "react";
import { Avatar } from "../components";
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {Overlay} from "./Overlay";


const Model = () => {
  
    return (
      <>
        <section id="about">
          <div className="w-full h-screen canvas-container">
            <Canvas camera={{ position: [0, 0, 12], fov :50,  }}>
            <ScrollControls pages={2} damping={0.25}>
            <Overlay />
            <Avatar />
            </ScrollControls>
            </Canvas>
          </div>
          </section>
      </>
    );
  }
  
  export default Model ;
