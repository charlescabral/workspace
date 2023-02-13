import { Meta } from '@storybook/react'
import Intro from '.'

export default {
  title: 'Intro',
  component: Intro
} as Meta<unknown>

export const Basic = {
  args: {
    text: 'Intro'
  }
}
