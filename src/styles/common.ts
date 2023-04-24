import type * as Stitches from '@stitches/react'

import { defaultThemeMap as defaultStitchesThemeMap } from '@stitches/react'

export const defaultTokens = {
  fonts: {
    sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",
    mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;"
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem'
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    xs: 1,
    sm: 1.25,
    base: 1.5,
    md: 1.5,
    lg: 1.75,
    xl: 1.75,
    '2xl': 2,
    '3xl': 2.25,
    '4xl': 2.5,
    '5xl': 1,
    '6xl': 1,
    '7xl': 1,
    '8xl': 1,
    '9xl': 1
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  space: {
    0: '0rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '2.25rem',
    '2xl': '3rem',
    '3xl': '5rem',
    '4xl': '10rem',
    '5xl': '14rem',
    '6xl': '18rem',
    '7xl': '24rem',
    '8xl': '32rem',
    '9xl': '40rem',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    screen: '100vw',
    full: '100%',
    'bp-xs': '696px',
    'bp-sm': '960px',
    'bp-md': '1280px',
    'bp-lg': '1400px',
    'bp-xl': '1920px',
    px: '1px',
    1: '0.125rem',
    2: '0.25rem',
    3: '0.375rem',
    4: '0.5rem',
    5: '0.625rem',
    6: '0.75rem',
    7: '0.875rem',
    8: '1rem',
    9: '1.25rem',
    10: '1.5rem',
    11: '1.75rem',
    12: '2rem',
    13: '2.25rem',
    14: '2.5rem',
    15: '2.75rem',
    16: '3rem',
    17: '3.5rem',
    18: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem'
  },
  radii: {
    xs: '5px',
    sm: '9px',
    md: '12px',
    base: '14px',
    lg: '14px',
    xl: '18px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '42px',
    squared: '33%',
    rounded: '50%',
    pill: '9999px'
  },
  zIndices: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    10: '1000',
    max: '9999'
  },
  borderWeights: {
    light: '1px',
    normal: '2px',
    bold: '3px',
    extrabold: '4px',
    black: '5px'
  },
  transitions: {
    default: 'all 250ms ease',
    button:
      'background 0.25s ease 0s, color 0.25s ease 0s, border-color 0.25s ease 0s, box-shadow 0.25s ease 0s, transform 0.25s ease 0s, opacity 0.25s ease 0s',
    avatar: 'box-shadow 0.25s ease 0s, opacity 0.25s ease 0s',
    card: 'transform 0.25s ease 0s, filter 0.25s ease 0s, box-shadow 0.25s ease 0s',
    dropdownItem:
      'background 0.12s ease, transform 0.12s ease, color 0.12s ease, box-shadow 0.12s ease 0s'
  },
  sizes: {
    project: '520px',
    projectMob: '300px',
    xs: '638px',
    sm: '960px',
    md: '1280px',
    lg: '1400px',
    xl: '1920px'
  },
  breakpoints: {
    xs: '650px',
    sm: '960px',
    md: '1280px',
    lg: '1400px',
    xl: '1920px'
  }
}

export const defaultMedia = {
  xs: `(min-width: ${defaultTokens.breakpoints.xs})`,
  sm: `(min-width: ${defaultTokens.breakpoints.sm})`,
  md: `(min-width: ${defaultTokens.breakpoints.md})`,
  lg: `(min-width: ${defaultTokens.breakpoints.lg})`,
  xl: `(min-width: ${defaultTokens.breakpoints.xl})`,
  xsMin: `(min-width: ${defaultTokens.breakpoints.xs})`,
  smMin: `(min-width: ${defaultTokens.breakpoints.sm})`,
  mdMin: `(min-width: ${defaultTokens.breakpoints.md})`,
  lgMin: `(min-width: ${defaultTokens.breakpoints.lg})`,
  xlMin: `(min-width: ${defaultTokens.breakpoints.xl})`,
  xsMax: `(max-width: ${defaultTokens.breakpoints.xs})`,
  smMax: `(max-width: ${defaultTokens.breakpoints.sm})`,
  mdMax: `(max-width: ${defaultTokens.breakpoints.md})`,
  lgMax: `(max-width: ${defaultTokens.breakpoints.lg})`,
  xlMax: `(max-width: ${defaultTokens.breakpoints.xl})`,
  motion: '(prefers-reduced-motion: reduce)',
  safari: 'not all and (min-resolution:.001dpcm)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)'
}

export const defaultUtils = {
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
    marginBottom: value
  }),
  dflex: (value: Stitches.PropertyValue<'alignItems'>) => ({
    display: 'flex',
    alignItems: value,
    justifyContent: value
  }),
  bgClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value
  }),
  userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    userSelect: value
  }),
  size: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
    height: value
  }),
  appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
    WebkitAppearance: value,
    appearance: value
  }),
  truncateText: (value: Stitches.PropertyValue<'width'>) => ({
    maxWidth: value,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }),
  textGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '&::selection': {
      WebkitTextFillColor: '$colors$text'
    }
  }),
  hover: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    position: 'relative',

    '&::before': {
      content: '',
      transition: '$default',
      transform: 'scale(0.9)',
      opacity: 0,
      backgroundColor: value,
      borderRadius: '$xs',
      position: 'absolute',
      zIndex: 0,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'
    },

    '.overflowLimit': {
      transform: 'rotateZ(-2deg) scale(0.9)',

      '> *': {
        transform: 'skewX(0deg)',
        transformStyle: 'preserve-3d'
      }
    },

    '&:hover': {
      '&::before': {
        opacity: 1,
        transform: 'rotateZ(-2deg) skewX(-2deg) scale(1.1)'
      },
      '.overflowLimit': {
        transform: 'rotateZ(-2deg) skewX(-2deg) scale(1.1)'
      }
    },

    '*': {
      zIndex: '$1'
    }
  })
}

export const defaultThemeMap = {
  ...defaultStitchesThemeMap,
  width: 'space',
  height: 'space',
  minWidth: 'space',
  maxWidth: 'space',
  minHeight: 'space',
  maxHeight: 'space',
  flexBasis: 'space',
  gridTemplateColumns: 'space',
  gridTemplateRows: 'space',
  blockSize: 'space',
  minBlockSize: 'space',
  maxBlockSize: 'space',
  inlineSize: 'space',
  minInlineSize: 'space',
  maxInlineSize: 'space',
  borderWidth: 'borderWeights'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  prefix: 'charles',
  theme: defaultTokens,
  media: defaultMedia,
  utils: defaultUtils,
  themeMap: defaultThemeMap
}
