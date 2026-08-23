/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/script.js",
        destination: "https://cloud.umami.is/script.js",
      },
      {
        source: "/pdf",
        destination: "/",
      },
    ];
  },
  images: {
    // The site only uses local portfolio assets. Serving them directly keeps
    // Next's optimiser from requiring a Cloudflare Images binding at runtime.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
