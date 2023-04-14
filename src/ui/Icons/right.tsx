import { SvgProps } from './type'
import { css } from '@/styles'

export const Right = ({ fill, classname, size, inlineStyle }: SvgProps) => {
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
          points="6.7,0.3 8.1,1.7 4.8,5 8.1,8.3 6.7,9.7 1.9,5"
        />
      </g>
    </svg>
  )
}
