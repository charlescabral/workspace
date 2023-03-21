/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Brand from '@/components/Brand'
import { HeaderMain, HeaderContent } from './style'
import { Container } from '@/ui/Structure'
import { useStore } from '@/contexts/store'
import { SocialProps } from '@/types'

const SwitchTheme = dynamic(() => import('@/components/SwitchTheme'), {
  ssr: false,
  suspense: true
})

export default function Header() {
  // const {
  //   context: { social }
  // } = useStore()

  // social.map(({ name }: SocialProps) => {
  //   // console.log('Header', name)
  // })

  return (
    <HeaderMain>
      <Container size="lg">
        <HeaderContent>
          <Brand />
          <Link href={'/blog'}>Blog</Link>
          <Suspense fallback={<div>Loading...</div>}>
            <SwitchTheme />
          </Suspense>
        </HeaderContent>
      </Container>
    </HeaderMain>
  )
}
