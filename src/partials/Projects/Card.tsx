import { useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'

import Typography from '@/ui/Typography'
import Texture from '@/components/Texture'
import { useStore } from '@/contexts/store'

import { MarkdownProps } from '@/types'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { Col } from '@/ui/Structure'
import {
  ProjectItem,
  Project,
  ProjectImg,
  Infos,
  Details,
  ShortDetail,
  FullDetails,
  Sample,
  ActionBar,
  Tools,
  Description
} from './style'
import Button from '@/ui/Button'
import Preview from './Preview'
import IconTool from './IconTool'

export default function Card(props: MarkdownProps) {
  const {
    data: { title, type, time, role, stack, color, link, image },
    html
  } = props
  const [isActive, setDetail] = useState<boolean>(false)
  const timeline = useMemo(() => gsap.timeline(), [])
  const project = useRef<HTMLDivElement>(null)
  const bg = useRef<HTMLDivElement>(null)
  const preview = useRef<HTMLDivElement>(null)
  const sample = useRef<HTMLDivElement>(null)
  const details = useRef<HTMLDivElement>(null)
  const action = useRef<HTMLDivElement>(null)
  const imageCard = useRef<HTMLImageElement>(null)
  const infos = useRef<HTMLDivElement>(null)
  const { storeContext, setStore } = useStore()

  const timeIn = 0.25
  const timeOut = 0.25

  const inactived = () => {
    timeline
      .clear()
      .to(action.current, {
        bottom: -100,
        ease: 'back.in',
        duration: timeOut
      })
      .to(
        details.current,
        {
          opacity: 0,
          visibility: 'hidden',
          duration: timeOut
        },
        `-=${timeOut}`
      )
      .to(
        sample.current,
        {
          right: -400,
          duration: timeOut
        },
        `-=${timeOut}`
      )
      .to(
        bg.current,
        {
          backgroundColor: '',
          ease: 'back.out',
          scale: 1,
          duration: timeOut
        },
        `-=${timeOut}`
      )
      .to(
        imageCard.current,
        {
          filter: 'grayscale(1)',
          opacity: 0.6,
          right: -40,
          bottom: -10,
          duration: timeOut,
          ease: 'back.out'
        },
        `-=${timeOut}`
      )
      .to(
        infos.current,
        {
          width: 290,
          height: 150,
          bottom: 10,
          left: 10,
          duration: timeOut,
          ease: 'back.out'
        },
        `-=${timeOut}`
      )
  }

  const actived = () => {
    timeline
      .to(bg.current, { scale: 1.2, duration: timeIn })
      .to(
        imageCard.current,
        {
          filter: 'grayscale(0)',
          opacity: 1,
          bottom: -100,
          duration: timeIn,
          ease: 'back.out'
        },
        `-=${timeIn}`
      )
      .to(
        infos.current,
        {
          width: '100%',
          height: '100%',
          bottom: -24,
          left: -24,
          duration: timeIn,
          ease: 'back.in'
        },
        `-=${timeIn}`
      )
      .to(
        bg.current,
        {
          backgroundColor: '',
          duration: timeIn,
          ease: 'back.out'
        },
        `-=${timeIn}`
      )
      .to(
        details.current,
        {
          opacity: 1,
          visibility: 'visible',
          duration: timeIn,
          ease: 'back.out'
        },
        `-=${timeIn}`
      )
      .to(sample.current, {
        right: 0,
        duration: timeIn,
        ease: 'power2.in'
      })
      .to(action.current, {
        bottom: -1,
        ease: 'linear.in',
        duration: timeIn
      })
  }

  const hovered = () => {
    const teste =
      !!project.current &&
      !!bg.current &&
      !!sample.current &&
      !!details.current &&
      !!action.current &&
      !!imageCard.current &&
      !!infos.current
    teste &&
      timeline
        .to(bg.current, {
          backgroundColor: color,
          scale: 1.05,
          ease: 'power2.in',
          duration: timeIn
        })
        .to(
          imageCard.current,
          {
            filter: 'grayscale(0)',
            opacity: 1,
            right: -10,
            duration: timeIn,
            ease: 'back.out'
          },
          `-=${timeIn}`
        )
        .to(
          infos.current,
          {
            bottom: 20,
            left: 20,
            duration: timeIn,
            ease: 'back.out'
          },
          `-=${timeIn}`
        )
  }

  const mouseEnter = () => {
    !isActive && hovered()
  }

  const mouseLeave = () => {
    setDetail(false)
    !isActive && inactived()
  }

  const openProject = () =>
    setStore(() => {
      setDetail(true)
      storeContext.modal = {
        isActive: true,
        key: 'project',
        content: props
      }
      return storeContext
    })

  // const refsReady = (refs: any[]) => {
  //   refs.map((ref) => {
  //     // console.log(ref)
  //   })
  // }

  useIsomorphicLayoutEffect(() => {
    // const teste =
    //   !!project.current &&
    //   !!bg.current &&
    //   !!sample.current &&
    //   !!details.current &&
    //   !!action.current &&
    //   !!imageCard.current &&
    //   !!infos.current
    // refsReady([project, bg, preview, sample, details, action, imageCard, infos])
    isActive ? actived() : inactived()
  }, [
    isActive,
    project,
    bg,
    preview,
    sample,
    details,
    action,
    imageCard,
    infos
  ])

  return (
    <ProjectItem ref={project}>
      <Project
        ref={bg}
        actived={isActive}
        onClick={openProject}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <Texture />

        <ProjectImg
          ref={imageCard}
          alt={title}
          width={400}
          height={240}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          src={
            image.card ? `/img/projects/${image.card}` : `/img/placeholder.jpg`
          }
        />
        <Infos ref={infos} direction={isActive ? 'row' : 'col'}>
          <Col
            display={!isActive ? 'b' : 'f'}
            css={{ overflow: 'hidden', minHeight: '100%' }}
          >
            <Details isOpen={isActive} direction="col">
              <ShortDetail direction="col">
                <Typography as="h5" color="contrasty">
                  {title}
                </Typography>
                <Typography as="p" size="xs">
                  {type}
                </Typography>
                <Typography as="p" size="xs">
                  {role}
                </Typography>
                <Typography as="p" size="xs">
                  {time}
                </Typography>
              </ShortDetail>
              <FullDetails ref={details} direction="row">
                <Description
                  dangerouslySetInnerHTML={{ __html: html }}
                  display="b"
                />
              </FullDetails>
            </Details>
            <Sample ref={sample}>
              <Preview {...image} ref={preview} />
              <ActionBar align="middle" ref={action}>
                <Texture />
                <Button
                  size="xs"
                  color="white"
                  weight="b"
                  rounded
                  bordered
                  href={link}
                >
                  Ver Site
                </Button>
                <Tools>
                  {stack &&
                    stack.map((tool, i) => <IconTool icon={tool} key={i} />)}
                </Tools>
              </ActionBar>
            </Sample>
          </Col>
        </Infos>
      </Project>
    </ProjectItem>
  )
}
