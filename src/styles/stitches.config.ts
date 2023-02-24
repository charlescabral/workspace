import { createStitches } from '@stitches/react'
import common from './common'
import { dark } from './dark'
import { light } from './light'
import { black, white } from './colors'

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
      ...black,
      ...white,
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
