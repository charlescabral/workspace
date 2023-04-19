import { SvgProps } from './type'
import { css } from '@/styles'

export const EyeIcon = ({ fill, size, inlineStyle }: SvgProps) => {
  const style = css({ ...inlineStyle })
  const icon = css({ fill })
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon ${style()}`}
      viewBox="0 0 487 489"
      width={size}
      height={size}
    >
      <path
        className={`fill ${icon()}`}
        d="M352.62,386.8c-15.09,6.17-28.79,12.71-43.11,17.33-10.76,3.46-22.29,4.68-33.54,6.46-8.22,1.3-16.58,2.83-24.82,2.57-17.42-.55-35-.88-52.14-3.8-13.94-2.38-27.79-7.23-40.71-13.11-16.83-7.65-33.54-16.19-48.8-26.56a211.73,211.73,0,0,1-53.27-51.62C46.81,305,37.17,292,28.58,278.34c-5.94-9.42-10.46-19.76-15.14-29.91a10.55,10.55,0,0,1,.08-8.18c8-15.31,15.64-30.88,24.87-45.43a270.72,270.72,0,0,1,51.89-60.44c4.24-3.66,4-6.68.3-10.38Q68.25,101.8,46,79.46c-6.32-6.33-6.25-9.65.09-15.88C52,57.87,57.66,52,63.38,46.24c4.92-5,9.93-5,14.78-.18q44.66,44.66,89.32,89.29,50.29,50.42,100.5,100.9,47.46,47.56,95,95l78.42,78.46c6,6,5.85,9.45-.35,15.53q-8.55,8.4-16.93,17c-5.57,5.68-9.54,5.75-15.28,0Q383.4,416.83,358,391.39C356,389.44,353.77,387.78,352.62,386.8Zm-35.73-33q.87-2.19,1.75-4.36c-9.46-8.58-19.1-17-28.31-25.83-4.19-4-7.95-3.1-12.71-1.48-9.15,3.12-18.42,6.93-27.89,7.87-18.31,1.82-35.31-3.61-50.94-13.35-11.23-7-21-15.58-27.18-27.34-4.31-8.23-7.35-17.16-10.71-25.87-7.18-18.57-2.45-36.21,4.82-53.45,1.95-4.63,2.75-8.25-1.23-12.14-10-9.78-20-19.56-29.64-29.72-4.77-5-8.83-4.28-13.25-.15-4.69,4.38-9.64,8.54-13.88,13.33-8,9-15.92,18.14-23.15,27.76-6.22,8.29-11.22,17.49-17.17,26-3.8,5.44-4.15,11.21-1.36,16.5,4.6,8.71,9.52,17.43,15.55,25.18,14,18,27.71,36.34,46.58,49.72,10.34,7.33,20.62,15,31.84,20.77,10.27,5.28,21.56,8.94,32.76,12a289.42,289.42,0,0,0,39.69,8,110.52,110.52,0,0,0,42.47-3.47C288.8,360,302.89,357.11,316.89,353.83ZM247,282.16l-41.18-40.85c-4.08,9.34.68,21.64,10,30.95S237.34,286.36,247,282.16Z"
      />
      <path
        className={`fill ${icon()}`}
        d="M246.36,119.69c-10.51,1.72-18.62,2.48-26.41,4.49-7.33,1.9-12.39-.67-17.21-5.61-7.79-8-15.91-15.66-23.5-23.83-1.65-1.77-2.31-5.11-2.14-7.63.09-1.28,2.94-3.14,4.74-3.41,19.81-3,39.6-7,59.53-8a194.72,194.72,0,0,1,47.58,4,222.77,222.77,0,0,1,46.47,14.75c23.7,10.57,46,24.21,64.27,42.89a553.21,553.21,0,0,1,43.2,49C452,198.07,458.19,212,465.6,225a118.76,118.76,0,0,1,7.29,14c1.12,2.74,2.07,6.65.95,9-5.39,11.24-11.09,22.39-17.48,33.08-6.59,11-14,21.55-21.29,32.11-3.66,5.3-7.47,10.68-12.13,15-1.87,1.75-7.57,2.39-9.18.94a334.92,334.92,0,0,1-24.57-25c-1.15-1.28-.51-5.55.78-7.39,6.74-9.59,14.15-18.71,20.95-28.27a109.14,109.14,0,0,0,10.44-17.37c2.44-5.27,1.94-10.71-1.78-16-6-8.6-10.85-18.08-17.09-26.52-13.57-18.38-28-36.08-47.41-48.82-12.21-8-24.52-16-37.4-22.88-7-3.71-15.16-5.52-23-7.28C278,125.83,261.13,122.68,246.36,119.69Z"
      />
      <path
        className={`fill ${icon()}`}
        d="M248,162.58c7.89-5.15,36.46,5.08,46.3,13,18.21,14.63,29.18,33.24,34,55.76.47,2.19-.38,4.65-1.83,7.64C298.46,215.34,273.41,189.26,248,162.58Z"
      />
    </svg>
  )
}
