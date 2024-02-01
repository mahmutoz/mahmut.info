const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  trailingSlash: true,
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

const config = withContentlayer(nextConfig)

module.exports = config
