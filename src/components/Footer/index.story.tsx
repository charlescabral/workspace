import { Meta } from '@storybook/react'
import Footer from '.'
import { FooterProps } from './type'

export default {
  title: 'Workspace/components/Footer',
  component: Footer
} as Meta<FooterProps>

export const Basic = {
  args: {
    text: 'Footer'
  }
}
