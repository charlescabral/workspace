import { styled } from '@/styles'

export const HeaderMain = styled('header', {
  gridArea: 'header',
  gridColumn: '1 / -1'
})

export const HeaderContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between'
})
