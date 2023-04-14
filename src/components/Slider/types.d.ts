import { EmblaOptionsType } from 'embla-carousel-react'

export type EmblaProps = {
  emblaRef: RefAttributes
  slidesToScroll?: number
  scrollPrev?: (index: number) => void
  scrollNext?: (index: number) => void
  scrollTo?: (index: number) => void
}

export type SliderProps = {
  children?: (props: EmblaProps) => ReactNode
  emblaApi: EmblaOptionsType
  fluid?: boolean
}
