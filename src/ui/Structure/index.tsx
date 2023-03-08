import { styled } from '@/styles'

export const Wrapper = styled('section', {
  display: 'grid',
  align: 'start',
  gridGap: '1rem',
  gridTemplateColumns: '1fr',
  gridTemplateAreas: `'header' 'content' 'footer'`,
  placeContent: 'stretch space-between',
  placeItems: 'stretch',
  position: 'relative',
  zIndex: '$1'
})

export const Container = styled('section', {})

export const Main = styled('main', {
  gridArea: 'content',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center'
})
