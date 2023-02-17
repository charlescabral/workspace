import { globalCss } from '.'
import { colors } from './colors'

export const injectGlobalStyles = globalCss({
  ':root': { ...colors },
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
    color: '$text',
    backgroundColor: '$bgSite',
    webkitFontSmoothing: 'antialiased',
    fontFamily: '$sans'
  },
  '#__next': {
    minHeight: '98vh',
    width: '100%',
    display: 'inline-grid'
  },
  button: {
    transformStyle: 'preserve-3d',
    textDecoration: 'none',
    appearance: 'none',
    border: 0,
    padding: 0,
    cursor: 'pointer'
  }
})
