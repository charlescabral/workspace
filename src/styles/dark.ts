import {
  blueDark,
  purpleDark,
  greenDark,
  yellowDark,
  redDark,
  orangeDark,
  grayDark
} from './colors'

export const dark = {
  colors: {
    ...blueDark,
    ...purpleDark,
    ...greenDark,
    ...yellowDark,
    ...redDark,
    ...orangeDark,
    ...grayDark,
    primary: '$purple7',
    secondary: '$purple9',
    brand: '$white12',
    bgSite: '$gray2',
    bgFooter: '$black12',
    bgSwitcher: '$black12',
    colorSwitcher: '$purple8',
    text: '$white11',
    cardBg: '$gray6',
    cursorCircle: '$white10',
    glassPhone: '$black10',
    glassDesktop: '$black12',
    glassDesktopLight: '$black10',
    spotlightTitle: '$gray6'
  },
  shadows: {
    ...purpleDark,
    xl: `
      0 3px 3px rgba(0, 0, 0, 0.1),
      0 7px 5px rgba(0, 0, 0, 0.2),
      0 12px 10px rgba(0, 0, 0, 0.15),
      0 22px 18px rgba(0, 0, 0, 0.2),
      0 20px 16px rgba(0, 0, 0, 0),
      0 20px 40px rgba(0, 0, 0, 0.8)
    `,
    lg: `
      0 3px 2px rgba(0, 0, 0, 0.2),
      0 7px 5px rgba(0, 0, 0, 0.1),
      0 6px 5px rgba(0, 0, 0, 0.2),
      0 12px 8px rgba(0, 0, 0, 0.1),
      0 20px 15px rgba(0, 0, 0, 0.2),
      0 20px 40px rgba(0, 0, 0, 0.5)
    `,
    md: `
      0 3px 2px rgba(0, 0, 0, 0.4),
      0 7px 5px rgba(0, 0, 0, 0.1),
      0 10px 8px rgba(0, 0, 0, 0.2),
      0 12px 12px rgba(0, 0, 0, 0.2),
      0 16px 25px rgba(0, 0, 0, 0.3)
    `,
    sm: `
      0 3px 2px rgba(0, 0, 0, 0.2),
      0 6px 5px rgba(0, 0, 0, 0.4),
      0 6px 20px rgba(0, 0, 0, 0.6)
    `,
    xs: `
      0 2px 2px rgba(0, 0, 0, 0.8),
      0 4px 5px rgba(0, 0, 0, 0.4),
      0 10px 28px 6px rgba(0, 0, 0, 0.2)
    `,
    hirer: `
      0 0 0 0.4rem $black8,
      0 0 0 1rem $black7,
      0 0 0 1.6rem $black6,
      0 0 0 2.2rem $black5
    `
  },
  dropShadows: {
    xs: 'drop-shadow(0 2px 4px rgb(0 0 0 / 0.07)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.04))',
    sm: 'drop-shadow(0 2px 8px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 4px rgb(0 0 0 / 0.04))',
    md: 'drop-shadow(0 4px 12px rgb(0 0 0 / 0.08)) drop-shadow(0 20px 8px rgb(0 0 0 / 0.04))',
    lg: 'drop-shadow(0 12px 24px rgb(0 0 0 / 0.15)) drop-shadow(0 12px 14px rgb(0 0 0 / 0.1))',
    xl: 'drop-shadow(0 25px 34px rgb(0 0 0 / 0.35))'
  }
}
