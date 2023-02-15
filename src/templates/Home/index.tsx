import { BrandIcon } from '@/components/SvgIcons/'
import { css } from '@/styles'
import dynamic from 'next/dynamic'
import { HomeProps } from './type'

const SwitchTheme = dynamic(() => import('@/components/SwitchTheme'), {
  ssr: false
})

const viewport = css({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
})

export default function HomeTemplate({ name }: HomeProps) {
  return (
    <main className={viewport()}>
      <SwitchTheme />
      {name}
      <BrandIcon fill="gray" size={100} />
    </main>
  )
}
