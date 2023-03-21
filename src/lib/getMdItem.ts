import { PartialsProps, MarkdownProps } from '@/types'

export default function getMdItem(key: string, arr: PartialsProps[]) {
  try {
    const [first] = arr.filter((item: PartialsProps) => item[key])
    const values = Object.values(first)[0]
    return values as unknown as MarkdownProps
  } catch (error) {
    console.error(error)
  }
}
