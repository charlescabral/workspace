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
      text: 'gray',
      background: '#f4f4f4'
    }
  }
})

export const darkTheme = createTheme({
  colors: {
    text: '#f4f4f4',
    background: '#3f3f3f'
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
