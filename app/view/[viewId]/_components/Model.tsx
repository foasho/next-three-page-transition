"use client";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

export const Model = ({ url }: { url: string }) => {

  const { scene } = useGLTF(url);

  return (
    <Suspense fallback={null}>
      <group>
        <primitive object={scene} />
      </group>
    </Suspense>
  )
}