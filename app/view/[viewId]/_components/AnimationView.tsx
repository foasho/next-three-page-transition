"use client"

import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

const View  = dynamic(() => import("@/components/View").then(
  (mod) => mod.View
),
{ 
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
}
) as React.FC<any>;

const Common = dynamic(() => import("@/components/View").then(
  (mod) => mod.Common
),
{ 
  ssr: false
}
) as React.FC<any>;

/**
 * ChildrenにはR3Fのコンポーネントを入れる
 */
export const AnimationView = ({ children }: { children: React.ReactNode }) => {

  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    // TODO: ここでアニメーションを開始する
    console.log("url path: ", pathname);

    if (!mounted) {
      setMounted(true);
    }
  }, [pathname]);

  return (
    <View className="w-screen h-screen">
      <Suspense fallback={null}>
        {mounted && <>{children}</>}
      </Suspense>
      <OrbitControls />
      <Common color="hotpink" />
    </View>
  )
}
