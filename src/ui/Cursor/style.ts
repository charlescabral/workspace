import { styled } from '@/styles'

export const Container = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100%',
  zIndex: 5,
  pointerEvents: 'none',
  overflow: 'hidden',

  '@media (hover: none)': {
    display: 'none'
  }
})

export const Pointer = styled('div', {
  $$pointerSize: '40px',
  position: 'absolute',
  borderRadius: '100%',
  size: '$$pointerSize',
  border: '.2rem solid $cursorCircle',
  boxSizing: 'content-box',
  transform: 'translate(-50%, -50%)',
  transition: `
    width 100ms ease,
    height 100ms ease
  `,

  variants: {
    grabbed: {
      true: { borderColor: '$red6' }
    },
    pointered: {
      true: {
        opacity: '.6',
        borderColor: '$cursorActive',
        borderWidth: '.2rem',
        size: 'calc($$pointerSize *2)'
      }
    }
  }
})
