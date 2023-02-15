import * as Switch from '@radix-ui/react-switch'
import { useTheme } from '@/providers/theme'
import { WrapSwitch } from './style'

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme()
  const handleColorChange = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <WrapSwitch>
      <Switch.Root className="SwitchRoot" onClick={handleColorChange}>
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </WrapSwitch>
  )
  // <Button onClick={handleColorChange}>Change Theme </Button>
}

export default SwitchTheme
