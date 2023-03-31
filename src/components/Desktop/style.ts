import { styled } from '@/styles'

export const Browser = styled('div', {
  padding: '$10',
  minWidth: '800px',
  height: '540px',
  background: 'linear-gradient(180deg, $glassDesktopLight, $glassDesktop)',
  boxShadow: '$lg',
  borderRadius: '$md',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  backdropFilter: 'blur(1rem)'
})

export const Field = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$white12',
  px: '$6',
  lineHeight: '$4xl',
  color: '$gray8',
  fontSize: '$sm',
  minHeight: '$12',
  marginBottom: '$6',
  borderRadius: '$xs',
  boxShadow: '$xs',

  '.icon': {
    marginRight: '$4'
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
