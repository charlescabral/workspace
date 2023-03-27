import { useRef } from 'react'
import { styled } from '@/styles'
import { TypographyProps } from './type'

export default function Typography({
  children,
  classname,
  text,
  as,
  css,
  color,
  size
}: TypographyProps) {
  const Typo = styled(as, {
    ...css,
    variants: {
      color: {
        primary: {
          color: '$primary'
        }
      },
      size: {
        xs: {}
      },
      type: {
        p: {},
        h1: {}
      }
    },
    compoundVariants: [
      {
        type: 'p',
        size: 'xs',
        css: {
          fontSize: '$xs'
        }
      }
    ]
  })
  const ref = useRef<HTMLElement>(null)

  return (
    <Typo className={classname} ref={ref} color={color} size={size} type={as}>
      {children ? children : text}
    </Typo>
  )
}
