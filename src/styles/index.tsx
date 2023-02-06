import { createStitches } from '@stitches/react'
// import { tokens } from './tokens'

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
  theme: {
    colors: {
      primary: 'hsl(206,10%,5%)'
    }
  }
})

// const darkTheme = createTheme({
//   colors: {
//     primary: 'white'
//   }
// })
