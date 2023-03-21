import { Highlight, Post } from './style'
import { Container } from '@/ui/Structure'

type Props = {
  content: string
}

export default function PostBody({ content }: Props) {
  return (
    <Container size={'sm'}>
      <Post>
        <Highlight dangerouslySetInnerHTML={{ __html: content }} />
      </Post>
    </Container>
  )
}
