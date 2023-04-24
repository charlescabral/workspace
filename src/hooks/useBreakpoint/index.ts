import { useMemo, useState, useCallback } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks'
import createMediaQueries from './createMediaQueries'
import { Breakpoint, Return, Config } from './types'

const EMPTY_BREAKPOINT = {
  breakpoint: undefined,
  minWidth: undefined,
  maxWidth: undefined,
  isMobile: undefined
} as const

const defaultConfig = { mobile: 0, tablet: 768, desktop: 1280 }

const useBreakpoint = <C extends Config, D extends keyof C | undefined>(
  config?: C,
  defaultBreakpoint?: D,
  hydrateInitial = true
): Return<C, D> => {
  const mediaQueries = useMemo(() => createMediaQueries(defaultConfig), [])

  const [currentBreakpoint, setCurrentBreakpoint] = useState<
    Breakpoint<C> | typeof EMPTY_BREAKPOINT
  >(() => {
    for (const { query, ...breakpoint } of mediaQueries) {
      if (
        typeof window !== 'undefined' &&
        !(defaultBreakpoint && hydrateInitial)
      ) {
        const mediaQuery = window.matchMedia(query)
        if (mediaQuery.matches) {
          return breakpoint as Breakpoint<C>
        }
      } else if (breakpoint.breakpoint === defaultBreakpoint) {
        return breakpoint as Breakpoint<C>
      }
    }

    return EMPTY_BREAKPOINT
  })

  const updateBreakpoint = useCallback(
    (
      { matches }: MediaQueryList | MediaQueryListEvent,
      breakpoint: Breakpoint<C>
    ) => {
      if (matches) {
        setCurrentBreakpoint(breakpoint)
      }
    },
    []
  )

  useIsomorphicLayoutEffect(() => {
    const unsubscribers = mediaQueries.map(({ query, ...breakpoint }) => {
      const list = window.matchMedia(query)

      updateBreakpoint(list, breakpoint as Breakpoint<C>)

      const handleChange = (event: MediaQueryListEvent) => {
        updateBreakpoint(event, breakpoint as Breakpoint<C>)
      }

      list.addEventListener('change', handleChange)

      return () => {
        list.removeEventListener('change', handleChange)
      }
    })

    return () => unsubscribers.forEach((unsubscriber) => unsubscriber())
  }, [mediaQueries, updateBreakpoint])

  return currentBreakpoint as Return<C, D>
}

export type { Breakpoint, Config, MediaQuery } from './types'
export default useBreakpoint
