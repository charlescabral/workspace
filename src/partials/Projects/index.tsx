import { useMemo, useRef } from 'react'
import { gsap } from 'gsap'

import { MarkdownProps, PartialsProps } from '@/types'
import { Container } from '@/ui/Structure'
import { ArrowLeft, ArrowRight } from '@/ui/Icons'
import { getMdData } from '@/lib'
import { useWindowSize, useBreakpoint } from '@/hooks'

import Typography from '@/ui/Typography'
import { Slider } from '@/components/Slider'

import Card from './Card'
import { ProjectsMain, ProjectsList, Action } from './style'
import { defaultMedia } from '@/styles/common'

export default function Projects({ projects }: PartialsProps) {
  const { width } = useWindowSize()
  const timeline = useMemo(() => gsap.timeline(), [])
  const arrowLeft = useRef<HTMLButtonElement>(null)
  const arrowRight = useRef<HTMLButtonElement>(null)
  const { isMobile } = useBreakpoint()

  const time = 0.2

  const enterHandler = () => {
    timeline
      .to(arrowLeft.current, {
        left: 44,
        duration: time
      })
      .to(
        arrowRight.current,
        {
          right: 44,
          duration: time
        },
        `-=${time}`
      )
      .play()
  }
  const leaveHandler = () => timeline.reverse(0.5)

  return (
    <ProjectsMain>
      <Container size="xs">
        <Typography as={'h3'} css={{ marginBottom: 0 }}>
          Alguns Projetos
        </Typography>
      </Container>

      <Slider
        emblaApi={{
          slidesToScroll: 1,
          containScroll: 'trimSnaps',
          align: 'center',
          loop: true,
          breakpoints: {
            [defaultMedia.sm]: { slidesToScroll: 2 }
          }
        }}
      >
        {({ emblaRef, scrollNext, scrollPrev }) => {
          return (
            <>
              <ProjectsList
                css={{ width }}
                onMouseEnter={enterHandler}
                onMouseLeave={leaveHandler}
              >
                <Slider.Slides ref={emblaRef} cols={2}>
                  {projects.map((projectProps: MarkdownProps, i: number) => {
                    return <Card key={i} {...getMdData(projectProps)} />
                  })}
                </Slider.Slides>
                <Action
                  color="neutral"
                  side="left"
                  icon="only"
                  shadow="md"
                  rounded
                  onClick={scrollPrev}
                  ref={arrowLeft}
                  css={{ visibility: isMobile ? 'hidden' : 'visible' }}
                >
                  <ArrowRight size={44} />
                </Action>
                <Action
                  color="neutral"
                  side="right"
                  icon="only"
                  shadow="md"
                  rounded
                  onClick={scrollNext}
                  ref={arrowRight}
                  css={{ visibility: isMobile ? 'hidden' : 'visible' }}
                >
                  <ArrowLeft size={44} />
                </Action>
              </ProjectsList>
            </>
          )
        }}
      </Slider>
    </ProjectsMain>
  )
}
