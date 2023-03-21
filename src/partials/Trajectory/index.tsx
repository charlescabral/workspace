import Typography from '@/components/Typography'
import { MarkdownProps } from '@/types'
import { Container } from '@/ui/Structure'
import { Article } from './style'

export default function Trajectory({ html, data }: MarkdownProps) {
  const { title } = data
  return (
    <Article>
      <Container size="xs">
        <Typography as={'h3'}>{title}</Typography>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Article>
  )
}
