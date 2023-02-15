import dynamic from 'next/dynamic'
import Hello from '@/components/Hello'
import { BrandIcon } from '@/components/SvgIcons/'
import { HomeProps } from './type'
import { Main } from './style'

const SwitchTheme = dynamic(() => import('@/components/SwitchTheme'), {
  ssr: false
})

export default function HomeTemplate({ name }: HomeProps) {
  return (
    <Main>
      <BrandIcon fill="gray" size={100} />
      <Hello name={name} />
      <SwitchTheme />
    </Main>
  )
}
