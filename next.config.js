/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/pdf',
        destination: '/',
        permanent: true,
      },
    ]
  },  
  async rewrites() {
    return [
      {
        source: '/script.js',
        destination: 'https://cloud.umami.is/script.js',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
