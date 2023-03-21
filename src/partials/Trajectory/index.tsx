/* eslint-disable @typescript-eslint/no-explicit-any */
import Typography from '@/components/Typography'
import { PartialProps } from '@/types'
import { Container } from '@/ui/Structure'
import { useEffect, useState } from 'react'
import { Article } from './style'

export default function Trajectory({ html, data }: PartialProps) {
  const [infos, setInfos] = useState<any>()

  useEffect(() => {
    data && setInfos(data)
  }, [data])

  return (
    <Article>
      <Container size="xs">
        {infos && <Typography as={'h2'}>{infos.title}</Typography>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Article>
  )
}
