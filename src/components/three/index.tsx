import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, Object3DEventMap } from "three";
import "./index.css";
export const ThreeViewer = () => {
  const gltf = useGLTF("/socks_white/scene.gltf");
  const obj = gltf.scene;

  return (
    <Canvas className="preview">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <OrbitalControls obj={obj} />
      <gridHelper />
    </Canvas>
  );
};

const OrbitalControls = ({ obj }: { obj: Group<Object3DEventMap> }) => {
  const camera = useThree().camera;
  useEffect(() => {
    camera.position.set(-500, -500, 500);
  });

  useFrame(() => {
    if (refMesh.current) {
      refMesh.current.position.set(-150, -100, 0); // Set the position of the model to the root
    }
  });
  const modelRef = useRef();
  const refMesh = useRef<any>();
  return (
    <>
      <mesh ref={refMesh}>
        <primitive object={obj} ref={modelRef} />
      </mesh>
      <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.1}
        zoomSpeed={10}
        camera={camera} // Adjust the zoom speed as desired
      />
    </>
  );
};
