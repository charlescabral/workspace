// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      'media.graphcms.com',
      'media.graphassets.com',
      'images.unsplash.com',
      'unpkg.com'
    ]
  },
  i18n: {
    locales: ['pt'],
    defaultLocale: 'pt'
  }
})
