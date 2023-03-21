/* eslint-disable react/no-children-prop */

import { Container } from '@/ui/Structure'
import { ProjectsMain, ProjectsList } from './style'
import ProjectCard from './ProjectCard'
import { MarkdownProps, PartialsProps } from '@/types'
import Typography from '@/components/Typography'

export default function Projects({ projects }: PartialsProps) {
  return (
    <ProjectsMain>
      <Container size="lg">
        <Container size="xs">
          <Typography as={'h3'}>Alguns Projetos</Typography>
        </Container>
        <ProjectsList>
          {projects.map((projectProps: MarkdownProps, i: number) => {
            const data = Object.values(projectProps)[0] as MarkdownProps
            return <ProjectCard key={i} {...data} />
          })}
        </ProjectsList>
      </Container>
    </ProjectsMain>
  )
}
