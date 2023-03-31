import { styled } from '@/styles'

export const Scene = styled('div', {
  position: 'relative',
  size: '100%',
  // maxWidth: '260px',
  transformStyle: 'preserve-3d'
})

export const Case = styled('div', {
  size: '100%',
  position: 'relative',
  transformStyle: 'preserve-3d'
})

export const Screen = styled('div', {
  backgroundColor: '$black6',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '$2xl',
  transformStyle: 'preserve-3d'
})

export const Glass = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  transform: 'translateZ(0) 100ms',
  backgroundImage: 'url("/img/room.png")',
  backgroundPosition: '400px 0px',
  opacity: '.1',
  zIndex: '$1',
  transformStyle: 'preserve-3d',
  boxShadow: '0 0 200px $black12 inset'
})
