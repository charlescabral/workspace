// import Image from 'next/image'
import { MarkdownProps } from '@/types'
import { ProjectItem, Project } from './style'

export default function ProjectCard({ html, data }: MarkdownProps) {
  const { title } = data
  console.log('ProjectCard', html)

  return (
    <ProjectItem>
      <Project>{title}</Project>
    </ProjectItem>
  )
}
