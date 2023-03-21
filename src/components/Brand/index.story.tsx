import { Meta } from '@storybook/react'
import Brand from '.'

export default {
  title: 'Brand',
  component: Brand
} as Meta<typeof Brand>

export const Basic = {
  args: {
    text: 'Brand'
  }
}
