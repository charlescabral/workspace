import { Meta } from '@storybook/react'
import Hello from '.'
import { HelloProps } from './types'

export default {
  title: 'Hello Component',
  component: Hello
} as Meta<HelloProps>

export const Basic = {
  args: {
    name: 'Teste'
  }
}
