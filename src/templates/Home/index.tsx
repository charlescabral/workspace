import { FC } from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { HomeProps } from './type'
import { BrandIcon } from '@/icons'
import { colors } from '@/styles/colors'
import { Main } from './style'
import { Wrapper } from '@/components/Commons'

const HomeTemplate: FC<HomeProps> = () => {
  const { $$gray02 } = colors
  return (
    <Wrapper>
      <Header />
      <Main>
        <BrandIcon size={68} fill={$$gray02} />
      </Main>
      <Footer />
    </Wrapper>
  )
}
export default HomeTemplate
