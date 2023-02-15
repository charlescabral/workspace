import { Meta } from '@storybook/react'
import Spotlight from '.'

export default {
  title: 'Spotlight',
  component: Spotlight
} as Meta<unknown>

export const Basic = {
  args: {
    text: 'Spotlight'
  }
}
