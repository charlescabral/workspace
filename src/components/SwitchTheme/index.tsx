import { useTheme } from '@/providers/theme'
import { Button, Switcher } from './style'
import { yellow, purpleDark } from '@/styles/colors'
import { playFile } from '@/helpers'
import Icon from './Icon'

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme()
  const { yellow10 } = yellow
  const { purple8 } = purpleDark

  const isLight = theme === 'light'

  const handleColorChange = () => {
    setTheme(isLight ? 'dark' : 'light')
    playFile(isLight ? '/mp3/dark.mp3' : '/mp3/light.mp3')
  }

  return (
    <Switcher onClick={handleColorChange} checked={isLight}>
      <Button>
        <Icon size={22} colorSun={yellow10} colorMoon={purple8} />
      </Button>
    </Switcher>
  )
}
