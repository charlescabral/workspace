import { BrandIcon } from '@/icons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { Main } from './style'
import { Wrapper } from '@/components/Commons'

export default function HomeTemplate() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <BrandIcon size={68} fill={'hsl(207, 5.6%, 31.6%)'} />
      </Main>
      <Footer />
    </Wrapper>
  )
}
