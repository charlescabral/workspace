import { useMemo } from 'react'
import { FooterMain } from './style'

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <FooterMain>
      <code>{year}</code>
    </FooterMain>
  )
}
