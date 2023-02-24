import { useRef } from 'react'
import { Section, BgGradient } from './style'

export default function Spotlight() {
  const bg = useRef<HTMLDivElement>(null)

  return (
    <Section>
      <BgGradient ref={bg} />
      <h2>Spotlight</h2>
    </Section>
  )
}
