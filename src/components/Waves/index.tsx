import { useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { styled } from '@/styles'
import { fadeIn } from '@/styles/utils'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { CSS } from '@stitches/react'

type WavesProps = {
  duration: number
  color: string
  size: string | number
  css: CSS
}

export default function Waves({ duration, color, size, css }: WavesProps) {
  const tl = useMemo(
    () => gsap.timeline({ repeat: -1, repeatRefresh: true }),
    []
  )
  const Overflow = styled('div', {
    overflow: 'hidden'
  })

  const SVG = styled('svg', {
    rotate: '145deg',
    position: 'relative',
    scale: 4,
    right: '0',
    opacity: 0.9,
    bottom: '-140%',
    transition: '$default',
    animation: `${fadeIn} 300ms`
  })

  const Path = styled('path', {
    transition: '$default'
  })

  const w_1 = useRef<SVGPathElement>(null)
  const w_2 = useRef<SVGPathElement>(null)
  const w_3 = useRef<SVGPathElement>(null)

  useIsomorphicLayoutEffect(() => {
    tl.add('start')
      .to(w_1.current, {
        duration,
        rotation: '+=300',
        svgOrigin: '50 50',
        ease: 'linear.in'
      })
      .to(
        w_2.current,
        {
          duration,
          rotation: '+=200',
          svgOrigin: '50 50',
          ease: 'linear.in'
        },
        'start'
      )
      .to(
        w_3.current,
        {
          duration,
          rotation: '+=100',
          svgOrigin: '50 50',
          ease: 'linear.in'
        },
        'start'
      )
  }, [])

  return (
    <Overflow css={{ size, ...css }}>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={size}
        height={size}
      >
        <defs>
          <linearGradient id="gradient" x1="0" x2="1" y1="1" y2="0">
            <stop stopColor={color} offset="0%" />
            <stop stopColor="rgba(255, 255, 255, 0)" offset="100%" />
          </linearGradient>
        </defs>
        <Path
          ref={w_1}
          fill="url(#gradient)"
          d="M21.5,-35.2C28.1,-33.4,33.7,-28.1,38.1,-21.6C42.4,-15.2,45.3,-7.6,43.9,-0.8C42.6,6,36.9,12,32.4,18.2C28,24.4,24.7,30.8,19.5,33.6C14.3,36.3,7.2,35.4,0.7,34.2C-5.7,32.9,-11.4,31.3,-18.5,29.7C-25.5,28,-33.9,26.2,-37.5,21.2C-41,16.3,-39.7,8.1,-38,1C-36.4,-6.2,-34.3,-12.4,-31.3,-18.2C-28.2,-24,-24.2,-29.4,-18.8,-31.9C-13.4,-34.4,-6.7,-34,0.4,-34.6C7.5,-35.3,14.9,-37,21.5,-35.2Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
        />
        <Path
          ref={w_2}
          fill="url(#gradient)"
          d="M13.7,-23.8C18.2,-21.2,22.4,-18.3,24.1,-14.3C25.7,-10.3,24.7,-5.1,27.1,1.4C29.5,7.9,35.2,15.8,34.6,21.5C33.9,27.2,26.8,30.6,20,34C13.1,37.3,6.6,40.5,1.1,38.5C-4.3,36.5,-8.5,29.3,-15,25.8C-21.6,22.3,-30.3,22.4,-33.6,18.7C-36.9,15,-34.7,7.5,-33,1C-31.3,-5.6,-30.1,-11.1,-28.8,-18.3C-27.5,-25.4,-26.1,-34.2,-21.3,-36.6C-16.5,-39,-8.3,-35.1,-1.8,-32C4.6,-28.9,9.3,-26.5,13.7,-23.8Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
        />
        <Path
          ref={w_3}
          fill="url(#gradient)"
          d="M13.7,-23.8C18.2,-21.2,22.4,-18.3,24.1,-14.3C25.7,-10.3,24.7,-5.1,27.1,1.4C29.5,7.9,35.2,15.8,34.6,21.5C33.9,27.2,26.8,30.6,20,34C13.1,37.3,6.6,40.5,1.1,38.5C-4.3,36.5,-8.5,29.3,-15,25.8C-21.6,22.3,-30.3,22.4,-33.6,18.7C-36.9,15,-34.7,7.5,-33,1C-31.3,-5.6,-30.1,-11.1,-28.8,-18.3C-27.5,-25.4,-26.1,-34.2,-21.3,-36.6C-16.5,-39,-8.3,-35.1,-1.8,-32C4.6,-28.9,9.3,-26.5,13.7,-23.8Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
        />
      </SVG>
    </Overflow>
  )
}
