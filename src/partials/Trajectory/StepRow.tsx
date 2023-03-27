// import Link from 'next/link'
import Typography from '@/components/Typography'
import { MarkdownProps } from '@/types'
import { Col, OverflowLimit } from '@/ui/Structure'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { FloatBrand, StepItem } from './style'

export default function StepRow({
  data: { company, business, projects, entrance, exit, brand, color }
}: MarkdownProps) {
  const step = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLImageElement>(null)

  const mouseEnter = () => {
    gsap.to(brandRef.current, {
      rotation: -20,
      bottom: -20,
      skewX: 4,
      duration: 0.25
    })
  }
  const mouseLeave = () => {
    gsap.to(brandRef.current, {
      rotation: 0,
      bottom: -170,
      duration: 0.25,
      ease: 'out'
    })
  }

  return (
    <>
      <StepItem
        hover
        ref={step}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        css={{
          '&:hover .time *': {
            color: color
          }
        }}
      >
        {brand && company && (
          <OverflowLimit
            className="overflowLimit"
            css={{ '&::before': { backgroundColor: color } }}
          >
            <FloatBrand
              className="brand"
              ref={brandRef}
              alt={company}
              src={brand}
              width={100}
              height={100}
            />
          </OverflowLimit>
        )}
        <Col>
          <Typography as="p" color="primary" size="xs">
            {business}
          </Typography>
          <Typography as="h4">{company}</Typography>
          <Typography as="p" size="xs">
            {projects?.map((project) => `${project}`).join(' / ')}
          </Typography>
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
