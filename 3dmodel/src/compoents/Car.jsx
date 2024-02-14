import React, { useRef } from "react";
import { Model } from "../3dModel/Bmw";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
const Car = () => {
  const controlsRef = useRef();

  return (
    <Canvas camera={{ position: [-10, 10, 10], fov: 64 }}>
      <ambientLight intensity={5} />
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        enableDamping={true}
        dampingFactor={0.1}
        rotateSpeed={0.5}
        zoomSpeed={1.2}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.5}
        args={[null, controlsRef]}
      />
      <Model />
    </Canvas>
  );
};

export default Car;
