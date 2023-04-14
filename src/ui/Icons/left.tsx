import { SvgProps } from './type'
import { css } from '@/styles'

export const Left = ({ fill, classname, size, inlineStyle }: SvgProps) => {
  const style = css({ ...inlineStyle })
  const icon = css({ fill })
  return (
    <svg
      className={`${classname} ${style()}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      width={size}
      height={size}
    >
      <g>
        <polygon
          className={`fill ${icon()}`}
          points="3.3,9.7 1.9,8.3 5.2,5 1.9,1.7 3.3,0.3 8.1,5"
        />
      </g>
    </svg>
  )
}
