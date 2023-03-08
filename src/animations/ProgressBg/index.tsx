import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { gsap } from 'gsap'
import { Wrap, Bg } from './style'
import { useTransitionContext } from '@/contexts/animation'
import { useIsomorphicLayoutEffect } from '@/hooks'

export default function ProgressBg() {
  const router = useRouter()
  const { timer } = useTransitionContext()
  const wrap = useRef<HTMLDivElement>(null)
  const bg = useRef<HTMLDivElement>(null)

  const [timeline] = useState<GSAPTimeline>(() => gsap.timeline())

  useIsomorphicLayoutEffect(() => {
    timeline
      .addLabel('first-step')
      .to(bg.current, { opacity: 1, duration: 0.1 })
  }, [router])

  useIsomorphicLayoutEffect(() => {
    timer < 1 &&
      timeline.add([gsap.to(bg.current, { scaleX: timer, duration: 0.01 })])
    timer == 1 &&
      timeline
        .to(bg.current, { scaleX: timer, duration: 0.4 })
        .addLabel('last-step')
        .to(bg.current, { opacity: 1, duration: 0.1 }, 'last-step')
        .to(bg.current, { x: '100%', scaleX: 0, duration: 0.4 }, 'last-step')
        .to(bg.current, { opacity: 0, duration: 0.1 })
        .to(bg.current, { x: 0, duration: 0.1 })
  }, [timer])

  return (
    <Wrap ref={wrap}>
      <Bg ref={bg} />
    </Wrap>
  )
}
