import { ReactNode } from 'react'
import { CSS } from '@stitches/react'
import { Browser, Screen, Field } from './style'
import { SearchIcon } from '@/ui/Icons'

type DesktopProps = {
  children?: ReactNode
  text?: string
  css?: CSS
}

export default function Desktop({ children, text, css }: DesktopProps) {
  return (
    <Browser css={{ ...css }}>
      <Field>
        <SearchIcon size={14} fill="$gray8" classname="icon" />
        {text ? text : 'site.com'}
      </Field>
      <Screen>{children}</Screen>
    </Browser>
  )
}
