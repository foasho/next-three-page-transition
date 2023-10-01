'use client'
import { forwardRef, MutableRefObject, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/utility/r3fHelper';

export const Common = ({ color }: { color: string }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color='blue' />
  </Suspense>
)

type ViewProps = {
  children: React.ReactNode;
  orbit?: boolean;
  style?: React.CSSProperties;
  className?: string;
};
const View = forwardRef((
  { children, orbit, style, className}: ViewProps
  , ref 
) => {

  const localRef = useRef<HTMLDivElement & { clientWidth: number; clientHeight: number }>(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} style={style} className={className} />
      <Three>
        <ViewImpl track={localRef as MutableRefObject<HTMLElement>}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View';

export { View };