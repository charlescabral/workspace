import { useRef } from 'react'
import { gsap } from 'gsap'
import Box from './Box'

export default function GSBoxes() {
  const box1 = useRef<HTMLDivElement>(null)
  const box2 = useRef<HTMLDivElement>(null)
  const box3 = useRef<HTMLDivElement>(null)

  const move = () => {
    gsap.to(box1.current, {
      rotation: '+=2',
      scale: '+=.1'
    })
    gsap.to(box2.current, { rotation: '+=80' })
    gsap.to(box3.current, { rotation: '+=20' })
  }

  return (
    <>
      <Box ref={box1} text="1" />
      <Box ref={box2} text="2" />
      <Box ref={box3} text="3" />
      <button onClick={move}>Rotate</button>
    </>
  )
}
