import { createStitches } from '@stitches/react'
// import { globals } from './globals'
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

// const injectGlobalStyles = globalCss({
//   '*': { boxSizing: 'border-box' },
//   body: { margin: 0, padding: 0, backgroundColor: '#F4F4F4' }
// })

// const darkTheme = createTheme({
//   colors: {
//     primary: 'white'
//   }
// })

// export const globalStyles = globals()
