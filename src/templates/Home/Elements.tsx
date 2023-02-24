import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center'
})

export const Box = styled('div', {
  backgroundColor: '$cardBg',
  textAlign: 'center',
  lineHeight: '100px',
  width: 100,
  height: 100,
  borderRadius: '$xs',
  margin: '2rem'
})
