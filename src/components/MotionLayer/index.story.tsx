import { Meta } from '@storybook/react'
import MotionLayer from '.'

export default {
  title: 'MotionLayer',
  component: MotionLayer
} as Meta<typeof MotionLayer>

export const Basic = {
  args: {
    text: 'MotionLayer'
  }
}
