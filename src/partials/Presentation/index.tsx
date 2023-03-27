/* eslint-disable react/no-children-prop */

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { Presentation, Ball, Shadow } from './style'

export default function Projects() {
  const ball = useRef<HTMLDivElement>(null)
  const shadow = useRef<HTMLDivElement>(null)

  const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatRefresh: true })
  // const clear = useCallback(() => tl.clear(), [tl])

  useIsomorphicLayoutEffect(() => {
    tl.add('start')
      .to(ball.current, {
        duration: 0.53,
        y: 100,
        ease: 'circ.in'
      })
      .to(
        ball.current,
        {
          duration: 0.1,
          scaleY: 0.6,
          transformOrigin: 'center bottom',
          borderBottomLeftRadius: '50%',
          borderBottomRightRadius: '50%',
          ease: 'circ.out'
        },
        '-=.05'
      )
      .to(
        shadow.current,
        {
          duration: 0.4,
          width: 90,
          opacity: 0.7,
          ease: 'circ.in'
        },
        'start'
      )
    return () => tl.clear()
  }, [])

  return (
    // <ProjectsMain>

    <Presentation>
      <Ball ref={ball} />
      <Shadow ref={shadow} />
    </Presentation>
    // </ProjectsMain>
  )
}
