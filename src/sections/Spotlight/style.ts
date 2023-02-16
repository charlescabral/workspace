import { styled } from '@/styles'

export const Section = styled('section', {
  textAlign: 'center',
  width: '100%',
  height: '$spotlight',
  position: 'relative',
  padding: '88px 0',
  h2: {
    'mix-blend-mode': 'color-burn',
    opacity: 0.7,
    fontSize: '6em',
    margin: 0
  }
})

export const BgGradient = styled('div', {
  position: 'absolute',
  bottom: '0',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '-1',
  transformOrigin: 'calc($spotlight / 2) center',
  transform: 'skewY(-6deg)',

  '&::after': {
    transition: 'transform 1s 1s',
    transform: 'translateY(calc($spotlight / 2)) scaleY(1.2)',
    content: '""',
    display: 'block',
    width: '100%',
    maxWidth: '100vw',
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    margin: 'auto',
    background:
      'radial-gradient(circle at 94.35384114583333% 89.61588541666666%, #3a7f49 0%, 20%, rgba(171,144,221,0) 40%), radial-gradient(circle at 6.503906249999999% 88.037109375%, rgb(252 221 98 / 99%) 0%, 25%, rgba(230,34,110,0) 50%), radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #7fc656 0%, 42%, rgba(111,61,204,0) 70%), radial-gradient(circle at 93.6865234375% 11.42578125%, #3d7238 0%, 42%, rgba(56,74,211,0) 70%), radial-gradient(circle at 48.9013671875% 49.521484375%, #FFFFFF 0%, 100%, rgba(255,255,255,0) 100%)',
    backgroundRepeat: 'repeat-y'
  }
})
