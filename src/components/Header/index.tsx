import { BrandIcon } from '@/icons'
import dynamic from 'next/dynamic'
import { HeaderMain } from './style'

const SwitchTheme = dynamic(() => import('@/components/SwitchTheme'), {
  ssr: false
})

export default function Header() {
  return (
    <HeaderMain>
      <BrandIcon size={68} fill={'gray'} />
      <SwitchTheme />
    </HeaderMain>
  )
}
