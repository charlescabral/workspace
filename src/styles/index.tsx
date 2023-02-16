import { createStitches } from '@stitches/react'
import { dark } from './dark'
import { light } from './light'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  reset,
  theme,
  config
} = createStitches({ theme: light })

export const darkTheme = createTheme(dark)
