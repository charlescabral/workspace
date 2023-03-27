import { useState } from 'react'
import { getMdItem } from '@/lib'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { PartialProps, MarkdownProps, PageProps } from '@/types'

import Bio from '@/partials/Bio'
import Projects from '@/partials/Projects'
import Spotlight from '@/partials/Spotlight'
import Trajectory from '@/partials/Trajectory'

export default function HomeTemplate({
  partials,
  trajectory,
  projects
}: PageProps) {
  const [partial, setPartial] = useState<PartialProps>()

  const bio = getMdItem('bio', partials) as MarkdownProps
  // const trajectory = getMdItem('trajectory', partials) as MarkdownProps

  useIsomorphicLayoutEffect(() => setPartial({ bio }), [bio])

  return partial ? (
    <>
      <Spotlight />
      <Bio {...partial.bio} />
      <Trajectory trajectory={trajectory} />
      <Projects projects={projects} />
    </>
  ) : (
    <></>
  )
}
