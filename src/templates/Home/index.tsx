import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { BrandIcon } from '@/icons'
import { Main } from './style'
import { Wrapper } from '@/components/Commons'
import { Container, Box } from './Elements'
import Colors from '@/components/StyleGuide/Colors'

export default function HomeTemplate() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <BrandIcon size={68} fill={'gray'} />
        <Colors />
        <Container>
          <Box css={{ boxShadow: '$xl' }} />
          <Box css={{ boxShadow: '$lg' }} />
          <Box css={{ boxShadow: '$md' }} />
          <Box css={{ boxShadow: '$sm' }} />
          <Box css={{ boxShadow: '$xs' }} />
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  )
}
