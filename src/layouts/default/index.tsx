import { PropsWithChildren } from 'react'

import TransitionProvider from '@/contexts/animation'
import TransitionLayout from '@/contexts/animation/layout'

import { Main, Wrapper } from '@/ui/Structure'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Default({ children }: PropsWithChildren) {
  return (
    <TransitionProvider>
      <TransitionLayout>
        <Wrapper>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Wrapper>
      </TransitionLayout>
    </TransitionProvider>
  )
}
