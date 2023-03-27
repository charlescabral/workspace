import { MarkdownProps } from '@/types'

export default function getMdData(props: MarkdownProps) {
  return Object.values(props)[0]
}
