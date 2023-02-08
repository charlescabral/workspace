import { HelloProps } from './type'
import Image from 'next/image'
import { main } from './style'

const Hello = ({ name }: HelloProps) => (
  <main className={main()}>
    <h1>Hello, {name}</h1>
    <Image src="/img/hello.png" alt="👋" width={42} height={42} />
  </main>
)

export default Hello
