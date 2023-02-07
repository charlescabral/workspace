import { css } from '@/styles'
import { HelloProps } from './types'
import Image from 'next/image'

const thumb = css('div', {
  display: 'block',
  backgroundColor: 'green',
  color: 'white',
  padding: '1rem'
})

const Hello = ({ name }: HelloProps) => (
  <main className={thumb()}>
    <h1>Ola {name}</h1>
    <Image
      src="/img/icon-512.png"
      alt="Picture of the author"
      width={100}
      height={100}
    />
  </main>
)

export default Hello
