import {
  blue,
  purple,
  green,
  yellow,
  red,
  orange,
  gray,
  black,
  white
} from './colors'

export const light = {
  colors: {
    ...blue,
    ...purple,
    ...green,
    ...yellow,
    ...red,
    ...orange,
    ...gray,
    primary: '$green10',
    secondary: '$orange10',
    success: '$green5',
    warning: '$orange5',
    error: '$red5',
    neutral: '$gray6',
    contrasty: '$gray11',
    accent: '$$gray02',
    text: '$gray11',
    textLight: '$gray8',
    link: '$blue4',
    codeLight: '$gray8',
    code: '$gray04',
    selection: '$gray3',
    border: '$gray2',
    bgSwitcher: '$black4',
    colorSwitcher: '$white12',
    bgSite: '$white12',
    bgFooter: '$gray12',
    bgLastRow: '$black8',
    backgroundAlpha: 'rgba(255, 255, 255, 0.8)',
    foreground: '$gray4',
    backgroundContrast: '$white1',
    cardBg: '$white12',
    brand: '$gray11',
    cursorCircle: '$black6',
    cursorActive: '$primary',
    glassPhone: '$white10',
    glassDesktop: '$white12',
    glassDesktopLight: '$white6',
    progressBar: '$primary',
    spotlightTitle: '$white12',
    texture: 'contrast(30%) brightness(50%)'
  },
  shadows: {
    ...purple,
    ...black,
    ...white,
    xl: `
      0 3px 3px rgba(0, 0, 0, 0.1),
      0 7px 5px rgba(0, 0, 0, 0.048),
      0 12px 10px rgba(0, 0, 0, 0.06),
      0 22px 18px rgba(0, 0, 0, 0.072),
      0 20px 16px rgba(0, 0, 0, 0.086),
      0 30px 40px rgba(0, 0, 0, 0.15)
    `,
    lg: `
      0 3px 2px rgba(0, 0, 0, 0.1),
      0 7px 5px rgba(0, 0, 0, 0.03),
      0 6px 5px rgba(0, 0, 0, 0.06),
      0 12px 8px rgba(0, 0, 0, 0.06),
      0 20px 15px rgba(0, 0, 0, 0.07),
      0 20px 40px rgba(0, 0, 0, 0.1)
    `,
    md: `
      0 3px 2px rgba(0, 0, 0, 0.15),
      0 7px 5px rgba(0, 0, 0, 0.08),
      0 10px 8px rgba(0, 0, 0, 0.06),
      0 12px 8px rgba(0, 0, 0, 0.01),
      0 16px 25px rgba(0, 0, 0, 0.09)
    `,
    sm: `
      0 3px 2px rgba(0, 0, 0, 0.15),
      0 7px 5px rgba(0, 0, 0, 0.038),
      0 6px 5px rgba(0, 0, 0, 0.06),
      0 6px 20px rgba(0, 0, 0, 0.12)
    `,
    xs: `
      0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 5px rgba(0, 0, 0, 0.12),
      0 10px 28px 6px rgba(0, 0, 0, 0.05)
    `,
    hirer: `
      0 0 0 0.5rem $white9,
    `,
    avatarBorder: `
      0 0 0 0.5rem $black4
    `
  }
}
