import { PropsWithChildren } from 'react'

import TransitionProvider from '@/contexts/animation'
import TransitionLayout from '@/contexts/animation/layout'

import { Main, Wrapper } from '@/ui/Structure'
import Header from '@/partials/Header'
import Footer from '@/partials/Footer'
// import { Cursor } from '@/ui/Cursor'

export default function Default({ children }: PropsWithChildren) {
  return (
    <TransitionProvider>
      <TransitionLayout>
        <Wrapper>
          <Header />
          <Main>{children}</Main>
          <Footer />
          {/* <Cursor /> */}
        </Wrapper>
      </TransitionLayout>
    </TransitionProvider>
  )
}
