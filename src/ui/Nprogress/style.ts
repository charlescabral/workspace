import { css } from '@/styles'

export const bar = css({
  background: '$green8',
  position: 'fixed',
  zIndex: '9999',
  top: 0,
  left: 0,
  width: '100%',
  height: '.4rem'
})

export const peg = css({
  display: 'block',
  position: 'absolute',
  right: 0,
  width: '100px',
  height: '100%',
  opacity: 1,
  transform: 'rotate(3deg) translate(0px, -4px)'
})

export const progressBar = {
  '#nprogress': {
    pointerEvents: 'none'
  },
  '.nprogress-custom-parent': {
    overflow: 'hidden',
    position: 'relative'
  },
  '.nprogress-custom-parent #nprogress .bar': {
    position: 'absolute'
  }
}
