import { markdownToHtml } from '@/lib'
import { DataMdProps, MdProps } from '@/types'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

export function getExistingFiles(partials: string[], dir: string) {
  const files = getFiles(dir)
  const names = files.map((file) => file.replace(/\.mdx$/, ''))

  return partials.length
    ? partials
        .map((partial: string) => names.indexOf(partial) > -1 && partial)
        .filter(Boolean)
    : names
}

export function getFiles(dir: string) {
  return fs.readdirSync(dir)
}

const formatData = ({ file, data, content }: DataMdProps): Promise<MdProps> => {
  return new Promise((resolve) => {
    markdownToHtml(content).then((html: string) =>
      resolve({ [file]: { data, html } } as MdProps)
    )
  })
}

export async function getMarkdownContent(folder: string, files: string[] = []) {
  const dir = join(process.cwd(), `content/${folder}`)
  const existingFiles = getExistingFiles(files, dir)

  const readFiles = async () =>
    await Promise.all(
      existingFiles.map(async (file) => {
        const fullPath = join(dir, `${file}.mdx`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return await formatData({ file, data, content } as DataMdProps)
      })
    )

  return await readFiles()
}

export * from './posts'
