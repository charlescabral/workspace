/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TreeNode {
  [key: string]: any
}

export interface Point {
  line: number
  column: number
  offset?: number | undefined
}

export interface Position {
  start: Point
  end: Point
  indent?: number[] | undefined
}

export interface Tree {
  type: string
  lang: string
  meta: string
  value: string
  position: Position
}

export interface Data {
  [key: string]: TreeNode
}

export type StringProps = {
  [key: string]: string
}

export type TreeDataProps = {
  [key: string]: StringProps[]
}

export interface DataMdProps {
  file: string
  data: TreeDataProps | string | null
  content: string
  html: string
}

export type MdProps = {
  [key: string]: DataMdProps
}

export type ContentProps = {
  [key: string]: MdProps
}

export type PartialsProps = {
  [key: string]: ContentProps
}

export type PartialProps = {
  html: string
  data?: TreeNode
}

export * from './store'
export * from './blog'
