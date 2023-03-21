import { MarkdownProps } from '@/types'
import { Container } from '@/ui/Structure'
import { Article } from './style'

export default function Bio({ html }: MarkdownProps) {
  return (
    <Article>
      <Container size="xs" dangerouslySetInnerHTML={{ __html: html }} />
    </Article>
  )
}
