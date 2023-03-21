import { memo } from 'react'
import { styled } from '@/styles'
import Link from 'next/link'

const Button = styled(Link, {
  transition: '$button',
  background: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  py: '$4',
  fontWeight: '$medium',

  '&:hover': {
    opacity: 0.9
  },

  '&:active': {
    transform: 'translate(0, .25em)'
  },

  'svg, .fill': {
    transition: '$default'
  },

  variants: {
    color: {
      default: {
        $$linkColor: '$text'
      },
      primary: {
        backgroundColor: '$primary',
        borderColor: '$primary',
        color: '$white12',
        borderWidth: '.2rem',
        borderStyle: 'solid',
        '.fill': {
          fill: '$white12'
        },
        '&:hover': {
          backgroundColor: '$secondary',
          borderColor: '$secondary'
        }
      },
      secondary: { backgroundColor: '$secondary' },
      success: { backgroundColor: '$success' },
      warning: { backgroundColor: '$warning' },
      error: { backgroundColor: '$error' },
      accent: { backgroundColor: '$accent' }
    },
    icon: {
      l: {
        '.icon': {
          marginRight: '$5'
        }
      },
      r: {
        '.icon': {
          marginLeft: '$5'
        }
      },
      lr: {
        '.icon': {
          '&:first-child': { marginRight: '$5' },
          '&:last-child': { marginLeft: '$5' }
        }
      }
    },
    size: {
      xs: {
        lineHeight: '$sm',
        fontSize: '$xs',
        px: '$8'
      },
      sm: {
        lineHeight: '$xl',
        fontSize: '$sm',
        px: '$8'
      },
      md: {
        lineHeight: '$2xl',
        fontSize: '$md',
        px: '$10'
      },
      lg: {
        lineHeight: '$3xl',
        fontSize: '$lg',
        px: '$12'
      },
      xl: {
        lineHeight: '$4xl',
        fontSize: '$xl',
        px: '$14'
      }
    },
    rounded: {
      true: { borderRadius: '$4xl' }
    },
    flat: {
      true: {
        background: 'transparent',
        borderStyle: 'none'
      }
    },
    bordered: {
      true: {
        background: 'transparent',
        borderStyle: 'solid'
      }
    },
    underline: {
      true: {
        '&:hover, &:active, &:focus': {
          textDecoration: 'underline'
        }
      }
    }
  },

  compoundVariants: [
    {
      bordered: true,
      color: 'primary',
      css: {
        borderColor: '$primary',
        color: '$primary',
        '.fill': {
          fill: '$primary'
        }
      }
    },
    {
      flat: true,
      color: 'primary',
      css: {
        color: '$primary',
        '.fill': {
          fill: '$primary'
        },
        '&:hover': {
          backgroundColor: 'transparent',
          color: '$secondary',
          '.fill': {
            fill: '$secondary'
          }
        }
      }
    }
  ],

  defaultVariants: {
    color: 'default'
  }
})

export default memo(Button)
