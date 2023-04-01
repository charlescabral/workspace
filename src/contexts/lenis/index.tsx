export {}

// import { useFrame } from '@studio-freight/hamo'
// import Lenis from '@studio-freight/lenis'
// import {
//   createContext,
//   forwardRef,
//   useCallback,
//   useContext,
//   useEffect,
//   useImperativeHandle,
//   useRef,
//   useState
// } from 'react'
// // import { create } from 'zustand'

// // const useStore = create(() => ({}))

// function useCurrentLenis() {
//   const local = useContext(LenisContext)
//   const root = useStore()

//   return local ?? root
// }

// export function useLenis(callback: any, deps = [], priority = 0) {
//   const { lenis, addCallback, removeCallback } = useCurrentLenis()

//   useEffect(() => {
//     if (!callback || !addCallback || !removeCallback || !lenis) return

//     addCallback(callback, priority)
//     callback(lenis)

//     return () => {
//       removeCallback(callback)
//     }
//   }, [lenis, callback, addCallback, removeCallback, priority, deps])

//   return lenis
// }

// const LenisContext = createContext(null)

// const ReactLenis = forwardRef(
//   (
//     { children, root = false, options = {}, isStopped = false, className },
//     ref
//   ) => {
//     const wrapper = useRef()
//     const content = useRef()

//     const [lenis, setLenis] = useState()

//     const callbacks = useRef([])

//     const addCallback = useCallback((callback, priority) => {
//       callbacks.current.push({ callback, priority })
//       callbacks.current.sort((a, b) => a.priority - b.priority)
//     }, [])

//     const removeCallback = useCallback((callback) => {
//       callbacks.current = callbacks.current.filter(
//         (cb) => cb.callback !== callback
//       )
//     }, [])

//     useImperativeHandle(ref, () => lenis, [lenis])

//     useEffect(() => {
//       if (!root) {
//         options.wrapper = wrapper.current
//         options.content = content.current
//       }

//       const lenis = new Lenis({
//         ...options
//       })

//       setLenis(lenis)

//       return () => {
//         lenis.destroy()
//         setLenis(undefined)
//       }
//     }, [
//       root
//       // JSON.stringify(
//       //   // filter out node elements from options
//       //   Object.keys(options).reduce((acc, key) => {
//       //     if (!options[key].tagName) {
//       //       acc[key] = options[key]
//       //     }
//       //     return acc
//       //   }, {})
//       // ),
//     ])

//     useFrame((time) => {
//       lenis?.raf(time)
//     })

//     useEffect(() => {
//       if (!lenis) return
//       if (isStopped) {
//         lenis.stop()
//       } else {
//         lenis.start()
//       }
//     }, [lenis, isStopped])

//     useEffect(() => {
//       if (root && lenis) {
//         useStore.setState({ lenis, addCallback, removeCallback })
//       }
//     }, [root, lenis, addCallback, removeCallback])

//     const onScroll = useCallback((e) => {
//       for (let i = 0; i < callbacks.current.length; i++) {
//         callbacks.current[i].callback(e)
//       }
//     }, [])

//     useEffect(() => {
//       if (!lenis) return

//       lenis.on('scroll', onScroll)

//       return () => {
//         lenis.off('scroll', onScroll)
//       }
//     }, [lenis, onScroll])

//     return (
//       <LenisContext.Provider value={{ lenis, addCallback, removeCallback }}>
//         {root ? (
//           children
//         ) : (
//           <div ref={wrapper} className={className}>
//             <div ref={content}>{children}</div>
//           </div>
//         )}
//       </LenisContext.Provider>
//     )
//   }
// )
// ReactLenis.displayName = 'ReactLenis'

// export { ReactLenis, ReactLenis as Lenis }