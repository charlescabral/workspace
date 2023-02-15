import { BoxProps } from './type'
import { Div } from './style'

import { forwardRef } from 'react'

const Box = forwardRef<HTMLDivElement, BoxProps>(function MyInput(
  { text },
  ref
) {
  return <Div ref={ref}>{text}</Div>
})

export default Box
