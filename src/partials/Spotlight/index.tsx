import { useRef } from 'react'
import Image from 'next/image'

import { Container } from '@/ui/Structure'
import Button from '@/ui/Button'
import { ArrowLeft, Light } from '@/ui/Icons'

import Desktop from '@/components/Desktop'
import Phone from '@/components/Phone'
import AnimateSplitText from '@/components/AnimateSplitText'
import Typography from '@/components/Typography'

import { Section, Wrapper, Infos, Action, Jobs } from './style'
import Sepatator from '@/ui/Structure/Separator'
import Texture from '@/components/Texture'
import Waves from '@/components/Waves'

export default function Spotlight() {
  const bg = useRef<HTMLDivElement>(null)

  return (
    <Section ref={bg}>
      <Texture />

      <Waves
        size={'100%'}
        duration={22}
        color="white"
        css={{
          opacity: 0.4,
          mixBlendMode: 'overlay',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          zIndex: 0
        }}
      />
      <Sepatator position="top" color="bg" climb />
      <Container size="md">
        <Wrapper>
          <Infos>
            <Typography as="h2">
              <AnimateSplitText text="Faço sites ✌🏼" />
              <AnimateSplitText text="para internet" />
            </Typography>
            <Action>
              <Button href={''} color="primary" rounded size="sm" icon="r">
                Meu Currículo
                <ArrowLeft
                  size={10}
                  classname="icon"
                  inlineStyle={{ marginTop: '$1' }}
                />
              </Button>
              <Button
                href={''}
                color="primary"
                rounded
                size="sm"
                flat
                icon="lr"
              >
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
          <Jobs>
            <Desktop>
              <Image src="/img/desktop.png" alt="Studio V" fill={true} />
            </Desktop>
            <Phone
              css={{
                position: 'absolute',
                left: 'calc(-$16)',
                bottom: 'calc(-$16)'
              }}
            >
              <Image src="/img/phone.png" alt="Studio V" fill={true} />
            </Phone>
          </Jobs>
        </Wrapper>
      </Container>
      <Sepatator position="bottom" color="bg" climb />
    </Section>
  )
}
