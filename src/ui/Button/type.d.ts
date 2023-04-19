export interface ButtonProps extends ReactNode {
  children?: ReactNode
  className?: string
  href?: LinkProps
  color?: string
  rounded?: boolean
  target?: string
  weight?: string
  size?: string
  bordered?: boolean
  flat?: boolean
  icon?: string
  isLink?: boolean
  shadow?: string
  css?: CSS
  onClick?: MouseEventHandler<HTMLButtonElement>
}
