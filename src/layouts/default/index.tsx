import { PropsWithChildren } from 'react'
// import { Lenis, useLenis } from '@/contexts/lenis'
// import { Router } from 'next/router'

import TransitionProvider from '@/contexts/animation'
import TransitionLayout from '@/contexts/animation/layout'

import { Main, Wrapper } from '@/ui/Structure'
import Header from '@/partials/Header'
import Footer from '@/partials/Footer'

// import Modal, { ModalRoot } from '@/partials/Projects/Modal'
// import { Cursor } from '@/ui/Cursor'

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
