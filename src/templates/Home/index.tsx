import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { Main } from './style'
import { Wrapper } from '@/components/Commons'

export default function HomeTemplate() {
  return (
    <Wrapper>
      <Header />
      <Main></Main>
      <Footer />
    </Wrapper>
  )
}
