import { Container, Row, Col } from '@/ui/Structure'

type ErrorPageProps = {
  code: number
}

export default function ErrorPage({ code }: ErrorPageProps) {
  return (
    <Container size="xs">
      <Row align="center" direction="col" css={{ minHeight: '50vh' }}>
        <h1>Página não encontrada</h1>
        <h2>{code}</h2>
      </Row>
    </Container>
  )
}
