import { Suspense } from 'react'
import dynamic from 'next/dynamic'
// import Link from 'next/link'
import { HeaderMain } from './style'

const SwitchTheme = dynamic(() => import('@/components/SwitchTheme'), {
  ssr: false,
  suspense: false
})

export default function Header() {
  return (
    <HeaderMain>
      {/* <Link href={`/`}>Home</Link>
      <Link href={`/blog`}>Blog</Link> */}

      <Suspense fallback={<div>Loading...</div>}>
        <SwitchTheme />
      </Suspense>
    </HeaderMain>
  )
}
