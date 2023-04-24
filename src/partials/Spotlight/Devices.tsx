import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

import Desktop from '@/components/Desktop'
import { Slider } from '@/components/Slider'
import Phone from '@/components/Phone'
import { useBreakpoint } from '@/hooks'
import { defaultMedia } from '@/styles/common'

import { Jobs } from './style'
import { PartialsProps } from '@/types'
import { partialValue } from '@/lib'

export default function Devices({ jobs }: PartialsProps) {
  const featuredProjects = jobs.map((job) => partialValue(job))
  const [slideCurrent, setSlide] = useState<number>(0)
  const { isMobile } = useBreakpoint()
  const [desktopRef, emblaDesk] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    loop: true
  })
  const [phoneRef, emblaPhone] = useEmblaCarousel({
    axis: 'x',
    containScroll: 'trimSnaps',
    loop: true,
    breakpoints: {
      [defaultMedia.sm]: {
        axis: 'y',
        containScroll: 'keepSnaps'
      }
    }
  })

  useEffect(() => {
    if (!emblaDesk || !emblaPhone) return
    emblaDesk.on('select', () => setSlide(emblaDesk.selectedScrollSnap()))
    emblaDesk.on('reInit', () => setSlide(emblaDesk.selectedScrollSnap()))
    emblaPhone.on('select', () => setSlide(emblaPhone.selectedScrollSnap()))
    emblaPhone.on('reInit', () => setSlide(emblaPhone.selectedScrollSnap()))
  }, [emblaDesk, emblaPhone])

  useEffect(() => {
    if (!emblaDesk || !emblaPhone) return
    emblaPhone.scrollTo(slideCurrent)
    emblaDesk.scrollTo(slideCurrent)
  }, [slideCurrent, emblaDesk, emblaPhone])

  const prev = useCallback(() => {
    emblaDesk && emblaDesk.scrollPrev()
  }, [emblaDesk])

  const next = useCallback(() => {
    emblaDesk && emblaDesk.scrollNext()
  }, [emblaDesk])

  return (
    <Jobs>
      <Desktop prev={prev} next={next}>
        <Slider.Slides fluid ref={desktopRef}>
          {featuredProjects.map(
            (
              {
                data: {
                  title,
                  image: { desktop }
                }
              },
              i
            ) => {
              return (
                <Image
                  key={i}
                  src={`/img/projects/${desktop}`}
                  alt={title ? title : ''}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )
            }
          )}
        </Slider.Slides>
      </Desktop>
      <Phone
        css={{
          '@md': {
            position: 'absolute',
            left: 'calc(-$16)',
            bottom: 'calc(-$16)'
          }
        }}
      >
        <Slider.Slides fluid axisY={!isMobile} ref={phoneRef}>
          {featuredProjects.map(
            (
              {
                data: {
                  title,
                  image: { phone }
                }
              },
              i
            ) => {
              return (
                <Image
                  key={i}
                  src={`/img/projects/${phone}`}
                  alt={title ? title : ''}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )
            }
          )}
        </Slider.Slides>
      </Phone>
    </Jobs>
  )
}
