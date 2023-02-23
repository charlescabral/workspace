/* eslint-disable react/no-unknown-property */
import { useMemo } from 'react'
import { FooterMain } from './style'

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <FooterMain>
      <code style={{ margin: '1rem 0' }}>{year}</code>
    </FooterMain>
  )
}
