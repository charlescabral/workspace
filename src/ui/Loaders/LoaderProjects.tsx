import { Container } from '@/ui/Structure'
import { Square } from './Figures'

interface LoaderProjectsProps {
  columns: number
  width: number
  heigth: number
  padding: number
}

export default function LoaderProjects({
  columns,
  width,
  heigth,
  padding
}: LoaderProjectsProps) {
  return (
    <Container size="md">
      <Square
        columns={columns}
        width={width}
        height={heigth}
        padding={padding}
        marginBottom={padding}
      />
    </Container>
  )
}
