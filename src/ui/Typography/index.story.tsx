import { Meta } from '@storybook/react'
import Typography from '.'
import { TypographyProps } from './type'

export default {
  title: 'Typography',
  component: Typography
} as Meta<TypographyProps>

export const Basic = {
  args: {
    text: 'Typography'
  }
}
