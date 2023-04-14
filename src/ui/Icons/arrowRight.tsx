import { SvgProps } from './type'
import { css } from '@/styles'

export const ArrowRight = ({ fill, size, inlineStyle }: SvgProps) => {
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
        d="M33.37,19.06H8.94l7.82-7.82a1,1,0,0,0,0-1.36,1,1,0,0,0-1.36,0L6.13,19.16A.62.62,0,0,0,6,19.3a.91.91,0,0,0-.28.7v0h0v.09a.09.09,0,0,0,0,.05v.05s0,0,0,.05a.08.08,0,0,0,0,0,.43.43,0,0,1,0,.05s0,0,0,0a.08.08,0,0,0,0,0s0,0,0,0l0,0,0,0,0,.05,0,0A.46.46,0,0,0,6,20.7H6l.07.06,0,0,0,0,0,0,9.27,9.28a1,1,0,0,0,.68.28,1,1,0,0,0,.68-.28,1,1,0,0,0,0-1.36L9,21H33.37a1,1,0,0,0,0-1.92Z"
      />
    </svg>
  )
}
