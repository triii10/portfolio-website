/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/script.js',
        destination: 'https://cloud.umami.is/script.js',
      },
      {
        source: '/pdf',
        destination: '/'
      }
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
};

module.exports = nextConfig;
