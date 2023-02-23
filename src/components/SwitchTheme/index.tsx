import { useTheme } from '@/providers/theme'
import { Button, Switcher } from './style'
import { yellow } from '@/styles/colors'
import { Howl, Howler } from 'howler'
import Icon from './Icon'

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme()
  const { yellow10 } = yellow
  const darkSound = new Howl({ src: ['/mp3/dark.mp3'] })
  const lightSound = new Howl({ src: ['/mp3/light.mp3'] })
  Howler.volume(0.5)

  const isLight = theme === 'light'

  const handleColorChange = () => {
    setTheme(isLight ? 'dark' : 'light')
    isLight ? darkSound.play() : lightSound.play()
  }

  return (
    <Switcher onClick={handleColorChange} checked={isLight}>
      <Button>
        <Icon size={22} colorSun={yellow10} colorMoon="white" />
      </Button>
    </Switcher>
  )
}
