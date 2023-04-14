import { useRef } from 'react'
import { styled } from '@/styles'
import { TypographyProps } from './type'

export default function Typography({
  children,
  className,
  text,
  as,
  css,
  color,
  font,
  weight,
  size
}: TypographyProps) {
  const Typo = styled(as, {
    transformStyle: 'preserve-3d',
    ...css,
    variants: {
      color: {
        primary: {
          color: '$primary'
        },
        neutral: {
          color: '$neutral'
        },
        contrasty: {
          color: '$contrasty'
        }
      },
      size: {
        xs: {}
      },
      type: {
        p: {},
        h1: {}
      },
      font: {
        code: {
          fontFamily: '$mono'
        }
      },
      weight: {
        bold: {
          fontWeight: '$bold'
        }
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
    <Typo
      className={className}
      ref={ref}
      color={color}
      size={size}
      type={as}
      font={font}
      weight={weight}
    >
      {children ? children : text}
    </Typo>
  )
}
