import { StoreProps } from '@/types'
import { styled } from '@/styles'
import Image from 'next/image'
import Link from 'next/link'

const WrapperLink = styled(Link, {
  size: '28px',
  display: 'inline-block',
  position: 'relative',
  opacity: 0.6,
  transition: '$default',

  '&:hover': {
    opacity: 1
  },

  '> img': {
    minWidth: '100%'
  },

  '&#vercel': {
    minWidth: '120px'
  }
})

export default function IconLink({ link, icon, name }: StoreProps) {
  return (
    <WrapperLink href={link} id={icon}>
      <Image alt={name} fill={true} src={`/img/icons/${icon}.svg`} />
    </WrapperLink>
  )
}
