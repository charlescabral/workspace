import React, { useState, createContext, useContext } from 'react'
import gsap from 'gsap'
import { TransitionProviderProps, TransitionContextProps } from './type'

const TransitionContext = createContext<TransitionContextProps>({
  timer: undefined,
  setTimer: () => undefined,
  timeline: undefined,
  setTimeline: () => undefined
})

const TransitionProvider = ({ children }: TransitionProviderProps) => {
  const [timer, setTimer] = useState<number>(0)
  const [timeline, setTimeline] = useState<GSAPTimeline>(() =>
    gsap.timeline({
      paused: true,
      onUpdate: () => setTimer(timeline.progress())
    })
  )

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
