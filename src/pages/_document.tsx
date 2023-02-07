import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText, reset } from '@/styles'
import Analytics from '@/components/Analytics'
import { injectGlobalStyles } from '@/styles/globals'

const getCssAndReset = () => {
  const css = getCssText()
  reset()
  return css
}

export default function Document() {
  injectGlobalStyles()
  return (
    <Html lang="pt-BR">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssAndReset() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}
