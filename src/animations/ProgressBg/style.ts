import { styled } from '@/styles'

export const Wrap = styled('div', {
  width: '100%',
  height: '100vh',
  position: 'absolute',
  top: '0.2rem',
  left: 0,
  overflow: 'hidden',
  zIndex: 'unset'
})

export const Bg = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  scaleX: 0,
  transformOrigin: 'left',
  transform: 'scaleX(0)',
  backgroundColor: '$yellow9'
})
