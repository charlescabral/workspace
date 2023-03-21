// import Image from 'next/image'
import { ProjectCardProps } from './type'
import { ProjectItem, Project } from './style'

export default function ProjectCard(props: ProjectCardProps) {
  console.log(props)

  return (
    <ProjectItem>
      <Project>{/* <Image alt={title} fill={true} src={phone} /> */}</Project>
    </ProjectItem>
  )
}
