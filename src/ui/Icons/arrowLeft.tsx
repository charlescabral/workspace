import { SvgProps } from './type'
import { css } from '@/styles'

export const ArrowLeft = ({ fill, classname, size, inlineStyle }: SvgProps) => {
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
          points="1.7,9.7 0.3,8.3 3.6,5 0.3,1.7 1.7,0.3 6.4,5"
        />
      </g>
    </svg>
  )
}
