/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { useTransitionContext } from '@/contexts/animation'
import { InOutProps } from './types'
import { styled } from '@/styles'

const AnimateInOut = ({
  children,
  as,
  from,
  to,
  set,
  skipOut = false
}: InOutProps) => {
  const { timeline } = useTransitionContext()
  const ref = useRef<HTMLElement>(null)

  const Element = styled(as ? as : 'div', {})

  useIsomorphicLayoutEffect(() => {
    !!set && gsap.set(ref.current, { ...set })

    gsap.to(ref.current, { ...to })
    if (timeline) timeline.add([gsap.to(ref.current, { ...from })], 0)
  }, [children])

  return <Element ref={ref}>{children}</Element>
}

export default React.memo(AnimateInOut)
