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
    color: '$text',
    backgroundColor: '$background',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    webkitFontSmoothing: 'antialiased'
  },
  button: {
    transformStyle: 'preserve-3d',
    textDecoration: 'none',
    appearance: 'none',
    border: 0,
    padding: 0
  }
})
