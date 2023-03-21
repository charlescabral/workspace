import { SvgProps } from './type'
import { css } from '@/styles'

export const SearchIcon = ({
  fill,
  classname,
  size,
  inlineStyle
}: SvgProps) => {
  const style = css({ ...inlineStyle })
  const icon = css({ fill })
  return (
    <svg
      className={`${classname} ${style()}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 11"
      width={size}
      height={size}
    >
      <path
        className={`fill ${icon()}`}
        d="M4.4,8.9c0.9,0,1.8-0.3,2.4-0.9l1.8,1.8c0,0.1,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0,0.2,0
	S9.4,10,9.4,9.9s0.1-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2L7.6,7.4c0.5-0.7,0.9-1.5,0.9-2.4
c0-2.2-1.8-4-4-4s-4,1.8-4,4S2.2,8.9,4.4,8.9z M4.4,1.9c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S2.8,1.9,4.4,1.9z"
      />
    </svg>
  )
}
