import { ButtonProps } from './type'
import { button } from './style'

const Button = ({ text }: ButtonProps) => (
  <button className={button()}>
    <p>{text}</p>
  </button>
)

export default Button
