/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense } from 'react'
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
          <Suspense fallback={<div>Loading...</div>}>
            <SwitchTheme />
          </Suspense>
        </HeaderContent>
      </Container>
    </HeaderMain>
  )
}
