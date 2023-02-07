import { globalCss } from '.'

export const injectGlobalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    '&::after, &::before': {
      boxSizing: 'border-box'
    }
  },
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: '#F4F4F4',
    color: '#808080',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  }
})
