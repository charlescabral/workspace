import Image from 'next/image'
import { styled } from '@/styles'
import { Row } from '@/ui/Structure'

export const Article = styled('div', {
  paddingBottom: '$40'
})

export const StepsList = styled('div', {
  p: { margin: 0 }
})

export const StepItem = styled(Row, {
  paddingTop: '$8',

  '&:hover': {
    '& .overflowLimit': {
      opacity: 1
    }
  },

  '.overflowLimit': {
    opacity: 0,

    '&::before': {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%',
      height: '100%',
      content: '',
      opacity: 0.4,
      maskImage: `linear-gradient(145deg, rgba(0,0, 0,0) 50%, rgba(0,212,255,1) 100%)`
    }
  }
})

export const FloatBrand = styled(Image, {
  position: 'absolute',
  zIndex: 0,
  right: 140,
  bottom: -160,
  opacity: 1,
  borderRadius: '$rounded',
  boxShadow: '$hirer'
})
