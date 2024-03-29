import { SvgProps } from './type'
import { css } from '@/styles'

export const SunIcon = ({ fill, classname, size, inlineStyle }: SvgProps) => {
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
      <g>
        <path
          className={`fill ${icon()}`}
          d="M17,7.63A9.37,9.37,0,1,1,7.63,17,9.36,9.36,0,0,1,17,7.63Z"
        />
        <path
          className={`fill ${icon()}`}
          d="M29.52,6.06a1.67,1.67,0,0,1-.47,1.09c-.61.61-1.21,1.22-1.83,1.82a1.53,1.53,0,0,1-2.53-.48A1.33,1.33,0,0,1,24.86,7,26.38,26.38,0,0,1,27,4.83a1.5,1.5,0,0,1,2.35.72C29.44,5.72,29.48,5.89,29.52,6.06Z"
        />
        <path
          className={`fill ${icon()}`}
          d="M6.12,29.46a1.54,1.54,0,0,1-1.56-1.85A1.51,1.51,0,0,1,5,26.83c.6-.6,1.19-1.21,1.8-1.8a1.54,1.54,0,0,1,2.54.49A1.45,1.45,0,0,1,9,27.15c-.6.64-1.23,1.26-1.86,1.88A1.36,1.36,0,0,1,6.12,29.46Z"
        />
        <path
          className={`fill ${icon()}`}
          d="M2.84,15.44H4.11a1.56,1.56,0,0,1,1.56,1.67,1.5,1.5,0,0,1-1.3,1.4c-.41,0-.83,0-1.24,0s-1,0-1.55,0a1.5,1.5,0,0,1-1.44-.91A1.52,1.52,0,0,1,1,15.56a2.72,2.72,0,0,1,.75-.11c.36,0,.73,0,1.1,0Z"
        />
        <path
          className={`fill ${icon()}`}
          d="M31.18,15.44h1.23a1.54,1.54,0,0,1,1.52,2,1.43,1.43,0,0,1-1.18,1h0c-1,0-2.08,0-3.11,0a1.52,1.52,0,0,1-1.18-2A1.65,1.65,0,0,1,30,15.44C30.39,15.46,30.78,15.44,31.18,15.44Z"
        />
        <path
          className={`fill ${icon()}`}
          d="M4.53,6a1.5,1.5,0,0,1,.92-1.38A1.34,1.34,0,0,1,7,4.85,25.18,25.18,0,0,1,9.13,7a1.51,1.51,0,0,1-.75,2.37A1.48,1.48,0,0,1,6.81,9C6.19,8.38,5.58,7.77,5,7.15A1.47,1.47,0,0,1,4.53,6Z"
        />
        <path
          className={`fill ${icon()}`}
          d="M27.93,29.47A1.46,1.46,0,0,1,26.86,29c-.62-.61-1.23-1.22-1.84-1.84a1.55,1.55,0,0,1,.59-2.56,1.43,1.43,0,0,1,1.49.28c.68.65,1.36,1.3,2,2a1.55,1.55,0,0,1-.73,2.51A2.12,2.12,0,0,1,27.93,29.47Z"
        />
        <path
          className={`fill ${icon()}`}
          d="M15.47,31.16c0-.43,0-.86,0-1.29a1.53,1.53,0,0,1,2.9-.71,1.42,1.42,0,0,1,.17.64c0,.91,0,1.82,0,2.74a1.53,1.53,0,0,1-1.95,1.4,1.51,1.51,0,0,1-1.13-1.48Z"
        />
        <path
          className={`fill ${icon()}`}
          d="M15.47,2.81c0-.44,0-.87,0-1.31A1.49,1.49,0,0,1,16.63,0a1.49,1.49,0,0,1,1.81,1,1.79,1.79,0,0,1,.11.51c0,.88,0,1.76,0,2.65a1.51,1.51,0,0,1-1.19,1.47,1.49,1.49,0,0,1-1.77-.92,1.6,1.6,0,0,1-.11-.57C15.46,3.69,15.47,3.25,15.47,2.81Z"
        />
      </g>
    </svg>
  )
}
