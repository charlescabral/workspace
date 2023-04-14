import { PropsWithChildren, ReactNode, forwardRef, useCallback } from 'react'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import { Wrapper, Container, Slide } from './style'
import { EmblaProps, SliderProps } from './types'

interface RefProps extends PropsWithChildren {
  fluid?: boolean
  axisY?: boolean
  cols?: number
}

const Slides = forwardRef<HTMLDivElement, RefProps>(
  ({ children, fluid, axisY, cols }: RefProps, ref) => (
    <Wrapper ref={ref} fluid={fluid}>
      <Container fluid={fluid} axisY={axisY}>
        {[children].flat().map((child: ReactNode, i: number) => (
          <Slide key={i} cols={cols}>
            {child}
          </Slide>
        ))}
      </Container>
    </Wrapper>
  )
)
Slides.displayName = 'Slides'

const Slider = ({ children, emblaApi }: SliderProps) => {
  const [emblaRef, embla]: UseEmblaCarouselType = useEmblaCarousel(emblaApi)

  const scrollTo = useCallback(
    (index: number) => {
      embla && embla.scrollTo(index)
    },
    [embla]
  )

  const scrollPrev = useCallback(() => {
    embla && embla.scrollPrev()
  }, [embla])

  const scrollNext = useCallback(() => {
    embla && embla.scrollNext()
  }, [embla])

  return children
    ? children({
        emblaRef,
        scrollTo,
        scrollPrev,
        scrollNext
      } as EmblaProps)
    : null
}

Slider.Slides = Slides

export { Slider }
export type { EmblaProps, SliderProps }
