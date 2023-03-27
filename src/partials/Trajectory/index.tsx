import { getMdData } from '@/lib'
import { MarkdownProps, PartialsProps } from '@/types'
import { Container } from '@/ui/Structure'
import { Article, StepsList } from './style'
import StepRow from './StepRow'
import Typography from '@/components/Typography'

const indexKey = (props: MarkdownProps) => Number(Object.keys(props))

export default function Trajectory({ trajectory }: PartialsProps) {
  return (
    <Article>
      <Container size="xs">
        <Typography as="h3">Trajetória</Typography>
        <hr />
        <StepsList>
          {trajectory
            .sort((next: MarkdownProps, curr: MarkdownProps) =>
              indexKey(next) > indexKey(curr) ? -1 : 1
            )
            .map((stepProps: MarkdownProps, i: number) => (
              <StepRow key={i} {...getMdData(stepProps)} />
            ))}
        </StepsList>
      </Container>
    </Article>
  )
}
