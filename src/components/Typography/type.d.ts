import { ReactNode } from 'react'

export type TypographyProps = {
  children?: ReactNode
  text?: string
  as: React.ElementType
  css?: CSS
}
