import { Meta } from '@storybook/react'
import Button from '.'

export default {
  title: 'Workspace/components/Button',
  component: Button
} as Meta<typeof Button>

export const Basic = {
  args: {
    text: 'Button'
  }
}
