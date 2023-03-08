import { Meta } from '@storybook/react'
import Loader from '.'
import { LoaderProps } from './type'

export default {
  title: 'Loader',
  component: Loader
} as Meta<LoaderProps>

export const Basic = {
  args: {
    text: 'Loader'
  }
}
