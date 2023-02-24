import { Meta } from '@storybook/react'
import Header from '.'

export default {
  title: 'Workspace/components/Header',
  component: Header
} as Meta<typeof Header>

export const Basic = {
  args: {
    text: 'Header'
  }
}
