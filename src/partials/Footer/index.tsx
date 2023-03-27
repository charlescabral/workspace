import { Container, Row } from '@/ui/Structure'
import Link from 'next/link'
import { useMemo } from 'react'
import { FooterMain, IconsLicenseCCbySA } from './style'
import Sepatator from '@/ui/Structure/Separator'

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <FooterMain>
      <Sepatator position="top" color="footer" negative reverse climb />
      <Container size="md">
        <Row css={{ my: '$10' }}>teste</Row>
        <Row align="center" direction="col">
          <Link
            href="https://creativecommons.org/licenses/"
            aria-label="Some rights reserved"
            target="_blank"
            style={{ display: 'inline-block' }}
          >
            <IconsLicenseCCbySA />
          </Link>
          <code style={{ margin: '1rem 0' }}>{year}</code>
        </Row>
      </Container>
    </FooterMain>
  )
}
