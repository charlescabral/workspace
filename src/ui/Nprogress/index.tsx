import { useIsomorphicLayoutEffect } from '@/hooks'
import Router from 'next/router'
import NProgress from 'nprogress'
import { bar, peg } from './style'

export default function NextNProgress() {
  let timer: NodeJS.Timeout | null = null

  useIsomorphicLayoutEffect(() => {
    NProgress.configure({
      easing: 'ease',
      speed: 600,
      template: `<div class="${bar()}" role="bar"><div class="${peg()}"/></div>`
    })
    Router.events.on('routeChangeStart', routeChangeStart)
    Router.events.on('routeChangeComplete', routeChangeEnd)
    Router.events.on('routeChangeError', routeChangeError)
    return () => {
      Router.events.off('routeChangeStart', routeChangeStart)
      Router.events.off('routeChangeComplete', routeChangeEnd)
      Router.events.off('routeChangeError', routeChangeError)
    }
  }, [])

  const routeChangeStart = (_: string, { shallow }: { shallow: boolean }) => {
    if (!shallow) {
      NProgress.set(0.3)
      NProgress.start()
    }
  }

  const routeChangeEnd = (_: string, { shallow }: { shallow: boolean }) => {
    if (!shallow) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        NProgress.done(true)
      }, 300)
    }
  }

  const routeChangeError = (
    _err: Error,
    _url: string,
    { shallow }: { shallow: boolean }
  ) => {
    if (!shallow) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        NProgress.done(true)
      }, 300)
    }
  }

  return <></>
}
