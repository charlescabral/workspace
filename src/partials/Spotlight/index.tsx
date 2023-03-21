import { useRef } from 'react'
import Image from 'next/image'

import { Container } from '@/ui/Structure'
import Button from '@/ui/Button'
import { ArrowLeft, Light } from '@/ui/Icons'

import Desktop from '@/components/Desktop'
import Phone from '@/components/Phone'
import AnimateSplitText from '@/components/AnimateSplitText'
import Typography from '@/components/Typography'

import { Section, Wrapper, Infos, Action, BgGradient, Jobs } from './style'

export default function Spotlight() {
  const bg = useRef<HTMLDivElement>(null)

  return (
    <Section>
      <BgGradient ref={bg} />
      <Container size="lg">
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
            <Phone css={{ position: 'absolute', left: '-10%', bottom: '-10%' }}>
              <Image src="/img/phone.png" alt="Studio V" fill={true} />
            </Phone>
          </Jobs>
        </Wrapper>
      </Container>
    </Section>
  )
}
