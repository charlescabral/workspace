import { styled } from '@/styles'

export const ProjectsMain = styled('section', {
  minWidth: '100%'
})

export const ProjectsList = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  flexDirection: 'row',
  mx: '-$16'
})

export const ProjectItem = styled('div', {
  display: 'flex',
  minHeight: '560px',
  minWidth: 'calc($bp-lg / 4 - $14)'
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
