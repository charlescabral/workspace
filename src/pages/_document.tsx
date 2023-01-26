import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText, reset } from '@/styles'

const getCssAndReset = () => {
  const css = getCssText()
  reset()
  return css
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssAndReset() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
