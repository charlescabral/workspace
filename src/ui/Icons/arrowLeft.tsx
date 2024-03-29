import { SvgProps } from './type'
import { css } from '@/styles'

export const ArrowLeft = ({ fill, size, inlineStyle }: SvgProps) => {
  const style = css({ ...inlineStyle })
  const icon = css({ fill })
  return (
    <svg
      className={style()}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width={size}
      height={size}
    >
      <path
        className={`fill ${icon()}`}
        d="M6.4,20.9h24.4L23,28.7c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l9.3-9.3c0.1,0,0.1-0.1,0.1-0.1
          c0.2-0.2,0.3-0.4,0.3-0.7l0,0l0,0v-0.1c0,0,0,0,0,0v0c0,0,0,0,0,0l0,0c0,0,0,0,0,0l0,0l0,0l0,0l0,0l0,0v0l0,0c0-0.2-0.1-0.3-0.3-0.4
          l0,0l-0.1-0.1l0,0l0,0l0,0l-9.3-9.3c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3c-0.4,0.4-0.4,1,0,1.4l7.7,7.7H6.4
          c-0.5,0.2-0.8,0.7-0.7,1.2C5.9,20.5,6.1,20.8,6.4,20.9L6.4,20.9z"
      />
    </svg>
  )
}
