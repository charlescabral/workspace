import { styled } from '@/styles'

export const Wrapper = styled('section', {
  display: 'grid',
  align: 'start',
  gridGap: '1rem',
  gridTemplateColumns: '1fr',
  gridTemplateAreas: `'header' 'content' 'footer'`,
  placeContent: 'stretch space-between',
  placeItems: 'stretch'
})

export const Container = styled('section', {})
