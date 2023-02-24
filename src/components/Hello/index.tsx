import { HelloProps } from './type'
import Image from 'next/image'
import { Div } from './style'

export default function Hello({ name }: HelloProps) {
  return (
    <Div>
      <h1>Hello, {name}</h1>
      <Image src="/img/hello.png" alt="👋" width={42} height={42} />
    </Div>
  )
}
