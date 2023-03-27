import { styled } from '@/styles'

export const ProjectsMain = styled('section', {
  minWidth: '100%',
  paddingBottom: '$12'
})

export const ProjectsList = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  flexDirection: 'row'
  // mx: '-$16'
})

export const ProjectItem = styled('div', {
  display: 'flex',
  minHeight: '$60',
  marginBottom: '$10',
  minWidth: 'calc($bp-md / 2 - $13)'
})

export const Project = styled('div', {
  backgroundColor: '$gray6',
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  minWidth: '100%',
  position: 'relative',
  boxShadow: '$xs'
})
