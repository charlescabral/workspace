// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { useCallback, useEffect, useRef, useState, MouseEvent } from 'react'
// import gsap from 'gsap'
// import { Container, Pointer } from './style'
// import { useEventListener } from '@/hooks'
// import { Elements } from './type'

// function Cursor() {
//   const cursor = useRef<HTMLDivElement>(null)
//   const [isGrab, setIsGrab] = useState(false)
//   const [isPointer, setIsPointer] = useState(false)
//   const [hasMoved, setHasMoved] = useState(false)

//   const onMouseMove = useCallback(
//     ({ clientX, clientY }: MouseEvent) => {
//       gsap.to(cursor.current, {
//         x: clientX,
//         y: clientY,
//         duration: hasMoved ? 0.3 : 0,
//         ease: 'back.out'
//       })
//       setHasMoved(true)
//     },
//     [hasMoved]
//   )

//   useEventListener('mousemove', () => onMouseMove)

//   useEffect(() => {
//     document.documentElement.classList.add('has-custom-cursor')

//     return () => {
//       document.documentElement.classList.remove('has-custom-cursor')
//     }
//   }, [])

//   useEffect(() => {
//     // let elements: Elements[] = []
//     // const onMouseEnter = () => setIsPointer(true)
//     // const onMouseLeave = () => setIsPointer(false)
//     // elements = [
//     //   ...document.querySelectorAll(
//     //     "button,a,input,label,*[data-cursor='pointer']"
//     //   )
//     // ]
//     // elements.forEach((element) => {
//     //   element.addEventListener('mouseenter', onMouseEnter, false)
//     //   element.addEventListener('mouseleave', onMouseLeave, false)
//     // })
//     // return () => {
//     //   elements.forEach((element) => {
//     //     element.removeEventListener('mouseenter', onMouseEnter, false)
//     //     element.removeEventListener('mouseleave', onMouseLeave, false)
//     //   })
//     // }
//   }, [])

//   useEffect(() => {
//     // let elements: Elements = []
//     // function onMouseEnter() {
//     //   setIsGrab(true)
//     // }
//     // function onMouseLeave() {
//     //   setIsGrab(false)
//     // }
//     // elements = [...document.querySelectorAll("*[data-cursor='grab']")]
//     // elements.forEach((element) => {
//     //   element.addEventListener('mouseenter', onMouseEnter, false)
//     //   element.addEventListener('mouseleave', onMouseLeave, false)
//     // })
//     // return () => {
//     //   elements.forEach((element) => {
//     //     element.removeEventListener('mouseenter', onMouseEnter, false)
//     //     element.removeEventListener('mouseleave', onMouseLeave, false)
//     //   })
//     // }
//   }, [])

//   return (
//     <Container css={{ opacity: hasMoved ? 1 : 0 }}>
//       <Pointer ref={cursor} grabbed={isGrab} pointered={isPointer} />
//     </Container>
//   )
// }

// export { Cursor }

export {}
