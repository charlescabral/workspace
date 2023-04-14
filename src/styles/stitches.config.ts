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
    }
  }
})

export const darkTheme = createTheme(dark)

// common theme types
export type StitchesConfig = typeof config
export type Spaces = StitchesConfig['theme']['space']
export type FontSizes = StitchesConfig['theme']['fontSizes']
export type Fonts = StitchesConfig['theme']['fonts']
export type FontWeights = StitchesConfig['theme']['fontWeights']
export type LineHeights = StitchesConfig['theme']['lineHeights']
export type LetterSpacings = StitchesConfig['theme']['letterSpacings']
export type Colors = StitchesConfig['theme']['colors']
export type Radii = StitchesConfig['theme']['radii']
export type zIndices = StitchesConfig['theme']['zIndices']
export type BorderWeights = StitchesConfig['theme']['borderWeights']
export type Tranistions = StitchesConfig['theme']['transitions']
export type Breakpoints = StitchesConfig['theme']['breakpoints']
