/* eslint-disable react/no-children-prop */

import { MarkdownProps, PartialsProps } from '@/types'
import { Container } from '@/ui/Structure'
import { getMdData } from '@/lib'

import Typography from '@/components/Typography'
import ProjectCard from './ProjectCard'

import { ProjectsMain, ProjectsList } from './style'

export default function Projects({ projects }: PartialsProps) {
  return (
    <ProjectsMain>
      <Container size="md" pdx2>
        <Container size="xs">
          <Typography as={'h3'}>Alguns Projetos</Typography>
        </Container>
        <ProjectsList>
          {projects.map((projectProps: MarkdownProps, i: number) => (
            <ProjectCard key={i} {...getMdData(projectProps)} />
          ))}
        </ProjectsList>
      </Container>
    </ProjectsMain>
  )
}
