import { styled } from '@/styles'
import * as Switch from '@radix-ui/react-switch'

export const Switcher = styled(Switch.Root, {
  cursor: 'pointer',
  width: '46px',
  backgroundColor: '$bgSwitcher',
  borderRadius: '4rem',
  overflow: 'hidden',
  position: 'relative',
  webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  boxShadow: 'inset rgb(0 0 0 / 16%) 0px 2px 3px 1px',

  '&:focus-visible': {
    outline: 'none',
    boxShadow: '0 0 0 2px $purple'
  },
  '&:active': {
    '> span': {
      width: '65%'
    }
  }
})

export const Button = styled(Switch.Thumb, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '22px',
  height: '22px',
  backgroundColor: 'white',
  borderRadius: '50%',
  left: '1px',
  margin: '3px 0',
  position: 'inherit',
  boxShadow: '#0000004d 0 2px 3px 1px',
  transition: '100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  overflow: 'hidden',

  '&[data-state="checked"]': {
    left: 'calc(100% - 3px)',
    transform: 'translateX(-100%)'
  }
})
