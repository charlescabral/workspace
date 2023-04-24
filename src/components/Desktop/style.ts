import { styled } from '@/styles'
import Button from '@/ui/Button'

export const Browser = styled('div', {
  padding: '$10',
  minWidth: '880px',
  height: '540px',
  background: 'linear-gradient(180deg, $glassDesktopLight, $glassDesktop)',
  boxShadow: '$lg',
  borderRadius: '$md',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  backdropFilter: 'blur(1rem)',
  display: 'none',
  '@sm': {
    display: 'flex'
  }
})

export const Field = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$white12',
  lineHeight: '$4xl',
  color: '$gray8',
  fontSize: '$sm',
  minHeight: '$12',
  marginBottom: '$6',
  borderRadius: '$xs',
  boxShadow: '$xs',
  overflow: 'hidden',

  '.icon': {
    marginRight: '$6',
    marginTop: '$1'
  }
})
export const Screen = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '$white12',
  minHeight: '90%',
  borderRadius: '$xs',
  boxShadow: '$xs'
})

export const Controls = styled('div', {
  display: 'flex'
})
export const Action = styled(Button, {
  height: '$13',
  width: '$13'
})
