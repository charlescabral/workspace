import { useRef } from 'react'
import { gsap } from 'gsap'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { useTransitionContext } from '@/contexts/animation'
import { InOutProps } from './types'
import { styled } from '@/styles'

const Div = styled('div', { opacity: 0 })

export default function FadeInOut({ children }: InOutProps) {
  const { timeline } = useTransitionContext()
  const ref = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        opacity: 1,
        duration: 1.4
      })
      if (timeline) {
        timeline.add(
          [
            gsap.to(ref.current, {
              opacity: 0,
              duration: 0.4
            })
          ],
          0
        )
      }
    }
  }, [children])

  return <Div ref={ref}>{children}</Div>
}
