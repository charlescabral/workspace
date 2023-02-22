import { globalCss } from '.'

export const injectGlobalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    '&::after, &::before': {
      boxSizing: 'border-box'
    },
    '&::selection': {
      backgroundColor: '$gray5',
      userSelect: '$gray5'
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: '0px 0px 0px .2rem $purple9',
      borderRadius: '$xs'
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
  'code, pre': {
    color: '$textLight'
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
