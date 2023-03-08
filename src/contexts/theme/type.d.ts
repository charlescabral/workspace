interface ValueObject {
  [themeName: string]: string
}

export interface UseThemeProps {
  themes: string[]
  forcedTheme?: string
  setTheme: (theme: string) => void
  theme?: string
  resolvedTheme?: string
  systemTheme?: 'dark' | 'light'
}

export interface ThemeProviderProps {
  themes?: string[]
  forcedTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  enableColorScheme?: boolean
  storageKey?: string
  defaultTheme?: string
  attribute?: string | 'class'
  value?: ValueObject
  nonce?: string
  children?: React.ReactNode
}
