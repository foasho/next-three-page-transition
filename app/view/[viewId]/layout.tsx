import { AnimationView } from "./_components/AnimationView"
import { SceneLayout } from '@/components/SceneLayout'

export default function ViewLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <SceneLayout>
      <AnimationView>
        {children}
      </AnimationView>
    </SceneLayout>
  )
}
