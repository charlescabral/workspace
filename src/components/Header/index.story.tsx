import { Meta } from '@storybook/react'
import Header from '.'
import { HeaderProps } from './type'

export default {
  title: 'Workspace/components/Header',
  component: Header
} as Meta<HeaderProps>

export const Basic = {
  args: {
    text: 'Header'
  }
}
