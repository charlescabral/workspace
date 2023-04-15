import Image from 'next/image'
import Link from 'next/link'
import { styled } from '@/styles'

type IconToolProps = {
  icon: string
}

const WrapperLink = styled(Link, {
  size: '24px',
  display: 'inline-block',
  position: 'relative',
  transition: '$default',
  marginLeft: '$4',
  pointerEvents: 'auto',

  '> img': {
    minWidth: '100%'
  },

  '&:hover': {
    opacity: 0.8
  }
})

export default function IconTool({ icon }: IconToolProps) {
  return (
    <WrapperLink href={''} id={icon}>
      <Image alt={'name'} fill={true} src={`/img/icons/${icon}.svg`} />
    </WrapperLink>
  )
}
