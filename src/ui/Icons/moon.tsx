import { SvgProps } from './type'
import { css } from '@/styles'

export const MoonIcon = ({ fill, classname, size, inlineStyle }: SvgProps) => {
  const style = css({ ...inlineStyle })
  const icon = css({ fill })
  return (
    <svg
      className={`${classname} ${style()}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34.01 34"
      width={size}
      height={size}
    >
      <path
        className={`fill ${icon()}`}
        d="M17,26.63a8.31,8.31,0,0,1-2.67-.41,9.41,9.41,0,0,1-4.81-3.43A9.28,9.28,0,0,1,8.07,20a9.06,9.06,0,0,1-.42-3.35,9.62,9.62,0,0,1,.65-2.9A9.29,9.29,0,0,1,12.36,9a13.11,13.11,0,0,1,1.87-.83,1,1,0,0,1,1.06.34,1,1,0,0,1,0,1.14,7.07,7.07,0,0,0-1,2.75,6.7,6.7,0,0,0,.06,2.32,6.52,6.52,0,0,0,2.13,3.69,6.63,6.63,0,0,0,2.63,1.43,7,7,0,0,0,2.8.18A6.66,6.66,0,0,0,24.67,19a.95.95,0,0,1,1.43,1,8.48,8.48,0,0,1-1.48,2.88,9.21,9.21,0,0,1-3.41,2.81A9.37,9.37,0,0,1,17,26.63Z"
      />
    </svg>
  )
}
