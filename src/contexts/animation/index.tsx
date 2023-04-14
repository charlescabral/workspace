import { useState, createContext, useContext, useMemo } from 'react'
import gsap from 'gsap'
import { TransitionProviderProps, TransitionContextProps } from './type'

const TransitionContext = createContext<TransitionContextProps>({
  timer: undefined,
  setTimer: () => undefined,
  timeline: undefined,
  setTimeline: () => undefined
})

const TransitionProvider = ({ children }: TransitionProviderProps) => {
  const tl: gsap.core.Timeline = useMemo(
    () =>
      gsap.timeline({
        paused: true,
        onUpdate: () => setTimer(tl.progress())
      }),
    []
  )
  const [timer, setTimer] = useState<number>(0)
  const [timeline, setTimeline] = useState<GSAPTimeline>(tl)

  return (
    <TransitionContext.Provider
      value={{
        timer,
        timeline,
        setTimeline
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}

export function useTransitionContext(): TransitionContextProps {
  const context = useContext(TransitionContext)

  if (!context) {
    throw new Error(
      'useTransitionContext must be used within a DesignerProvider'
    )
  }
  return context
}

export default TransitionProvider
