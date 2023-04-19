import { StoreDataProps } from '.'

export type PartialImageProps = {
  desktop: string
  deskEntire?: string
  phone: string
  card: string
}

export type PartialDataProps = {
  title: string
  url?: string
  image: PartialImageProps
  company?: string
  isOnline?: boolean
  isIntra?: boolean
  color?: string
  business?: string
  brand?: string
  entrance?: number
  index?: number
  spotlight?: boolean
  exit?: number
  link: string
  projects?: string[]
  type?: string
  hirer?: string
  client?: string
  time?: string
  design?: string
  designLink?: string
  role?: string
  stack?: string[]
}

export interface MarkdownProps {
  html: string
  data: PartialDataProps
}

export type PartialsProps = {
  [key: string]: MarkdownProps[]
}

export type PartialProps = {
  [key: string]: MarkdownProps
}

export interface DataMdProps {
  file: string
  data: PartialDataProps
  content: string
  html: string
}

export type PageProps = {
  partials: PartialsProps[]
  projects: MarkdownProps[]
  trajectory: MarkdownProps[]
  store: StoreDataProps
  id: string
}
