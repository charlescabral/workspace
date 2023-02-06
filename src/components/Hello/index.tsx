import { css } from '@/styles'
import { HelloProps } from './typings'

const thumb = css('div', {
  display: 'block',
  backgroundColor: 'green',
  color: 'white',
  padding: '1rem'
})

const Hello = ({ name }: HelloProps) => (
  <main className={thumb()}>
    <h1>Ola {name}</h1>
  </main>
)

export default Hello
