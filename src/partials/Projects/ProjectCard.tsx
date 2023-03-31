import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import Typography from '@/components/Typography'
import { MarkdownProps } from '@/types'
import { ProjectItem, Project, ProjectImg, Infos } from './style'
import Texture from '@/components/Texture'
import Waves from '@/components/Waves'

export default function ProjectCard({
  data: {
    title,
    type,
    time,
    color,
    image: { card }
  }
}: MarkdownProps) {
  const [isHover, setHover] = useState<boolean>(false)
  const project = useRef<HTMLDivElement>(null)
  const bg = useRef<HTMLDivElement>(null)
  const image = useRef<HTMLImageElement>(null)
  const infos = useRef<HTMLDivElement>(null)

  const mouseEnter = () => {
    setHover(true)
    gsap.to(bg.current, {
      backgroundColor: color,
      ease: 'power2.in',
      duration: 0.1
    })
    gsap.to(image.current, {
      filter: 'grayscale(0)',
      right: -10,
      duration: 0.25
    })
    gsap.to(infos.current, {
      bottom: 30,
      duration: 0.25
    })
  }
  const mouseLeave = () => {
    setHover(false)
    gsap.to(bg.current, {
      backgroundColor: '',
      ease: 'circ.out',
      duration: 0.25
    })
    gsap.to(image.current, {
      filter: 'grayscale(1)',
      right: -40,
      duration: 0.25,
      ease: 'circ.out'
    })
    gsap.to(infos.current, {
      bottom: 10,
      duration: 0.25
    })
  }

  return (
    <ProjectItem
      ref={project}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <Project ref={bg}>
        {isHover && (
          <Waves
            size={'100%'}
            duration={10}
            color="white"
            css={{
              opacity: 0.6,
              mixBlendMode: 'overflow',
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              zIndex: '0'
            }}
          />
        )}
        <Texture />
        <ProjectImg
          ref={image}
          alt={title}
          width={500}
          height={320}
          src={`/img/projects/${card}`}
        />
        <Infos ref={infos}>
          <Typography as="h5">{title}</Typography>
          <Typography as="p" size="xs">
            {type}
          </Typography>
          <Typography as="p" size="xs">
            {time}
          </Typography>
        </Infos>
      </Project>
    </ProjectItem>
  )
}
