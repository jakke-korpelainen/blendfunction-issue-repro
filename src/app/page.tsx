"use client";

import * as THREE from "three";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Vignette,
  ToneMapping,
  N8AO,
} from "@react-three/postprocessing";

export default function Home() {
  return (
    <main className={styles.main}>
      <Canvas
        style={{ height: "auto", overflow: "hidden" }}
        camera={{
          position: [5, 20, 10],
          fov: 45,
          far: 1000,
          near: 0.1,
        }}
      >
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[10, 10, 10]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <ambientLight color={"white"} intensity={0.2} />
        <pointLight position={[15, 15, 0]} intensity={0.5} />
        <EffectComposer disableNormalPass>
          <N8AO aoRadius={1} intensity={2} />
          <Vignette eskil={false} offset={0.3} darkness={0.7} />
          <ToneMapping middleGrey={3} maxLuminance={32} />
        </EffectComposer>
      </Canvas>
    </main>
  );
}
