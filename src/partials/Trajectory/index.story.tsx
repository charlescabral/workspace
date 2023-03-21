import { Meta } from '@storybook/react'
import Trajectory from '.'

export default {
  title: 'Workspace/components/Trajectory',
  component: Trajectory
} as Meta<typeof Trajectory>

export const Basic = {
  args: {
    text: 'Trajectory'
  }
}
