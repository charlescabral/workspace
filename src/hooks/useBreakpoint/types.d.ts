export type Breakpoint<C extends Config> = {
  breakpoint: keyof C
  maxWidth?: number | null
  minWidth: C[keyof C]
  isMobile: boolean
}

type Return<C extends Config, D> = D extends undefined
  ? Breakpoint<C> | typeof EMPTY_BREAKPOINT
  : D extends keyof C
  ? Breakpoint<C>
  : never

export type Config = {
  readonly [key: string]: number
}

export type MediaQuery<C extends Config> = {
  breakpoint: keyof C
  maxWidth: number | null
  minWidth: C[keyof C]
  isMobile: boolean
  query: string
}
