import { StoreDataProps } from '.'

export type PartialImageProps = {
  desktop: string
  phone: string
}

export type PartialDataProps = {
  title: string
  url?: string
  images?: PartialImageProps
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
  store: StoreDataProps
  id: string
}
