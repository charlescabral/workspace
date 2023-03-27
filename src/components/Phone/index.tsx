import { useCallback, useRef, useState } from 'react'
import gsap from 'gsap'
import {
  useEventListener,
  useIsomorphicLayoutEffect,
  useIntersectionObserver
} from '@/hooks'
import { Coord, PhoneProps } from './type'
import { Scene, Case, Screen, Glass } from './style'

const options = {
  perspective: 1000,
  constrain: 20
}

const getAxis = ({ clientRect, clientX, clientY }: Coord) => {
  const { constrain } = options
  const { height, x } = clientRect
  const axisY = ((clientX - x - height / 4) / constrain) * 2
  const axisX = -(clientY - height) / constrain
  return { y: axisY, x: axisX }
}

export default function Phone({ children, css }: PhoneProps) {
  const [clientRect, setClientRect] = useState<DOMRect>()
  const scene = useRef<HTMLDivElement>(null)
  const phone = useRef<HTMLDivElement>(null)
  const glass = useRef<HTMLDivElement>(null)

  const entry = useIntersectionObserver(phone, {
    threshold: 1.0,
    root: scene.current
  })
  const isVisible = !!entry?.isIntersecting

  useIsomorphicLayoutEffect(() => {
    if (isVisible) {
      const rect = entry.boundingClientRect
      setClientRect(rect)
    }
  }, [isVisible])

  const mouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      if (clientRect) {
        const { perspective } = options
        const { x, y } = getAxis({ clientX, clientY, clientRect })

        gsap.to(phone.current, {
          scale: 1.05,
          rotateY: y,
          rotateX: x,
          ease: 'back.out',
          transformPerspective: perspective
        })

        gsap.to(glass.current, {
          ease: 'back.out',
          transformPerspective: perspective,
          backgroundPosition: `${400 - y}px ${x * 6}px`
        })
      }
    },
    [clientRect]
  )

  const mouseLeave = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      if (clientRect) {
        const { x, y } = getAxis({ clientX, clientY, clientRect })
        gsap.fromTo(
          phone.current,
          {
            rotationY: y,
            rotationX: x,
            ease: 'back.out'
          },
          {
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            ease: 'back.out'
          }
        )

        gsap.fromTo(
          glass.current,
          {
            ease: 'back.out',
            backgroundPosition: `${400 - y}px ${x * 4}px`
          },
          {
            ease: 'back.out',
            backgroundPosition: `400px 0px`
          }
        )
      }
    },
    [clientRect]
  )

  useEventListener('mousemove', mouseMove, scene)
  useEventListener('mouseleave', mouseLeave, scene)

  return (
    <Scene ref={scene} css={{ ...css }}>
      <Case ref={phone}>
        <Screen>
          <Glass ref={glass} />
          {children}
        </Screen>
      </Case>
    </Scene>
  )
}
