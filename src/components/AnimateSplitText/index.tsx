import { useRef, useState } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'

import { useIsomorphicLayoutEffect } from '@/hooks'
import { AnimateSplitTextProps } from './type'
import { Text } from './style'

export default function AnimateSplitText({ text, css }: AnimateSplitTextProps) {
  const textRef = useRef<HTMLDivElement>(null)
  const [splitedText, setsplitedText] = useState<SplitType>()

  useIsomorphicLayoutEffect(() => {
    textRef.current && setsplitedText(new SplitType(textRef.current))
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (splitedText) {
      gsap.set(splitedText.chars, {
        y: 100,
        opacity: 0,
        duration: 0.1
      })
      gsap.to(splitedText.chars, {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 1,
        opacity: 1,
        ease: 'back.out'
      })
    }
  }, [splitedText])

  return (
    <Text css={{ ...css }} ref={textRef}>
      {text}
    </Text>
  )
}
