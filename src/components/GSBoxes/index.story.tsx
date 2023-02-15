import { Meta } from '@storybook/react'
import GSBoxes from '.'

export default {
  title: 'GSBoxes',
  component: GSBoxes
} as Meta<unknown>

export const Basic = {
  args: {
    text: 'GSBoxes'
  }
}
