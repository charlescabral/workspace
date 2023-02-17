import { FC } from 'react'
import { ButtonProps } from './type'
import { Button } from './style'

const ButtonOut: FC<ButtonProps> = ({ text }) => {
  return (
    <Button>
      <p>{text}</p>
    </Button>
  )
}

export default ButtonOut
