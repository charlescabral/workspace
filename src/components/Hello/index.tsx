import { HelloProps } from './type'
import Image from 'next/image'
import { Div } from './style'

const Hello = ({ name }: HelloProps) => (
  <Div>
    <h1>Hello, {name}</h1>
    <Image src="/img/hello.png" alt="👋" width={42} height={42} />
  </Div>
)

export default Hello
