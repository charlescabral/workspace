import dynamic from 'next/dynamic'
import Brand from '@/components/Brand'
import { HeaderMain, HeaderContent } from './style'
import { Container } from '@/ui/Structure'

const SwitchTheme = dynamic(() => import('@/components/SwitchTheme'), {
  ssr: false,
  suspense: true
})

export default function Header() {
  return (
    <HeaderMain>
      <Container size="md">
        <HeaderContent>
          <Brand />
          <SwitchTheme />
        </HeaderContent>
      </Container>
    </HeaderMain>
  )
}
