// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = withPWA({
  images: {
    domains: ['media.graphcms.com', 'media.graphassets.com']
  },
  reactStrictMode: true
})
