import { Meta } from '@storybook/react'
import Projects from '.'

export default {
  title: 'Workspace/components/Projects',
  component: Projects
} as Meta<typeof Projects>

export const Basic = {
  args: {
    text: 'Projects'
  }
}
