import { styled } from '@/styles'

export const Scene = styled('div', {
  position: 'relative',
  maxWidth: '260px',
  transformStyle: 'preserve-3d'
})

export const Case = styled('div', {
  backgroundColor: '$glassPhone',
  backdropFilter: 'blur(1rem)',
  padding: '$4',
  width: '240px',
  height: '420px',
  textAlign: 'center',
  borderRadius: '$3xl',
  boxShadow: `
    0px 50px 100px -20px $black10,
    0px 30px 60px -30px $black10,
    inset 0px 2px 6px $white8,
    inset 0px -2px 6px $black10
  `,
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
  pointerEvents: 'none',
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
