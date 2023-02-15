import { Meta } from '@storybook/react'
import Button from '.'
import { ButtonProps } from './type'

export default {
  title: 'Button',
  component: Button
} as Meta<ButtonProps>

export const Basic = {
  args: {
    text: 'Button'
  }
}
