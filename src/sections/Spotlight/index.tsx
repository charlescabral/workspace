import { useRef } from 'react'
// import { gsap } from 'gsap'
import { Section, BgGradient } from './style'

const Spotlight = () => {
  const bg = useRef<HTMLDivElement>(null)

  // useEffect(() => {}, [])

  return (
    <Section>
      <BgGradient ref={bg} />
      <h2>Spotlight Instance</h2>
    </Section>
  )
}

export default Spotlight
