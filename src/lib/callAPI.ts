import { UseStoreProps } from '@/contexts/store/type'
import { isDev } from '.'

const host = isDev() ? 'http://localhost:3000' : 'https://charlescabral.com'

export default async function callAPI(point: string) {
  try {
    const res = await fetch(`${host}/api/${point}`)
    return (await res.json()) as UseStoreProps
  } catch (err) {
    console.error(err)
  }
}
