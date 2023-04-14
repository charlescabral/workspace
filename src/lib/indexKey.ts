import { MarkdownProps } from '@/types'

export default function indexKey(props: MarkdownProps) {
  return Number(Object.keys(props))
}
