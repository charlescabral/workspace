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
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    webkitFontSmoothing: 'antialiased'
  },
  '#__next': {
    height: '100vh',
    width: '100%'
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
