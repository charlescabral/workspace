import { MarkdownProps } from '@/types'
import { Container, Row } from '@/ui/Structure'
// import Presentation from '@/partials/Presentation'
import { Article } from './style'

export default function Bio({ html }: MarkdownProps) {
  return (
    <>
      <Article>
        <Container size="xs">
          <Row>
            {/* <Presentation /> */}
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Row>
        </Container>
      </Article>
    </>
  )
}
