import Image from 'next/image'
import { styled } from '@/styles'
import Button from '@/ui/Button'
import { Col, Row } from '@/ui/Structure'

export const ProjectsMain = styled('section', {
  minWidth: '100%'
})

export const ProjectsList = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  flexDirection: 'row',
  position: 'relative'
})

export const ProjectItem = styled('div', {
  display: 'flex',
  minHeight: '25rem',
  maxWidth: '100%',
  minWidth: '$sizes$project',
  padding: '$12 0 $20 $10'
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
  transition: '$button',
  zIndex: '$1',
  transformStyle: 'preserve-3d',
  cursor: 'pointer',

  '&:active': {
    transform: 'translate(0, .25em)'
  },

  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '$xl',
    zIndex: '$2'
  },

  variants: {
    actived: {
      true: {
        boxShadow: '$xl',
        zIndex: '$2'
      }
    }
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
  right: -40,
  bottom: -10,
  borderRadius: '$sm',
  transformStyle: 'preserve-3d',
  filter: 'grayscale(1)',
  opacity: 0.6
})

export const Infos = styled(Row, {
  zIndex: '$2',
  backgroundColor: '$cardBg',
  position: 'absolute',
  width: 290,
  height: 150,
  overflow: 'hidden',
  margin: '$10',
  borderRadius: '$xs',
  boxShadow: '$lg',
  transformStyle: 'preserve-3d',

  h5: {
    marginBottom: '$10'
  },

  p: {
    lineHeight: '$md'
  }
})

export const Details = styled(Row, {
  backgroundColor: '$bgCard',
  padding: '$10',
  width: '100%',
  maxHeight: '100%',
  minWidth: '200px',
  overflow: 'hidden',

  variants: {
    isOpen: {
      true: {
        width: '42%'
      }
    }
  }
})

export const ShortDetail = styled(Row, {})

export const FullDetails = styled(Row, {
  opacity: 0,
  visibility: 'hidden',
  maxWidth: '100%'
})

export const ActionBar = styled(Row, {
  position: 'absolute',
  bottom: -100,
  left: 0,
  zIndex: '$max',
  width: '100%',
  overflow: 'hidden',
  minWidth: '288px',
  padding: '$10 $10',
  pointerEvents: 'none',

  '&::before': {
    content: '',
    size: '110%',
    background: 'transparent',
    backgroundImage: 'linear-gradient(360deg,rgba(0,0,0,.50),transparent)',
    backdropFilter: 'blur(0.75rem)',
    position: 'absolute',
    left: -4,
    bottom: -4
  }
})

export const Tools = styled(Col, {})

export const Sample = styled(Row, {
  overflow: 'hidden',
  width: '58%',
  maxHeight: '286px',
  position: 'relative',
  zIndex: '$1'
})

export const Description = styled(Col, {
  width: '100%',

  p: {
    lineHeight: '$base',
    fontSize: '$xs'
  }
})

export const Action = styled(Button, {
  size: '$20',
  position: 'absolute',
  top: 0,
  bottom: 0,
  zIndex: '$max',
  margin: 'auto',
  paddingBottom: '$1',
  // opacity: 0,
  // visibility: 'hidden',

  variants: {
    show: {
      true: {
        visibility: 'visible',
        opacity: 1
      }
    },
    side: {
      left: {
        left: -88
      },
      right: {
        right: -88
      }
    }
  }
})
