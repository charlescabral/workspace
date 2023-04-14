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
  // const lenis = useLenis({})

  // useEffect(() => {
  //   function onHashChangeStart(url: string) {
  //     url = '#' + url.split('#').pop()
  //     lenis.scrollTo(url)
  //   }

  //   Router.events.on('hashChangeStart', onHashChangeStart)

  //   return () => {
  //     Router.events.off('hashChangeStart', onHashChangeStart)
  //   }
  // }, [lenis])

  return (
    <TransitionProvider>
      <TransitionLayout>
        {/* <Lenis root> */}
        <Wrapper>
          <Header />
          <Main>{children}</Main>
          {/* <Cursor /> */}
          <Footer />
        </Wrapper>
        {/* </Lenis> */}
      </TransitionLayout>
    </TransitionProvider>
  )
}
