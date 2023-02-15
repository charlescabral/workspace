import { styled } from '@/styles'
import { useTheme } from 'next-themes'

const Button = styled('button', {})

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme()
  const handleColorChange = () => setTheme(theme === 'light' ? 'dark' : 'light')
  return <Button onClick={handleColorChange}>Change Theme </Button>
}

export default SwitchTheme

// import Spotlight f
