import { useState } from 'react'
import { useEventListener } from '.'

type MousePositionProps = {
  x: number | null
  y: number | null
}

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<MousePositionProps>({
    x: null,
    y: null
  })

  const mouseMoveHandler = (event: MouseEvent) => {
    const { clientX, clientY } = event
    setMousePosition({ x: clientX, y: clientY })
  }

  useEventListener('mousemove', mouseMoveHandler)

  return mousePosition
}
