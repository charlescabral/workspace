import { MarkdownProps } from '@/types'

export default function partialValue(props: MarkdownProps) {
  return Object.values(props)[0]
}
