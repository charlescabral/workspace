import Link from 'next/link'
import { useMemo } from 'react'
import { FooterMain, IconsLicenseCCbySA } from './style'

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <FooterMain>
      <Link
        href="https://creativecommons.org/licenses/"
        aria-label="Some rights reserved"
        target="_blank"
      >
        <IconsLicenseCCbySA />
      </Link>

      <code style={{ margin: '1rem 0' }}>{year}</code>
    </FooterMain>
  )
}
