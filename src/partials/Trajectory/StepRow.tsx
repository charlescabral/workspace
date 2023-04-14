// import Link from 'next/link'
import Typography from '@/ui/Typography'
import { MarkdownProps } from '@/types'
import { Col, OverflowLimit, Row } from '@/ui/Structure'
import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { FloatBrand, StepItem } from './style'
import Texture from '@/components/Texture'

export default function StepRow({
  data: { company, business, projects, entrance, exit, brand, color }
}: MarkdownProps) {
  const [isHover, setHover] = useState<boolean>(false)
  const step = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLImageElement>(null)

  const mouseEnter = () => {
    setHover(true)
    gsap.to(brandRef.current, {
      rotation: -20,
      bottom: -20,
      skewX: 2,
      duration: 0.25,
      ease: 'back.out'
    })
  }
  const mouseLeave = () => {
    setHover(false)
    gsap.to(brandRef.current, {
      rotation: 0,
      bottom: -160,
      duration: 0.25,
      ease: 'circ.out'
    })
  }

  return (
    <>
      <StepItem
        hover
        ref={step}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        direction="row"
        css={{
          '&:hover .company': {
            color: color
          }
        }}
      >
        {brand && company && (
          <OverflowLimit
            className="overflowLimit"
            css={{ '&::before': { backgroundColor: color } }}
          >
            {isHover && <Texture />}
            <FloatBrand
              className="brand"
              ref={brandRef}
              alt={company}
              src={brand}
              width={100}
              height={100}
              css={{ backgroundColor: color }}
            />
          </OverflowLimit>
        )}
        <Col>
          <Row direction="col">
            <Typography as="p" color="primary" size="xs">
              {business}
            </Typography>
            <Typography as="h4" className="company">
              {company}
            </Typography>
            <Typography as="p" size="xs">
              {projects?.map((project) => `${project}`).join(' / ')}
            </Typography>
          </Row>
        </Col>
        <Col className="time">
          <Typography as="p" size="xs">
            {entrance} / {exit}
          </Typography>
        </Col>
      </StepItem>
      <hr />
    </>
  )
}
