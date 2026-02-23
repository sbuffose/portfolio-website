/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/portfolio-website',
  assetPrefix: '/portfolio-website',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
