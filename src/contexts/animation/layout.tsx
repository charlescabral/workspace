import { useState, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { useTransitionContext } from '@/contexts/animation'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { TransitionProviderProps } from './type'

export default function TransitionLayout({
  children
}: TransitionProviderProps) {
  const [body, setBody] = useState<ReactNode>(children)
  const { timeline } = useTransitionContext()
  const router = useRouter()

  useIsomorphicLayoutEffect(() => {
    if (children !== body && !!timeline) {
      if (timeline.duration() === 0) {
        setBody(children)
      } else {
        timeline.play().eventCallback('onComplete', () => {
          timeline.seek(timeline._dur).pause().clear()
          setBody(children)
        })
      }
    }
  }, [router])

  return <>{body}</>
}
