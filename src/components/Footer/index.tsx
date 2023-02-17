import { FC, useMemo } from 'react'
import { FooterProps } from './type'
import { FooterMain } from './style'

const Footer: FC<FooterProps> = () => {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <FooterMain>
      <code>{year}</code>
    </FooterMain>
  )
}

export default Footer
