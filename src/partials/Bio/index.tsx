// import { DataMdProps } from '@/types'
import { PartialProps } from '@/types'
import { Container } from '@/ui/Structure'
import { Article } from './style'

export default function Bio({ html }: PartialProps) {
  return (
    <Article>
      <Container size="xs" dangerouslySetInnerHTML={{ __html: html }} />
    </Article>
  )
}
