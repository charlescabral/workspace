import { useState } from 'react'

import Bio from '@/partials/Bio'
import Projects from '@/partials/Projects'
import Spotlight from '@/partials/Spotlight'
import Trajectory from '@/partials/Trajectory'

import { getMdItem } from '@/lib'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { PartialProps, MarkdownProps, PageProps } from '@/types'

export default function HomeTemplate({
  partials,
  trajectory,
  projects
}: PageProps) {
  const [partial, setPartial] = useState<PartialProps>()
  const bio = getMdItem('bio', partials) as MarkdownProps
  useIsomorphicLayoutEffect(() => setPartial({ bio }), [bio])

  return (
    <>
      <Spotlight projects={projects} />
      {partial && <Bio {...partial.bio} />}
      <Trajectory trajectory={trajectory} />
      <Projects projects={projects} />
    </>
  )
}
