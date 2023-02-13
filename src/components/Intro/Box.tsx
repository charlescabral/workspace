import { BoxProps } from './type'
import { box } from './style'

import { forwardRef } from 'react'

const Box = forwardRef<HTMLDivElement, BoxProps>(function MyInput(
  { text },
  ref
) {
  return (
    <div className={box()} ref={ref}>
      {text}
    </div>
  )
})

export default Box
