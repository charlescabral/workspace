/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-children-prop */
import { ProjectCardProps } from './type'
import { Container } from '@/ui/Structure'
import { ProjectsMain, ProjectsList } from './style'
import ProjectCard from './ProjectCard'
// import { data } from '@/data'

export default function Projects({ projects }: any) {
  return (
    <ProjectsMain>
      <Container size="lg">
        <Container size="xs">
          {/* <Markdown md={`## Alguns Projetos`} /> */}
        </Container>
        <ProjectsList>
          {projects.map((project: ProjectCardProps, i: number) => (
            <ProjectCard key={i} {...project} />
          ))}
        </ProjectsList>
      </Container>
    </ProjectsMain>
  )
}
