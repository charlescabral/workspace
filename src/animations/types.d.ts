interface AnimationProps {
  children?: ReactNode
}

export interface InOutProps extends AnimationProps {
  as?: React.ElementType
  from?: GSAPTimelineVars
  to?: GSAPTimelineVars
  set?: GSAPTimelineVars
  skipOut?: boolean
}

// export interface FadeInOutUpProps extends AnimationProps {
//   y?: number
// }
