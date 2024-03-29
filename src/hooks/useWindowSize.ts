import { useState } from 'react'

import { useEventListener, useIsomorphicLayoutEffect } from './'

interface WindowSize {
  width?: number
  height?: number
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0
  })

  const handleSize = () => {
    const { innerWidth, innerHeight } = window
    const {
      documentElement: { clientWidth }
    } = document
    const scrollbar = clientWidth - innerWidth

    setWindowSize({
      width: innerWidth + scrollbar,
      height: innerHeight
    })
  }

  useEventListener('resize', handleSize)

  useIsomorphicLayoutEffect(() => {
    handleSize()
  }, [])

  return windowSize as WindowSize
}
