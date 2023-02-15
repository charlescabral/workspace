import { css } from '@/styles'

export const button = css('button', {
  backgroundColor: '#0c82dc',
  padding: '2rem 6rem',
  textDecoration: 'none',
  'leading-trim': 'both',
  'text-edge': 'cap alphabetic',
  appearance: 'none',
  border: 0,
  transformStyle: 'preserve-3d',
  transition: 'all 150ms cubic-bezier(.175, .885, .32, 1.275)',

  '&:hover': {
    transform: 'translate(0, .25em)'
  },

  '&:active': {
    transform: 'translate(0, .75em)'
  }
})
