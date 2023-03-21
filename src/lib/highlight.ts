/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { lowlight } from 'lowlight/lib/all.js'
import { visit } from 'unist-util-visit'
import type { Node } from 'unist'
import { Data } from '@/types'

export default function highlight() {
  return (tree: Node<Data>) => {
    visit(tree, 'code', (node: any) => {
      let { data, lang } = node

      if (!data) {
        data = {}
        node.data = data
      }

      const props = data.hProperties || (data.hProperties = {})

      data.hChildren = lowlight.highlight(lang, node.value).children

      props.className = [
        'hljs',
        ...(Array.isArray(props.className) ? props.className : []),
        'language-' + lang
      ]
    })
  }
}
