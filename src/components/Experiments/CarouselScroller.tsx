import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'

import { styled } from '@/styles'

import { DragEvent, MouseEvent } from 'react'

type EventProps = MouseEvent<HTMLElement> | DragEvent<HTMLElement>

type PositionProps = {
  isDown?: boolean
  startX: number
  scrollLeft: number
}

const Slider = styled('section', {
  display: 'flex',
  maxWidth: '400px',
  padding: '0 $16',
  overflowX: 'scroll',
  overscrollBehavior: 'contain',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  webkitOverflowSScrolling: 'touch',
  touchAction: 'pan-x',
  scrollSnapType: 'x mandatory',

  '&::-webkit-scrollbar': {
    display: 'none'
  }
})

const Slide = styled('div', {
  scrollSnapAlign: 'center',
  background: '#e5484d',
  minWidth: '300px',
  height: '200px',
  margin: '0 $4',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '28px'
})

const handler = (
  entries: IntersectionObserverEntry[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  observer: IntersectionObserver
) => {
  for (const entry of entries) {
    if (entry.intersectionRatio >= 1) {
      console.log('i Am visible', entry.target.textContent)
    }
  }
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

const getObserver = (ref: MutableRefObject<IntersectionObserver | null>) => {
  const observer = ref.current
  if (observer !== null) {
    return observer
  }
  const newObserver = new IntersectionObserver(handler, options)
  ref.current = newObserver
  return newObserver
}

export default function CarouselScroller() {
  const observer = useRef<IntersectionObserver>(null)
  const [position] = useState<PositionProps | null>(null)
  const section = useRef<HTMLElement>(null)
  const refs = useRef<HTMLDivElement[]>([])
  const addSlide = useCallback(
    (node: HTMLDivElement) => refs.current.push(node),
    []
  )

  // const startX = 400
  // const scrollLeft = 400
  // window.teste = section.current

  const start = (e: EventProps) => {
    const { current } = section

    if (!!e && !!current) {
      const x = e.pageX - current.offsetLeft
      const scrollLeft = current.scrollLeft

      const speed = 3
      const walk = x * speed
      current.scrollLeft = scrollLeft - walk
      // setPosition((prev) => ({
      //   ...prev,
      //   startX: x,
      //   scrollLeft
      // }))
    }
  }

  const move = (e: EventProps) => {
    const { current } = section
    if (!!e && !!current && !!position) {
      const { startX, scrollLeft } = position
      const x = e.pageX - current.offsetLeft
      const speed = 3
      const walk = (x - startX) * speed
      current.scrollLeft = scrollLeft - walk
    }
  }

  const end = () => {
    // const { current } = section
    // if (!!e && !!current) {
    //   // current.scrollLeft = 10
    //   // console.log('teste', current)
    // }
  }

  useEffect(() => {
    const { current } = observer
    if (current) {
      current.disconnect()
      const newObserver = getObserver(observer)

      for (const node of refs.current) {
        newObserver.observe(node)
      }
      return () => newObserver.disconnect()
    }
  }, [observer])

  return (
    <>
      <Slider
        ref={section}
        // onTouchStart={start}
        // onTouchMove={move}
        // onTouchEnd={end}
        onMouseDown={start}
        onMouseMove={move}
        onMouseUp={end}
        onDragStart={start}
        onDrag={move}
        onDragEnd={end}
      >
        <Slide ref={addSlide}> Section 1 </Slide>
        <Slide ref={addSlide}> Section 2 </Slide>
        <Slide ref={addSlide}> Section 3 </Slide>
        <Slide ref={addSlide}> Section 4 </Slide>
        <Slide ref={addSlide}> Section 5 </Slide>
      </Slider>
    </>
  )
}
