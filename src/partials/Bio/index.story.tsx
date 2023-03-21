import { Meta } from '@storybook/react'
import Bio from '.'

export default {
  title: 'Workspace/components/Bio',
  component: Bio
} as Meta<typeof Bio>

export const Basic = {
  args: {
    text: 'Bio'
  }
}
