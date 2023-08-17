import React, { useEffect, useState } from "react";
import { Ash, Pikachu } from "./canvas";
import { Canvas } from "@react-three/fiber";
import {WorksOverlay}  from "./WorksOverlay";
import { ScrollControls } from "@react-three/drei";


const Works = () => {
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <div className="w-full h-screen canvas-container">
        <Canvas camera={{position: [0,0,10]}}>
          <ScrollControls pages={4} damping={0.25}>
          <Pikachu position={[-2, 0, 0]} />
          <WorksOverlay position={[0, 0, 0]} />
          <Ash position={[2.5, 0, 0]} />
          <ambientLight intensity={0.5} />
          </ScrollControls>
        </Canvas>
      </div>
    </section>
  );
};

export default Works;
