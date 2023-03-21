import { globalCss } from '.'
import { progressBar } from '@/ui/Nprogress/style'

export const injectGlobalStyles = globalCss({
  ...progressBar,
  '*': {
    boxSizing: 'border-box',
    '&::after, &::before': {
      boxSizing: 'border-box'
    },
    '&::selection': {
      backgroundColor: 'none',
      userSelect: 'none'
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: '0px 0px 0px .2rem $purple9',
      borderRadius: '$xs'
    },
    ':where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol*))':
      {
        all: 'unset',
        display: 'revert'
      }
  },
  body: {
    display: 'grid',
    gridGap: '.5rem',
    placeItems: 'center',
    margin: 0,
    padding: 0,
    backgroundColor: '$bgSite',
    webkitFontSmoothing: 'antialiased',
    fontFamily: '$sans',
    fontSize: '$base',
    fontWeight: '$light',

    '--bg': '#ffffff',
    '--header': 'red',
    '--textNormal': '#222',
    '--textTitle': '#222',
    '--textLink': '#d23669',
    '--hr': 'hsla(0, 0%, 0%, 0.2)',
    '--inlineCodeBg': 'rgba(255, 229, 100, 0.2)',
    '--inlineCodeText': '#1a1a1a'
  },
  '#__next': {
    minHeight: '98vh',
    width: '100%',
    display: 'inline-grid'
  },

  a: {
    textDecoration: 'none',
    color: '$primary',
    fontWeight: '$semibold'
  },

  'a, button': {
    cursor: 'pointer'
  },

  'ol, ul, menu': {
    listStyle: 'none'
  },

  img: {
    maxWidth: '100%'
  },

  'input, textarea': {
    webkitUserSelect: 'auto'
  },

  textarea: {
    whiteSpace: 'revert'
  },

  meter: {
    appearance: 'revert'
  },

  '::placeholder': {
    color: 'unset'
  },

  ':where([hidden])': {
    display: 'none'
  },

  ':where([contenteditable]:not([contenteditable="false"]))': {
    webkitUserModify: 'read-write',
    overflowWrap: 'break-word',
    webkitLineBreak: 'after-white-space',
    webkitUserSelect: 'auto'
  },

  ':where([draggable="true"])': {
    webkitUserDrag: 'element'
  },

  button: {
    transformStyle: 'preserve-3d',
    textDecoration: 'none',
    appearance: 'none',
    border: 0,
    padding: 0,
    cursor: 'pointer'
  },
  //  Typography ↓
  'p, h1, h2, h3, h4, h5, h6, table, code': {
    color: '$text',
    margin: 0,

    '&::selection': {
      backgroundColor: '$gray5',
      userSelect: '$gray5'
    }
  },
  p: {
    lineHeight: '$2xl'
  },
  h1: {},
  h2: {
    fontSize: '$7xl',
    fontWeight: '$extrabold'
  },
  h3: { fontSize: '$4xl', marginBottom: '$18', fontWeight: '$thin' },
  h4: { fontSize: '$3xl' },
  h5: { fontSize: '$2xl' },
  h6: { fontSize: '$xl' },
  'h4, h5, h6': {
    fontWeight: '$extrabold',
    lineHeight: '$md'
  },
  'h3, h4, h5, h6': {
    color: '$gray10'
  },

  table: {
    display: 'block',
    width: '100%',
    borderCollapse: 'collapse',
    overflow: 'auto',
    borderSpacing: '0',
    '& td, & th': {
      padding: '0'
    },
    th: {
      padding: '6px 13px',
      border: '1px solid #dfe2e5'
    },
    td: {
      padding: '6px 13px',
      border: '1px solid #dfe2e5'
    },
    tr: {
      borderTop: '1px solid #c6cbd1',
      '&:nth-child(2n)': { backgroundColor: '#f6f8fa' }
    }
  },
  hr: {
    my: '$10',
    border: 'none',
    height: '$1',
    backgroundColor: '$gray4',
    transform: 'rotateZ(-2deg)'
  }
})
