import { globalCss } from '.'

export const injectGlobalStyles = globalCss({
  '*': { boxSizing: 'border-box' },
  body: { margin: 0, padding: 0, backgroundColor: '#F4F4F4' }
})
