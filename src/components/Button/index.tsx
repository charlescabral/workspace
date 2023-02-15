import { ButtonProps } from './type'
import { Button } from './style'

const ButtonOut = ({ text }: ButtonProps) => (
  <Button>
    <p>{text}</p>
  </Button>
)

export default ButtonOut
