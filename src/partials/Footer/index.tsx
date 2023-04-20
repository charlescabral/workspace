import { useMemo, useState } from 'react'
import Link from 'next/link'

import { useStore } from '@/contexts/store'
import { Container, Row } from '@/ui/Structure'
import Sepatator from '@/ui/Structure/Separator'
import Typography from '@/ui/Typography'
import { BrandIcon } from '@/ui/Icons'

import {
  FooterMain,
  Sponsors,
  Social,
  LastRow,
  FirstRow,
  IconsLicenseCCbySA
} from './style'
import { useIsomorphicLayoutEffect } from '@/hooks'
import IconLink from './IconLink'
import { StoreProps, StoreDataProps } from '@/types'

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])
  const [store, setStore] = useState<StoreDataProps>()

  const { storeContext } = useStore()

  useIsomorphicLayoutEffect(() => {
    storeContext && setStore(storeContext)
  }, [storeContext])

  return (
    <FooterMain>
      <Sepatator position="top" color="footer" negative reverse climb />
      <Container size="md">
        <FirstRow>
          <Sponsors display="b">
            <Row>
              <Typography as="p" size="xs" className="subtitle" weight="bold">
                Orgulhosamente feito com
              </Typography>
            </Row>
            <Row className="sponsors">
              {store?.sponsors.map((prop: StoreProps, i: number) => (
                <IconLink key={i} {...prop} />
              ))}
            </Row>
          </Sponsors>
          <Social display="b">
            <Row>
              <Typography as="p" size="xs" className="subtitle" weight="bold">
                Contato
              </Typography>
            </Row>
            <Row className="social">
              {store?.social.map((prop: StoreProps, i: number) => (
                <IconLink key={i} {...prop} />
              ))}
            </Row>
          </Social>
        </FirstRow>
      </Container>
      <LastRow align="center" direction="col">
        <Sepatator position="top" color="footerLast" negative reverse climb />
        <BrandIcon
          size={24}
          fill="$brand"
          inlineStyle={{ marginBottom: '$6' }}
        />
        <Link
          href="https://creativecommons.org/licenses/"
          aria-label="Some rights reserved"
          target="_blank"
          style={{ display: 'inline-block' }}
        >
          <IconsLicenseCCbySA />
        </Link>
        <Typography as="p" size="xs" font="code">
          {year}
        </Typography>
      </LastRow>
    </FooterMain>
  )
}
