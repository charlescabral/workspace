import { createStitches } from '@stitches/react'
import common from './common'
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
} = createStitches({
  ...common,
  theme: {
    ...common.theme,
    colors: {
      ...light.colors
    },
    shadows: {
      ...light.shadows
    },
    dropShadows: {
      ...light.dropShadows
    }
  }
})

export const darkTheme = createTheme(dark)
