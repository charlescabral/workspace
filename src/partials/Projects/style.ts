import Image from 'next/image'
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
  minHeight: '$80',
  marginBottom: '$10',
  minWidth: 'calc($bp-md / 2 - $13)'
})

export const Project = styled('div', {
  backgroundColor: '$gray6',
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  overflow: 'hidden',
  minWidth: '100%',
  position: 'relative',
  boxShadow: '$md',
  transition: '$default',
  zIndex: '$1',
  transformStyle: 'preserve-3d',

  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '$xl',
    zIndex: '$2'
  }
})

export const BgColor = styled('div', {
  size: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 0
})

export const ProjectImg = styled(Image, {
  zIndex: '$1',
  position: 'absolute',
  right: -60,
  bottom: -20,
  borderRadius: '$md',
  transformStyle: 'preserve-3d',
  filter: 'grayscale(1)'
})

export const Infos = styled('div', {
  zIndex: '$1',
  backgroundColor: '$cardBg',
  position: 'absolute',
  padding: '$10',
  margin: '$10',
  borderRadius: '$xs',
  boxShadow: '$lg',
  transformStyle: 'preserve-3d'
})
