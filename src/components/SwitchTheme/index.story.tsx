import { Meta } from '@storybook/react'
import SwitchTheme from '.'

export default {
  title: 'Workspace/components/SwitchTheme',
  component: SwitchTheme
} as Meta<typeof SwitchTheme>

export const Basic = {
  args: {
    text: 'SwitchTheme'
  }
}
