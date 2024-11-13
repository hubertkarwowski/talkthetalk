import type { NextConfig } from 'next'





const nextConfig: NextConfig = {
  crossOrigin: 'anonymous',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  experimental: {
    taint: true,
  },
  // ...other config settings
}

export default nextConfig
