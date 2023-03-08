export interface TransitionContextProps {
  timer?: CountState
  setTimer?: Dispatch<SetStateAction<number>>
  timeline?: GSAPTimeline
  setTimeline?: Dispatch<SetStateAction<GSAPTimeline>>
}

export interface TransitionProviderProps extends TransitionContextProps {
  children: React.ReactNode
}
