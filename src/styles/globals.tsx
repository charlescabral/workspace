import { globalCss } from '.'

export const injectGlobalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    '&::after, &::before': {
      boxSizing: 'border-box'
    }
  },
  body: {
    display: 'grid',
    gridGap: '.5rem',
    placeItems: 'center',
    margin: 0,
    padding: 0,
    // backgroundColor: '#F4F4F4',
    color: '#808080',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    background:
      'radial-gradient(circle at 94.35384114583333% 89.61588541666666%, #3a7f49 0%, 20%, rgba(171,144,221,0) 40%), radial-gradient(circle at 6.503906249999999% 88.037109375%, rgb(252 221 98 / 99%) 0%, 25%, rgba(230,34,110,0) 50%), radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #7fc656 0%, 42%, rgba(111,61,204,0) 70%), radial-gradient(circle at 93.6865234375% 11.42578125%, #3d7238 0%, 42%, rgba(56,74,211,0) 70%), radial-gradient(circle at 48.9013671875% 49.521484375%, #FFFFFF 0%, 100%, rgba(255,255,255,0) 100%)'
  }
})
