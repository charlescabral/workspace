import { Meta } from '@storybook/react'
import Desktop from '.'

export default {
  title: 'Desktop',
  component: Desktop
} as Meta<typeof Desktop>

export const Basic = {
  args: {
    text: 'Desktop'
  }
}
