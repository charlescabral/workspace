import { styled } from '@/styles'

export const Presentation = styled('div', {
  width: '180px',
  paddingTop: '$32',
  marginRight: '$40',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center'
})

// export const ProjectsList = styled('div', {
// display: 'flex',
// flexWrap: 'wrap',
// justifyContent: 'space-around',
// flexDirection: 'row'
// mx: '-$16'
// })

export const Ball = styled('div', {
  size: '60px',
  borderRadius: '50%',
  background: 'linear-gradient(to bottom, $primary 0%, $green11 100%)',
  transform: 'translateY(-100px)',
  position: 'relative',
  top: '-80px'
})

export const Shadow = styled('div', {
  width: '60px',
  height: '30px',
  background: 'radial-gradient(ellipse at center, $black8, $white12 50%)',
  position: 'relative',
  zIndex: '-1',
  opacity: '.1'
})
