/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContentProps } from '@/types'

export default function getMdItem(key: string, arr: any) {
  try {
    const [first] = arr.filter((item: any) => item[key])
    const values = Object.values(first)[0]
    return values as ContentProps
  } catch (error) {
    console.error(error)
  }
}
