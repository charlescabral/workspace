import { useTheme } from '@/providers/theme'
import { Button, Switcher } from './style'
import { colors } from '@/styles/colors'
import { playFile } from '@/helpers'
import Icon from './Icon'

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme()
  const { $$purple, $$yellow } = colors

  const isLight = theme === 'light'

  const handleColorChange = () => {
    setTheme(isLight ? 'dark' : 'light')
    playFile(isLight ? '/mp3/dark.mp3' : '/mp3/light.mp3')
  }

  return (
    <Switcher onClick={handleColorChange} checked={isLight}>
      <Button>
        <Icon size={22} colorSun={$$yellow} colorMoon={$$purple} />
      </Button>
    </Switcher>
  )
}

export default SwitchTheme
