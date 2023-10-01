'use client'

import { MutableRefObject, useRef } from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

const SceneLayout = ({ children }: {
  children: React.ReactNode
}) => {

  const ref = useRef<HTMLDivElement & { clientWidth: number; clientHeight: number }>(null);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: ' 100%',
        height: '100%',
        overflow: 'auto',
        touchAction: 'auto',
      }}
    >
      {children}
      <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref as MutableRefObject<HTMLElement>}
        eventPrefix='client'
      >
      </Scene>
    </div>
  )
}

export { SceneLayout };