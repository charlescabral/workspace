/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import * as all from '@/styles/colors'
import { styled } from '@/styles'
import { useTheme } from '@/contexts/theme'
import { useEffect, useState } from 'react'

const Container = styled('div', {
  margin: '$16 0',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
})

const Section = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  margin: '$1',
  borderRadius: '$xs',
  overflow: 'hidden'
})

const Box = styled('div', { size: '3rem' })

export default function Colors() {
  const { theme } = useTheme()
  const [palette, setPalette] = useState([])

  const [light, dark] = Object.entries(all).reduce(
    ([light, dark], [name, colors]) => {
      const isDark = name.includes('Dark') || name.includes('white')
      const hsls = Object.entries(colors).map(([_, hsl]) => hsl) as never
      isDark ? dark.push(hsls) : light.push(hsls)
      return [light, dark]
    },
    [[], []]
  )

  useEffect(() => setPalette(theme === 'light' ? light : dark), [theme])

  return (
    <Container>
      <h2>Colors</h2>
      {palette.map((section: string[], i: number) => (
        <Section key={i}>
          {section.map((color: string, c: number) => (
            <Box key={c} css={{ backgroundColor: color }} />
          ))}
        </Section>
      ))}
    </Container>
  )
}
