import { useMemo, useRef } from 'react'
import { gsap } from 'gsap'

import { MarkdownProps, PartialsProps } from '@/types'
import { Container } from '@/ui/Structure'
import { getMdData } from '@/lib'
import { useIsomorphicLayoutEffect, useWindowSize } from '@/hooks'

import Typography from '@/ui/Typography'
import { Slider } from '@/components/Slider'

import Card from './Card'
import { ProjectsMain, ProjectsList, Action } from './style'
import { ArrowLeft, ArrowRight } from '@/ui/Icons'

export default function Projects({ projects }: PartialsProps) {
  const { width } = useWindowSize()
  const timeline = useMemo(() => gsap.timeline(), [])
  const arrowLeft = useRef<HTMLButtonElement>(null)
  // const arrowLeftT = useMemo()

  const arrowRight = useRef<HTMLButtonElement>(null)

  // const arrowAnimation = () => {
  //   timeline
  //     .clear()
  //     .to(arrowLeft.current, {
  //       left: 44,
  //       duration: 0.25
  //     })
  //     .to(
  //       arrowRight.current,
  //       {
  //         right: 44,
  //         duration: 0.25
  //       },
  //       '-=0.25'
  //     )
  // }

  useIsomorphicLayoutEffect(() => {
    timeline.to(arrowLeft.current, {
      duration: 0.5,
      left: 44,
      paused: true
    })
  }, [arrowLeft.current])

  const enterHandler = () => {
    // timeline.clear().play()
  }
  const leaveHandler = () => {
    // timeline.clear().reverse()
  }

  return (
    <ProjectsMain>
      <Container size="xs">
        <Typography as={'h3'} css={{ marginBottom: 0 }}>
          Alguns Projetos
        </Typography>
      </Container>

      <Slider
        emblaApi={{
          slidesToScroll: 2,
          containScroll: 'trimSnaps',
          align: 'center',
          loop: true
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
                  {projects.map((projectProps: MarkdownProps, i: number) => (
                    <Card key={i} {...getMdData(projectProps)} />
                  ))}
                </Slider.Slides>
                <Action
                  color="neutral"
                  side="left"
                  icon="only"
                  shadow="md"
                  rounded
                  onClick={scrollPrev}
                  ref={arrowLeft}
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
