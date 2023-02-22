import { Meta } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Workspace/components/Footer',
  component: Footer
} as Meta<typeof Footer>

export const Basic = {
  args: {
    text: 'Footer'
  }
}
