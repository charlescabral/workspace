import { styled } from '@/styles'

export const Button = styled('button', {
  backgroundColor: '#0c82dc',
  padding: '2rem 6rem',
  transition: 'all 150ms cubic-bezier(.175, .885, .32, 1.275)',

  '&:hover': {
    transform: 'translate(0, .25em)'
  },

  '&:active': {
    transform: 'translate(0, .75em)'
  }
})
