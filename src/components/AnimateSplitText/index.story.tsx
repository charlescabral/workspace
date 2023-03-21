import { Meta } from '@storybook/react'
import AnimateSplitText from '.'
import { AnimateSplitTextProps } from './type'

export default {
  title: 'AnimateSplitText',
  component: AnimateSplitText
} as Meta<AnimateSplitTextProps>

export const Basic = {
  args: {
    text: 'AnimateSplitText'
  }
}
