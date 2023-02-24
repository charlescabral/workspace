import { ButtonProps } from './type'
import { Button } from './style'

export default function ButtonOut({ text }: ButtonProps) {
  return (
    <Button>
      <p>{text}</p>
    </Button>
  )
}
