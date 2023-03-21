/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'

type Config = {
  duration?: number
  shouldAnimate?: boolean
}

export default function useRequestAnimationFrame(
  nextAnimationFrameHandler: (progress: number) => void,
  { duration = Number.POSITIVE_INFINITY, shouldAnimate = true }: Config
) {
  const frame = useRef<number>(0)
  const firstFrameTime = useRef(performance.now())

  const animate = (now: number) => {
    // calculate at what time fraction we are currently of whole time of animation
    let timeFraction = (now - firstFrameTime.current) / duration
    if (timeFraction > 1) {
      timeFraction = 1
    }

    if (timeFraction <= 1) {
      nextAnimationFrameHandler(timeFraction)

      // request next frame only in cases when we not reached 100% of duration
      if (timeFraction != 1) frame.current = requestAnimationFrame(animate)
    }
  }

  useEffect(() => {
    if (shouldAnimate) {
      firstFrameTime.current = performance.now()
      frame.current = requestAnimationFrame(animate)
    } else {
      cancelAnimationFrame(frame.current)
    }

    return () => cancelAnimationFrame(frame.current)
  }, [shouldAnimate])
}
