import dynamic from 'next/dynamic'
import { HeaderMain } from './style'

const SwitchTheme = dynamic(() => import('@/components/SwitchTheme'), {
  ssr: false
})

export default function Header() {
  return (
    <HeaderMain>
      <SwitchTheme />
    </HeaderMain>
  )
}
