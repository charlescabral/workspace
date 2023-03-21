export interface TreeNode {
  [key: string]: unknown
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
