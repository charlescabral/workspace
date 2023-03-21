type Image = {
  url: string
  width: number
  height: number
  title: string
}

export type HeadProps = {
  title: string
  description: string
  image: Image
  keywords: string
}
