import { PartialProps, MarkdownProps, PageProps } from '@/types'
import Bio from '@/partials/Bio'
import Projects from '@/partials/Projects'
import Spotlight from '@/partials/Spotlight'
import Trajectory from '@/partials/Trajectory'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { useState } from 'react'
import { getMdItem } from '@/lib'

export default function HomeTemplate({ partials, projects }: PageProps) {
  const [partial, setPartial] = useState<PartialProps>()

  const bio = getMdItem('bio', partials) as MarkdownProps
  const trajectory = getMdItem('trajectory', partials) as MarkdownProps

  useIsomorphicLayoutEffect(
    () => setPartial({ bio, trajectory }),
    [bio, trajectory]
  )

  return partial ? (
    <>
      <Spotlight />
      <Bio {...partial.bio} />
      <Trajectory {...partial.trajectory} />
      <Projects projects={projects} />
    </>
  ) : (
    <></>
  )
}
