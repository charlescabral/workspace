import { NextSeo } from 'next-seo'
import NextHead from 'next/head'
import { isDev } from '@/lib'
import { HeadProps } from './type'

export function CustomHead({
  title = '',
  description,
  image,
  keywords
}: HeadProps) {
  return (
    <>
      <NextHead>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="robots"
          content={isDev() ? 'noindex,nofollow' : 'index,follow'}
        />
        <meta
          name="googlebot"
          content={isDev() ? 'noindex,nofollow' : 'index,follow'}
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Charles Cabral" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <meta httpEquiv="Window-Target" content="_value" />
        <meta name="geo.region" content="BR" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#06092b" />
        <meta name="msapplication-TileColor" content="#06092b" />
        <meta name="theme-color" content="#06092b" />

        {/* END FAVICON */}

        <title>{title}</title>
      </NextHead>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: 'website',
          locale: 'en_US',
          images: [
            {
              url: image ? image.url : 'https://website.com/og-image.jpg',
              width: image ? image.width : 1200,
              height: image ? image.height : 630,
              alt: title
            }
          ],
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          site_name: ''
        }}
        twitter={{
          handle: '@studiofreight',
          cardType: 'summary_large_image'
        }}
      />
    </>
  )
}
