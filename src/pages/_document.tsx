import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { getCssText, reset } from '@/styles'
import Analytics from '@/components/Analytics'
import { injectGlobalStyles } from '@/styles/globals'

const getCssAndReset = () => {
  const css = getCssText()
  reset()
  return css
}

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
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
}
