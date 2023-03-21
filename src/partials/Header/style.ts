import { styled } from '@/styles'

export const HeaderMain = styled('header', {
  gridArea: 'header',
  gridColumn: '1 / -1',
  marginBottom: '$8',
  py: '$10'
})

export const HeaderContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between'
})
