/* eslint-disable @typescript-eslint/no-unused-vars */
import { FadeInOut } from '@/animations'
import { PageProps } from '@/types'
import { Container } from '@/ui/Structure'

export default function BlogTemplate(_props: PageProps) {
  return (
    <FadeInOut>
      <Container size={'lg'}>Blog</Container>
    </FadeInOut>
  )
}
