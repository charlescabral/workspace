import { useRef } from 'react'

import { Container } from '@/ui/Structure'
import Button from '@/ui/Button'
import Sepatator from '@/ui/Structure/Separator'
import { ArrowLeft, Light } from '@/ui/Icons'

import AnimateSplitText from '@/components/AnimateSplitText'
import Typography from '@/ui/Typography'
import Texture from '@/components/Texture'

import { PartialsProps } from '@/types'
import { partialValue } from '@/lib'
import { Section, Wrapper, Infos, Action } from './style'
import Devices from './Devices'

export default function Spotlight({ projects }: PartialsProps) {
  const bg = useRef<HTMLDivElement>(null)
  const jobs = projects.filter((project) => {
    const { data } = partialValue(project)
    return data.spotlight
  })

  return (
    <Section ref={bg}>
      <Texture />

      <Sepatator position="top" color="bg" climb />
      <Container size="md">
        <Wrapper>
          <Infos>
            <Typography as="h2">
              <AnimateSplitText text="Faço sites ✌🏼" />
              <AnimateSplitText text="para internet" />
            </Typography>
            <Action>
              <Button color="primary" rounded size="sm" icon="r">
                Meu Currículo
                <ArrowLeft
                  size={10}
                  classname="icon"
                  inlineStyle={{ marginTop: '$1' }}
                />
              </Button>
              <Button color="primary" rounded size="sm" flat icon="lr">
                <Light fill={`#235C0D`} size={32} classname="icon" />
                Vamos Trocar Idéias?
                <ArrowLeft
                  size={10}
                  classname="icon"
                  inlineStyle={{ marginTop: '$1' }}
                />
              </Button>
            </Action>
          </Infos>

          <Devices jobs={jobs} />
        </Wrapper>
      </Container>
      <Sepatator position="bottom" color="bg" climb />
    </Section>
  )
}
