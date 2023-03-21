import { PartialsProps, TreeDataProps, ContentProps } from '@/types'
import Bio from '@/partials/Bio'
import Projects from '@/partials/Projects'
import Spotlight from '@/partials/Spotlight'
import Trajectory from '@/partials/Trajectory'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { useState } from 'react'
import { getMdItem } from '@/lib'

export default function HomeTemplate({ partials, projects }: TreeDataProps) {
  const [partial, setPartial] = useState<PartialsProps>({})
  const bio = getMdItem('bio', partials) as ContentProps
  const trajectory = getMdItem('trajectory', partials) as ContentProps

  useIsomorphicLayoutEffect(() => {
    setPartial({ bio, trajectory })
  }, [bio, trajectory])

  return (
    partials && (
      <>
        <Spotlight />
        <Bio html={''} {...partial.bio} />
        <Trajectory html={''} {...partial.trajectory} />
        <Projects projects={projects} />
      </>
    )
  )
}
