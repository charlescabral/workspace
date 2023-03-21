import { useRef } from 'react'
import { styled } from '@/styles'
import { TypographyProps } from './type'

export default function Typography({
  children,
  text,
  as,
  css
}: TypographyProps) {
  const Element = styled(as, { ...css })
  const ref = useRef<HTMLElement>(null)

  return <Element ref={ref}>{children ? children : text}</Element>
}
