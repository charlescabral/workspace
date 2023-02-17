import { Meta } from '@storybook/react'
import Spotlight from '.'

export default {
  title: 'Workspace/components/Spotlight',
  component: Spotlight
} as Meta<typeof Spotlight>

export const Basic = {
  args: {
    text: 'Spotlight'
  }
}
