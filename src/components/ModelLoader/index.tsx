import { useGLTF } from "@react-three/drei";
import { OBJLoader } from "three-stdlib";
import * as THREE from "three";
import { ModelName } from "../../types/model";
type Props = {
  type: ModelName;
  colorMap: THREE.Texture;
};

export const ModelLoader = ({ colorMap, type }: Props) => {
  let obj;
  // const gltf = useGLTF("/mug/scene.gltf");
  const gltf = useGLTF("/mug/scene.gltf");
  obj = gltf.scene;
  obj.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const material = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
      material.map = colorMap;
    }
  });

  return (
    <mesh>
      <mesh>
        {type == "spray" && <primitive object={obj} />}
        {type == "mug" && <primitive object={obj} />}
        {type == "box" && <boxGeometry args={[5, 5, 5]} />}
        {type == "sphere" && <sphereGeometry args={[5, 5, 5]} />}
        {type == "cone" && <coneGeometry args={[5, 5, 5]} />}
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </mesh>
  );
};
