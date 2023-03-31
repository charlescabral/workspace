import Image from 'next/image'
import { styled } from '@/styles'
import { Post } from '@/templates/Blog/components/style'

export const Article = styled(Post, {
  py: '$40',
  display: 'flex'
})

export const Avatar = styled(Image, {
  boxShadow: '$avatarBorder',
  borderRadius: '$rounded',
  my: '$10'
})
