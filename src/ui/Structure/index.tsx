import { styled } from '@/styles'

export const Wrapper = styled('div', {
  display: 'grid',
  align: 'start',
  gridGap: '1rem',
  gridTemplateColumns: '1fr',
  gridTemplateAreas: `'header' 'content' 'footer'`,
  gridAutoRows: 'max-content',
  placeContent: 'stretch space-between',
  placeItems: 'stretch',
  position: 'relative',
  zIndex: '$1'
})

export const Container = styled('div', {
  px: '$10',
  mx: 'auto',
  variants: {
    size: {
      xs: {
        maxWidth: '650px'
      },
      sm: {
        maxWidth: '960px'
      },
      md: {
        maxWidth: '1280px'
      },
      lg: {
        maxWidth: '1400px'
      },
      xl: {
        maxWidth: '1920px'
      }
    }
  }
})

export const Main = styled('main', {
  overflowX: 'clip',
  gridArea: 'content',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center'
})
