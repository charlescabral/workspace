import { MarkdownProps } from '@/types'
import { Container, Row } from '@/ui/Structure'
// import Presentation from '@/partials/Presentation'
import { Article, Avatar } from './style'

export default function Bio({ html }: MarkdownProps) {
  return (
    <>
      <Article>
        <Container size="sm">
          <Row
            align={{
              '@initial': 'center',
              '@md': 'start'
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Avatar
              width="100"
              height="100"
              src="/img/me.jpg"
              alt="Charles Cabral"
            />
          </Row>
        </Container>
      </Article>
    </>
  )
}
