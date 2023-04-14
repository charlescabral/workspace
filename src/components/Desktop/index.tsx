import { ReactNode } from 'react'
import { CSS } from '@stitches/react'
import { Browser, Screen, Field, Controls, Action } from './style'
import { Left, Right, SearchIcon } from '@/ui/Icons'

type DesktopProps = {
  children?: ReactNode
  text?: string
  css?: CSS
  prev?: () => void
  next?: () => void
}

export default function Desktop({
  children,
  text,
  css,
  next,
  prev
}: DesktopProps) {
  return (
    <Browser css={{ ...css }}>
      <Field>
        <Controls>
          <Action onClick={prev} icon="only" flat color="primary">
            <Right
              size={10}
              classname="icon"
              inlineStyle={{ marginTop: '$1' }}
            />
          </Action>
          <Action onClick={next} icon="only" flat color="primary">
            <Left
              size={10}
              classname="icon"
              inlineStyle={{ marginTop: '$1' }}
            />
          </Action>
        </Controls>
        <SearchIcon size={14} fill="$gray8" classname="icon" />
        {text ? text : 'site.com'}
      </Field>
      <Screen>{children}</Screen>
    </Browser>
  )
}
