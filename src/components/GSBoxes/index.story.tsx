import { Meta } from '@storybook/react'
import GSBoxes from '.'

export default {
  title: 'Workspace/components/GSBoxes',
  component: GSBoxes
} as Meta<typeof GSBoxes>

export const Basic = {
  args: {
    text: 'GSBoxes'
  }
}
