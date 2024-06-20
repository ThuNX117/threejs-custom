import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { AssetList } from "../../types/items";
import { ListAssets } from "../ListAssets";
import "./index.css";
import { ModelLoader } from "../ModelLoader";
import { Texture, TextureLoader } from "three";
import { ModelSelector } from "../ModelSelector";
import { useState } from "react";
import { ModelName } from "../../types/model";

export const Editor = () => {
  const items: AssetList = [
    { name: "archer", label: "archer", src: "/images/archer.jpg", id: 1 },
    { name: "joker", label: "joker", src: "/images/joker.jpg", id: 2 },
    { name: "madmax", label: "madmax", src: "/images/madmax.jpg", id: 3 },
    { name: "mesh", label: "mesh", src: "/images/mesh.jpg", id: 4 },
  ];
  const [selectedModel, setSelectedModel] = useState<ModelName>("box");

  const defaultMesh = useLoader(TextureLoader, "/images/mesh.jpg");
  const [colorMap, setColorMap] = useState<Texture>(defaultMesh);
  const selectMapConfig = ({ src }: { src: string }) => {
    // const _colorMap = useLoader(TextureLoader, src);
    const _colorMap = new TextureLoader().load(src);
    setColorMap(_colorMap);
  };
  console.log("111", { colorMap });
  return (
    <div className="editor">
      <p>Select model</p>
      <ModelSelector selectOption={selectedModel} onSelect={setSelectedModel} />
      <ListAssets items={items} onSelectColorMap={selectMapConfig} />
      <div className="control-preview">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <ModelLoader type={selectedModel} colorMap={colorMap} />
          <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
          <gridHelper />
        </Canvas>
      </div>
    </div>
  );
};
