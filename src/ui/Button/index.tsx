import { memo, forwardRef } from 'react'
import { styled } from '@/styles'
import Link, { LinkProps } from 'next/link'
import { ButtonProps } from './type'

const Button = forwardRef<HTMLButtonElement | LinkProps, ButtonProps>(
  function MyInput(
    {
      children,
      href,
      color,
      rounded,
      bordered,
      className,
      weight,
      size,
      flat,
      icon,
      shadow,
      css,
      isLink,
      onClick
    },
    ref
  ) {
    const ButtonElement = styled(isLink ? Link : 'button', {
      ...css,
      transition: '$button',
      transformStyle: 'preserve-3d',
      background: 'none',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      py: '$4',
      fontWeight: '$medium',
      pointerEvents: 'auto',

      '&:hover': {
        opacity: 0.9
      },

      '&:active': {
        transform: 'translate(0, .25em)'
      },

      '& *': {
        transformStyle: 'preserve-3d'
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
          neutral: {
            backgroundColor: '$bgSite',
            borderColor: '$bgSite',
            color: '$contrasty',
            '.fill': {
              fill: '$contrasty'
            }
          },
          secondary: { backgroundColor: '$secondary' },
          success: { backgroundColor: '$success' },
          warning: { backgroundColor: '$warning' },
          error: { backgroundColor: '$error' },
          accent: { backgroundColor: '$accent' }
        },
        weight: {
          b: {
            fontWeight: '$bold'
          }
        },
        size: {
          xs: {
            letterSpacing: '0.05rem',
            lineHeight: '1.2rem',
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
        icon: {
          only: {
            padding: 0,
            '.icon': {
              margin: 0
            }
          },
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
            borderStyle: 'solid',
            borderWidth: '$1'
          }
        },
        underline: {
          true: {
            '&:hover, &:active, &:focus': {
              textDecoration: 'underline'
            }
          }
        },
        shadow: {
          xs: { boxShadow: '$xs' },
          sm: { bosmhadow: '$sm' },
          md: { boxShadow: '$md' },
          lg: { boxShadow: '$lg' },
          xl: { boxShadow: '$xl' }
        },
        outline: {
          true: {
            background: 'none'
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
          bordered: true,
          color: 'white',
          css: {
            borderColor: '$white12',
            color: '$white12',
            '.fill': {
              fill: '$white12'
            },
            '&:hover': {
              backgroundColor: '$white12',
              color: '$primary',
              '.fill': {
                fill: '$primary'
              }
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

    return (
      <ButtonElement
        href={href ? href : ''}
        color={color}
        rounded={rounded}
        size={size}
        bordered={bordered}
        weight={weight}
        flat={flat}
        icon={icon}
        shadow={shadow}
        className={className}
        ref={ref}
        onClick={onClick}
      >
        {children && children}
      </ButtonElement>
    )
  }
)

export default memo(Button)
