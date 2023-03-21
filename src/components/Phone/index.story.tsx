import { Meta } from '@storybook/react'
import Phone from '.'

export default {
  title: 'Phone',
  component: Phone
} as Meta<typeof Phone>

export const Basic = {
  args: {
    text: 'Phone'
  }
}
