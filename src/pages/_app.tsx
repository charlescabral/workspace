import type { AppProps } from 'next/app'
import Head from 'next/head'

import { DefaultSeo } from 'next-seo'
import SEO from '~/next-seo.config'

import { theme, darkTheme } from '@/styles'
import { ThemeProvider } from '@/contexts/theme'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { reportWebVitals } from '@/lib'
import { Layout } from '@/layouts'
import Nprogress from '@/ui/Nprogress'
import { StoreProvider } from '@/contexts/store'

export default function App({ Component, pageProps }: AppProps) {
  const { store } = pageProps

  useIsomorphicLayoutEffect(() => {
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </ThemeProvider>
  )
}
