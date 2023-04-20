import { PropsWithChildren } from 'react'

import TransitionProvider from '@/contexts/animation'
import TransitionLayout from '@/contexts/animation/layout'

import { Main, Wrapper } from '@/ui/Structure'
import Header from '@/partials/Header'
import Footer from '@/partials/Footer'

export default function Default(props: PropsWithChildren) {
  return (
    <TransitionProvider>
      <TransitionLayout>
        <Wrapper>
          <Header />
          <Main>{props.children}</Main>
          <Footer />
        </Wrapper>
      </TransitionLayout>
    </TransitionProvider>
  )
}
