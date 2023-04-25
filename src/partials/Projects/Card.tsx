import { useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'

import Typography from '@/ui/Typography'
import { Col } from '@/ui/Structure'
import Button from '@/ui/Button'
import { LinkIcon, EyeIcon } from '@/ui/Icons'
import Texture from '@/components/Texture'
import { useStore } from '@/contexts/store'
import { useBreakpoint, useIsomorphicLayoutEffect } from '@/hooks'

import { MarkdownProps } from '@/types'
import Preview from './Preview'
import IconTool from './IconTool'
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

export default function Card(props: MarkdownProps) {
  const {
    data: {
      isOnline,
      isIntra,
      title,
      type,
      time,
      role,
      stack,
      color,
      link,
      image
    },
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
  const { isMobile } = useBreakpoint()

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
          duration: timeOut / 4
        },
        `-=${timeOut}`
      )
      .to(
        sample.current,
        {
          visibility: 'visible',
          right: -300,
          duration: timeOut
        },
        `-=${timeIn}`
      )
      .to(
        bg.current,
        {
          backgroundColor: isMobile ? color : '',
          ease: 'back.out',
          scale: 1,
          duration: timeOut
        },
        `-=${timeOut}`
      )
      .to(
        imageCard.current,
        {
          filter: isMobile ? '' : 'grayscale(1)',
          opacity: isMobile ? 1 : 0.6,
          right: -40,
          bottom: isMobile ? 120 : -10,
          duration: timeOut,
          ease: 'back.out'
        },
        `-=${timeOut}`
      )
      .to(
        infos.current,
        {
          width: 290,
          height: 158,
          bottom: isMobile ? 0 : 10,
          left: isMobile ? 0 : 10,
          duration: timeOut,
          ease: 'back.out'
        },
        `-=${timeOut}`
      )
  }

  const actived = () => {
    timeline
      .to(bg.current, { scale: 1.1, duration: timeIn })
      .to(
        imageCard.current,
        {
          filter: 'grayscale(0)',
          bottom: -100,
          duration: timeIn,
          ease: 'back.in'
        },
        `-=${timeIn}`
      )
      .to(
        infos.current,
        {
          width: '100%',
          height: '100%',
          bottom: isMobile ? 0 : -24,
          left: isMobile ? 0 : -24,
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
      .to(
        sample.current,
        {
          right: 0,
          visibility: 'visible',
          duration: timeIn,
          ease: 'power2.in'
        },
        `-=${timeIn / 2}`
      )
      .to(action.current, {
        bottom: -1,
        ease: 'circ.out',
        duration: timeIn / 2
      })
  }

  const hovered = () => {
    timeline
      .to(bg.current, {
        backgroundColor: color,
        scale: 1.05,
        ease: 'power2.in',
        duration: timeIn / 2
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
        `-=${timeIn / 2}`
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
    !isActive && !isMobile && hovered()
  }

  const mouseLeave = () => {
    setDetail(false)
    !isActive && !isMobile && inactived()
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

  useIsomorphicLayoutEffect(() => {
    isActive ? actived() : inactived()
  }, [isActive])

  return (
    <ProjectItem ref={project}>
      <Project
        ref={bg}
        css={isMobile && { backgroundColor: color }}
        actived={isActive}
        onClick={openProject}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <Texture />

        <ProjectImg
          ref={imageCard}
          alt={title ? title : ''}
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
            direction={isMobile ? 'col' : 'row'}
          >
            <Details isOpen={isActive} direction="col">
              <ShortDetail direction="col">
                <Typography as="h5" color="contrasty">
                  {title}
                </Typography>
                <Typography as="p" size="xs" weight="bold" color="contrasty">
                  {role}
                </Typography>
                <Typography as="p" size="xs">
                  {type}
                </Typography>
                <Typography as="p" size="xs" weight="bold" color="contrasty">
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
                  isLink={!isIntra}
                  color="white"
                  weight="b"
                  icon="l"
                  target="blank"
                  bordered
                  rounded
                  flat
                  href={link}
                >
                  {isIntra ? <EyeIcon size={24} /> : <LinkIcon size={24} />}
                  {isIntra ? 'Intranet' : isOnline ? 'SITE' : 'Archive'}
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
