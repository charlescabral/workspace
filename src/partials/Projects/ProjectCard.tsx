// import Image from 'next/image'
import { MarkdownProps } from '@/types'
import { ProjectItem, Project } from './style'

export default function ProjectCard({ data: { title } }: MarkdownProps) {
  return (
    <ProjectItem>
      <Project>{title}</Project>
    </ProjectItem>
  )
}
