import { FC } from 'react'
import dynamic from 'next/dynamic'
import { HeaderProps } from './type'
import { HeaderMain } from './style'

const SwitchTheme = dynamic(() => import('@/components/SwitchTheme'), {
  ssr: false
})

const Header: FC<HeaderProps> = () => {
  return (
    <HeaderMain>
      <SwitchTheme />
    </HeaderMain>
  )
}

export default Header
