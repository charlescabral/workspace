import Link from 'next/link'
import { styled } from '@/styles'

export const Wrap = styled(Link, {
  display: 'flex',
  alignItems: 'center'
})

export const H1 = styled('h1', {
  textAlign: 'left',
  margin: 0,
  paddingLeft: '$4',

  '.name, .career': {
    display: 'block',
    color: '$brand'
  },

  '.name': {
    marginBottom: '$1',
    fontSize: '$sm',
    letterSpacing: '$wider',
    textTransform: 'uppercase',

    '@md': {
      fontSize: '$lg'
    }
  },
  '.career': {
    fontWeight: '$light',
    fontSize: '10px',
    letterSpacing: '$widest',

    '@md': {
      fontSize: '$xs'
    }
  }
})
