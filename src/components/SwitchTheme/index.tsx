import { useTheme } from '@/providers/theme'
import { Button } from './style'

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme()
  const handleColorChange = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return <Button onClick={handleColorChange}>Change Theme </Button>
}

export default SwitchTheme
