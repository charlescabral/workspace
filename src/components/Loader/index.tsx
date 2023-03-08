import { useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { BrandIcon } from '@/ui/Icons'
import { LoaderProps } from './type'
import { Div } from './style'

export default function Loader({ onFinish }: LoaderProps) {
  const brand = useRef<HTMLDivElement>(null)
  const timeline = useMemo(() => gsap.timeline({ ease: 'elastic' }), [])

  const handleFinish = () => {
    timeline
      .to(brand.current, {
        scale: 4,
        opacity: 0,
        duration: 0.4
      })
      .eventCallback('onComplete', onFinish)
  }

  useIsomorphicLayoutEffect(() => {
    timeline
      .to(brand.current, { scale: 1.2 })
      .to(brand.current, { scale: 1 })
      .duration(1.2)
      .eventCallback('onComplete', handleFinish)
  })

  return (
    <>
      <Div ref={brand}>
        <BrandIcon size={68} fill={'hsl(207, 5.6%, 31.6%)'} />
      </Div>
    </>
  )
}
