import type { AppProps } from 'next/app'
import Head from 'next/head'
import { theme, darkTheme } from '@/styles'
import { ThemeProvider } from 'next-themes'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: theme.className,
        dark: darkTheme.className
      }}
    >
      <Head>
        <title>Charles Cabral</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta name="description" content="A simple to show my job" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
