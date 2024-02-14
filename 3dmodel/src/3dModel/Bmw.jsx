import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const [doorColor, setDoorColor] = useState(""); // Initial color is red
  const [wheelcolor, setwheelcolor] = useState(""); // Initial state is closed
  const [rimcolor, setrimcolor] = useState("#3b3b3b"); // Initial
  const [isDoorOpen, setIsDoorOpen] = useState(false); // Initial state is closed
  const { nodes, materials } = useGLTF("./blenderStuff/editedbmw.glb");
  const doorRef = useRef();

  const [colorMessage, setColorMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("wss://js-server-unxz.onrender.com/"); // Replace with your WebSocket server URL

    socket.onopen = () => {
      console.log("WebSocket connection established.");
    };

    socket.onmessage = (event) => {
      const blob = event.data;
      const fileReader = new FileReader();
      fileReader.onload = function () {
        const text = fileReader.result;
        console.log(text, "data"); // This should log the JSON string
        setColorMessage(text);
      };
      fileReader.readAsText(blob);
    };

    return () => {
      socket.close();
    };
  }, []);

  // WebSocket component doesn't render anything

  // Function to handle color change
  const handleColorChange = () => {
    if (parseFloat(colorMessage) === 0) {
      // Convert to number before comparison
      console.log(colorMessage, "red");
      setDoorColor("#ff0000");
      setwheelcolor("#ff0000");
    } else {
      console.log(colorMessage, "green");
      setwheelcolor("black");
      setrimcolor("#3b3b3b");
      setDoorColor(""); // Change color to green
    }
  };

  // Function to handle opening/closing door
  const handleDoorClick = () => {
    setIsDoorOpen(!isDoorOpen); // Toggle door state
  };

  // Rotate door mesh when door state changes
  useFrame(() => {
    if (doorRef.current) {
      doorRef.current.rotation.y = isDoorOpen ? -Math.PI / 2 : 0;
    }
  });
  useEffect(() => {
    handleColorChange();
  }, [colorMessage]);
  return (
    <group {...props} dispose={null}>
      <group position={[-286.37, 0, 164.75]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Meshesblack161Mtl}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.Meshespiggrill1Mtl}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Mesheszx1Mtl}
        />
        {/* Clickable mesh acting as a button to change door color */}
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.Mesheszx1Mtl.clone()}
          material-color={doorColor}
          // onClick={handleColorChange}
        />
        {/* Mesh acting as a button to open/close door */}
        <mesh
          ref={doorRef}
          geometry={nodes.Object_8.geometry}
          material={materials.Mesheswhite41Mtl}
          onClick={handleDoorClick}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.Meshesraidiator1Mtl}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.Meshesinterior71Mtl}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.Meshespillars1Mtl}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.Meshespillars1Mtl}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.Meshesheadlight51Mtl}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.Mesheslogo11Mtl}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.Meshesdash11Mtl}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.Mesheschrome51Mtl}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.Meshesredlight1Mtl}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.Meshesinterior231Mtl}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.Meshesinterior181Mtl}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.Mesheslight51Mtl}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.Meshesengine51Mtl}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.Meshesled11Mtl}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials.Meshesbody151Mtl}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.Meshesblack151Mtl}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials.Mesheswindows1Mtl}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials.Mesheslogo31Mtl}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials.Meshesled111Mtl}
        />
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials.Mesheslivery1Mtl}
        />
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials.Meshestail71Mtl}
        />
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials.Meshesff41Mtl}
        />
      </group>
      <group position={[-286.37, 0, 164.75]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials.Caliper1Mtl}
        />
        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials.Meshesm8rim1Mtl}
        />

        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials.Meshesm8rim1Mtl.clone()}
          material-color={rimcolor}
          // onClick={handleColorChange}
        />
        {/* <mesh geometry={nodes.Object_34.geometry} material={materials.Meshesm8rim0011Mtl} /> */}
        <mesh
          geometry={nodes.Object_34.geometry}
          material={materials.Meshesm8rim0011Mtl.clone()}
          material-color={wheelcolor}
          // onClick={handleColorChange}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./editedbmw/bmw.glb");
