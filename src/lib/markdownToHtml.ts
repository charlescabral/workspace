import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import hightlight from './highlight'

export default async function markdownToHtml(md: string) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(gfm)
    .use(hightlight)
    .process(md)
  return result.toString()
}
