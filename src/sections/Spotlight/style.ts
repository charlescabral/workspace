import { css } from '@/styles'

export const section = css('section', {
  padding: '2rem 6rem',
  textAlign: 'center',
  minWidth: '100vw',
  color: 'white',
  position: 'relative'
})

export const bgGradient = css('div', {
  position: 'absolute',
  bottom: '0',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  transformOrigin: '100%',
  transform: 'skewY(-6deg)',
  overflow: 'hidden',
  border: 'none',

  '&::after': {
    transition: 'transform 1s 1s',
    transform: 'translateX(0) scaleY(1)',
    content: '""',
    zIndex: '-1',
    position: 'absolute',
    top: '100px',
    left: '100px',
    background:
      'radial-gradient(circle at 94.35384114583333% 89.61588541666666%, #3a7f49 0%, 20%, rgba(171,144,221,0) 40%), radial-gradient(circle at 6.503906249999999% 88.037109375%, rgb(252 221 98 / 99%) 0%, 25%, rgba(230,34,110,0) 50%), radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #7fc656 0%, 42%, rgba(111,61,204,0) 70%), radial-gradient(circle at 93.6865234375% 11.42578125%, #3d7238 0%, 42%, rgba(56,74,211,0) 70%), radial-gradient(circle at 48.9013671875% 49.521484375%, #FFFFFF 0%, 100%, rgba(255,255,255,0) 100%)',
    backgroundRepeat: 'repeat-y',
    width: '400px',
    height: '400px'
  }
})
