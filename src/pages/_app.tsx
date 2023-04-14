import type { AppProps } from 'next/app'
import Head from 'next/head'
// import { useLenis } from '@studio-freight/react-lenis'

import { DefaultSeo } from 'next-seo'
import SEO from '~/next-seo.config'

import { useIsomorphicLayoutEffect } from '@/hooks'
import { reportWebVitals } from '@/lib'
import { ThemeProvider } from '@/contexts/theme'
import { StoreProvider } from '@/contexts/store'
import { Layout } from '@/layouts'
import { theme, darkTheme } from '@/styles'
import Nprogress from '@/ui/Nprogress'
import { RealViewport } from '@/components/RealViewport'

export default function App({ Component, pageProps }: AppProps) {
  // const lenis = useLenis({})
  const { store } = pageProps

  useIsomorphicLayoutEffect(() => {
    // lenis?.start()
    window.history.scrollRestoration = 'manual'
    reportWebVitals
  }, [])

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: theme.className,
        dark: darkTheme.className
      }}
    >
      <StoreProvider store={store}>
        <Head>
          <title>Charles Cabral . Front-end Developer</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092b" />
          <meta name="description" content="A simple to show my job" />
        </Head>
        <DefaultSeo {...SEO} />
        <Nprogress />
        <RealViewport />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </ThemeProvider>
  )
}
