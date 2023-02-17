import { Meta } from '@storybook/react'
import Hello from '.'
import { HelloProps } from './type'

export default {
  title: 'Workspace/components/Hello',
  component: Hello
} as Meta<HelloProps>

export const Basic = {
  args: {
    name: 'Teste'
  }
}
